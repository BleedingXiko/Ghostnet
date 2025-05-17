import * as THREE from 'three';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { EnhancedPanControls } from './enhancedPanControls.js';

export function setupScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0f172a);
  return scene;
}

export function setupCamera(containerEl) {
  const aspect = containerEl.clientWidth / containerEl.clientHeight;
  const frustumSize = 60;
  const camera = new THREE.OrthographicCamera(
    frustumSize * aspect / -2,
    frustumSize * aspect / 2,
    frustumSize / 2,
    frustumSize / -2,
    0.1,
    1000
  );
  camera.position.z = 100;
  camera.zoom = 1;
  camera.updateProjectionMatrix();
  return camera;
}

export function setupRenderers(containerEl) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  containerEl.appendChild(renderer.domElement);

  const labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
  labelRenderer.domElement.style.position = 'absolute';
  labelRenderer.domElement.style.top = '0';
  labelRenderer.domElement.style.pointerEvents = 'none';
  containerEl.appendChild(labelRenderer.domElement);

  return { renderer, labelRenderer };
}

export function setupLighting(scene) {
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);
}

export function setupControls(camera, rendererDomElement, onDragStart, onDragEnd) {
  // Use the new EnhancedPanControls for better desktop and mobile experience
  const controls = new EnhancedPanControls(camera, rendererDomElement);
  
  // Configure the controls
  controls.enableDamping = true;
  controls.dampingFactor = 0.1; // Smoother damping
  controls.screenSpacePanning = true;
  controls.panSpeed = 1.0; // More responsive panning
  controls.zoomSpeed = 1.2; // Slightly faster zoom
  controls.minZoom = 0.5;
  controls.maxZoom = 4;
  
  // Enable inertia for smoother panning experience
  controls.inertiaEnabled = true;
  controls.inertiaFactor = 0.85; // Longer inertia for smoother feel
  
  // Enable pinch zoom for mobile with better sensitivity
  controls.pinchZoomEnabled = true;
  controls.pinchZoomSpeed = 1.5;
  
  // Add event listeners
  controls.addEventListener('start', onDragStart);
  controls.addEventListener('end', onDragEnd);
  
  return controls;
}

export function initSceneCore(containerEl, nodesGroup, onDragStart, onDragEnd) {
  const scene = setupScene();
  scene.add(nodesGroup);
  const camera = setupCamera(containerEl);
  const { renderer, labelRenderer } = setupRenderers(containerEl);
  setupLighting(scene);
  const controls = setupControls(camera, renderer.domElement, onDragStart, onDragEnd);
  
  return { scene, camera, renderer, labelRenderer, controls };
}
