import * as THREE from 'three';
import { updateAllEdgeResolutions } from './edgeManager.js';
import { applyHoverEffects, resetNodeVisualsOnHoverEnd, applyClickEffects, triggerNodeJump } from './nodeManager.js'; // Added triggerNodeJump
import { updateTooltipVisuals, hideTooltip } from './tooltipManager.js';

export function createRaycaster() {
  const raycaster = new THREE.Raycaster();
  raycaster.params.Points.threshold = 0.1;
  return raycaster;
}

export function getMouseVector(event, rendererDomElement) {
  const rect = rendererDomElement.getBoundingClientRect();
  const mouse = new THREE.Vector2();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  return mouse;
}

export function handleWindowResize(containerEl, camera, renderer, labelRenderer, edges) {
  if (!containerEl || !camera || !renderer || !labelRenderer) return;
  const aspect = containerEl.clientWidth / containerEl.clientHeight;
  const frustumSize = 60; // Make sure this matches camera setup
  camera.left = frustumSize * aspect / -2;
  camera.right = frustumSize * aspect / 2;
  camera.top = frustumSize / 2;
  camera.bottom = frustumSize / -2;
  camera.updateProjectionMatrix();
  renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
  labelRenderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
  updateAllEdgeResolutions(edges, containerEl);
}

export function handleNodeRaycast(mouse, camera, nodesGroup, raycaster) {
  if (!scene || !camera || !nodesGroup || !raycaster || !mouse) return null;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(nodesGroup.children, true);
  if (intersects.length > 0) {
    const intersectedObject = intersects[0].object;
    if (intersectedObject.userData && intersectedObject.userData.post) {
      return intersectedObject;
    }
  }
  return null;
}


export function processMouseHover(event, {
  renderer, containerEl, camera, nodesGroup, raycaster,
  selectedNodeRef, lastClickedNodeRef, tooltipRef, currentTooltipHideTimeoutRef,
  updateSelectedNode, updateLastMousePosition,
  isDragging, mouseMovedSince
}) {
  if (!renderer || !containerEl) return;
  
  // Check if this is a mobile device - if so, don't show tooltips on hover
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  if (isTouchDevice) {
    // Skip tooltip handling on mobile devices
    return;
  }

  const mouse = getMouseVector(event, renderer.domElement);
  updateLastMousePosition({ x: event.clientX, y: event.clientY, xNorm: mouse.x, yNorm: mouse.y });

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(nodesGroup.children, true);
  const intersectedObject = intersects.length > 0 ? intersects[0].object : null;

  if (selectedNodeRef.current !== intersectedObject) {
    if (selectedNodeRef.current) {
      if (!isTouchDevice) { // Only reset hover visuals if not a touch device
        resetNodeVisualsOnHoverEnd(selectedNodeRef.current, lastClickedNodeRef.current);
      }
      hideTooltip(tooltipRef.current, currentTooltipHideTimeoutRef);
      if (typeof document !== 'undefined' && document.body) {
        document.body.style.cursor = 'default';
      }
    }
    if (intersectedObject && intersectedObject.userData && intersectedObject.userData.post) {
      updateSelectedNode(intersectedObject);
      if (typeof document !== 'undefined' && document.body) {
        document.body.style.cursor = 'pointer';
      }
      if (!isTouchDevice) { // Only apply hover effects if not a touch device
        applyHoverEffects(intersectedObject, lastClickedNodeRef.current);
      }
      // Tooltip should still show on hover for all devices if an item is targeted
      updateTooltipVisuals(event, intersectedObject.userData.post, tooltipRef.current, currentTooltipHideTimeoutRef);
      console.log('[GraphView] Hover detected on node:', intersectedObject.userData.post.title);
    } else {
      updateSelectedNode(null);
      // console.log('[GraphView] Hover ended, no node intersected.');
    }
  } else if (intersectedObject && selectedNodeRef.current) {
    // Still hovering the same node, keep tooltip updated
    updateTooltipVisuals(event, selectedNodeRef.current.userData.post, tooltipRef.current, currentTooltipHideTimeoutRef);
    // console.log('[GraphView] Still hovering on node:', selectedNodeRef.current.userData.post.title);
  }
}

export function processMouseClick(event, {
  renderer, camera, nodesGroup, raycaster, controls,
  updateSelectedPost, updateLastClickedNode, getPosts, // Pass posts store or a getter
  tooltipRef, currentTooltipHideTimeoutRef, selectedNodeRef // New parameters for tooltip handling
}) {
  const mouse = getMouseVector(event, renderer.domElement);
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(nodesGroup.children, true);

  // Always hide the tooltip immediately on any click
  if (tooltipRef && currentTooltipHideTimeoutRef) {
    hideTooltip(tooltipRef.current, currentTooltipHideTimeoutRef, true);
  }

  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;
    if (clickedObject.userData && clickedObject.userData.post) {
      const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      
      updateSelectedPost(clickedObject.userData.post);
      updateLastClickedNode(clickedObject);
      applyClickEffects(clickedObject);
      triggerNodeJump(clickedObject); // Trigger the jump effect

      // Highlight in UI
      const posts = getPosts(); // Fetch current posts
      const postIndex = posts.findIndex(p => p.id === clickedObject.userData.post.id);
      if (postIndex !== -1) {
        const postElement = document.getElementById(`post-${clickedObject.userData.post.id}`);
        if (postElement) {
          postElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          postElement.classList.add('highlight');
          setTimeout(() => {
            postElement.classList.remove('highlight');
          }, 2000);
        }
      }
      return clickedObject;
    }
  } else {
    // Clicked on background, hide tooltip if refs are available
    if (tooltipRef && currentTooltipHideTimeoutRef) {
      hideTooltip(tooltipRef.current, currentTooltipHideTimeoutRef);
    }
  }
  return null;
}

export function handleMouseLeaveGraph(
    selectedNodeRef,
    lastClickedNodeRef,
    tooltipRef,
    currentTooltipHideTimeoutRef,
    updateSelectedNode // Function to update selectedNode in parent
) {
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (selectedNodeRef.current && selectedNodeRef.current !== lastClickedNodeRef.current) {
        if (!isTouchDevice) {
            resetNodeVisualsOnHoverEnd(selectedNodeRef.current, lastClickedNodeRef.current);
        }
        updateSelectedNode(null); // Clear selected node in parent state
    }
    hideTooltip(tooltipRef.current, currentTooltipHideTimeoutRef);
    if (typeof document !== 'undefined' && document.body) {
        document.body.style.cursor = 'default';
    }
}
