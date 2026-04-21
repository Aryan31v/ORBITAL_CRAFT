/**
 * ProjectReveal.js
 * Prototype v2: Staggered Hover Reveal Logic
 */

export function initProjectReveal(container) {
    if (!container) return;

    const projectData = {
        'WEBSITES': [
            '../../assets/v2/web_dev_red_black_v2_1776693543167.png',
            '../../assets/v2/code_red_black_1776693500385.png'
        ],
        'UTILITIES': [
            '../../assets/v2/utility_red_black_v2_1776693563359.png',
            '../../assets/v2/code_red_black_1776693500385.png'
        ],
        'APPLICATIONS': [
            '../../assets/v2/app_red_black_v2_1776693578616.png',
            '../../assets/v2/web_app_red_black_v2_1776693594468.png'
        ],
        'WEB APPS': [
            '../../assets/v2/web_app_red_black_v2_1776693594468.png',
            '../../assets/v2/web_dev_red_black_v2_1776693543167.png'
        ]
    };

    const categories = Object.keys(projectData);

    const listHTML = categories.map(cat => `
        <li class="reveal-item" data-category="${cat}">
            <span class="reveal-item__text">${cat}</span>
        </li>
    `).join('');

    container.innerHTML = `
        <section class="reveal-prototype">
            <div class="reveal-glow"></div>
            
            <ul class="reveal-list">
                ${listHTML}
            </ul>

            <div class="reveal-images-container">
                <img src="" class="reveal-img reveal-img--pos-1" alt="Project Reveal 1">
                <img src="" class="reveal-img reveal-img--pos-3" alt="Project Reveal 2">
            </div>
        </section>
    `;

    const items = container.querySelectorAll('.reveal-item');
    const imgs = container.querySelectorAll('.reveal-img');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const cat = item.getAttribute('data-category');
            const catImages = projectData[cat];

            // Update image sources
            imgs.forEach((img, idx) => {
                if (catImages[idx]) {
                    img.src = catImages[idx];
                }
            });

            // Animate In
            gsap.killTweensOf(imgs);
            gsap.to(imgs, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out"
            });
        });

        item.addEventListener('mouseleave', () => {
            // Animate Out
            gsap.to(imgs, {
                opacity: 0,
                scale: 0.8,
                y: 20,
                duration: 0.4,
                ease: "power3.in"
            });
        });
    });

    console.log('Project Reveal Prototype Initialized');
}
