<script>
  import { api } from '../api.js';
  import { apiKey, upsertPostInStore, removePostFromStore, hasUpvoted, markAsUpvoted, upvotedPosts, fetchPosts } from '../stores.js';
  
  export let post;

  let isUpvoting = false;
  let isDeleting = false;
  let error = '';
  let message = '';
  let deleteAttempted = false;
  
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

  // Check if this post is owned by the current user
  // The safest approach is to only show the delete button for posts
  // that the user has just created or we've confirmed ownership server-side
  $: isOwner = post && post.own_by_current_user === true && currentApiKey;
  
  // Check if the current user has already upvoted this post
  $: hasAlreadyUpvoted = currentApiKey && upvotedPostsMap && 
     upvotedPostsMap[currentApiKey] && 
     upvotedPostsMap[currentApiKey].includes(post.id);
  
  async function upvotePost() {
    if (isUpvoting || !currentApiKey || hasAlreadyUpvoted) return;
    
    isUpvoting = true;
    error = '';
    
    try {
      const updatedPost = await api.votePost(post.id);
      
      // Preserve the ownership status of the post
      updatedPost.own_by_current_user = post.own_by_current_user;
      
      // Update the post data in the store
      upsertPostInStore(updatedPost);
      
      // Mark this post as upvoted by this API key
      markAsUpvoted(post.id, currentApiKey);
    } catch (err) {
      console.error('Error upvoting post:', err);
      error = err.message || 'Failed to upvote post';
    } finally {
      isUpvoting = false;
    }
  }
  
  async function deletePost() {
    if (!currentApiKey) {
      error = 'You need an API key to delete posts';
      return;
    }
    
    if (!confirm(`Are you sure you want to delete "${post.title}"?`)) return;
    
    isDeleting = true;
    error = '';
    deleteAttempted = true;
    
    try {
      await api.deletePost(post.id, currentApiKey);
      removePostFromStore(post.id);
      message = 'Post deleted successfully';
    } catch (err) {
      console.error('Error deleting post:', err);
      error = err.message || 'Failed to delete post';
      // If we get a 403 error, we know the user doesn't own this post
      if (err.message && err.message.includes('Forbidden')) {
        post.own_by_current_user = false;
        // Refresh posts to update UI correctly
        await fetchPosts();
      }
    } finally {
      isDeleting = false;
    }
  }
</script>

<div class="mt-3 flex flex-wrap items-center gap-2">
  <button 
    on:click={upvotePost} 
    disabled={isUpvoting || hasAlreadyUpvoted}
    title={hasAlreadyUpvoted ? "You've already upvoted this post" : "Upvote this post"}
    class="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded transition-colors duration-150 ease-in-out 
    {hasAlreadyUpvoted 
      ? 'bg-purple-800 text-purple-200 cursor-not-allowed' 
      : 'bg-purple-600 hover:bg-purple-700 text-white'} 
    disabled:opacity-50">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
    {hasAlreadyUpvoted ? "Upvoted" : "Upvote"} {post.upvotes > 0 ? `(${post.upvotes})` : ''}
  </button>
  
  {#if isOwner && !deleteAttempted}
    <button 
      on:click={deletePost} 
      disabled={isDeleting}
      class="flex items-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors duration-150 ease-in-out disabled:opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      Delete
    </button>
  {/if}

  {#if error}
    <p class="text-sm text-red-400">{error}</p>
  {/if}
  {#if message}
    <p class="text-sm text-green-400">{message}</p>
  {/if}
</div> 