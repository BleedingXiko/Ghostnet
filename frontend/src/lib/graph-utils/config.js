// PHYSICS CONFIGURATION CONSTANTS
export const SIMULATION_SPEED_INITIAL = 0.12; // Reduced for smoother motion
export const SIMULATION_SPEED_STABILIZED_FACTOR = 0.6; // Lower factor for more stability
export const COLLISION_STRENGTH = 2.0; // Reduced for gentler bounces
export const DAMPING_FACTOR = 0.85; // More damping to reduce oscillations
export const PHYSICS_STABILIZATION_THRESHOLD = 0.0005; // Higher threshold to allow some stabilization
export const PHYSICS_STABILIZATION_FRAMES = 100; // Reduced frames to reach stability sooner
export const MAX_NODE_POSITION_RANGE = 100; // Much larger constraint for node positions to accommodate the 4x spacing
export const JUMP_FORCE_MAGNITUDE = 1.2; // Increased force for the "jump" effect
export const JUMP_DECAY_RATE = 0.7; // Slower decay for longer-lasting jump effects
export const JUMP_INITIAL_FRAMES = 15; // More frames for the jump effect
export const INITIAL_NODE_PLACEMENT_RADIUS = 20;
export const INITIAL_NODE_UPVOTE_DISTANCE_FACTOR = 0.15;
export const INITIAL_NODE_RANDOM_OFFSET_FACTOR = 2;

// --- VISUAL CONFIGURATION CONSTANTS ---
// Node Radii
export const NODE_RADIUS_MIN = 1.5;
export const NODE_RADIUS_MAX = 5.5;
export const NODE_UPVOTE_RADIUS_FACTOR = 0.25;

// Minimum spacing between nodes (prevents clustering)
export const MIN_NODE_DISTANCE = 32.0; // Enforce a very large minimum distance between nodes (4x larger)

// Node Colors & Opacity
export const NODE_COLOR_DEAD = 0x666666;
export const NODE_OPACITY_DEAD = 0.5;
export const NODE_OPACITY_ALIVE = 0.95; // Increased opacity for alive nodes
export const NODE_OUTLINE_COLOR_DEAD = 0x888888; // Muted outline for dead nodes
export const NODE_OUTLINE_COLOR_ALIVE = 0xffffff;
export const NODE_OUTLINE_OPACITY_DEAD = 0.3;
export const NODE_OUTLINE_OPACITY_ALIVE = 0.5;
export const NODE_GLOW_OPACITY_DEAD = 0.4;
export const NODE_GLOW_OPACITY_ALIVE = 0.7;
export const NODE_GLOW_SIZE_DEAD = 0.03;
export const NODE_GLOW_SIZE_ALIVE = 0.05;
export const UPVOTE_RING_COLOR = 0xf59e0b; // Amber
export const UPVOTE_RING_OPACITY = 0.6;
export const UPVOTE_THRESHOLD_FOR_RING = 5;

// Hover Effects
export const HOVER_SCALE_FACTOR = 1.15;
export const HOVER_EMISSIVE_COLOR = 0x777777; // Brighter emissive on hover
export const HOVER_GLOW_SIZE = 0.1;
export const HOVER_GLOW_LERP_FACTOR = 0.15; // Softer hover glow
export const CLICK_GLOW_SIZE = 0.15;
export const CLICK_GLOW_COLOR = 0xffffff;

// Edge Appearance
export const EDGE_BASE_LINEWIDTH = 2;
export const EDGE_STRENGTH_LINEWIDTH_FACTOR = 2;
export const EDGE_COLOR = 0xaaaaaa;
export const EDGE_OPACITY_FACTOR = 0.5; // Slightly more subtle edges
export const EDGE_WEAK_CONNECTION_THRESHOLD = 0.4; // For dashing
export const EDGE_DASH_SIZE = 0.5;
export const EDGE_GAP_SIZE = 0.5;
export const EDGE_DEAD_NODE_OPACITY = 0.2;
export const EDGE_ALIVE_OPACITY_FACTOR = 0.7;

// PROFESSIONAL COLOR PALETTE
export const providerColors = {
  'Pinggy': 0x6366f1, // Indigo
  'Cloudflare': 0x0ea5e9, // Sky blue
  'Ngrok': 0x10b981, // Emerald
  'Localhost.run': 0xec4899, // Pink
  'Serveo': 0xf59e0b, // Amber
  'Localtunnel': 0x8b5cf6, // Violet
  'PlayIT': 0xef4444, // Red
  'Remote.it': 0x14b8a6, // Teal
  'default': 0x64748b // Slate
};
