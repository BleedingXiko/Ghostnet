<script>
  import { apiKey } from '../stores.js';
  import { api } from '../api.js';
  import { upsertPostInStore } from '../stores.js';

  let formData = {
    tunnel_url: '',
    title: '',
    description: '',
    tags: '',
    provider: 'Pinggy' // Default provider
  };

  let errors = {};
  let submitting = false;
  let successMessage = '';

  // Subscribe to API key store
  let currentApiKey;
  apiKey.subscribe(value => {
    currentApiKey = value;
  });

  function validateForm() {
    errors = {};
    
    if (!formData.tunnel_url) {
      errors.tunnel_url = 'Tunnel URL is required';
    } else if (!isValidURL(formData.tunnel_url)) {
      errors.tunnel_url = 'Please enter a valid URL';
    }

    if (!formData.title) {
      errors.title = 'Title is required';
    } else if (formData.title.length > 100) {
      errors.title = 'Title must be less than 100 characters';
    }

    if (formData.description && formData.description.length > 500) {
      errors.description = 'Description must be less than 500 characters';
    }

    return Object.keys(errors).length === 0;
  }

  function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  async function handleSubmit() {
    if (!currentApiKey) {
      errors.api = 'API key is required to publish. Please generate or enter one.';
      return;
    }

    if (!validateForm()) {
      return;
    }

    submitting = true;
    successMessage = '';
    errors = {};

    try {
      // Process tags: split by comma and trim
      const processedData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      };

      const result = await api.publishPost(processedData, currentApiKey);
      
      // Update the local store to reflect the new post
      upsertPostInStore(result);
      
      // Reset form
      formData = {
        tunnel_url: '',
        title: '',
        description: '',
        tags: '',
        provider: 'Pinggy'
      };
      
      successMessage = 'Ghost tunnel published successfully!';
    } catch (error) {
      console.error('Error publishing post:', error);
      errors.api = error.message || 'Failed to publish tunnel. Please try again.';
    } finally {
      submitting = false;
    }
  }
</script>

<div class="p-4 my-6 bg-gray-800 rounded-lg shadow-md">
  <h3 class="text-xl font-semibold mb-3 text-purple-300">Publish Ghost Tunnel</h3>
  
  {#if !currentApiKey}
    <div class="bg-amber-900 text-amber-100 p-3 rounded mb-4">
      <p>You need an API key to publish. Please generate one in the API Key Management section.</p>
    </div>
  {/if}

  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <div>
      <label for="tunnel_url" class="block text-sm font-medium text-gray-300 mb-1">Tunnel URL*</label>
      <input
        type="text"
        id="tunnel_url"
        bind:value={formData.tunnel_url}
        class="w-full px-3 py-2 bg-gray-700 border {errors.tunnel_url ? 'border-red-500' : 'border-gray-600'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="https://your-ghosthub.pinggy.link"
      />
      {#if errors.tunnel_url}
        <p class="mt-1 text-sm text-red-400">{errors.tunnel_url}</p>
      {/if}
    </div>

    <div>
      <label for="title" class="block text-sm font-medium text-gray-300 mb-1">Title*</label>
      <input
        type="text"
        id="title"
        bind:value={formData.title}
        class="w-full px-3 py-2 bg-gray-700 border {errors.title ? 'border-red-500' : 'border-gray-600'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="My Awesome GhostHub Collection"
      />
      {#if errors.title}
        <p class="mt-1 text-sm text-red-400">{errors.title}</p>
      {/if}
    </div>

    <div>
      <label for="description" class="block text-sm font-medium text-gray-300 mb-1">Description</label>
      <textarea
        id="description"
        bind:value={formData.description}
        class="w-full px-3 py-2 bg-gray-700 border {errors.description ? 'border-red-500' : 'border-gray-600'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Describe your GhostHub tunnel (optional)"
        rows="3"
      ></textarea>
      {#if errors.description}
        <p class="mt-1 text-sm text-red-400">{errors.description}</p>
      {/if}
    </div>

    <div>
      <label for="tags" class="block text-sm font-medium text-gray-300 mb-1">Tags (comma-separated)</label>
      <input
        type="text"
        id="tags"
        bind:value={formData.tags}
        class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="movies, anime, photos, family"
      />
      <p class="mt-1 text-xs text-gray-500">Tags help organize tunnels. Separate with commas.</p>
    </div>

    <div>
      <label for="provider" class="block text-sm font-medium text-gray-300 mb-1">Tunnel Provider*</label>
      <select
        id="provider"
        bind:value={formData.provider}
        class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="Pinggy">Pinggy</option>
        <option value="Cloudflare">Cloudflare</option>
      </select>
    </div>

    {#if errors.api}
      <p class="mt-1 text-sm text-red-400 bg-red-900 p-2 rounded">{errors.api}</p>
    {/if}

    {#if successMessage}
      <p class="mt-1 text-sm text-green-400 bg-green-900 p-2 rounded">{successMessage}</p>
    {/if}

    <button
      type="submit"
      disabled={submitting || !currentApiKey}
      class="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md disabled:opacity-50 transition-colors duration-150 ease-in-out"
    >
      {#if submitting}Publishing...{:else}Publish Tunnel{/if}
    </button>
  </form>
</div> 