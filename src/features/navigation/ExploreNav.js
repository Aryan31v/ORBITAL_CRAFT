/**
 * ExploreNav.js
 * Manages the bottom navigation and full-screen menu overlay.
 */

export function initExplore(container) {
    if (!container) return;

    const navHTML = `
        <div class="explore">
            <button class="explore__trigger">
                EXPLORE
            </button>
        </div>

        <div class="explore__menu">
            <button class="explore__close">&times;</button>
            <ul class="explore__menu-list">
                <li class="explore__menu-item">
                    <a href="#hero-mount" class="explore__menu-link">HOME</a>
                </li>
                <li class="explore__menu-item">
                    <a href="#tools-mount" class="explore__menu-link">ABOUT</a>
                </li>
                <li class="explore__menu-item">
                    <a href="#tools-mount" class="explore__menu-link">PROJECTS</a>
                </li>
                <li class="explore__menu-item">
                    <a href="#contact" class="explore__menu-link">CONTACT</a>
                </li>
            </ul>
        </div>
    `;

    container.innerHTML = navHTML;

    const trigger = container.querySelector('.explore__trigger');
    const closeBtn = container.querySelector('.explore__close');
    const menu = container.querySelector('.explore__menu');
    const links = container.querySelectorAll('.explore__menu-link');

    const openMenu = () => {
        const tl = gsap.timeline();
        
        tl.to(menu, {
            y: '0%',
            duration: 0.8,
            ease: 'expo.out'
        })
        .from(links, {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power4.out'
        }, '-=0.4');

        gsap.to(trigger, { opacity: 0, duration: 0.3 });
    };

    const closeMenu = () => {
        gsap.to(menu, {
            y: '100%',
            duration: 0.8,
            ease: 'expo.in'
        });

        gsap.to(trigger, { opacity: 1, duration: 0.3, delay: 0.5 });
    };

    trigger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Close menu on link click
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    console.log('Explore Navigation Initialized');
}
