import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLoader } from './features/loader/Loader.js';
import { initExplore } from './features/navigation/ExploreNav.js';
import { initUtilities } from './features/utilities/UtilitiesSection.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Start with the Loader
    initLoader(() => {
        // Init features
        initUtilities(document.getElementById('utilities-mount'));
        initExplore(document.getElementById('explore-mount'));
        
        console.log('Utilities Page Fully Initialized');
    });
});
