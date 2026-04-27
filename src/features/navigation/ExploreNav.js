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

    // Default Hidden State
    gsap.set(menu, { opacity: 0, visibility: 'hidden', pointerEvents: 'none' });
    gsap.set(links, { opacity: 0, y: 50 });
    gsap.set(trigger, { opacity: 1, display: 'flex', pointerEvents: 'all' });

    const openMenu = () => {
        menu.classList.add('is-active');
        gsap.set(menu, { pointerEvents: 'all' });
        const tl = gsap.timeline();
        tl.to(menu, {
            opacity: 1,
            visibility: 'visible',
            duration: 0.6
        })
            .fromTo(links,
                { y: 80, opacity: 0 },
                { y: 0, opacity: 0.8, stagger: 0.1, duration: 0.8, ease: 'power4.out' },
                "-=0.4"
            );
        gsap.to(trigger, { opacity: 0, duration: 0.3 });
    };

    const closeMenu = () => {
        menu.classList.remove('is-active');
        gsap.set(menu, { pointerEvents: 'none' });
        gsap.to(trigger, { opacity: 1, duration: 0.5, delay: 0.3 });
    };

    trigger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}
