import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLoader } from './features/loader/Loader.js';
import { initScroll } from './shared/utils/scrollManager.js';
import { initExplore } from './features/navigation/ExploreNav.js';
import { initProjectReveal } from './features/projects/ProjectReveal.js';
import { initAtmosphere } from './features/atmosphere/Atmosphere.js';
import { initDoodles } from './features/doodles/Doodles.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Global Systems
    initScroll();
    initAtmosphere();

    // 2. Initialize Loader
    initLoader(() => {
        // 3. Once loader is gone, init page features
        const projectsMount = document.getElementById('projects-mount');
        initProjectReveal(projectsMount);
        initExplore(document.getElementById('explore-mount'));
        initDoodles(projectsMount, 'everywhere');
        
        console.log('Projects Page Fully Initialized');
    });
});
