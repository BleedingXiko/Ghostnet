import { api } from '../api.js'; // Assuming api.js is in ../
import { updateNodeStatusVisuals } from './nodeManager.js';

export async function checkAllDeadLinks(nodeObjects, // Pass the live nodeObjects map
    setPingInProgress // Function to update pingInProgress state in parent
) {
    if (!nodeObjects || Object.keys(nodeObjects).length === 0) {
        setPingInProgress(false);
        return;
    }

    try {
        const postsToCheck = Object.values(nodeObjects).map(node => node.userData.post);
        postsToCheck.forEach(post => {
            if (!post.status) {
                post.status = 'pending'; // Default to pending if no status
            }
        });

        const results = await api.checkAllLinks(); // This should ideally take postsToCheck or their IDs

        for (const result of results) {
            const postId = result.id;
            const isAlive = result.is_alive;

            if (nodeObjects[postId]) {
                const node = nodeObjects[postId];
                const postData = node.userData.post;
                postData.status = isAlive ? 'alive' : 'dead';
                postData.is_alive = isAlive; // Ensure this property is also updated

                updateNodeStatusVisuals(node, postData); // Update visuals based on new status
            }
        }
    } catch (error) {
        console.error('Error checking dead links:', error);
    } finally {
        setPingInProgress(false);
    }
}
