/**
 * scrollManager.js
 * Synchronizes Lenis smooth scroll with GSAP ScrollTrigger.
 */

export function initScroll() {
    // Initialize Lenis
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    // Synchronize Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Ensure ScrollTrigger works with the smooth scroll
    ScrollTrigger.defaults({
        markers: false // Set to true for debugging
    });

    // Export lenis instance globally for potential use in other features
    window.lenis = lenis;

    console.log('Scroll System Initialized: Lenis + ScrollTrigger');
}
