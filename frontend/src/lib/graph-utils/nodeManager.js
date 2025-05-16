import * as THREE from 'three';
import {
  NODE_RADIUS_MIN, NODE_RADIUS_MAX, NODE_UPVOTE_RADIUS_FACTOR,
  NODE_COLOR_DEAD, NODE_OPACITY_DEAD, NODE_OPACITY_ALIVE,
  NODE_OUTLINE_COLOR_DEAD, NODE_OUTLINE_COLOR_ALIVE,
  NODE_OUTLINE_OPACITY_DEAD, NODE_OUTLINE_OPACITY_ALIVE,
  NODE_GLOW_OPACITY_DEAD, NODE_GLOW_OPACITY_ALIVE,
  NODE_GLOW_SIZE_DEAD, NODE_GLOW_SIZE_ALIVE,
  UPVOTE_RING_COLOR, UPVOTE_RING_OPACITY, UPVOTE_THRESHOLD_FOR_RING,
  HOVER_SCALE_FACTOR, HOVER_EMISSIVE_COLOR, HOVER_GLOW_SIZE, HOVER_GLOW_LERP_FACTOR,
  CLICK_GLOW_SIZE, CLICK_GLOW_COLOR,
  providerColors
} from './config.js';

export function createNode(post) {
  const radius = Math.max(NODE_RADIUS_MIN, Math.min(NODE_RADIUS_MAX, NODE_RADIUS_MIN + (post.upvotes * NODE_UPVOTE_RADIUS_FACTOR)));
  const baseColorHex = providerColors[post.provider] || providerColors.default;
  const isDead = post.status === 'dead' || post.is_alive === false;

  const geometry = new THREE.CircleGeometry(radius, 32);
  const material = new THREE.MeshBasicMaterial({
    color: isDead ? NODE_COLOR_DEAD : baseColorHex,
    transparent: true,
    opacity: isDead ? NODE_OPACITY_DEAD : NODE_OPACITY_ALIVE
  });
  const nodeMesh = new THREE.Mesh(geometry, material);
  nodeMesh.name = "mainCircle";

  const outlineGeometry = new THREE.RingGeometry(radius - 0.05, radius + 0.1, 32);
  const outlineMaterial = new THREE.MeshBasicMaterial({
    color: isDead ? NODE_OUTLINE_COLOR_DEAD : NODE_OUTLINE_COLOR_ALIVE,
    transparent: true,
    opacity: isDead ? NODE_OUTLINE_OPACITY_DEAD : NODE_OUTLINE_OPACITY_ALIVE,
    side: THREE.DoubleSide
  });
  const outline = new THREE.Mesh(outlineGeometry, outlineMaterial);
  outline.name = "outline";
  outline.position.z = -0.01;
  nodeMesh.add(outline);

  const pointsGeometry = new THREE.CircleGeometry(radius * 1.4, 32);
  const pointsMaterial = new THREE.PointsMaterial({
    color: isDead ? NODE_COLOR_DEAD : baseColorHex,
    size: isDead ? NODE_GLOW_SIZE_DEAD : NODE_GLOW_SIZE_ALIVE,
    transparent: true,
    opacity: isDead ? NODE_GLOW_OPACITY_DEAD : NODE_GLOW_OPACITY_ALIVE,
    sizeAttenuation: true
  });
  const points = new THREE.Points(pointsGeometry, pointsMaterial);
  points.name = "glow";
  points.position.z = 0.01;
  nodeMesh.add(points);

  if (post.upvotes > UPVOTE_THRESHOLD_FOR_RING) {
    const upvoteGeometry = new THREE.RingGeometry(radius + 0.2, radius + 0.4, 32);
    const upvoteMaterial = new THREE.MeshBasicMaterial({
      color: UPVOTE_RING_COLOR,
      transparent: true,
      opacity: UPVOTE_RING_OPACITY,
      side: THREE.DoubleSide
    });
    const upvoteRing = new THREE.Mesh(upvoteGeometry, upvoteMaterial);
    upvoteRing.name = "upvoteRing";
    upvoteRing.position.z = -0.02;
    nodeMesh.add(upvoteRing);
  }

  nodeMesh.userData = { post };
  nodeMesh.position.z = 0;
  return nodeMesh;
}

export function applyHoverEffects(node, lastClickedNode) {
  if (node && node !== lastClickedNode && node.material && node.material.emissive && node.userData && node.userData.post) {
    if (node.scale) node.scale.set(HOVER_SCALE_FACTOR, HOVER_SCALE_FACTOR, 1);
    node.material.emissive.setHex(HOVER_EMISSIVE_COLOR); // Guarded by node.material.emissive
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        if ((child.isPoints || child.name === 'glow') && child.material && child.material.color) { // Added child.material.color check
          child.material.size = HOVER_GLOW_SIZE;
          const baseColor = new THREE.Color(providerColors[node.userData.post.provider] || providerColors.default);
          const hoverColor = new THREE.Color(0xffffff); // Pure white for hover glow mix
          const mixedColor = baseColor.clone().lerp(hoverColor, HOVER_GLOW_LERP_FACTOR);
          child.material.color.set(mixedColor); // Use .set() for Color objects
        }
      });
    }
  }
}

export function resetNodeVisualsOnHoverEnd(nodeToReset, lastClickedNode) {
  if (nodeToReset && nodeToReset !== lastClickedNode && nodeToReset.userData && nodeToReset.userData.post) {
    if (nodeToReset.material && nodeToReset.material.emissive) {
      nodeToReset.material.emissive.setHex(0);
    }
    if (nodeToReset.scale) {
      nodeToReset.scale.set(1, 1, 1);
    }
    if (nodeToReset.children && nodeToReset.children.length > 0) {
      nodeToReset.children.forEach(child => {
        if ((child.isPoints || child.name === 'glow') && child.material && child.material.color && nodeToReset.userData && nodeToReset.userData.post) {
          const postData = nodeToReset.userData.post;
          const isDead = postData.status === 'dead' || postData.is_alive === false;
          const originalColorHex = isDead ? NODE_COLOR_DEAD : (providerColors[postData.provider] || providerColors.default);
          child.material.color.setHex(originalColorHex);
          child.material.size = isDead ? NODE_GLOW_SIZE_DEAD : NODE_GLOW_SIZE_ALIVE;
        }
      });
    }
  }
}

export function applyClickEffects(node) {
  if (node && node.userData && node.userData.post && node.children && node.children.length > 0) {
    const pointsChild = node.children.find(child => child.isPoints || child.name === 'glow');
    if (pointsChild && pointsChild.material && pointsChild.material.color) {
      const glowMaterial = pointsChild.material;
      glowMaterial.size = CLICK_GLOW_SIZE;
      glowMaterial.color.setHex(CLICK_GLOW_COLOR);
    }
  }
  // Ensure node exists before trying to add pulseAnimation
  if (node && node.userData) {
    const pulseAnimation = () => {
      if (node && node.scale) { // Check node again inside closure
        const scale = 1.2 + Math.sin(Date.now() * 0.01) * 0.1;
        node.scale.set(scale, scale, 1);
      }
    };
    node.userData.pulseAnimation = pulseAnimation;
  }
}

export function resetClickEffects(node) {
  if (node && node.userData && node.userData.post) { // Added check for post data
    if (node.userData.pulseAnimation) {
      delete node.userData.pulseAnimation;
    }
    if (node.scale) {
      node.scale.set(1, 1, 1);
    }
    if (node.children && node.children.length > 0) {
      const pointsChild = node.children.find(child => child.isPoints || child.name === 'glow');
      if (pointsChild && pointsChild.material && pointsChild.material.color) { // Added check for material.color
        const glowMaterial = pointsChild.material;
        const post = node.userData.post;
        const isDead = post.status === 'dead' || post.is_alive === false;
        glowMaterial.size = isDead ? NODE_GLOW_SIZE_DEAD : NODE_GLOW_SIZE_ALIVE;
        const colorHex = isDead ? NODE_COLOR_DEAD : (providerColors[post.provider] || providerColors.default);
        glowMaterial.color.setHex(colorHex);
      }
    }
  }
}

export function updateNodeStatusVisuals(node, postData) {
    if (!node || !node.material || !node.material.color || !postData) return; // Basic guard

    const isNowDead = postData.status === 'dead' || postData.is_alive === false;
    const mainMaterial = node.material;
    mainMaterial.color.setHex(isNowDead ? NODE_COLOR_DEAD : (providerColors[postData.provider] || providerColors.default));
    mainMaterial.opacity = isNowDead ? NODE_OPACITY_DEAD : NODE_OPACITY_ALIVE;

    const outlineMesh = node.children.find(child => child.name === 'outline');
    if (outlineMesh && outlineMesh.material && outlineMesh.material.color) {
      outlineMesh.material.color.setHex(isNowDead ? NODE_OUTLINE_COLOR_DEAD : NODE_OUTLINE_COLOR_ALIVE);
      outlineMesh.material.opacity = isNowDead ? NODE_OUTLINE_OPACITY_DEAD : NODE_OUTLINE_OPACITY_ALIVE;
    }
    const pointsMesh = node.children.find(child => child.name === 'glow');
    if (pointsMesh && pointsMesh.material && pointsMesh.material.color) {
      pointsMesh.material.color.setHex(isNowDead ? NODE_COLOR_DEAD : (providerColors[postData.provider] || providerColors.default));
      pointsMesh.material.opacity = isNowDead ? NODE_GLOW_OPACITY_DEAD : NODE_GLOW_OPACITY_ALIVE;
      pointsMesh.material.size = isNowDead ? NODE_GLOW_SIZE_DEAD : NODE_GLOW_SIZE_ALIVE;
    }
}
