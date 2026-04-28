import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLoader } from './features/loader/Loader.js';
import { initScroll } from './shared/utils/scrollManager.js';
import { initExplore } from './features/navigation/ExploreNav.js';
import { initUtilities } from './features/utilities/UtilitiesSection.js';
import { initAtmosphere } from './features/atmosphere/Atmosphere.js';
import { initDoodles } from './features/doodles/Doodles.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // 0. Global Systems
    initScroll();
    initAtmosphere();

    // 1. Start with the Loader
    initLoader(() => {
        // 2. Init features
        const utilitiesMount = document.getElementById('utilities-mount');
        initUtilities(utilitiesMount);
        initExplore(document.getElementById('explore-mount'));
        initDoodles(utilitiesMount, 'everywhere');
        
        console.log('Utilities Page Fully Initialized');
    });
});

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
