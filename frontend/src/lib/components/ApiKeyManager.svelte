<script>
  import { apiKey, fetchPosts } from '../stores.js';
  import { api } from '../api.js';

  let currentApiKey = '';
  let message = '';
  let error = '';
  let isLoading = false;

  apiKey.subscribe(value => {
    currentApiKey = value || '';
  });

  async function generateNewKey() {
    isLoading = true;
    message = '';
    error = '';
    try {
      const result = await api.generateApiKey();
      apiKey.set(result.api_key);
      await fetchPosts();
      message = `New API Key generated and automatically applied. Key: ${result.api_key}`;
    } catch (err) {
      console.error("Error generating API key:", err);
      error = err.message || 'Failed to generate API key.';
    } finally {
      isLoading = false;
    }
  }

  async function setExistingKey() {
    const newKey = prompt("Enter your existing API Key:");
    if (newKey && newKey.trim() !== '') {
      apiKey.set(newKey.trim());
      message = 'API Key updated.';
      error = '';
      try {
        isLoading = true;
        await fetchPosts();
      } catch (err) {
        console.error("Error refreshing posts:", err);
      } finally {
        isLoading = false;
      }
    } else if (newKey !== null) { // Prompt was not cancelled
        error = 'API Key cannot be empty.';
        message = '';
    }
  }

  async function clearKey() {
    if (confirm("Are you sure you want to clear your API Key? You won't be able to manage your posts.")) {
      apiKey.set(null);
      message = 'API Key cleared.';
      error = '';
      try {
        isLoading = true;
        await fetchPosts();
      } catch (err) {
        console.error("Error refreshing posts:", err);
      } finally {
        isLoading = false;
      }
    }
  }
</script>

<div class="p-4 my-6 bg-gray-800 rounded-lg shadow-md">
  <h3 class="text-xl font-semibold mb-3 text-purple-300">API Key Management</h3>
  
  {#if currentApiKey}
    <p class="text-sm text-gray-300 mb-1">Current API Key: <code class="bg-gray-700 p-1 rounded text-purple-300">{currentApiKey}</code></p>
    <p class="text-xs text-gray-500 mb-3">This key is used to publish and manage your posts. It's stored in your browser's local storage.</p>
  {:else}
    <p class="text-gray-400 mb-3">You don't have an API Key set. Generate one or enter an existing key to publish and manage your posts.</p>
  {/if}

  <div class="flex flex-wrap gap-2">
    <button 
      on:click={generateNewKey} 
      disabled={isLoading} 
      class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md disabled:opacity-50 transition-colors duration-150 ease-in-out">
      {#if isLoading}Generating...{:else}Generate New Key{/if}
    </button>
    <button 
      on:click={setExistingKey} 
      class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-150 ease-in-out">
      Enter Existing Key
    </button>
    {#if currentApiKey}
      <button 
        on:click={clearKey} 
        class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors duration-150 ease-in-out">
        Clear Key
      </button>
    {/if}
  </div>

  {#if message}
    <p class="mt-3 text-sm text-green-400 bg-green-900 p-2 rounded">{message}</p>
  {/if}
  {#if error}
    <p class="mt-3 text-sm text-red-400 bg-red-900 p-2 rounded">Error: {error}</p>
  {/if}
</div> 