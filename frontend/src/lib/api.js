import { config } from './config.js';

async function request(method, endpoint, data = null, apiKey = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (apiKey) {
    options.headers['Authorization'] = `Bearer ${apiKey}`;
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${config.apiBaseUrl}${endpoint}`, options);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || `API request failed with status ${response.status}`);
  }
  return result;
}

export const api = {
  generateApiKey: async () => {
    return request('POST', '/generate_key');
  },
  getPosts: async () => {
    return request('GET', '/posts');
  },
  getMyPosts: async (apiKey) => {
    return request('GET', '/my_posts', null, apiKey);
  },
  publishPost: async (postData, apiKey) => {
    const post = await request('POST', '/publish', postData, apiKey);
    // Mark posts created by the current user
    if (post) {
      post.own_by_current_user = true;
    }
    return post;
  },
  updatePost: async (postId, postData, apiKey) => {
    const post = await request('PUT', `/post/${postId}`, postData, apiKey);
    // Mark posts updated by the current user
    if (post) {
      post.own_by_current_user = true;
    }
    return post;
  },
  deletePost: async (postId, apiKey) => {
    return request('DELETE', `/post/${postId}`, null, apiKey);
  },
  votePost: async (postId) => {
    return request('POST', `/vote/${postId}`);
  },
  checkLink: async (postId) => {
    return request('GET', `/check_link/${postId}`);
  },
  checkAllLinks: async () => {
    return request('GET', '/check_all_links');
  }
}; 