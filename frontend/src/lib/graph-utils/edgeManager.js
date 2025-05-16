import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import {
  EDGE_BASE_LINEWIDTH, EDGE_STRENGTH_LINEWIDTH_FACTOR, EDGE_COLOR,
  EDGE_OPACITY_FACTOR, EDGE_WEAK_CONNECTION_THRESHOLD, EDGE_DASH_SIZE,
  EDGE_GAP_SIZE, EDGE_DEAD_NODE_OPACITY, EDGE_ALIVE_OPACITY_FACTOR
} from './config.js';

export function createEdge(startNode, endNode, strength = 1, containerEl) {
  const lineGeo = new LineGeometry();
  lineGeo.setPositions([
    startNode.position.x, startNode.position.y, 0,
    endNode.position.x, endNode.position.y, 0
  ]);
  const lineWidth = EDGE_BASE_LINEWIDTH + (strength * EDGE_STRENGTH_LINEWIDTH_FACTOR);
  const lineMat = new LineMaterial({
    color: EDGE_COLOR,
    linewidth: lineWidth,
    transparent: true,
    opacity: EDGE_OPACITY_FACTOR * strength,
    resolution: new THREE.Vector2(containerEl.clientWidth, containerEl.clientHeight),
    dashed: strength < EDGE_WEAK_CONNECTION_THRESHOLD,
    dashSize: EDGE_DASH_SIZE,
    gapSize: EDGE_GAP_SIZE
  });
  const line = new Line2(lineGeo, lineMat);
  line.computeLineDistances();
  return line;
}

export function updateEdgePosition(edgeLine, startNode, endNode) {
  if (!edgeLine || !edgeLine.geometry || !edgeLine.material) return;
  edgeLine.geometry.setPositions([
    startNode.position.x, startNode.position.y, 0,
    endNode.position.x, endNode.position.y, 0
  ]);
  if (startNode.userData.post.status === 'dead' || endNode.userData.post.status === 'dead') {
    edgeLine.material.opacity = EDGE_DEAD_NODE_OPACITY;
  } else {
    edgeLine.material.opacity = EDGE_ALIVE_OPACITY_FACTOR * edgeLine.userData.strength;
  }
}

export function updateAllEdgeResolutions(edges, containerEl) {
    edges.forEach(edge => {
        if (edge.line && edge.line.material && edge.line.material.isLineMaterial) {
            edge.line.material.resolution.set(containerEl.clientWidth, containerEl.clientHeight);
        }
    });
}
