import gsap from 'gsap';
import SplitType from 'split-type';
import { getMouseNormalizedPos } from '../../shared/utils/parallaxUtils.js';
import heroImage from '../../assets/hero-definitive-Photoroom.png';

/**
 * HeroSection.js
 * Manages the character-centric v3 redesign of the Orbital Craft hero section.
 */

export function initHero(container) {
    if (!container) return;

    const heroHTML = `
        <section class="hero">
            <div class="hero__container">
                <!-- Central Character Pillar -->
                <div class="hero__character-wrap">
                    <div class="hero__halo"></div>
                    <div class="hero__image-mask">
                        <img src="${heroImage}" alt="Definitive Red Illustration of Orbital Crafting Creator">
                    </div>
                </div>
                
                <!-- Content Overlay (For future text/legibility) -->
                <div class="hero__content">
                    <div class="hero__name-container">
                        <span class="hero__name hero__name--left">Vadhel</span>
                    </div>
                    <div class="hero__name-container">
                        <span class="hero__name hero__name--right">Aryan</span>
                    </div>
                </div>
            </div>
        </section>
    `;

    container.innerHTML = heroHTML;

    const heroEl = container.querySelector('.hero');
    const charWrap = container.querySelector('.hero__character-wrap');
    const halo = container.querySelector('.hero__halo');

    // 1. Reveal animation entrance
    setTimeout(() => {
        heroEl.classList.add('hero--reveal');

        // Kinetic Typography Reveal
        const names = container.querySelectorAll('.hero__name');
        
        names.forEach((name) => {
            const split = new SplitType(name, { types: 'chars' });
            
            gsap.from(split.chars, {
                opacity: 0,
                y: 200,
                rotateX: -45,
                stagger: 0.04,
                duration: 1.5,
                ease: 'back.out(1.7)',
                delay: 0.5
            });
        });

        // Subject Entrance
        gsap.from(charWrap, {
            opacity: 0,
            scale: 0.9,
            duration: 2,
            ease: 'expo.out',
            delay: 0.2,
            clearProps: 'all' // Removes inline styles after animation completes
        });
    }, 100);
}
