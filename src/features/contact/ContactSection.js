import gsap from 'gsap';

/**
 * ContactSection.js
 * High-impact contact links with floating cloud background
 */

export function initContact(container) {
    if (!container) return;

    // Hand-drawn style cloud SVG paths
    const cloudPaths = [
        "M25,60 C10,60 5,45 15,35 C10,20 30,10 45,20 C55,5 80,10 85,25 C100,25 105,45 90,55 C95,70 75,80 60,70 C50,85 25,80 25,60 Z",
        "M15,50 C5,50 0,35 10,25 C5,10 25,0 40,10 C50,-5 75,0 80,15 C95,15 100,35 85,45 C90,60 70,70 55,60 C45,75 15,70 15,50 Z"
    ];

    const cloudsHTML = Array.from({ length: 6 }).map((_, i) => {
        const path = cloudPaths[i % cloudPaths.length];
        const size = 100 + Math.random() * 150;
        const top = Math.random() * 80;
        const left = Math.random() * 80;
        return `
            <svg class="cloud" width="${size}" height="${size}" viewBox="0 0 120 120" style="top: ${top}%; left: ${left}%;">
                <path d="${path}" />
            </svg>
        `;
    }).join('');

    container.innerHTML = `
        <section class="contact" id="contact">
            <div class="contact__clouds">${cloudsHTML}</div>
            <div class="contact__container">
                <header class="contact__header">
                    <h1 class="contact__title">Let's <br> Connect.</h1>
                </header>

                <div class="contact__links">
                    <a href="https://wa.me/919227191101" target="_blank" class="contact__link-item">
                        <span class="contact__link-label">Connect</span>
                        <span class="contact__link-value">WhatsApp</span>
                    </a>
                    <a href="https://calendar.app.google/uUr6nzLxhRMkAoiK6" target="_blank" class="contact__link-item">
                        <span class="contact__link-label">Schedule</span>
                        <span class="contact__link-value">Book a Meeting</span>
                    </a>
                    <a href="https://www.instagram.com/the_learner_09/" target="_blank" class="contact__link-item">
                        <span class="contact__link-label">Social</span>
                        <span class="contact__link-value">Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/in/aryan-vadhel-271309338" target="_blank" class="contact__link-item">
                        <span class="contact__link-label">Professional</span>
                        <span class="contact__link-value">LinkedIn</span>
                    </a>
                </div>

                <div class="contact__footer">
                    <a href="mailto:vadhelaryan31@gmail.com" class="contact__email-big">vadhelaryan31@gmail.com</a>
                </div>
            </div>
        </section>
    `;

    // Reveal animation
    const tl = gsap.timeline({ delay: 0.2 });

    // Transition from black to light "Envoy" blue
    tl.to('.contact', {
        backgroundColor: '#CEDCFF',
        duration: 2,
        ease: 'power2.inOut'
    })
    .to('.contact__clouds', {
        opacity: 1,
        duration: 2
    }, 0)
    .to(['.contact__title', '.contact__link-value', '.contact__email-big'], {
        color: '#000000',
        duration: 2,
        ease: 'power2.inOut'
    }, 0)
    .to(['.contact__link-label'], {
        color: 'rgba(0, 0, 0, 0.6)',
        duration: 2,
        ease: 'power2.inOut'
    }, 0)
    .to('.contact__link-item', {
        borderColor: 'rgba(0, 0, 0, 0.1)',
        duration: 2,
        ease: 'power2.inOut'
    }, 0)
    .from('.contact__title', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=1.5')
    .from('.contact__link-item', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'all'
    }, '-=0.5')
    .from('.contact__email-big', {
        opacity: 0,
        duration: 1
    }, '-=0.5');

    // Float the clouds infinitely
    document.querySelectorAll('.cloud').forEach((cloud, i) => {
        const direction = i % 2 === 0 ? 1 : -1;
        const xDist = 200 + Math.random() * 300;
        
        gsap.to(cloud, {
            x: xDist * direction,
            y: "random(-30, 30)",
            duration: 8 + Math.random() * 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
}
