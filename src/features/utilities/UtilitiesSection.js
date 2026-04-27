import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * UtilitiesSection.js
 * M.S. Christensen Inspired Horizontal Showcase
 */

export function initUtilities(container) {
    if (!container) return;

    const utilityProjects = [
        {
            title: 'Refining the Digital Pulse of Android Systems',
            tag: 'Selected',
            subtitle: 'DroidWhisper / Communication Utility',
            link: 'https://github.com/Aryan31v/DroidWhisper',
            image: 'src/assets/v2/code_red_black_1776693500385.png'
        },
        {
            title: 'Forging a Vision Worth Tracking',
            tag: 'Selected',
            subtitle: 'Orbital Scan / Loader Prototype',
            link: '#',
            image: 'src/assets/v2/utility_red_black_v2_1776693563359.png'
        },
        {
            title: 'Exploring the Invisible Logic of the Web',
            tag: 'Development',
            subtitle: 'Project Alpha / Stealth Mode',
            link: '#',
            image: 'src/assets/v2/web_app_red_black_v2_1776693594468.png'
        }
    ];

    const projectHTML = utilityProjects.map(p => `
        <div class="utils-section">
            <div class="utils-card">
                <div class="utils-card__content">
                    <div class="utils-card__header">
                        <h2 class="utils-card__title">${p.title}</h2>
                    </div>
                    <div class="utils-card__meta">
                        <span class="utils-card__tag">${p.tag}</span>
                        <p class="utils-card__subtitle">${p.subtitle}</p>
                    </div>
                </div>
                <div class="utils-card__image-wrap">
                    <img src="${p.image}" class="utils-card__image" alt="${p.title}">
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="utils-page">
            <div class="utils-container">
                ${projectHTML}
            </div>
            <div class="utils-progress">
                <span class="utils-card__tag">Scroll</span>
                <div class="utils-progress__line">
                    <div class="utils-progress__fill"></div>
                </div>
            </div>
        </div>
    `;

    const scrollContainer = container.querySelector('.utils-container');
    const progressFill = container.querySelector('.utils-progress__fill');

    // Horizontal Scroll Logic
    gsap.to(scrollContainer, {
        x: () => -(scrollContainer.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
            trigger: '.utils-page',
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            end: () => "+=" + scrollContainer.scrollWidth
        }
    });

    // Progress Logic
    gsap.to(progressFill, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.utils-page',
            scrub: 0.3,
            start: 'top top',
            end: () => "+=" + scrollContainer.scrollWidth
        }
    });
}
