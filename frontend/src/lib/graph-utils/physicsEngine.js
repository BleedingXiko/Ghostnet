import * as THREE from 'three';
import {
  NODE_UPVOTE_RADIUS_FACTOR, COLLISION_STRENGTH, DAMPING_FACTOR, MAX_NODE_POSITION_RANGE,
  JUMP_FORCE_MAGNITUDE, JUMP_DECAY_RATE, JUMP_INITIAL_FRAMES, MIN_NODE_DISTANCE
} from './config.js';

function applyGravitationalForce(node, allNodeForces) {
  const postId = node.userData.post.id;
  const upvoteFactor = Math.min(6, 1 + (node.userData.post.upvotes * NODE_UPVOTE_RADIUS_FACTOR));
  
  // Add slight oscillation to gravitational force based on time
  const timeVariation = Math.sin(Date.now() * 0.001) * 0.005 + 0.015;
  
  const centerForce = new THREE.Vector3(-node.position.x, -node.position.y, -node.position.z);
  centerForce.normalize().multiplyScalar(timeVariation * upvoteFactor); // Time-varying force
  allNodeForces[postId].add(centerForce);
  
  // Add a small random jitter for more liveliness
  const jitter = new THREE.Vector3(
    (Math.random() - 0.5) * 0.003,
    (Math.random() - 0.5) * 0.003,
    0
  );
  allNodeForces[postId].add(jitter);
}

function applyOutwardForceForDeadNode(node, allNodeForces) {
  const postId = node.userData.post.id;
  const outwardForce = new THREE.Vector3(node.position.x, node.position.y, node.position.z);
  outwardForce.normalize().multiplyScalar(0.05); // Keep Z force for potential future 3D use
  allNodeForces[postId].add(outwardForce);
}

function applyJumpForce(node, allNodeForces) {
  if (node.userData.isJumping && node.userData.jumpFramesRemaining > 0) {
    const postId = node.userData.post.id;
    // Apply a force outwards from the center, or a random direction for more "pop"
    // For simplicity, let's use an outward force from the graph's center (0,0,0)
    // or from its current position if it's far from center.
    let jumpDirection = node.position.clone().normalize();
    if (node.position.lengthSq() < 0.1) { // If very close to center, pick a random direction
      jumpDirection.set(Math.random() - 0.5, Math.random() - 0.5, 0).normalize();
    }
    
    // The force magnitude decreases over the jump duration
    const currentJumpMagnitude = JUMP_FORCE_MAGNITUDE * (node.userData.jumpFramesRemaining / JUMP_INITIAL_FRAMES);
    const jumpForce = jumpDirection.multiplyScalar(currentJumpMagnitude);
    
    allNodeForces[postId].add(jumpForce);

    node.userData.jumpFramesRemaining--;
    if (node.userData.jumpFramesRemaining <= 0) {
      node.userData.isJumping = false;
    }
  }
}

function applyEdgeSpringForces(currentEdges, allNodeForces) {
  // Use time to create oscillating spring effects
  const time = Date.now() * 0.001;
  const oscillationFactor = Math.sin(time * 0.5) * 0.3 + 1.0; // Oscillates between 0.7 and 1.3
  
  currentEdges.forEach(edge => {
    if (!edge || !edge.startNode || !edge.endNode) return;
    const source = edge.startNode;
    const target = edge.endNode;
    if (!source.userData || !source.userData.post || !target.userData || !target.userData.post) return;

    const sourceId = source.userData.post.id;
    const targetId = target.userData.post.id;

    // Create a unique oscillation for each edge based on node IDs
    let edgeUniquePhase = 0;
    // Safely get character codes with type checking
    if (typeof sourceId === 'string' && typeof targetId === 'string' && 
        sourceId.length > 0 && targetId.length > 0) {
      edgeUniquePhase = (sourceId.charCodeAt(0) + targetId.charCodeAt(0)) % 10 * 0.1;
    } else {
      // Use a hash of the stringified IDs if they're not strings
      const sourceHash = String(sourceId).split('').reduce((a, b) => a + b.charCodeAt(0), 0);
      const targetHash = String(targetId).split('').reduce((a, b) => a + b.charCodeAt(0), 0);
      edgeUniquePhase = (sourceHash + targetHash) % 10 * 0.1;
    }
    const edgeOscillation = Math.sin(time * 0.8 + edgeUniquePhase) * 0.2 + 1.0; // Unique timing per edge
    
    const distance = source.position.distanceTo(target.position);
    // Use MIN_NODE_DISTANCE to ensure edges maintain proper spacing
    // This creates a more web-like structure with well-spaced nodes
    // With the 4x larger MIN_NODE_DISTANCE, we need to adjust the ideal distance accordingly
    const baseIdealDistance = Math.max(MIN_NODE_DISTANCE * 1.2, 40 * (1 - edge.strength * 0.3));
    const idealDistance = baseIdealDistance * oscillationFactor; // Dynamic ideal distance
    const forceDirection = new THREE.Vector3().subVectors(target.position, source.position);
    forceDirection.normalize();
    
    // Calculate the difference from ideal distance
    const distanceDiff = Math.abs(distance - idealDistance);
    const distanceRatio = distance / idealDistance;
    
    // More dynamic spring force with edge-specific oscillation
    const springStrength = 0.004 * edge.strength * edgeOscillation;
    
    // Base magnitude on distance difference
    let magnitude = (distance - idealDistance) * springStrength;
    
    // Create a gentle elastic tension in the web connections
    // This creates a subtle oscillation effect rather than dramatic plucking
    const tensionFactor = 1.0 + 0.2 * Math.sin(time * 0.2 + edgeUniquePhase * 2);
    const minForce = 0.001 * edge.strength * Math.sin(time * 0.4 + edgeUniquePhase * 3) * tensionFactor;
    
    // Create a gentle elastic effect when nodes are near ideal distance
    if (distanceDiff < 3.0) {
      // Apply a gentle oscillating force that creates subtle web-like movement
      const elasticFactor = 1.0 - (distanceDiff / 3.0); // 1.0 at ideal distance, 0 at 3.0 units away
      const elasticForce = minForce * Math.pow(elasticFactor, 1.2) * 1.2;
      
      // Add a very subtle periodic effect for gentle web vibrations
      const subtleEffect = Math.sin(time * 0.6 + edgeUniquePhase * 4) * 0.001 * edge.strength * elasticFactor;
      
      // Blend between calculated force and elastic force with more emphasis on the calculated force
      magnitude = magnitude * (1 - elasticFactor * 0.4) + (elasticForce + subtleEffect) * elasticFactor;
    }
    
    forceDirection.multiplyScalar(magnitude);

    // Add a perpendicular force for more interesting motion
    // Make it stronger when nodes are near ideal distance to create orbital-like motion
    const perpStrength = (distanceDiff < 2) ? 
      0.2 * Math.sin(time + edgeUniquePhase * 5) : // Stronger when close to ideal
      0.1 * Math.sin(time + edgeUniquePhase * 5);  // Normal otherwise
      
    const perpForce = new THREE.Vector3(-forceDirection.y, forceDirection.x, 0);
    perpForce.multiplyScalar(Math.abs(magnitude) * perpStrength);
    
    allNodeForces[sourceId].add(forceDirection);
    allNodeForces[targetId].sub(forceDirection);
    
    // Apply perpendicular forces for more interesting motion
    allNodeForces[sourceId].add(perpForce);
    allNodeForces[targetId].add(perpForce);
  });
}

function applyNodeRepulsionForces(allNodes, allNodeForces, nodeVelocities) {
  // Use time for oscillating repulsion effects
  const time = Date.now() * 0.001;
  const globalPulse = Math.sin(time * 0.3) * 0.2 + 1.0; // Global oscillation factor
  
  for (let i = 0; i < allNodes.length; i++) {
    for (let j = i + 1; j < allNodes.length; j++) {
      const nodeA = allNodes[i];
      const nodeB = allNodes[j];

      if (!nodeA || !nodeA.userData || !nodeA.userData.post ||
          !nodeB || !nodeB.userData || !nodeB.userData.post) {
        continue;
      }

      const nodeAId = nodeA.userData.post.id;
      const nodeBId = nodeB.userData.post.id;
      
      // Create a unique oscillation for each node pair
      let pairUniquePhase = 0;
      // Safely get character codes with type checking
      if (typeof nodeAId === 'string' && typeof nodeBId === 'string' && 
          nodeAId.length > 0 && nodeBId.length > 0) {
        pairUniquePhase = (nodeAId.charCodeAt(0) + nodeBId.charCodeAt(0)) % 10 * 0.1;
      } else {
        // Use a hash of the stringified IDs if they're not strings
        const nodeAHash = String(nodeAId).split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        const nodeBHash = String(nodeBId).split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        pairUniquePhase = (nodeAHash + nodeBHash) % 10 * 0.1;
      }
      const pairOscillation = Math.sin(time * 0.7 + pairUniquePhase) * 0.15 + 1.0;

      const repulsion = new THREE.Vector3().subVectors(nodeA.position, nodeB.position);
      const distance = repulsion.length();

      const radiusA = nodeA.geometry && nodeA.geometry.parameters ? nodeA.geometry.parameters.radius : 1;
      const radiusB = nodeB.geometry && nodeB.geometry.parameters ? nodeB.geometry.parameters.radius : 1;
      
      // Use the MIN_NODE_DISTANCE constant to enforce a larger minimum distance
      // This prevents nodes from clustering together
      const calculatedMinDist = radiusA + radiusB + 0.8;
      const minDistance = Math.max(MIN_NODE_DISTANCE, calculatedMinDist) * globalPulse; // Enforce minimum distance

      if (distance < minDistance) {
        // Smoother collision response with gentle bounce effect
        // Calculate how deep the collision is (as a percentage of minDistance)
        const collisionDepth = (minDistance - distance) / minDistance;
        
        // Use a gentler curve for smoother bouncing
        const bounceFactor = Math.pow(collisionDepth, 1.5) * 1.2;
        
        // Calculate collision force with gentler bounce
        const collisionForceMagnitude = COLLISION_STRENGTH * bounceFactor * pairOscillation;
        const collisionForce = repulsion.clone().normalize().multiplyScalar(collisionForceMagnitude);
        
        // Add a subtle rotational component for gentle web-like motion
        const rotationalForce = new THREE.Vector3(-repulsion.y, repulsion.x, 0).normalize().multiplyScalar(collisionForceMagnitude * 0.1);
        
        // Apply a gentle bounce effect when nodes are very close
        if (distance < minDistance * 0.6) {
          // Add a moderate impulse for a gentle bounce
          const bounceStrength = Math.pow((minDistance * 0.6 - distance) / (minDistance * 0.6), 1.2) * COLLISION_STRENGTH * 0.5;
          const bounceImpulse = repulsion.clone().normalize().multiplyScalar(bounceStrength);
          
          // Apply the impulse with minimal random variation
          const randomAngle = Math.random() * Math.PI * 2;
          const randomOffset = new THREE.Vector3(
            Math.cos(randomAngle) * 0.05,
            Math.sin(randomAngle) * 0.05,
            0
          );
          
          // Add the impulse with minimal random variation
          allNodeForces[nodeAId].add(bounceImpulse.clone().add(randomOffset));
          allNodeForces[nodeBId].sub(bounceImpulse.clone().sub(randomOffset));
          
          // Apply gentler velocity modifications
          if (nodeVelocities && nodeVelocities[nodeAId] && nodeVelocities[nodeBId]) {
            const velocityImpulse = repulsion.clone().normalize().multiplyScalar(bounceStrength * 0.2);
            nodeVelocities[nodeAId].add(velocityImpulse);
            nodeVelocities[nodeBId].sub(velocityImpulse);
          }
        }
        
        allNodeForces[nodeAId].add(collisionForce);
        allNodeForces[nodeBId].sub(collisionForce);
        
        // Apply rotational forces
        allNodeForces[nodeAId].add(rotationalForce);
        allNodeForces[nodeBId].add(rotationalForce);
      } else if (distance < 20) { // Increased repulsion range
        // More dynamic repulsion formula with time variation
        const repulsionStrength = (0.1 * globalPulse) / Math.max(0.1, Math.pow(distance, 1.8));
        const normalRepulsionForce = repulsion.clone().normalize().multiplyScalar(repulsionStrength * pairOscillation);
        
        allNodeForces[nodeAId].add(normalRepulsionForce);
        allNodeForces[nodeBId].sub(normalRepulsionForce);
      }
    }
  }
}

// Function to enforce minimum distance between all nodes
function enforceMinimumDistance(nodes, nodeVelocities) {
  if (!nodes || nodes.length < 2) return;
  
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const nodeA = nodes[i];
      const nodeB = nodes[j];
      
      if (!nodeA || !nodeA.position || !nodeB || !nodeB.position) continue;
      
      const distance = nodeA.position.distanceTo(nodeB.position);
      
      // Only enforce minimum distance if nodes are significantly too close
      // This reduces jitteriness by not constantly adjusting nodes that are near the threshold
      if (distance < MIN_NODE_DISTANCE * 0.7) {
        const separation = new THREE.Vector3().subVectors(nodeA.position, nodeB.position);
        separation.normalize();
        
        // Calculate how much to move each node, but do it more gradually
        // This creates smoother motion by not making large sudden adjustments
        const moveDistance = (MIN_NODE_DISTANCE - distance) * 0.15; // Much gentler adjustment (15% instead of 50%)
        
        // Move nodes apart gradually
        nodeA.position.add(separation.clone().multiplyScalar(moveDistance));
        nodeB.position.sub(separation.clone().multiplyScalar(moveDistance));
        
        // Add a very gentle velocity adjustment in separation direction
        if (nodeVelocities) {
          const nodeAId = nodeA.userData?.post?.id;
          const nodeBId = nodeB.userData?.post?.id;
          
          if (nodeAId && nodeBId && nodeVelocities[nodeAId] && nodeVelocities[nodeBId]) {
            // Much gentler velocity impulse
            const velocityImpulse = separation.clone().multiplyScalar(0.1);
            nodeVelocities[nodeAId].add(velocityImpulse);
            nodeVelocities[nodeBId].sub(velocityImpulse);
          }
        }
      }
    }
  }
}

export function applyForcesToNodes(nodeObjects, edges, nodeForces, nodeVelocities, simulationSpeed) {
  const currentNodes = Object.values(nodeObjects);
  if (!currentNodes.length) return 0;

  let totalSystemMovement = 0;
  const time = Date.now() * 0.001; // Current time in seconds for animations

  currentNodes.forEach(node => {
    if (!node || !node.userData || !node.userData.post) return;
    const postId = node.userData.post.id;
    if (!nodeForces[postId]) {
      nodeForces[postId] = new THREE.Vector3(0, 0, 0);
    } else {
      nodeForces[postId].set(0, 0, 0);
    }
    if (!nodeVelocities[postId]) {
      nodeVelocities[postId] = new THREE.Vector3(0, 0, 0);
    }
  });

  // Apply forces to each node
  const allNodes = currentNodes.filter(node => node && node.userData && node.userData.post);
  
  // Apply gravitational force to keep nodes centered
  allNodes.forEach(node => {
    applyGravitationalForce(node, nodeForces);
    
    // Apply outward force for dead nodes
    if (node.userData.post.status === 'dead' || node.userData.post.is_alive === false) {
      applyOutwardForceForDeadNode(node, nodeForces);
    }
    
    // Apply jump force if node is jumping
    applyJumpForce(node, nodeForces);
    
    // Add a continuous gentle oscillation based on node ID for constant movement
    const postId = node.userData.post.id;
    // Create a unique phase value safely, handling both string and non-string IDs
    let nodeUniquePhase = 0;
    if (typeof postId === 'string' && postId.length > 0) {
      nodeUniquePhase = postId.charCodeAt(0) % 10 * 0.1;
    } else {
      // Use a hash of the stringified ID if it's not a string
      const idHash = String(postId).split('').reduce((a, b) => {
        return a + b.charCodeAt(0);
      }, 0);
      nodeUniquePhase = (idHash % 10) * 0.1;
    }
    
    const nodeOscillation = new THREE.Vector3(
      Math.sin(time * 0.5 + nodeUniquePhase) * 0.0015,
      Math.cos(time * 0.3 + nodeUniquePhase) * 0.0015,
      0
    );
    nodeForces[postId].add(nodeOscillation);
  });
  
  // Apply spring forces for edges
  applyEdgeSpringForces(edges, nodeForces);
  
  // Apply repulsion forces between nodes
  applyNodeRepulsionForces(allNodes, nodeForces, nodeVelocities);
  
  // First enforce minimum distance between all nodes
  enforceMinimumDistance(allNodes, nodeVelocities);
  
  // Update positions based on forces
  allNodes.forEach(node => {
    if (!node || !node.userData || !node.userData.post) return;
    const postId = node.userData.post.id;
    const force = nodeForces[postId];
    const velocity = nodeVelocities[postId];
    if (!force || !velocity) return;

    const prevPos = node.position.clone();
    velocity.add(force);
    
    // Apply a time-varying damping factor for more interesting motion
    let idPhase = 0;
    if (typeof postId === 'string' && postId.length > 0) {
      idPhase = postId.charCodeAt(0) * 0.01;
    } else {
      // Use a hash of the stringified ID if it's not a string
      idPhase = String(postId).split('').reduce((a, b) => a + b.charCodeAt(0), 0) * 0.001;
    }
    const timeDamping = DAMPING_FACTOR * (0.95 + Math.sin(time * 0.2 + idPhase) * 0.05);
    velocity.multiplyScalar(timeDamping);
    
    // Add a small constant velocity to prevent complete stabilization
    if (velocity.lengthSq() < 0.00001) {
      velocity.add(new THREE.Vector3(
        (Math.random() - 0.5) * 0.001,
        (Math.random() - 0.5) * 0.001,
        0
      ));
    }
    
    node.position.add(velocity.clone().multiplyScalar(simulationSpeed));
    node.position.z = 0;

    // Apply boundary constraints with a soft bounce effect
    if (Math.abs(node.position.x) > MAX_NODE_POSITION_RANGE) {
      const overflow = Math.abs(node.position.x) - MAX_NODE_POSITION_RANGE;
      node.position.x = Math.sign(node.position.x) * MAX_NODE_POSITION_RANGE;
      velocity.x = -velocity.x * 0.5; // Bounce with energy loss
    }
    
    if (Math.abs(node.position.y) > MAX_NODE_POSITION_RANGE) {
      const overflow = Math.abs(node.position.y) - MAX_NODE_POSITION_RANGE;
      node.position.y = Math.sign(node.position.y) * MAX_NODE_POSITION_RANGE;
      velocity.y = -velocity.y * 0.5; // Bounce with energy loss
    }

    const movement = node.position.distanceTo(prevPos);
    totalSystemMovement += movement;
  });
  
  // Ensure there's always some movement in the system
  return Math.max(totalSystemMovement, 0.01 * allNodes.length);
}
