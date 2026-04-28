import gsap from 'gsap';

/**
 * Doodles.js
 * Injects and animates minimal orbital/hand-drawn elements.
 */

const DOODLE_PATHS = [
    "M10,50 Q25,25 40,50 T70,50", // Wave
    "M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10", // Circle
    "M20,20 L80,80 M80,20 L20,80", // Cross
    "M10,10 L30,10 L30,30 L50,30 L50,50", // Steps
    "M50,50 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0 m-10,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" // Double Circle
];

export function initDoodles(container, mode = 'everywhere') {
    if (!container) return;

    const doodleWrap = document.createElement('div');
    doodleWrap.className = 'doodle-container';
    container.style.position = 'relative';
    container.appendChild(doodleWrap);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let count;
    if (mode === 'corner') {
        count = isMobile ? 2 : 4;
    } else {
        count = isMobile ? 6 : 20; // Drastically reduce on mobile
    }

    for (let i = 0; i < count; i++) {
        createDoodle(doodleWrap, mode, isMobile);
    }
}

function createDoodle(wrapper, mode, isMobile) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    
    const randomPath = DOODLE_PATHS[Math.floor(Math.random() * DOODLE_PATHS.length)];
    
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.classList.add('doodle');
    
    // Position logic
    let top, left;
    if (mode === 'corner') {
        const corners = [
            { t: '5%', l: '5%' },
            { t: '5%', l: '85%' },
            { t: '85%', l: '5%' },
            { t: '85%', l: '85%' }
        ];
        const corner = corners[Math.floor(Math.random() * corners.length)];
        top = corner.t;
        left = corner.l;
    } else {
        top = `${Math.random() * 95}%`;
        left = `${Math.random() * 95}%`;
    }

    const size = Math.random() * 60 + 40;
    svg.style.top = top;
    svg.style.left = left;
    svg.style.width = `${size}px`;
    svg.style.height = `${size}px`;

    path.setAttribute("d", randomPath);
    svg.appendChild(path);
    wrapper.appendChild(svg);

    // Continuous Animation
    gsap.to(svg, {
        x: () => (Math.random() - 0.5) * (isMobile ? 40 : 120),
        y: () => (Math.random() - 0.5) * (isMobile ? 40 : 120),
        rotation: () => (Math.random() - 0.5) * 45,
        scale: () => 0.8 + Math.random() * 0.4,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * -10 // Randomize start position in animation
    });
}
