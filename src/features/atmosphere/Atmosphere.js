import gsap from 'gsap';

/**
 * Atmosphere.js
 * Manages the dynamic background, red gradients, and lightning effects.
 */

export function initAtmosphere() {
    const body = document.body;
    
    // 1. Create the container
    const container = document.createElement('div');
    container.className = 'atmosphere';
    container.innerHTML = `
        <div class="atmosphere__gradient"></div>
        <div class="atmosphere__lightning-container"></div>
        <div class="atmosphere__overlay"></div>
    `;
    body.appendChild(container);

    const gradient = container.querySelector('.atmosphere__gradient');
    const lightningContainer = container.querySelector('.atmosphere__lightning-container');

    // 2. Optimized Mouse Tracking (GPU Accelerated)
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const xSetter = gsap.quickSetter(gradient, "x", "px");
    const ySetter = gsap.quickSetter(gradient, "y", "px");

    if (!isMobile) {
        window.addEventListener('mousemove', (e) => {
            // Move the gradient container so the center follows the mouse
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            
            xSetter(x);
            ySetter(y);
        });
    } else {
        // On mobile, just center the gradient statically to save CPU
        xSetter(0);
        ySetter(0);
    }

    // 3. Lightweight Lightning Generation
    function createLightning() {
        if (!lightningContainer) return;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 100 200");
        svg.style.cssText = `
            position: absolute;
            top: 0;
            left: ${Math.random() * 100}%;
            width: 250px;
            height: 500px;
            transform: translateX(-50%) skewX(${Math.random() * 20 - 10}deg);
            pointer-events: none;
            will-change: opacity;
        `;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        let d = "M 50 0";
        let currX = 50;
        let currY = 0;

        // Optimized segments (fewer for performance)
        for (let i = 0; i < 6; i++) {
            currX += Math.random() * 24 - 12;
            currY += 33;
            d += ` L ${currX} ${currY}`;
        }

        path.setAttribute("d", d);
        path.setAttribute("stroke", "#ff3333");
        path.setAttribute("stroke-width", "1.5");
        path.setAttribute("fill", "none");
        path.style.filter = "blur(0.5px)";
        path.style.opacity = "0";
        
        svg.appendChild(path);
        lightningContainer.appendChild(svg);

        // Lightweight Animation
        const tl = gsap.timeline({
            onComplete: () => svg.remove()
        });

        tl.to(path, {
            opacity: 1,
            duration: 0.05,
            repeat: 2, // Fewer flickers
            yoyo: true,
            ease: "none"
        })
        .to(path, {
            opacity: 1,
            duration: 0.1
        })
        .to(path, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    }

    // Balanced interval, drastically reduced on mobile
    function scheduleLightning() {
        const baseDelay = isMobile ? 12000 : 5000;
        const randomDelay = isMobile ? 8000 : 2000;
        const delay = Math.random() * randomDelay + baseDelay;
        
        setTimeout(() => {
            createLightning();
            scheduleLightning();
        }, delay);
    }

    scheduleLightning();
}
