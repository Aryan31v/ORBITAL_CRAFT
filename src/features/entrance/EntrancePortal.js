/**
 * EntrancePortal.js
 * Manages the immersive portal entrance reveal.
 */

export function initPortal(container, onReveal) {
    if (!container) return;

    container.innerHTML = `
        <div class="portal">
            <div class="portal__content">
                <button class="portal__btn">
                    WELCOME
                </button>
                <span class="portal__text">Initiating Orbital Craft</span>
            </div>
        </div>
    `;

    const portal = container.querySelector('.portal');
    const btn = container.querySelector('.portal__btn');

    btn.addEventListener('click', () => {
        // Magical Portal Expansion
        gsap.to(portal, {
            clipPath: 'circle(0% at 50% 50%)', // Expands by shrinking the mask to center
            duration: 1.5,
            ease: 'expo.inOut',
            onComplete: () => {
                portal.style.display = 'none';
                if (onReveal) onReveal();
            }
        });

        // Sub-animation for the button content
        gsap.to(btn, {
            opacity: 0,
            scale: 0.5,
            duration: 0.5,
            ease: 'power3.in'
        });
        
        gsap.to('.portal__text', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'power3.in'
        });
    });
}
