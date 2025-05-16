// Configuration values for different environments
// These values can be overridden by environment variables in production

// Function to get environment variables with fallbacks
function getEnvVar(key, fallback) {
  // For Vite, environment variables are exposed on import.meta.env
  // and must be prefixed with VITE_
  return import.meta.env[`VITE_${key}`] || fallback;
}

// Function to get API base URL that works on any device
function getApiBaseUrl() {
  // When running in browser, use the current window's location
  if (typeof window !== 'undefined') {
    const windowOrigin = window.location.origin;
    return `${windowOrigin}/api`;
  }
  // Fallback for SSR or non-browser environments
  return getEnvVar('API_BASE_URL', 'http://localhost:5001/api');
}

export const config = {
  // API Settings
  apiBaseUrl: getApiBaseUrl(),
  
  // Storage Settings
  apiKeyStorageKey: getEnvVar('API_KEY_STORAGE_KEY', 'ghostNetApiKey'),
  
  // App Settings
  appName: getEnvVar('APP_NAME', 'GhostNet')
}; 