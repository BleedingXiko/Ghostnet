/**
 * Enhanced panning controls for both desktop and mobile
 * Provides smooth inertia, multi-touch support, and better UX
 */
import * as THREE from 'three';

export class EnhancedPanControls {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;
    
    // State variables
    this.enabled = true;
    this.enableDamping = true;
    this.dampingFactor = 0.1;
    this.panSpeed = 1.0;
    this.screenSpacePanning = true;
    this.minZoom = 0.5;
    this.maxZoom = 4.0;
    this.zoomSpeed = 1.0;
    this.inertiaEnabled = true;
    this.inertiaFactor = 0.9;
    
    // Internal state
    this.isPanning = false;
    this.isZooming = false;
    this.panStart = new THREE.Vector2();
    this.panEnd = new THREE.Vector2();
    this.panDelta = new THREE.Vector2();
    this.panInertia = new THREE.Vector2();
    this.lastPanTime = 0;
    this.panVelocity = new THREE.Vector2();
    
    // Touch state
    this.touches = { ONE: 0, TWO: 1 };
    this.pointers = [];
    this.pointerPositions = {};
    this.multiTouchDistance = 0;
    this.pinchZoomEnabled = true;
    this.pinchZoomSpeed = 1.0;
    
    // Event handlers
    this.onContextMenu = this.onContextMenu.bind(this);
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onPointerCancel = this.onPointerCancel.bind(this);
    this.onWheel = this.onWheel.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    
    // Event listeners
    this.addEventListeners();
    
    // Callback functions
    this.changeEvent = { type: 'change' };
    this.startEvent = { type: 'start' };
    this.endEvent = { type: 'end' };
    this._listeners = {};
  }
  
  // Public methods
  update() {
    if (!this.enabled) return;
    
    // Apply inertia if enabled and not actively panning
    if (this.enableDamping && this.inertiaEnabled && !this.isPanning) {
      if (this.panInertia.lengthSq() > 0.0001) {
        this.panCamera(this.panInertia.x, this.panInertia.y);
        this.panInertia.multiplyScalar(this.inertiaFactor);
        this.dispatchEvent(this.changeEvent);
      }
    }
  }
  
  addEventListener(type, listener) {
    if (this._listeners[type] === undefined) {
      this._listeners[type] = [];
    }
    if (this._listeners[type].indexOf(listener) === -1) {
      this._listeners[type].push(listener);
    }
  }
  
  removeEventListener(type, listener) {
    if (this._listeners[type] !== undefined) {
      const index = this._listeners[type].indexOf(listener);
      if (index !== -1) {
        this._listeners[type].splice(index, 1);
      }
    }
  }
  
  dispatchEvent(event) {
    if (this._listeners[event.type] !== undefined) {
      const listeners = this._listeners[event.type].slice(0);
      for (let i = 0; i < listeners.length; i++) {
        listeners[i].call(this, event);
      }
    }
  }
  
  dispose() {
    this.removeEventListeners();
  }
  
  // Private methods
  addEventListeners() {
    this.domElement.addEventListener('contextmenu', this.onContextMenu);
    
    // Use pointer events for both mouse and touch
    this.domElement.addEventListener('pointerdown', this.onPointerDown);
    this.domElement.addEventListener('wheel', this.onWheel, { passive: false });
    
    // Add touch-specific handlers for better mobile support
    this.domElement.addEventListener('touchstart', this.onTouchStart, { passive: false });
    this.domElement.addEventListener('touchmove', this.onTouchMove, { passive: false });
    this.domElement.addEventListener('touchend', this.onTouchEnd);
  }
  
  removeEventListeners() {
    this.domElement.removeEventListener('contextmenu', this.onContextMenu);
    
    this.domElement.removeEventListener('pointerdown', this.onPointerDown);
    this.domElement.removeEventListener('wheel', this.onWheel);
    
    this.domElement.removeEventListener('touchstart', this.onTouchStart);
    this.domElement.removeEventListener('touchmove', this.onTouchMove);
    this.domElement.removeEventListener('touchend', this.onTouchEnd);
    
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);
  }
  
  onContextMenu(event) {
    if (this.enabled === false) return;
    event.preventDefault();
  }
  
  onPointerDown(event) {
    if (this.enabled === false) return;
    
    // Prevent default behavior only for primary button (usually left mouse button)
    if (event.button === 0) {
      event.preventDefault();
    }
    
    this.addPointer(event);
    
    if (event.pointerType === 'touch') {
      this.onTouchStart(event);
    } else {
      this.handleMouseDown(event);
    }
  }
  
  onPointerMove(event) {
    if (this.enabled === false) return;
    
    if (event.pointerType === 'touch') {
      this.onTouchMove(event);
    } else {
      this.handleMouseMove(event);
    }
  }
  
  onPointerUp(event) {
    if (this.enabled === false) return;
    
    this.removePointer(event);
    
    if (this.pointers.length === 0) {
      document.removeEventListener('pointermove', this.onPointerMove);
      document.removeEventListener('pointerup', this.onPointerUp);
      
      // Calculate inertia based on velocity
      if (this.inertiaEnabled && this.isPanning) {
        const now = performance.now();
        const dt = Math.min(50, now - this.lastPanTime) / 1000; // Cap at 50ms to avoid huge jumps
        if (dt > 0) {
          this.panInertia.copy(this.panDelta).multiplyScalar(1 / dt);
        }
      }
      
      this.isPanning = false;
      this.isZooming = false;
      this.dispatchEvent(this.endEvent);
    }
  }
  
  onPointerCancel(event) {
    this.removePointer(event);
  }
  
  onWheel(event) {
    if (this.enabled === false || this.enableZoom === false) return;
    
    event.preventDefault();
    
    let delta = 0;
    if (event.deltaY) {
      // Firefox
      if (event.deltaMode === 1) {
        delta = event.deltaY * 0.05;
      } else {
        delta = event.deltaY * 0.002;
      }
    } else if (event.wheelDelta) {
      delta = -event.wheelDelta * 0.0002; // Chrome, Safari
    } else if (event.detail) {
      delta = event.detail * 0.002; // Firefox legacy
    }
    
    this.zoom(delta * this.zoomSpeed);
    this.dispatchEvent(this.changeEvent);
  }
  
  onTouchStart(event) {
    if (this.enabled === false) return;
    
    event.preventDefault();
    
    switch (event.touches.length) {
      case 1: // One-finger touch: pan
        this.handleTouchStartPan(event);
        break;
        
      case 2: // Two-finger touch: pinch-zoom
        this.handleTouchStartZoom(event);
        break;
        
      default:
        break;
    }
    
    this.dispatchEvent(this.startEvent);
  }
  
  onTouchMove(event) {
    if (this.enabled === false) return;
    
    event.preventDefault();
    
    switch (event.touches.length) {
      case 1: // One-finger touch: pan
        this.handleTouchMovePan(event);
        break;
        
      case 2: // Two-finger touch: pinch-zoom
        this.handleTouchMoveZoom(event);
        break;
        
      default:
        break;
    }
  }
  
  onTouchEnd(event) {
    if (this.enabled === false) return;
    
    // Calculate inertia based on velocity
    if (this.inertiaEnabled && this.isPanning) {
      const now = performance.now();
      const dt = Math.min(50, now - this.lastPanTime) / 1000; // Cap at 50ms to avoid huge jumps
      if (dt > 0) {
        this.panInertia.copy(this.panDelta).multiplyScalar(1 / dt);
      }
    }
    
    switch (event.touches.length) {
      case 0: // No touches
        this.isPanning = false;
        this.isZooming = false;
        this.dispatchEvent(this.endEvent);
        break;
        
      case 1: // One finger remains
        this.handleTouchStartPan(event);
        break;
        
      case 2: // Two fingers remain
        this.handleTouchStartZoom(event);
        break;
    }
  }
  
  // Helper methods
  handleMouseDown(event) {
    this.isPanning = true;
    this.panStart.set(event.clientX, event.clientY);
    this.panInertia.set(0, 0);
    
    document.addEventListener('pointermove', this.onPointerMove);
    document.addEventListener('pointerup', this.onPointerUp);
    
    this.dispatchEvent(this.startEvent);
  }
  
  handleMouseMove(event) {
    if (!this.isPanning) return;
    
    this.panEnd.set(event.clientX, event.clientY);
    this.panDelta.subVectors(this.panEnd, this.panStart);
    
    this.panCamera(this.panDelta.x, this.panDelta.y);
    
    this.panStart.copy(this.panEnd);
    this.lastPanTime = performance.now();
    
    this.dispatchEvent(this.changeEvent);
  }
  
  handleTouchStartPan(event) {
    this.isPanning = true;
    this.panStart.set(event.touches[0].pageX, event.touches[0].pageY);
    this.panInertia.set(0, 0);
    this.lastPanTime = performance.now();
  }
  
  handleTouchMovePan(event) {
    if (!this.isPanning) return;
    
    this.panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    this.panDelta.subVectors(this.panEnd, this.panStart);
    
    this.panCamera(this.panDelta.x, this.panDelta.y);
    
    this.panStart.copy(this.panEnd);
    this.lastPanTime = performance.now();
    
    this.dispatchEvent(this.changeEvent);
  }
  
  handleTouchStartZoom(event) {
    if (!this.pinchZoomEnabled) return;
    
    this.isZooming = true;
    
    const dx = event.touches[0].pageX - event.touches[1].pageX;
    const dy = event.touches[0].pageY - event.touches[1].pageY;
    this.multiTouchDistance = Math.sqrt(dx * dx + dy * dy);
  }
  
  handleTouchMoveZoom(event) {
    if (!this.isZooming || !this.pinchZoomEnabled) return;
    
    const dx = event.touches[0].pageX - event.touches[1].pageX;
    const dy = event.touches[0].pageY - event.touches[1].pageY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const ratio = 1.0 + (distance - this.multiTouchDistance) * 0.01 * this.pinchZoomSpeed;
    this.multiTouchDistance = distance;
    
    this.zoomByRatio(ratio);
    
    this.dispatchEvent(this.changeEvent);
  }
  
  panCamera(deltaX, deltaY) {
    if (!this.enabled) return;
    
    const element = this.domElement;
    const elementWidth = element.clientWidth;
    const elementHeight = element.clientHeight;
    
    // Adjust delta by pan speed and element size
    deltaX = deltaX * this.panSpeed / elementWidth;
    deltaY = deltaY * this.panSpeed / elementHeight;
    
    const cameraW = this.camera.right - this.camera.left;
    const cameraH = this.camera.top - this.camera.bottom;
    
    // Adjust movement based on camera zoom
    deltaX *= cameraW;
    deltaY *= cameraH;
    
    this.camera.position.x -= deltaX;
    this.camera.position.y += deltaY;
    
    this.camera.updateProjectionMatrix();
  }
  
  zoom(delta) {
    if (!this.enabled) return;
    
    const factor = Math.pow(0.95, delta);
    
    this.zoomByRatio(factor);
  }
  
  zoomByRatio(ratio) {
    if (!this.enabled) return;
    
    // Clamp zoom within limits
    let newZoom = this.camera.zoom * ratio;
    newZoom = Math.max(this.minZoom, Math.min(this.maxZoom, newZoom));
    
    this.camera.zoom = newZoom;
    this.camera.updateProjectionMatrix();
  }
  
  addPointer(event) {
    this.pointers.push(event);
  }
  
  removePointer(event) {
    for (let i = 0; i < this.pointers.length; i++) {
      if (this.pointers[i].pointerId === event.pointerId) {
        this.pointers.splice(i, 1);
        return;
      }
    }
  }
}
