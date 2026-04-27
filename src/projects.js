import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLoader } from './features/loader/Loader.js';
import { initExplore } from './features/navigation/ExploreNav.js';
import { initProjectReveal } from './features/projects/ProjectReveal.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Loader
    initLoader(() => {
        // 2. Once loader is gone, init page features
        initProjectReveal(document.getElementById('projects-mount'));
        initExplore(document.getElementById('explore-mount'));
        
        console.log('Projects Page Fully Initialized');
    });
});
