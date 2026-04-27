import gsap from 'gsap';

/**
 * AboutSection.js
 * Personal narrative for Aryan Vadhel
 */

export function initAbout(container) {
    if (!container) return;

    container.innerHTML = `
        <section class="about">
            <div class="about__container">
                <header class="about__header">
                    <h1 class="about__title">Digital Craft <br> & Pulse.</h1>
                </header>

                <div class="about__grid">
                    <div class="about__main-text">
                        <p>Most days, you’ll find me studying the ancient science of healing at B.G. Garaiya Ayurveda College. But when the textbooks close, my focus shifts to a different kind of precision: <strong>Digital Craft.</strong></p>
                        <br>
                        <p>I’m Aryan. While BAMS is my academic path, the web is where my curiosity truly lives. It all started when I was 13—I needed graphics for a project, so I opened Photoshop for the first time. What began as a necessity quickly became a passion that hasn't let go since.</p>
                        <br>
                        <p>In 2020, I started creating for the esports scene, and since then, my practice has transformed into a personal brand focused on helping agencies and ambitious brands make their mark.</p>
                    </div>

                    <div class="about__side-info">
                        <div class="about__info-block">
                            <h3>Current Focus</h3>
                            <p>Balancing medical studies with freelance web design and development. Currently supporting agencies looking for a strong digital presence.</p>
                        </div>
                        <div class="about__info-block">
                            <h3>Capabilities</h3>
                            <p>Art Direction / Branding / Digital Design / Full-stack Development</p>
                        </div>
                        <div class="about__info-block">
                            <h3>The Philosophy</h3>
                            <p>Whether it’s the rhythm of a heartbeat or the flow of a script, I believe in balancing beauty with function. Every creation is shaped to fit you—and your brand—perfectly.</p>
                        </div>
                    </div>
                </div>

                <div class="about__quote">
                    <p class="about__quote-text">"I love building things that move people, whether it's through code or craft."</p>
                </div>
            </div>
        </section>
    `;

    // Simple reveal animation
    gsap.from('.about__title, .about__main-text p, .about__info-block', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
    });
}
