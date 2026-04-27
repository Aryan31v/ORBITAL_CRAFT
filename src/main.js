import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initScroll } from './shared/utils/scrollManager.js';
import { initPortal } from './features/entrance/EntrancePortal.js';
import { initHero } from './features/hero/HeroSection.js';
import { initTools } from './features/tools/ToolsSection.js';
import { initExplore } from './features/navigation/ExploreNav.js';
import { initAtmosphere } from './features/atmosphere/Atmosphere.js';
import { initDoodles } from './features/doodles/Doodles.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Global Systems
    initScroll();
    initAtmosphere();

    // 2. Navigation
    initExplore(document.getElementById('explore-mount'));
    
    // 3. Portal Init
    const portalMount = document.getElementById('portal-mount');
    const contentShell = document.getElementById('content-shell');
    
    const skipPortal = localStorage.getItem('portal_dismissed') === 'true';

    if (skipPortal) {
        if (portalMount) portalMount.style.display = 'none';
        gsap.set(contentShell, { opacity: 1 });
        const heroMount = document.getElementById('hero-mount');
        const toolsMount = document.getElementById('tools-mount');
        
        initHero(heroMount);
        initTools(toolsMount);
        initDoodles(heroMount, 'corner');
        initDoodles(toolsMount, 'everywhere');
        ScrollTrigger.refresh();
    } else {
        initPortal(portalMount, () => {
            localStorage.setItem('portal_dismissed', 'true');
            
            gsap.to(contentShell, {
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                onStart: () => {
                    const heroMount = document.getElementById('hero-mount');
                    const toolsMount = document.getElementById('tools-mount');
                    
                    initHero(heroMount);
                    initTools(toolsMount);
                    initDoodles(heroMount, 'corner');
                    initDoodles(toolsMount, 'everywhere');
                },
                onComplete: () => {
                    ScrollTrigger.refresh();
                }
            });
        });
    }
});
