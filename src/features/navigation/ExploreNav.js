import gsap from 'gsap';

/**
 * ExploreNav.js
 * High-Reliability Permanent Navigation
 * Always accessible, always manual.
 */

export function initExplore(container) {
    if (!container) return;

    const navHTML = `
        <div class="explore">
            <div class="explore__trigger">
                <span class="explore__trigger-text">EXPLORE</span>
            </div>
            
            <div class="explore__menu">
                <ul class="explore__menu-list">
                    <li class="explore__menu-item">
                        <a href="/" class="explore__menu-link">HOME</a>
                    </li>
                    <li class="explore__menu-item">
                        <a href="/about.html?load=true" class="explore__menu-link">ABOUT</a>
                    </li>
                    <li class="explore__menu-item">
                        <a href="/projects.html?load=true" class="explore__menu-link">PROJECTS</a>
                    </li>
                    <li class="explore__menu-item">
                        <a href="/contact.html?load=true" class="explore__menu-link">CONTACT</a>
                    </li>
                </ul>
                <div class="explore__close">CLOSE</div>
            </div>
        </div>
    `;

    container.innerHTML = navHTML;

    const trigger = container.querySelector('.explore__trigger');
    const closeBtn = container.querySelector('.explore__close');
    const menu = container.querySelector('.explore__menu');
    const links = container.querySelectorAll('.explore__menu-link');

    // 1. Define Animation Timeline
    const menuTL = gsap.timeline({ 
        paused: true,
        defaults: { ease: 'power3.inOut' },
        onReverseComplete: () => {
            gsap.set(menu, { visibility: 'hidden', pointerEvents: 'none' });
            menu.classList.remove('is-active');
        }
    });

    menuTL
        .to(menu, {
            opacity: 1,
            visibility: 'visible',
            duration: 0.6,
            onStart: () => {
                menu.classList.add('is-active');
                gsap.set(menu, { pointerEvents: 'all' });
            }
        })
        .fromTo(links,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 0.8, stagger: 0.1, duration: 0.8, ease: 'power4.out' },
            "-=0.4"
        );

    const openMenu = () => {
        menuTL.play();
        gsap.to(trigger, { opacity: 0, duration: 0.3 });
        window.lenis?.stop();
    };

    const closeMenu = () => {
        menuTL.reverse();
        gsap.to(trigger, { opacity: 1, duration: 0.5, delay: 0.3 });
        window.lenis?.start();
    };

    // 2. Event Listeners
    trigger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            // Close menu when a link is clicked (important for same-page anchors or slow loads)
            closeMenu();
        });
    });
}
