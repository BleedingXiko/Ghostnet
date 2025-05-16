import * as THREE from 'three';
import { createNode } from './nodeManager.js';
import { createEdge } from './edgeManager.js';
import { 
    INITIAL_NODE_PLACEMENT_RADIUS, 
    INITIAL_NODE_UPVOTE_DISTANCE_FACTOR, 
    INITIAL_NODE_RANDOM_OFFSET_FACTOR 
} from './config.js';

export function calculateTagSimilarity(tagsA, tagsB) {
  if (!tagsA || !tagsB || !tagsA.length || !tagsB.length) return 0;
  const setA = new Set(tagsA.map(tag => tag.toLowerCase()));
  const setB = new Set(tagsB.map(tag => tag.toLowerCase()));
  const intersection = new Set([...setA].filter(tag => setB.has(tag)));
  return intersection.size / Math.sqrt(setA.size * setB.size);
}

export function createNetworkConnections(nodes, selectedTag) {
  const connections = [];
  if (!nodes || nodes.length <= 1) return connections;

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const nodeA = nodes[i];
      const nodeB = nodes[j];
      const postA = nodeA.userData.post;
      const postB = nodeB.userData.post;
      const similarity = calculateTagSimilarity(postA.tags, postB.tags);
      let connectionStrength = similarity;

      if (selectedTag &&
        ((postA.tags && postA.tags.map(t => t.toLowerCase()).includes(selectedTag.toLowerCase())) ||
         (postB.tags && postB.tags.map(t => t.toLowerCase()).includes(selectedTag.toLowerCase())))) {
        connectionStrength = Math.max(similarity, 0.4);
      }

      if (connectionStrength > 0.3) {
        connections.push({
          startNode: nodeA,
          endNode: nodeB,
          strength: connectionStrength
        });
      }
    }
  }

  const connectedNodes = new Set();
  connections.forEach(conn => {
    connectedNodes.add(conn.startNode.userData.post.id);
    connectedNodes.add(conn.endNode.userData.post.id);
  });

  const isolatedNodes = nodes.filter(node => !connectedNodes.has(node.userData.post.id));
  isolatedNodes.forEach(isolatedNode => {
    let closestNode = null;
    let closestDistance = Infinity;
    nodes.forEach(otherNode => {
      if (otherNode !== isolatedNode) {
        const distance = isolatedNode.position.distanceTo(otherNode.position);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestNode = otherNode;
        }
      }
    });
    if (closestNode) {
      connections.push({
        startNode: isolatedNode,
        endNode: closestNode,
        strength: 0.2
      });
    }
  });

  if (nodes.length > 2 && connections.length < nodes.length) {
    for (let i = 0; i < nodes.length; i++) {
      const nodeA = nodes[i];
      const postA = nodeA.userData.post;
      let hasConnection = false;
      connections.forEach(conn => {
        if (conn.startNode === nodeA || conn.endNode === nodeA) {
          hasConnection = true;
        }
      });
      if (!hasConnection) {
        for (let j = 0; j < nodes.length; j++) {
          if (i !== j) {
            const nodeB = nodes[j];
            const postB = nodeB.userData.post;
            if (postA.provider === postB.provider) {
              connections.push({
                startNode: nodeA,
                endNode: nodeB,
                strength: 0.25
              });
              break;
            }
          }
        }
      }
    }
  }
  return connections;
}

export function updateGraphVisualization({
  scene,
  nodesGroup,
  filteredPosts,
  nodeObjectsRef, // Pass as { current: ... }
  edgesRef,       // Pass as { current: ... }
  selectedTag,
  containerEl,
  checkDeadLinksCallback // Callback to trigger API call
}) {
  while (nodesGroup.children.length > 0) {
    nodesGroup.remove(nodesGroup.children[0]);
  }
  edgesRef.current.forEach(edge => {
    if (edge.line) scene.remove(edge.line);
  });
  edgesRef.current = [];
  nodeObjectsRef.current = {};
  // nodeVelocities and nodeForces should be reset in the main component or physics engine

  if (!filteredPosts || filteredPosts.length === 0) return;

  filteredPosts.forEach((post, index) => {
    const node = createNode(post); // from nodeManager
    const totalPosts = filteredPosts.length;
    const angle = (index / totalPosts) * Math.PI * 2;
    const upvoteFactor = Math.max(0.2, 1 - (post.upvotes * INITIAL_NODE_UPVOTE_DISTANCE_FACTOR));
    const adjustedDistance = INITIAL_NODE_PLACEMENT_RADIUS * upvoteFactor;
    node.position.x = Math.cos(angle) * adjustedDistance;
    node.position.y = Math.sin(angle) * adjustedDistance;
    node.position.z = 0;
    node.position.x += (Math.random() - 0.5) * INITIAL_NODE_RANDOM_OFFSET_FACTOR;
    node.position.y += (Math.random() - 0.5) * INITIAL_NODE_RANDOM_OFFSET_FACTOR;
    nodesGroup.add(node);
    nodeObjectsRef.current[post.id] = node;
  });

  const postsArr = Object.values(nodeObjectsRef.current);
  const connections = createNetworkConnections(postsArr, selectedTag);

  connections.forEach(connection => {
    const edgeLine = createEdge(connection.startNode, connection.endNode, connection.strength, containerEl); // from edgeManager
    edgeLine.userData = { strength: connection.strength };
    scene.add(edgeLine);
    edgesRef.current.push({
      line: edgeLine,
      startNode: connection.startNode,
      endNode: connection.endNode,
      strength: connection.strength
    });
  });

  if (checkDeadLinksCallback) {
    checkDeadLinksCallback();
  }
}
