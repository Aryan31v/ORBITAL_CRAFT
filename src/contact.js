import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLoader } from './features/loader/Loader.js';
import { initScroll } from './shared/utils/scrollManager.js';
import { initExplore } from './features/navigation/ExploreNav.js';
import { initContact } from './features/contact/ContactSection.js';
import { initAtmosphere } from './features/atmosphere/Atmosphere.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    initScroll();
    initAtmosphere();
    initLoader(() => {
        initContact(document.getElementById('contact-mount'));
        initExplore(document.getElementById('explore-mount'));
    });
});
