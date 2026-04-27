import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLoader } from './features/loader/Loader.js';
import { initExplore } from './features/navigation/ExploreNav.js';
import { initContact } from './features/contact/ContactSection.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    initLoader(() => {
        initContact(document.getElementById('contact-mount'));
        initExplore(document.getElementById('explore-mount'));
    });
});
