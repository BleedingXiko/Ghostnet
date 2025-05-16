export function setupTooltip(containerEl) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip'; // Ensure this class is styled in GraphView.svelte or global CSS
  tooltip.style.display = 'none';
  tooltip.style.opacity = '1'; // Start fully opaque, rely on display for visibility
  containerEl.appendChild(tooltip);
  return tooltip;
}

export function updateTooltipVisuals(event, post, tooltipEl, currentTooltipHideTimeoutRef) {
  if (!tooltipEl || !event || !post) return;

  // Clear any existing hide timeout before showing
  if (currentTooltipHideTimeoutRef.current) {
    clearTimeout(currentTooltipHideTimeoutRef.current);
    currentTooltipHideTimeoutRef.current = null;
  }

  tooltipEl.style.display = 'block'; // Make it visible first
  
  // Use rAF to ensure the display change is processed before starting opacity transition
  requestAnimationFrame(() => { 
    tooltipEl.style.opacity = '1';
  });

  const statusIcon = post.status === 'dead' ? '💀' : (post.status === 'pending' ? '⏳' : '✅');
  tooltipEl.innerHTML = `
    <div class="text-sm font-bold">${post.title}</div>
    <div class="text-xs">${post.provider} | ⬆️ ${post.upvotes} | ${statusIcon}</div>
    ${post.tags && post.tags.length ? `<div class="text-xs">${post.tags.map(t => t.toLowerCase()).join(', ')}</div>` : ''}
    <div class="text-xs opacity-75 mt-1">Click for details</div>
  `;

  // Position calculation
  const yOffset = -tooltipEl.offsetHeight - 10;
  const xOffset = -(tooltipEl.offsetWidth / 2) + 10;
  tooltipEl.style.left = `${event.clientX + xOffset}px`;
  tooltipEl.style.top = `${event.clientY + yOffset}px`;

  // Boundary checks
  const rect = tooltipEl.getBoundingClientRect();
  if (rect.left < 10) tooltipEl.style.left = '10px';
  else if (rect.right > window.innerWidth - 10) tooltipEl.style.left = `${window.innerWidth - tooltipEl.offsetWidth - 10}px`;
  if (rect.top < 10) tooltipEl.style.top = `${event.clientY + 20}px`; // Flip below cursor if too high
}

export function hideTooltip(tooltipEl, currentTooltipHideTimeoutRef) {
  if (!tooltipEl) return;

  // Clear any *previous* hide timeout that might still be pending
  if (currentTooltipHideTimeoutRef.current) {
    clearTimeout(currentTooltipHideTimeoutRef.current);
    currentTooltipHideTimeoutRef.current = null; 
  }

  tooltipEl.style.opacity = '0'; // Start fading out

  // Set a new timeout to hide it after the transition
  currentTooltipHideTimeoutRef.current = setTimeout(() => {
    // Only hide if opacity is still 0 (i.e., not re-shown in the meantime)
    if (tooltipEl && tooltipEl.style.opacity === '0') { 
      tooltipEl.style.display = 'none';
    }
    currentTooltipHideTimeoutRef.current = null; // Clear the ref after execution
  }, 150); // Match CSS transition duration (0.15s)
}
