import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLoader } from './features/loader/Loader.js';
import { initScroll } from './shared/utils/scrollManager.js';
import { initExplore } from './features/navigation/ExploreNav.js';
import { initAbout } from './features/about/AboutSection.js';
import { initAtmosphere } from './features/atmosphere/Atmosphere.js';
import { initDoodles } from './features/doodles/Doodles.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    initScroll();
    initAtmosphere();
    initLoader(() => {
        const aboutMount = document.getElementById('about-mount');
        initAbout(aboutMount);
        initExplore(document.getElementById('explore-mount'));
        initDoodles(aboutMount, 'everywhere');
    });
});
