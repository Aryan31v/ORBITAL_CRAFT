import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Assets
import codeRed from '../../assets/v2/code_red_black_1776693500385.png';
import utilityRed from '../../assets/v2/utility_red_black_v2_1776693563359.png';
import webAppRed from '../../assets/v2/web_app_red_black_v2_1776693594468.png';

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
            image: codeRed
        }
    ];

    const projectHTML = utilityProjects.map(p => `
        <div class="utils-section">
            <a href="${p.link}" target="_blank" class="utils-card-link" style="text-decoration: none; color: inherit; display: block; width: 100%;">
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
            </a>
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
    const progressBlock = container.querySelector('.utils-progress');

    // Horizontal Scroll Logic
    setTimeout(() => {
        const maxScroll = scrollContainer.scrollWidth - window.innerWidth;
        
        if (maxScroll > 0) {
            gsap.to(scrollContainer, {
                x: -maxScroll,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.utils-page',
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    end: () => "+=" + maxScroll
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
                    end: () => "+=" + maxScroll
                }
            });
        } else {
            // If only 1 item, disable horizontal scroll and progress bar
            if (progressBlock) progressBlock.style.display = 'none';
        }
    }, 100); // Small delay to ensure styles are computed
}
