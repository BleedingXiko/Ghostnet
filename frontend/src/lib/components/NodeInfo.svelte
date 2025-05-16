<script>
  import { api } from '../api.js';
  import { upsertPostInStore, apiKey, upvotedPosts, markAsUpvoted } from '../stores.js';
  
  export let post = null;
  export let onClose = () => {};
  
  let isUpvoting = false;
  let error = '';
  
  // Subscribe to API key store
  let currentApiKey;
  apiKey.subscribe(value => {
    currentApiKey = value;
  });
  
  // Subscribe to upvoted posts store
  let upvotedPostsMap;
  upvotedPosts.subscribe(value => {
    upvotedPostsMap = value;
  });
  
  // Check if the current user has already upvoted this post
  $: hasAlreadyUpvoted = post && currentApiKey && upvotedPostsMap && 
     upvotedPostsMap[currentApiKey] && 
     upvotedPostsMap[currentApiKey].includes(post.id);
  
  async function upvotePost() {
    if (isUpvoting || !currentApiKey || hasAlreadyUpvoted || !post) return;
    
    isUpvoting = true;
    error = '';
    
    try {
      const updatedPost = await api.votePost(post.id);
      
      // Preserve the ownership status of the post
      updatedPost.own_by_current_user = post.own_by_current_user;
      
      // Update the post in the store with preserved ownership status
      upsertPostInStore(updatedPost);
      
      // Update the current post object
      post.upvotes = updatedPost.upvotes;
      
      // Mark this post as upvoted by this API key
      markAsUpvoted(post.id, currentApiKey);
    } catch (err) {
      console.error('Error upvoting post:', err);
      error = err.message || 'Failed to upvote post';
    } finally {
      isUpvoting = false;
    }
  }
</script>

{#if post}
  <div class="fixed inset-0 flex items-center justify-center z-50 p-4" on:click|self={onClose}>
    <div class="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md border border-purple-500">
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-xl font-bold text-purple-300">{post.title}</h3>
        <button on:click={onClose} class="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div class="mb-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm text-gray-400">Provider</span>
          <span class="text-sm font-medium text-white">{post.provider}</span>
        </div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm text-gray-400">Upvotes</span>
          <div class="flex items-center">
            <span class="text-sm font-medium text-white mr-2">{post.upvotes}</span>
            {#if currentApiKey}
              <button 
                on:click={upvotePost} 
                disabled={isUpvoting || hasAlreadyUpvoted}
                title={hasAlreadyUpvoted ? "You've already upvoted this post" : "Upvote this post"}
                class="inline-flex items-center justify-center w-6 h-6 rounded transition-colors duration-150 ease-in-out 
                {hasAlreadyUpvoted 
                  ? 'bg-purple-800 text-purple-200 cursor-not-allowed' 
                  : 'bg-purple-600 hover:bg-purple-700 text-white'} 
                disabled:opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </button>
            {/if}
          </div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-400">Created</span>
          <span class="text-sm font-medium text-white">{new Date(post.created_at).toLocaleDateString()}</span>
        </div>
      </div>
      
      {#if post.description}
        <div class="mb-4">
          <h4 class="text-sm font-medium text-gray-400 mb-1">Description</h4>
          <p class="text-sm text-white">{post.description}</p>
        </div>
      {/if}
      
      {#if post.tags && post.tags.length > 0}
        <div class="mb-4">
          <h4 class="text-sm font-medium text-gray-400 mb-1">Tags</h4>
          <div class="flex flex-wrap gap-1">
            {#each post.tags as tag}
              <span class="inline-block bg-purple-600 text-xs py-1 px-2 rounded-full text-white">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      {/if}
      
      <div class="mt-4">
        <h4 class="text-sm font-medium text-gray-400 mb-1">Tunnel URL</h4>
        <a 
          href={post.tunnel_url} 
          target="_blank" 
          rel="noopener noreferrer"
          class="block p-2 bg-gray-700 rounded text-blue-400 hover:text-blue-300 text-sm break-all">
          {post.tunnel_url}
        </a>
      </div>
      
      {#if error}
        <p class="mt-3 text-sm text-red-400">{error}</p>
      {/if}
      
      <div class="mt-6 flex justify-end">
        <a 
          href={post.tunnel_url} 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors">
          Visit Tunnel
        </a>
      </div>
    </div>
  </div>
{/if} 