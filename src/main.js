import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initScroll } from './shared/utils/scrollManager.js';
import { initPortal } from './features/entrance/EntrancePortal.js';
import { initHero } from './features/hero/HeroSection.js';
import { initTools } from './features/tools/ToolsSection.js';
import { initExplore } from './features/navigation/ExploreNav.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Global Scroll System (Initial setup)
    initScroll();

    // 2. Navigation
    initExplore(document.getElementById('explore-mount'));
    
    // 3. Portal Init
    initPortal(document.getElementById('portal-mount'), () => {
        const contentShell = document.getElementById('content-shell');
        
        gsap.to(contentShell, {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            onStart: () => {
                initHero(document.getElementById('hero-mount'));
                initTools(document.getElementById('tools-mount'));
            },
            onComplete: () => {
                ScrollTrigger.refresh();
            }
        });
    });
});
