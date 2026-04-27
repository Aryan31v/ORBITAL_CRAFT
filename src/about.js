import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLoader } from './features/loader/Loader.js';
import { initExplore } from './features/navigation/ExploreNav.js';
import { initAbout } from './features/about/AboutSection.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    initLoader(() => {
        initAbout(document.getElementById('about-mount'));
        initExplore(document.getElementById('explore-mount'));
    });
});
