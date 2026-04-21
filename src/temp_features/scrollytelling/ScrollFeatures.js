/**
 * ScrollFeatures.js
 * Implements the horizontal scrollytelling project gallery.
 */

export function initScrollytelling(container) {
    if (!container) return;

    const projects = [
        { id: '01', title: 'Crimson Pulse', tags: ['Motion', 'UX'] },
        { id: '02', title: 'Neural Core', tags: ['AI', 'Interface'] },
        { id: '03', title: 'Void Walker', tags: ['3D', 'WebGL'] },
        { id: '04', title: 'Orbital Craft', tags: ['Branding', 'Code'] }
    ];

    const projectsHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-card__bg"></div>
            <div class="project-card__content">
                <span class="project-card__id">${project.id}</span>
                <h3 class="project-card__title">${project.title}</h3>
                <div class="project-card__tags">
                    ${project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <section class="scrollytelling">
            <div class="scrollytelling__sticky">
                <div class="scrollytelling__header">
                    <h2 class="scrollytelling__title">Featured<br>Projects</h2>
                </div>
                <div class="scrollytelling__gallery-wrap">
                    ${projectsHTML}
                </div>
            </div>
        </section>
    `;

    // Horizontal Scroll Animation
    const section = container.querySelector('.scrollytelling');
    const gallery = container.querySelector('.scrollytelling__gallery-wrap');
    const title = container.querySelector('.scrollytelling__title');

    // Kinetic Typography for Title
    const splitTitle = new SplitType(title, { types: 'chars' });
    
    gsap.from(splitTitle.chars, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
        },
        opacity: 0,
        y: 100,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Horizontal Translate
    const getScrollAmount = () => {
        let galleryWidth = gallery.offsetWidth;
        return -(galleryWidth - window.innerWidth + (window.innerWidth * 0.1)); // Padding adjustment
    };

    gsap.to(gallery, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${gallery.offsetWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
        }
    });

    console.log('Scrollytelling Section Initialized');
}
