<script>
  import "./app.css";
  import { onMount } from 'svelte';
  import { posts, isLoadingPosts, postsError, fetchPosts, apiKey } from './lib/stores.js';
  import ApiKeyManager from './lib/components/ApiKeyManager.svelte';
  import PublishForm from './lib/components/PublishForm.svelte';
  import PostControls from './lib/components/PostControls.svelte';
  import GraphView from './lib/components/GraphView.svelte';

  let year = new Date().getFullYear();
  let activeView = 'graph'; // 'graph' or 'list'
  let selectedTag = ''; 
  let currentApiKey;
  let userPosts = [];
  let otherPosts = [];

  // Subscribe to the API key store
  apiKey.subscribe(value => {
    currentApiKey = value;
  });

  onMount(async () => {
    await fetchPosts();
  });
  
  function filterByTag(tag) {
    selectedTag = selectedTag === tag ? '' : tag;
  }
  
  // Get all unique tags from posts
  $: uniqueTags = $posts ? 
    Array.from(new Set($posts.flatMap(post => post.tags || [])))
      .sort() : [];
      
  // Filter posts by selected tag
  $: filteredPosts = selectedTag ? 
    $posts.filter(post => post.tags && post.tags.includes(selectedTag)) : 
    $posts;
  
  // Separate user's own posts
  $: userPosts = currentApiKey ? 
    filteredPosts.filter(post => post.own_by_current_user === true) : [];
  
  // Separate other posts
  $: otherPosts = currentApiKey ? 
    filteredPosts.filter(post => !post.own_by_current_user) : filteredPosts;
</script>

<main class="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4">
  <header class="my-6 text-center">
    <h1 class="text-5xl font-bold text-purple-400">GhostNet</h1>
    <p class="text-xl text-gray-300 mt-2">Discover and Share Anonymous GhostHub Tunnels</p>
  </header>

  <div class="w-full max-w-2xl">
    <ApiKeyManager />
    <PublishForm />
  </div>

  <!-- View Options -->
  <div class="w-full max-w-5xl flex justify-between items-center mt-8 mb-4">
    <h2 class="text-2xl font-semibold text-purple-300">Tunnel Discovery</h2>
    
    <div class="flex space-x-2">
      <button 
        class={`px-4 py-2 rounded-lg ${activeView === 'graph' ? 'bg-purple-700 text-white' : 'bg-gray-700 text-gray-300'}`}
        on:click={() => activeView = 'graph'}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H5.5z" />
        </svg>
        Network
      </button>
      <button 
        class={`px-4 py-2 rounded-lg ${activeView === 'list' ? 'bg-purple-700 text-white' : 'bg-gray-700 text-gray-300'}`}
        on:click={() => activeView = 'list'}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        List
      </button>
    </div>
  </div>
  
  <!-- Filter by Tags -->
  {#if uniqueTags.length > 0}
    <div class="w-full max-w-5xl mb-4">
      <div class="flex flex-wrap gap-2 bg-gray-800 p-3 rounded-lg">
        <span class="text-sm text-gray-400 mr-2 self-center">Filter by tag:</span>
        {#each uniqueTags as tag}
          <button 
            class={`px-3 py-1 text-xs rounded-full transition-colors ${selectedTag === tag ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            on:click={() => filterByTag(tag)}>
            {tag}
          </button>
        {/each}
        {#if selectedTag}
          <button 
            class="px-3 py-1 text-xs rounded-full bg-red-700 text-white hover:bg-red-600 transition-colors"
            on:click={() => selectedTag = ''}>
            Clear filter
          </button>
        {/if}
      </div>
    </div>
  {/if}

  <!-- Graph Visualization -->
  {#if activeView === 'graph'}
    <section class="w-full max-w-5xl">
      <div class="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        {#if $isLoadingPosts}
          <div class="h-[600px] flex items-center justify-center">
            <p class="text-gray-400">Loading network...</p>
          </div>
        {:else if $postsError}
          <div class="h-[600px] flex items-center justify-center">
            <p class="text-red-400">Error loading network: {$postsError}</p>
          </div>
        {:else if filteredPosts && filteredPosts.length > 0}
          <GraphView height="600px" {selectedTag} />
        {:else}
          <div class="h-[600px] flex items-center justify-center">
            <p class="text-gray-400">No tunnels to display. {selectedTag ? 'Try a different tag filter.' : 'Publish one to start the network!'}</p>
          </div>
        {/if}
      </div>
      <p class="text-sm text-gray-500 mt-2">
        <span class="font-medium text-purple-400">Interaction:</span> Hover over nodes to see details. Click a node to view full details. 
        <br>
        <span class="font-medium text-purple-400">Visualization:</span> Node size shows upvotes. Colors indicate providers. Connected nodes share similar tags.
      </p>
    </section>
  {:else}
    <!-- List View -->
    <section class="w-full max-w-5xl p-6 bg-gray-800 rounded-lg shadow-xl">
      <h2 class="text-2xl font-semibold mb-4 text-purple-300">Ghost Tunnels</h2>
      {#if $isLoadingPosts}
        <p class="text-gray-400">Loading posts...</p>
      {:else if $postsError}
        <p class="text-red-400 bg-red-900 p-3 rounded">Error loading posts: {$postsError}</p>
      {:else if filteredPosts && filteredPosts.length > 0}
        <!-- Your Posts section -->
        {#if currentApiKey}
          <!-- Check for potentially owned posts -->
          {#if userPosts && userPosts.length > 0}
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-4 text-green-400 border-b border-green-600 pb-2">
                Your Tunnels
                <span class="text-sm font-normal text-green-500 ml-2">
                  (Easy access to manage your tunnels)
                </span>
              </h3>
              <ul class="space-y-4">
                {#each userPosts as post (post.id)}
                  <li id="post-{post.id}" class="p-4 bg-gray-700 border-l-4 border-green-500 rounded-md shadow hover:bg-gray-650 transition-colors">
                    <div class="flex justify-between">
                      <h3 class="text-xl font-bold text-purple-300">{post.title}</h3>
                      <div class="flex items-center space-x-2">
                        <span class={`inline-block w-3 h-3 rounded-full ${post.provider === 'Pinggy' ? 'bg-purple-500' : 'bg-blue-500'}`}></span>
                        <span class="text-sm text-gray-400">{post.provider}</span>
                      </div>
                    </div>
                    <a href={post.tunnel_url} target="_blank" rel="noopener noreferrer" 
                      class="text-blue-400 hover:text-blue-300 underline break-all">
                      {post.tunnel_url}
                    </a>
                    {#if post.description}
                      <p class="mt-2 text-gray-300">{post.description}</p>
                    {/if}
                    <div class="mt-3 flex flex-wrap items-center gap-2">
                      <span class="text-sm text-gray-400">⬆️ {post.upvotes}</span>
                      <span class="text-sm text-gray-400">•</span>
                      <span class="text-sm text-gray-400">{new Date(post.created_at).toLocaleDateString()}</span>
                      {#if post.tags && post.tags.length > 0}
                        <span class="text-sm text-gray-400">•</span>
                        <div class="flex flex-wrap gap-1">
                          {#each post.tags as tag}
                            <button 
                              on:click={() => filterByTag(tag)}
                              class="inline-block bg-gray-600 hover:bg-purple-600 text-xs px-2.5 py-0.5 rounded-full text-white transition-colors">
                              {tag}
                            </button>
                          {/each}
                        </div>
                      {/if}
                    </div>
                    <div class="mt-3">
                      <PostControls {post} />
                    </div>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        {/if}
        
        <!-- All Other Posts section -->
        <h3 class="text-xl font-semibold mb-4 text-purple-300 border-b border-purple-600 pb-2">
          {currentApiKey ? 'Discovered Tunnels' : 'All Tunnels'}
        </h3>
        <ul class="space-y-4">
          {#each otherPosts as post (post.id)}
            <li id="post-{post.id}" class="p-4 bg-gray-700 rounded-md shadow hover:bg-gray-650 transition-colors">
              <div class="flex justify-between">
                <h3 class="text-xl font-bold text-purple-300">{post.title}</h3>
                <div class="flex items-center space-x-2">
                  <span class={`inline-block w-3 h-3 rounded-full ${post.provider === 'Pinggy' ? 'bg-purple-500' : 'bg-blue-500'}`}></span>
                  <span class="text-sm text-gray-400">{post.provider}</span>
                </div>
              </div>
              <a href={post.tunnel_url} target="_blank" rel="noopener noreferrer" 
                class="text-blue-400 hover:text-blue-300 underline break-all">
                {post.tunnel_url}
              </a>
              {#if post.description}
                <p class="mt-2 text-gray-300">{post.description}</p>
              {/if}
              <div class="mt-3 flex flex-wrap items-center gap-2">
                <span class="text-sm text-gray-400">⬆️ {post.upvotes}</span>
                <span class="text-sm text-gray-400">•</span>
                <span class="text-sm text-gray-400">{new Date(post.created_at).toLocaleDateString()}</span>
                {#if post.tags && post.tags.length > 0}
                  <span class="text-sm text-gray-400">•</span>
                  <div class="flex flex-wrap gap-1">
                    {#each post.tags as tag}
                      <button 
                        on:click={() => filterByTag(tag)}
                        class="inline-block bg-gray-600 hover:bg-purple-600 text-xs px-2.5 py-0.5 rounded-full text-white transition-colors">
                        {tag}
                      </button>
                    {/each}
                  </div>
                {/if}
              </div>
              <div class="mt-3">
                <PostControls {post} />
              </div>
            </li>
          {/each}
        </ul>
      {:else}
        <p class="text-gray-400">No ghost tunnels match your criteria. {selectedTag ? 'Try a different tag filter.' : 'Be the first to publish!'}</p>
      {/if}
    </section>
  {/if}

  <footer class="text-gray-500 text-sm mt-auto py-4">
    <p>&copy; {year} GhostNet. Not really copyrighted, it's all anonymous!</p>
  </footer>
</main>

<style>
  /* Global styles */
  :global(html) {
    scroll-behavior: smooth;
  }
  
  /* Hover effect for items */
  :global(.highlight) {
    animation: highlight 2s;
  }
  
  @keyframes highlight {
    0% { background-color: rgba(124, 58, 237, 0.5); }
    100% { background-color: transparent; }
  }
</style> 