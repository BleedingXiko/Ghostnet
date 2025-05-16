import * as THREE from 'three';
import {
  NODE_UPVOTE_RADIUS_FACTOR, COLLISION_STRENGTH, DAMPING_FACTOR, MAX_NODE_POSITION_RANGE
} from './config.js';

function applyGravitationalForce(node, allNodeForces) {
  const postId = node.userData.post.id;
  const upvoteFactor = Math.min(6, 1 + (node.userData.post.upvotes * NODE_UPVOTE_RADIUS_FACTOR));
  const centerForce = new THREE.Vector3(-node.position.x, -node.position.y, -node.position.z);
  centerForce.normalize().multiplyScalar(0.01 * upvoteFactor);
  allNodeForces[postId].add(centerForce);
}

function applyOutwardForceForDeadNode(node, allNodeForces) {
  const postId = node.userData.post.id;
  const outwardForce = new THREE.Vector3(node.position.x, node.position.y, node.position.z);
  outwardForce.normalize().multiplyScalar(0.05);
  allNodeForces[postId].add(outwardForce);
}

function applyEdgeSpringForces(currentEdges, allNodeForces) {
  currentEdges.forEach(edge => {
    if (!edge || !edge.startNode || !edge.endNode) return;
    const source = edge.startNode;
    const target = edge.endNode;
    if (!source.userData || !source.userData.post || !target.userData || !target.userData.post) return;

    const sourceId = source.userData.post.id;
    const targetId = target.userData.post.id;

    const distance = source.position.distanceTo(target.position);
    const idealDistance = 10 * (1 - edge.strength);
    const forceDirection = new THREE.Vector3().subVectors(target.position, source.position);
    forceDirection.normalize();
    const magnitude = (distance - idealDistance) * 0.001 * edge.strength;
    forceDirection.multiplyScalar(magnitude);

    allNodeForces[sourceId].add(forceDirection);
    allNodeForces[targetId].sub(forceDirection);
  });
}

function applyNodeRepulsionForces(allNodes, allNodeForces) {
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

      const repulsion = new THREE.Vector3().subVectors(nodeA.position, nodeB.position);
      const distance = repulsion.length();

      const radiusA = nodeA.geometry && nodeA.geometry.parameters ? nodeA.geometry.parameters.radius : 1;
      const radiusB = nodeB.geometry && nodeB.geometry.parameters ? nodeB.geometry.parameters.radius : 1;
      const minDistance = radiusA + radiusB + 0.5;

      if (distance < minDistance) {
        const collisionForceMagnitude = COLLISION_STRENGTH * (minDistance - distance) / minDistance;
        const collisionForce = repulsion.clone().normalize().multiplyScalar(collisionForceMagnitude);
        allNodeForces[nodeAId].add(collisionForce);
        allNodeForces[nodeBId].sub(collisionForce);
      } else if (distance < 15) {
        const repulsionStrength = 0.03 / Math.max(0.1, distance * distance);
        const normalRepulsionForce = repulsion.clone().normalize().multiplyScalar(repulsionStrength);
        allNodeForces[nodeAId].add(normalRepulsionForce);
        allNodeForces[nodeBId].sub(normalRepulsionForce);
      }
    }
  }
}

export function applyForcesToNodes(nodeObjects, edges, nodeForces, nodeVelocities, simulationSpeed) {
  const currentNodes = Object.values(nodeObjects);
  if (!currentNodes.length) return 0;

  let totalSystemMovement = 0;

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

    applyGravitationalForce(node, nodeForces);
    if (node.userData.post.status === 'dead') {
      applyOutwardForceForDeadNode(node, nodeForces);
    }

    if (node.userData.pulseAnimation) {
      node.userData.pulseAnimation();
    }
  });

  applyEdgeSpringForces(edges, nodeForces);
  applyNodeRepulsionForces(currentNodes, nodeForces);

  currentNodes.forEach(node => {
    if (!node || !node.userData || !node.userData.post) return;
    const postId = node.userData.post.id;
    const force = nodeForces[postId];
    const velocity = nodeVelocities[postId];
    if (!force || !velocity) return;

    const prevPos = node.position.clone();
    velocity.add(force);
    velocity.multiplyScalar(DAMPING_FACTOR);
    node.position.add(velocity.clone().multiplyScalar(simulationSpeed));
    node.position.z = 0;

    node.position.x = Math.max(-MAX_NODE_POSITION_RANGE, Math.min(MAX_NODE_POSITION_RANGE, node.position.x));
    node.position.y = Math.max(-MAX_NODE_POSITION_RANGE, Math.min(MAX_NODE_POSITION_RANGE, node.position.y));

    const movement = node.position.distanceTo(prevPos);
    totalSystemMovement += movement;
  });
  return totalSystemMovement;
}
