import gsap from 'gsap';

/**
 * ProjectReveal.js
 * Staggered Hover Reveal Logic
 */

export function initProjectReveal(container) {
    if (!container) return;

    const projectData = {
        'WEBSITES': [
            'src/assets/projects/website_clinic.png',
            'src/assets/projects/website_fitness.png'
        ],
        'UTILITIES': [
            'src/assets/v2/utility_red_black_v2_1776693563359.png',
            'src/assets/v2/code_red_black_1776693500385.png'
        ],
        'APPLICATIONS': [
            'src/assets/v2/app_red_black_v2_1776693578616.png',
            'src/assets/v2/web_app_red_black_v2_1776693594468.png'
        ],
        'WEB APPS': [
            'src/assets/v2/web_app_red_black_v2_1776693594468.png',
            'src/assets/v2/web_dev_red_black_v2_1776693543167.png'
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
    const images = container.querySelectorAll('.reveal-img');
    const glow = container.querySelector('.reveal-glow');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const category = item.getAttribute('data-category');
            const paths = projectData[category];

            // Update images
            images.forEach((img, idx) => {
                if (paths[idx]) {
                    img.src = paths[idx];
                    
                    gsap.to(img, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: 'expo.out',
                        delay: idx * 0.1,
                        overwrite: true
                    });
                    
                    img.classList.add('is-active');
                }
            });

            // Accent glow color shift
            gsap.to(glow, {
                opacity: 0.8,
                scale: 1.2,
                duration: 1
            });
        });

        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            
            if (category === 'WEBSITES') {
                window.open('https://skyline-digital-lyart.vercel.app/#portfolio', '_blank');
            } else if (category === 'UTILITIES') {
                window.location.href = '/utilities.html';
            } else {
                // Coming Soon Toast
                const toast = document.createElement('div');
                toast.className = 'reveal-toast';
                toast.innerText = `${category} - COMING SOON`;
                document.body.appendChild(toast);
                
                gsap.fromTo(toast, 
                    { y: 50, opacity: 0 }, 
                    { y: 0, opacity: 1, duration: 0.5, ease: 'back.out' }
                );
                
                gsap.to(toast, {
                    opacity: 0,
                    y: -20,
                    delay: 2,
                    duration: 0.5,
                    onComplete: () => toast.remove()
                });
            }
        });
    });

    // Mouse tracking for subtle parallax
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;

        gsap.to(images, {
            x: x,
            y: (idx) => y + (idx * 10),
            duration: 1.5,
            ease: 'power2.out'
        });
    });
}
