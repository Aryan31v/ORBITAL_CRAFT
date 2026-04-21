/**
 * ToolsSection.js
 * Implements the technical stack grid.
 */

export function initTools(container) {
    if (!container) return;

    const tools = [
        { name: 'GSAP', desc: 'Industry standard motion engine for complex sequences.', icon: '⚡' },
        { name: 'Lenis', desc: 'Premium smooth scrolling for modern web experiences.', icon: '🌊' },
        { name: 'Three.js', desc: '3D spatial depth and WebGL experimentations.', icon: '🧊' },
        { name: 'SplitType', desc: 'Micro-surgical typography control for kinetic text.', icon: '✍️' },
        { name: 'Figma', desc: 'Visual blueprints and design systems architecture.', icon: '🎨' },
        { name: 'Vite', desc: 'Lightning fast development environment and builds.', icon: '🚀' }
    ];

    const toolsHTML = tools.map(tool => `
        <div class="tool-card">
            <span class="tool-card__icon">${tool.icon}</span>
            <h3 class="tool-card__name">${tool.name}</h3>
            <p class="tool-card__desc">${tool.desc}</p>
        </div>
    `).join('');

    container.innerHTML = `
        <section class="tools">
            <div class="container tools__container">
                <header class="tools__header">
                    <span class="tools__subtitle">The technical edge</span>
                    <h2 class="tools__title">Curated Stack for<br>Digital Craftsmanship</h2>
                </header>
                <div class="tools__grid">
                    ${toolsHTML}
                </div>
            </div>
        </section>
    `;

    // Reveal Animation
    const section = container.querySelector('.tools');
    const cards = container.querySelectorAll('.tool-card');
    const title = container.querySelector('.tools__title');
    const grid = container.querySelector('.tools__grid');

    // Title reveal
    gsap.from(title, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        immediateRender: false
    });

    // Cards staggered reveal
    gsap.from(cards, {
        scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
        },
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 1,
        ease: 'back.out(1.7)',
        immediateRender: false
    });

    console.log('Tools Section Initialized');
}
