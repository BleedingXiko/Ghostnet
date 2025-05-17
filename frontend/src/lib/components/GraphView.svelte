<script>
  import { onMount, onDestroy, tick } from 'svelte';
  import * as THREE from 'three';
  import { posts as sveltePostsStore, apiKey } from '../stores.js'; // Renamed to avoid conflict
  import { get } from 'svelte/store';
  import NodeInfo from './NodeInfo.svelte';

  // Import new utility modules
  import * as Cfg from '../graph-utils/config.js';
  import { initSceneCore } from '../graph-utils/threeSetup.js';
  import { createNode, applyHoverEffects as applyNodeHoverEffects, resetNodeVisualsOnHoverEnd, applyClickEffects, resetClickEffects, updateNodeStatusVisuals } from '../graph-utils/nodeManager.js';
  import { createEdge, updateEdgePosition, updateAllEdgeResolutions } from '../graph-utils/edgeManager.js';
  import { applyForcesToNodes } from '../graph-utils/physicsEngine.js';
  import { 
    createRaycaster, getMouseVector, handleWindowResize, 
    processMouseHover, processMouseClick, handleMouseLeaveGraph 
  } from '../graph-utils/interactionHandlers.js';
  import { setupTooltip, updateTooltipVisuals, hideTooltip } from '../graph-utils/tooltipManager.js';
  import { updateGraphVisualization } from '../graph-utils/graphLogic.js';
  import { checkAllDeadLinks } from '../graph-utils/apiService.js';

  // --- COMPONENT PROPS ---
  export let height = '500px';
  export let selectedTag = '';

  // --- CORE RENDERING & STATE VARIABLES ---
  let containerEl;
  let scene, camera, renderer, labelRenderer, controls;
  
  let nodesGroup = new THREE.Group();
  let nodeObjects = {}; // Direct object, not a ref initially for svelte reactivity
  let edges = [];       // Direct array

  // Refs for mutable objects passed to utils
  const nodeObjectsRef = { current: nodeObjects };
  const edgesRef = { current: edges };
  
  let pingInProgress = false;
  let lastPingTime = Date.now();
  
  let raycaster;
  let svelteSelectedNode = null; // Svelte reactive variable for selected node
  let svelteLastClickedNode = null; // Svelte reactive variable for last clicked node
  let svelteTooltip = null; // Svelte reactive variable for tooltip DOM element
  
  // Refs for these to be mutated by utils
  const selectedNodeRef = { current: null }; 
  const lastClickedNodeRef = { current: null };
  const tooltipRef = { current: null };
  const currentTooltipHideTimeoutRef = { current: null };

  let selectedPost = null; // For NodeInfo component
  let isDragging = false;
  let mouseDownTime = 0;
  
  let lastMousePosition = { x: 0, y: 0, xNorm:0, yNorm:0 };
  let mouseMovedSince = Date.now();
  let hoverCheckInterval;
  
  let forceSimulation = true;
  let nodeVelocities = {};

// --- REHEAT FUNCTION ---
function nudgeOverlappingNodes(minDistance = 2.5) {
  // Nudge nodes apart if they're overlapping
  const nodesArr = Object.values(nodeObjects);
  for (let i = 0; i < nodesArr.length; i++) {
    for (let j = i + 1; j < nodesArr.length; j++) {
      const a = nodesArr[i];
      const b = nodesArr[j];
      if (!a.position || !b.position) continue;
      const diff = new THREE.Vector3().subVectors(a.position, b.position);
      const dist = diff.length();
      if (dist < minDistance && dist > 0.001) {
        // Move both nodes away from each other
        diff.normalize();
        const move = (minDistance - dist) / 2;
        a.position.addScaledVector(diff, move);
        b.position.addScaledVector(diff, -move);
      } else if (dist <= 0.001) {
        // If exactly overlapped, move randomly
        const rand = new THREE.Vector3(Math.random()-0.5, Math.random()-0.5, 0).normalize().multiplyScalar(minDistance/2);
        a.position.add(rand);
        b.position.sub(rand);
      }
    }
  }
}

function reheatGraph() {
  // Reset node velocities and forces to re-energize the layout
  nodeVelocities = {};
  nodeForces = {};
  physicsStabilized = false;
  stabilizationCounter = 0;
  simulationSpeed = Cfg.SIMULATION_SPEED_INITIAL * 1.5; // Use higher initial speed for more energy
  
  // Apply random forces to all nodes to shake up the graph
  const nodes = Object.values(nodeObjects);
  nodes.forEach(node => {
    if (!node || !node.userData || !node.userData.post) return;
    const postId = node.userData.post.id;
    
    // Create a random direction vector
    const randomAngle = Math.random() * Math.PI * 2;
    const randomForce = new THREE.Vector3(
      Math.cos(randomAngle) * 0.5,
      Math.sin(randomAngle) * 0.5,
      0
    );
    
    // Add some randomness to the force magnitude
    const forceMagnitude = 0.5 + Math.random() * 1.0;
    randomForce.multiplyScalar(forceMagnitude);
    
    // Initialize velocity with this random force
    nodeVelocities[postId] = randomForce.clone();
  });
  
  // Use a more aggressive nudge to separate overlapping nodes
  nudgeOverlappingNodes(Cfg.MIN_NODE_DISTANCE * 0.5);
  
  console.log('Graph reheated with random forces applied!');
}


  let nodeForces = {};
  let simulationSpeed = Cfg.SIMULATION_SPEED_INITIAL;
  let physicsStabilized = false;
  let stabilizationCounter = 0;
  let animationFrameId;

  // --- REACTIVE DECLARATIONS ---
  $: filteredPosts = selectedTag
    ? get(sveltePostsStore).filter(post => post.tags && post.tags.map(t => t.toLowerCase()).includes(selectedTag.toLowerCase()))
    : get(sveltePostsStore);

  $: {
    if (scene && typeof filteredPosts !== 'undefined' && containerEl) { // Ensure containerEl is also ready
      nodeObjectsRef.current = nodeObjects; // Keep refs in sync
      edgesRef.current = edges;
      updateGraphVisualization({
        scene,
        nodesGroup,
        filteredPosts,
        nodeObjectsRef,
        edgesRef,
        selectedTag,
        containerEl,
        checkDeadLinksCallback: triggerCheckDeadLinks
      });
      // Update local svelte state from refs if needed, or ensure utils update them via setters
      nodeObjects = nodeObjectsRef.current;
      edges = edgesRef.current;
      // Reset physics state for new graph
      nodeVelocities = {};
      nodeForces = {};
      physicsStabilized = false;
      stabilizationCounter = 0;
      simulationSpeed = Cfg.SIMULATION_SPEED_INITIAL;
    }
  }

  // Function to fetch fresh data and update the graph
  async function fetchLiveUpdates() {
    console.log('Manually refreshing graph data...');
    // Import the fetchPosts function from the store
    const { fetchPosts } = await import('../stores.js');
    await fetchPosts();
    // The reactive declaration will handle updating the graph when posts store changes
    console.log('Graph refresh complete');
  }

  // --- LIFECYCLE METHODS ---
  onMount(() => {
    if (!containerEl) return;

    const threeContext = initSceneCore(containerEl, nodesGroup, 
      () => isDragging = true, // onDragStart
      () => setTimeout(() => isDragging = false, 10) // onDragEnd
    );
    scene = threeContext.scene;
    camera = threeContext.camera;
    renderer = threeContext.renderer;
    labelRenderer = threeContext.labelRenderer;
    controls = threeContext.controls;

    raycaster = createRaycaster();
    tooltipRef.current = setupTooltip(containerEl);
    svelteTooltip = tooltipRef.current; // For svelte to know about it if needed

    setupEventListeners();
    animate();
    
    // Initial graph load if posts are already available
    if (filteredPosts && filteredPosts.length > 0) {
        tick().then(() => { // Ensure DOM is ready for containerEl dimensions
            nodeObjectsRef.current = nodeObjects;
            edgesRef.current = edges;
            updateGraphVisualization({
                scene, nodesGroup, filteredPosts, nodeObjectsRef, edgesRef,
                selectedTag, containerEl, checkDeadLinksCallback: triggerCheckDeadLinks
            });
            nodeObjects = nodeObjectsRef.current;
            edges = edgesRef.current;
        });
    }

    // Initial fetch of data can happen here if needed
    // fetchLiveUpdates();
  });

  onDestroy(() => {
    cleanup();
  });

  // --- EVENT HANDLERS & CALLBACKS ---
  function onSvelteWindowResize() {
    handleWindowResize(containerEl, camera, renderer, labelRenderer, edgesRef.current);
  }

  function onSvelteMouseDown(event) {
    mouseDownTime = Date.now();
    // Store initial position for detecting if this was a click or drag
    lastMousePosition = { x: event.clientX, y: event.clientY, xNorm: 0, yNorm: 0 };
  }

  function onSvelteMouseUp(event) {
    const clickDuration = Date.now() - mouseDownTime;
    const moveDistance = Math.sqrt(
      Math.pow(event.clientX - lastMousePosition.x, 2) + 
      Math.pow(event.clientY - lastMousePosition.y, 2)
    );
    
    // Only process as a click if it was short duration and minimal movement
    if (clickDuration < 200 && moveDistance < 5 && !isDragging) {
      const mouse = getMouseVector(event, renderer.domElement);
      processMouseClick(event, {
        renderer: renderer, // Pass renderer itself
        camera, nodesGroup, raycaster, controls,
        updateSelectedPost: (post) => selectedPost = post,
        updateLastClickedNode: (node) => {
          svelteLastClickedNode = node;
          lastClickedNodeRef.current = node;
        },
        getPosts: () => filteredPosts, // Provide current filteredPosts
        // Add refs needed by processMouseClick for tooltip handling
        tooltipRef,
        currentTooltipHideTimeoutRef,
        selectedNodeRef
      });
    }
    setTimeout(() => { isDragging = false; }, 50);
  }
  
  function onSvelteMouseMove(event) {
    mouseMovedSince = Date.now();
    if (!isDragging) {
      processMouseHover(event, {
        renderer: renderer, // Pass renderer itself
        containerEl, camera, nodesGroup, raycaster,
        selectedNodeRef, 
        lastClickedNodeRef,
        tooltipRef,
        currentTooltipHideTimeoutRef,
        updateSelectedNode: (node) => {
          svelteSelectedNode = node; // Update svelte state
          selectedNodeRef.current = node; // Update ref
        },
        updateLastMousePosition: (pos) => lastMousePosition = pos,
      });
    }
  }

  function onSvelteMouseLeave(event) {
    handleMouseLeaveGraph(selectedNodeRef, lastClickedNodeRef, tooltipRef, currentTooltipHideTimeoutRef, (node) => {
        svelteSelectedNode = node;
        selectedNodeRef.current = node;
    });
  }
  
  // This is for mouse leaving the document, more robust for tooltip hiding
  function onDocumentMouseMove(event) {
    if (!containerEl) return;
    const rect = containerEl.getBoundingClientRect();
    const isOutside = event.clientX < rect.left ||
                     event.clientX > rect.right ||
                     event.clientY < rect.top ||
                     event.clientY > rect.bottom;
    if (isOutside) {
      if (selectedNodeRef.current && selectedNodeRef.current !== lastClickedNodeRef.current) {
        resetNodeVisualsOnHoverEnd(selectedNodeRef.current, lastClickedNodeRef.current);
        svelteSelectedNode = null;
        selectedNodeRef.current = null;
        hideTooltip(tooltipRef.current, currentTooltipHideTimeoutRef);
        if (typeof document !== 'undefined' && document.body) {
            document.body.style.cursor = 'default';
        }
      } else if (selectedNodeRef.current && selectedNodeRef.current === lastClickedNodeRef.current && tooltipRef.current && tooltipRef.current.style.display === 'block') {
        hideTooltip(tooltipRef.current, currentTooltipHideTimeoutRef);
         if (typeof document !== 'undefined' && document.body) {
            document.body.style.cursor = 'default';
        }
      }
    }
  }

  // Handle touch events specifically for better mobile experience
  function onTouchStart(event) {
    mouseDownTime = Date.now();
    
    // Store the touch position for later comparison
    if (event.touches.length === 1) {
      lastMousePosition = { 
        x: event.touches[0].clientX, 
        y: event.touches[0].clientY, 
        xNorm: 0, 
        yNorm: 0 
      };
    }
  }
  
  function onTouchEnd(event) {
    const clickDuration = Date.now() - mouseDownTime;
    
    // Process as a tap only if it was a short duration and not a drag
    if (clickDuration < 300 && !isDragging && event.changedTouches.length > 0) {
      // Create a synthetic mouse event from the touch
      const touch = event.changedTouches[0];
      const mouseEvent = new MouseEvent('mouseup', {
        clientX: touch.clientX,
        clientY: touch.clientY,
        bubbles: true,
        cancelable: true,
        view: window
      });
      
      const moveDistance = Math.sqrt(
        Math.pow(touch.clientX - lastMousePosition.x, 2) + 
        Math.pow(touch.clientY - lastMousePosition.y, 2)
      );
      
      // Only process as a tap if minimal movement occurred
      if (moveDistance < 10) {
        processMouseClick(mouseEvent, {
          renderer: renderer,
          camera, nodesGroup, raycaster, controls,
          updateSelectedPost: (post) => selectedPost = post,
          updateLastClickedNode: (node) => {
            svelteLastClickedNode = node;
            lastClickedNodeRef.current = node;
          },
          getPosts: () => filteredPosts,
          tooltipRef,
          currentTooltipHideTimeoutRef,
          selectedNodeRef
        });
      }
    }
    
    setTimeout(() => { isDragging = false; }, 50);
  }

  function setupEventListeners() {
    window.addEventListener('resize', onSvelteWindowResize);
    
    // Mouse events for desktop
    containerEl.addEventListener('mousemove', onSvelteMouseMove, { capture: true, passive: true });
    containerEl.addEventListener('mousedown', onSvelteMouseDown, { capture: true, passive: false });
    containerEl.addEventListener('mouseup', onSvelteMouseUp, { capture: true, passive: false });
    containerEl.addEventListener('mouseleave', onSvelteMouseLeave, { capture: true, passive: true });
    document.addEventListener('mousemove', onDocumentMouseMove, { passive: true });
    
    // Additional touch event handlers for better mobile experience
    // These complement the pointer events in the EnhancedPanControls
    containerEl.addEventListener('touchstart', onTouchStart, { passive: false });
    containerEl.addEventListener('touchend', onTouchEnd, { passive: false });
    
    setupHoverSafetyCheck();
  }

  function removeEventListeners() {
    window.removeEventListener('resize', onSvelteWindowResize);
    if (containerEl) {
      // Remove mouse events
      containerEl.removeEventListener('mousemove', onSvelteMouseMove);
      containerEl.removeEventListener('mousedown', onSvelteMouseDown);
      containerEl.removeEventListener('mouseup', onSvelteMouseUp);
      containerEl.removeEventListener('mouseleave', onSvelteMouseLeave);
      
      // Remove touch events
      containerEl.removeEventListener('touchstart', onTouchStart);
      containerEl.removeEventListener('touchend', onTouchEnd);
    }
    document.removeEventListener('mousemove', onDocumentMouseMove);
    if (hoverCheckInterval) clearInterval(hoverCheckInterval);
  }

  function closeNodeInfo() {
    if (lastClickedNodeRef.current) {
      resetClickEffects(lastClickedNodeRef.current);
      const previouslyClickedNode = lastClickedNodeRef.current;
      svelteLastClickedNode = null;
      lastClickedNodeRef.current = null;
      // If the previously clicked node was also the hovered node, reset hover too
      if (selectedNodeRef.current === previouslyClickedNode) {
        resetNodeVisualsOnHoverEnd(selectedNodeRef.current, null); // Pass null as lastClickedNode to force reset
        hideTooltip(tooltipRef.current, currentTooltipHideTimeoutRef);
        svelteSelectedNode = null;
        selectedNodeRef.current = null;
        if (typeof document !== 'undefined' && document.body) {
            document.body.style.cursor = 'default';
        }
      }
    }
    selectedPost = null;
    if (controls) {
      controls.enabled = true; // Ensure panning is re-enabled
    }
  }
  
  function setupHoverSafetyCheck() {
    if (hoverCheckInterval) clearInterval(hoverCheckInterval);
    hoverCheckInterval = setInterval(() => {
      const now = Date.now();
      if (now - mouseMovedSince > 800 && selectedNodeRef.current && selectedNodeRef.current !== lastClickedNodeRef.current) {
        resetNodeVisualsOnHoverEnd(selectedNodeRef.current, lastClickedNodeRef.current);
        hideTooltip(tooltipRef.current, currentTooltipHideTimeoutRef);
        svelteSelectedNode = null;
        selectedNodeRef.current = null;
        if (typeof document !== 'undefined' && document.body) {
            document.body.style.cursor = 'default';
        }
      }
    }, 700);
  }

  function triggerCheckDeadLinks() {
    if (!pingInProgress) {
      setPingInProgress(true); // Use setter
      lastPingTime = Date.now();
      // Pass live nodeObjects, not the ref's .current if it might be stale
      checkAllDeadLinks(nodeObjects, setPingInProgress); 
    }
  }
  
  // Setter for pingInProgress state
  function setPingInProgress(value) {
    pingInProgress = value;
  }

  // --- ANIMATION LOOP ---
  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    try {
      // Update controls with each frame for smooth inertia and damping
      if (controls) controls.update();

      if (forceSimulation) {
        // Adjust frequency of physics calculations
        const runPhysics = !physicsStabilized || (Date.now() % (physicsStabilized ? 10 : 2) === 0);
        if (runPhysics) {
          const totalMovement = applyForcesToNodes(nodeObjects, edges, nodeForces, nodeVelocities, simulationSpeed);
          const numNodes = Object.keys(nodeObjects).length;
          if (numNodes > 0 && totalMovement < Cfg.PHYSICS_STABILIZATION_THRESHOLD * numNodes) {
            stabilizationCounter++;
            if (stabilizationCounter > Cfg.PHYSICS_STABILIZATION_FRAMES) {
              physicsStabilized = true;
              simulationSpeed *= Cfg.SIMULATION_SPEED_STABILIZED_FACTOR;
            }
          } else {
            stabilizationCounter = 0;
            physicsStabilized = false;
            simulationSpeed = Cfg.SIMULATION_SPEED_INITIAL;
          }
        }
      }
      
      // Apply visual updates for pulsing clicked node
      if (lastClickedNodeRef.current && lastClickedNodeRef.current.userData.pulseAnimation) {
          lastClickedNodeRef.current.userData.pulseAnimation();
      }

      // Update edge positions (conditionally for performance)
      // Adjust frequency of edge updates
      const runEdgeUpdates = !physicsStabilized || (Date.now() % (physicsStabilized ? 6 : 2) === 0);
      if (runEdgeUpdates) {
        edges.forEach(edge => {
          if (edge && edge.line && edge.startNode && edge.endNode) {
            updateEdgePosition(edge.line, edge.startNode, edge.endNode);
          }
        });
      }

      if (renderer && scene && camera) {
        renderer.render(scene, camera);
        if (labelRenderer) labelRenderer.render(scene, camera);
      }

      const now = Date.now();
      if (!pingInProgress && now - lastPingTime > 60000) {
         triggerCheckDeadLinks();
      }

    } catch (error) {
      console.error("Error in animation loop:", error);
      if (window.cancelAnimationFrame && animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      // Optional: attempt to restart
      // setTimeout(() => { requestAnimationFrame(animate); }, 1000);
    }
  }
  
  let sveltePostsUnsubscribe = sveltePostsStore.subscribe((newPosts) => {
    // This subscription is primarily to trigger reactivity when posts change.
    // The actual update logic is handled by the reactive block on `filteredPosts`.
    // No direct graph update here to avoid multiple updates if selectedTag also changes.
  });

  function cleanup() {
    if (sveltePostsUnsubscribe) sveltePostsUnsubscribe();
    removeEventListeners();
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    // Dispose Three.js resources
    if (scene) {
        while(nodesGroup.children.length > 0){ 
            const child = nodesGroup.children[0];
            nodesGroup.remove(child);
            if(child.geometry) child.geometry.dispose();
            if(child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(m => m.dispose());
                } else {
                    child.material.dispose();
                }
            }
            // Dispose children of child if any (like outline, glow)
             if (child.children) {
                child.children.forEach(grandChild => {
                    if(grandChild.geometry) grandChild.geometry.dispose();
                    if(grandChild.material) {
                        if (Array.isArray(grandChild.material)) {
                            grandChild.material.forEach(m => m.dispose());
                        } else {
                            grandChild.material.dispose();
                        }
                    }
                });
            }
        }
        edges.forEach(edge => {
            if (edge.line) {
                if(edge.line.geometry) edge.line.geometry.dispose();
                if(edge.line.material) edge.line.material.dispose();
                scene.remove(edge.line);
            }
        });
        scene.remove(nodesGroup);
    }
    
    if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
    }
    if (labelRenderer) {
        if (labelRenderer.domElement && labelRenderer.domElement.parentNode) {
            labelRenderer.domElement.parentNode.removeChild(labelRenderer.domElement);
        }
        // CSS2DRenderer doesn't have a dispose method itself
    }
    if (controls) controls.dispose();
    if (tooltipRef.current && tooltipRef.current.parentNode) {
      tooltipRef.current.parentNode.removeChild(tooltipRef.current);
    }

    scene = null; camera = null; renderer = null; labelRenderer = null; controls = null;
    nodesGroup = null; nodeObjects = {}; edges = [];
    selectedNodeRef.current = null; svelteSelectedNode = null;
    lastClickedNodeRef.current = null; svelteLastClickedNode = null;
    tooltipRef.current = null; svelteTooltip = null;
  }

</script>

<div bind:this={containerEl} class="rounded-lg overflow-hidden w-full relative shadow-lg" style="height: {height}">
  <!-- Three.js canvas will be injected here -->
  <div class="absolute top-2 right-2 bg-gray-800 bg-opacity-80 text-white text-xs p-2 rounded-md backdrop-blur-sm shadow-sm flex gap-2 items-center">
    <span>Pan to move | Scroll to zoom</span>
    <button
      class="ml-2 px-2 py-1 rounded bg-indigo-500 hover:bg-indigo-600 transition text-white text-xs font-semibold shadow"
      on:click={reheatGraph}
      title="Reheat graph layout for better spacing"
    >
      Reheat
    </button>
    <button
      class="ml-2 px-2 py-1 rounded bg-emerald-500 hover:bg-emerald-600 transition text-white text-xs font-semibold shadow"
      on:click={fetchLiveUpdates}
      title="Refresh data and update graph"
    >
      Refresh
    </button>
  </div>
  <div class="absolute bottom-2 left-2 flex items-center gap-2 bg-gray-800 bg-opacity-80 text-white text-xs p-2 rounded-md backdrop-blur-sm shadow-sm">
    <div class="flex items-center gap-1"><span class="inline-block w-2 h-2 rounded-full bg-opacity-90 bg-white"></span> Active</div>
    <div class="flex items-center gap-1"><span class="inline-block w-2 h-2 rounded-full bg-opacity-40 bg-red-500"></span> Dead Link</div>
    <div class="flex items-center gap-1"><span class="inline-block w-2 h-2 rounded-full bg-opacity-80 bg-amber-500"></span> High Upvotes</div>
  </div>
</div>

<NodeInfo post={selectedPost} onClose={closeNodeInfo} />

<style>
  /* Add some styling for post highlighting */
  :global(.highlight) {
    animation: highlight 2s;
  }
  
  @keyframes highlight {
    0% { background-color: rgba(124, 58, 237, 0.5); }
    100% { background-color: transparent; }
  }
  
  :global(.tooltip) {
    position: absolute;
    background-color: rgba(30, 41, 59, 0.9); /* Slightly lighter, more translucent dark slate */
    color: #e2e8f0; /* Lighter text color (slate-200) */
    padding: 12px 16px; /* Increased padding */
    border-radius: 10px; /* More rounded corners */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6); /* Softer, more spread shadow */
    pointer-events: none; /* Ensure it doesn't block mouse events */
    z-index: 1000; /* Ensure it's above other elements */
    max-width: 280px; /* Slightly wider */
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid rgba(51, 65, 85, 0.7); /* Darker, more subtle border (slate-700) */
    backdrop-filter: blur(8px); /* Stronger blur */
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; /* Modern font stack */
    font-size: 13px; /* Slightly smaller base font for tooltip content */
    line-height: 1.6; /* Improved line spacing */
    transform: translateZ(0); /* Force hardware acceleration */
    transition: opacity 0.15s ease-out, transform 0.15s ease-out; /* Match the timeout duration */
    opacity: 0; /* Start hidden for transition */
    will-change: opacity, transform; /* Optimize for animations */
  }
  
  /* Ensure all tooltip contents don't interfere with mouse events */
  :global(.tooltip *) {
    pointer-events: none;
  }

  :global(.tooltip .text-sm.font-bold) {
    font-size: 15px; /* Larger title */
    color: #f8fafc; /* White title (slate-50) */
    margin-bottom: 4px;
  }

  :global(.tooltip .text-xs) {
    font-size: 12px; /* Consistent small text */
    opacity: 0.85; /* Slightly less prominent secondary text */
  }
  
  :global(.tooltip .text-xs.opacity-75) { /* Specifically target "Click for details" */
    opacity: 0.65; 
    margin-top: 6px;
  }
</style>
