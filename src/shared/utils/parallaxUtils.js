/**
 * parallaxUtils.js
 * Utilities for calculating normalized mouse/scroll coordinates for motion.
 */

/**
 * Returns normalized mouse coordinates (-1 to 1) relative to window center.
 * @param {MouseEvent} e - The mouse event object.
 * @returns {Object} { x, y } normalized coordinates.
 */
export const getMouseNormalizedPos = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 2 - 1;
    const y = (e.clientY / innerHeight) * 2 - 1;
    return { x, y };
};
