import gsap from 'gsap';

/**
 * Loader.js
 * High-fidelity "Orbital Scan" Loader
 * With reactive eye tracking and organic blinking
 */

export function initLoader(onComplete) {
    const urlParams = new URLSearchParams(window.location.search);
    const shouldLoad = urlParams.get('load') === 'true';

    if (!shouldLoad) {
        if (onComplete) onComplete();
        return;
    }

    const loaderHTML = `
        <div class="loader" id="global-loader">
            <div class="loader__content">
                <div class="loader__eyes">
                    <div class="eye eye--left">
                        <div class="eye__lid"></div>
                        <div class="eye__pupil"></div>
                    </div>
                    <div class="eye eye--right">
                        <div class="eye__lid"></div>
                        <div class="eye__pupil"></div>
                    </div>
                </div>
                <div class="loader__progress">
                    <span class="loader__counter">0</span>
                    <span class="loader__label">ORBITAL SCAN</span>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', loaderHTML);

    const loader = document.getElementById('global-loader');
    const counter = loader.querySelector('.loader__counter');
    const pupils = loader.querySelectorAll('.eye__pupil');
    const lids = loader.querySelectorAll('.eye__lid');

    // Snappy 0-100 Counter
    const progress = { value: 0 };
    gsap.to(progress, {
        value: 100,
        duration: 1.2,
        ease: "power2.inOut",
        onUpdate: () => {
            counter.textContent = Math.floor(progress.value);
        },
        onComplete: () => {
            exitLoader();
        }
    });

    // REACTIVE EYE TRACKING
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        pupils.forEach(pupil => {
            gsap.to(pupil, {
                x: xPos,
                y: yPos,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Organic Blinking Logic
    function blink() {
        if (!loader) return;
        gsap.to(lids, {
            scaleY: 1,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
            onComplete: () => {
                setTimeout(blink, Math.random() * 3000 + 1000);
            }
        });
    }
    setTimeout(blink, 500);

    function exitLoader() {
        window.removeEventListener('mousemove', handleMouseMove);
        const tl = gsap.timeline({
            onComplete: () => {
                loader.remove();
                if (onComplete) onComplete();
            }
        });

        tl.to(loader, {
            clipPath: 'inset(0 0 100% 0)',
            duration: 0.8,
            ease: 'expo.inOut'
        });
    }
}
