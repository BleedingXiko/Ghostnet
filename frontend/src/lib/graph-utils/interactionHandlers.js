import * as THREE from 'three';
import { updateAllEdgeResolutions } from './edgeManager.js';
import { applyHoverEffects, resetNodeVisualsOnHoverEnd, applyClickEffects } from './nodeManager.js';
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
}) {
  if (!renderer || !containerEl) return;
  const mouse = getMouseVector(event, renderer.domElement);
  updateLastMousePosition({ x: event.clientX, y: event.clientY, xNorm: mouse.x, yNorm: mouse.y });

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(nodesGroup.children, true);
  const intersectedObject = intersects.length > 0 ? intersects[0].object : null;

  if (selectedNodeRef.current !== intersectedObject) {
    if (selectedNodeRef.current) {
      resetNodeVisualsOnHoverEnd(selectedNodeRef.current, lastClickedNodeRef.current);
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
      // Temporarily disable effects and tooltip to debug freezing
      applyHoverEffects(intersectedObject, lastClickedNodeRef.current);
      updateTooltipVisuals(event, intersectedObject.userData.post, tooltipRef.current, currentTooltipHideTimeoutRef);
      console.log('[GraphView] Hover detected on node:', intersectedObject.userData.post.title);
    } else {
      updateSelectedNode(null);
      // console.log('[GraphView] Hover ended, no node intersected.');
    }
  } else if (intersectedObject && selectedNodeRef.current /* && tooltipRef.current && tooltipRef.current.style.display === 'block' */) {
    // Still hovering the same node
    updateTooltipVisuals(event, selectedNodeRef.current.userData.post, tooltipRef.current, currentTooltipHideTimeoutRef); // Also disabled for debugging
    // console.log('[GraphView] Still hovering on node:', selectedNodeRef.current.userData.post.title);
  }
}

export function processMouseClick(event, {
  renderer, camera, nodesGroup, raycaster, controls,
  updateSelectedPost, updateLastClickedNode, getPosts // Pass posts store or a getter
}) {
  const mouse = getMouseVector(event, renderer.domElement);
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(nodesGroup.children, true);

  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;
    if (clickedObject.userData && clickedObject.userData.post) {
      updateSelectedPost(clickedObject.userData.post);
      updateLastClickedNode(clickedObject);

      // if (controls) controls.enabled = true; // Let controls be managed by their own start/end events primarily
      // The main GraphView component's onDragStart/End for controls should handle isDragging state.
      // Clicking a node shouldn't inherently re-enable controls if they were disabled for another reason.

      applyClickEffects(clickedObject);

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
    if (selectedNodeRef.current && selectedNodeRef.current !== lastClickedNodeRef.current) {
        resetNodeVisualsOnHoverEnd(selectedNodeRef.current, lastClickedNodeRef.current);
        updateSelectedNode(null); // Clear selected node in parent state
    }
    hideTooltip(tooltipRef.current, currentTooltipHideTimeoutRef);
    if (typeof document !== 'undefined' && document.body) {
        document.body.style.cursor = 'default';
    }
}
