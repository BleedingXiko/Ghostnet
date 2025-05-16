import { writable, get } from 'svelte/store';
import { api } from './api.js';
import { config } from './config.js';

// Helper to get API key from local storage
function getApiKeyFromStorage() {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(config.apiKeyStorageKey);
  }
  return null;
}

// Helper to get upvoted posts from local storage
function getUpvotedPostsFromStorage() {
  if (typeof localStorage !== 'undefined') {
    const upvotedString = localStorage.getItem('upvotedPosts');
    if (upvotedString) {
      try {
        return JSON.parse(upvotedString);
      } catch (e) {
        console.error('Error parsing upvoted posts:', e);
      }
    }
  }
  return {};
}

// API Key Store
export const apiKey = writable(getApiKeyFromStorage());

apiKey.subscribe(value => {
  if (typeof localStorage !== 'undefined') {
    if (value) {
      localStorage.setItem(config.apiKeyStorageKey, value);
    } else {
      localStorage.removeItem(config.apiKeyStorageKey);
    }
  }
});

// Upvoted Posts Store (tracks which posts have been upvoted by which API keys)
export const upvotedPosts = writable(getUpvotedPostsFromStorage());

upvotedPosts.subscribe(value => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('upvotedPosts', JSON.stringify(value));
  }
});

// Posts Store
export const posts = writable([]);
export const isLoadingPosts = writable(false);
export const postsError = writable(null);

export async function fetchPosts() {
  isLoadingPosts.set(true);
  postsError.set(null);
  try {
    const fetchedPosts = await api.getPosts();
    
    // Get the current API key for ownership check
    const currentKey = getApiKeyFromStorage();
    
    // If we have an API key, get the user's posts to determine ownership
    if (currentKey) {
      try {
        // Fetch posts owned by the current user
        const myPosts = await api.getMyPosts(currentKey);
        
        // Create a set of IDs for quick lookup
        const myPostIds = new Set(myPosts.map(post => post.id));
        
        // Mark posts as owned if they are in the user's posts
        fetchedPosts.forEach(post => {
          post.own_by_current_user = myPostIds.has(post.id);
        });
      } catch (error) {
        console.error("Error fetching user's posts:", error);
        // Fall back to previous behavior if we can't fetch user's posts
        const currentPosts = get(posts);
        const ownedPostIds = new Set();
        
        if (currentPosts && currentPosts.length > 0) {
          currentPosts.forEach(post => {
            if (post.own_by_current_user === true) {
              ownedPostIds.add(post.id);
            }
          });
        }
        
        fetchedPosts.forEach(post => {
          post.own_by_current_user = ownedPostIds.has(post.id);
        });
      }
    } else {
      // If no API key is set, reset ownership
      fetchedPosts.forEach(post => {
        post.own_by_current_user = false;
      });
    }
    
    // Sort by upvotes descending, then by creation date descending as a tie-breaker
    fetchedPosts.sort((a, b) => {
      if (b.upvotes !== a.upvotes) {
        return b.upvotes - a.upvotes;
      }
      return new Date(b.created_at) - new Date(a.created_at);
    });
    
    posts.set(fetchedPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    postsError.set(error.message || 'Failed to fetch posts');
  } finally {
    isLoadingPosts.set(false);
  }
}

// Function to manually add/update a post in the store (e.g., after publish/update)
export function upsertPostInStore(postToUpsert) {
  // Only mark newly created posts as owned if they don't already have an ownership flag
  const currentKey = getApiKeyFromStorage();
  if (currentKey && postToUpsert.own_by_current_user === undefined) {
    postToUpsert.own_by_current_user = true;
  }

  posts.update(currentPosts => {
    const index = currentPosts.findIndex(p => p.id === postToUpsert.id);
    if (index !== -1) {
      // If the post is already in the store, respect its ownership status
      // The ownership flag should be explicitly set when upvoting or updating
      currentPosts[index] = postToUpsert;
      return [...currentPosts]; // Return new array to trigger Svelte reactivity
    } else {
      return [postToUpsert, ...currentPosts];
    }
  });
  // Re-sort after upserting
  posts.update(currentPosts => {
    currentPosts.sort((a, b) => {
        if (b.upvotes !== a.upvotes) {
            return b.upvotes - a.upvotes;
        }
        return new Date(b.created_at) - new Date(a.created_at);
    });
    return [...currentPosts];
  });
}

// Function to remove a post from the store (e.g., after delete)
export function removePostFromStore(postId) {
  posts.update(currentPosts => currentPosts.filter(p => p.id !== postId));
}

// Function to check if a post has been upvoted by the current API key
export function hasUpvoted(postId, currentApiKey) {
  if (!currentApiKey) return false;
  
  let upvoted = false;
  upvotedPosts.update(upvotedMap => {
    // Initialize entry for this API key if it doesn't exist
    if (!upvotedMap[currentApiKey]) {
      upvotedMap[currentApiKey] = [];
    }
    upvoted = upvotedMap[currentApiKey].includes(postId);
    return upvotedMap;
  });
  
  return upvoted;
}

// Function to mark a post as upvoted by the current API key
export function markAsUpvoted(postId, currentApiKey) {
  if (!currentApiKey) return;
  
  upvotedPosts.update(upvotedMap => {
    // Initialize entry for this API key if it doesn't exist
    if (!upvotedMap[currentApiKey]) {
      upvotedMap[currentApiKey] = [];
    }
    
    // Add this post ID to the upvoted list if not already there
    if (!upvotedMap[currentApiKey].includes(postId)) {
      upvotedMap[currentApiKey].push(postId);
    }
    
    return upvotedMap;
  });
} 