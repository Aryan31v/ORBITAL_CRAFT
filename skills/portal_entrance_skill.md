# Skill: Expansive Portal Reveal & Bottom Explore Menu

This skill documents the high-fidelity entrance transition and the bottom-fixed "Explore" navigation pattern inspired by `rabenrifaie.com`.

## 1. Expansive Portal Reveal
The goal is to create a "portal" effect where the hero section is revealed through an expanding mask.

### Core Concepts
- **Clip-Path Animation**: Using `gsap` to animate the `clip-path` property from a small circle to a full-screen coverage.
- **Z-Index Layering**: The portal sits on top. Once it expands, it is removed or set to `display: none` to allow interaction with the hero.
- **Button Trigger**: A central "Welcome" button acts as the focal point and trigger.

### Implementation (Vanills JS + GSAP)
```javascript
const portal = document.querySelector('.portal-overlay');
const welcomeBtn = document.querySelector('.welcome-btn');

welcomeBtn.addEventListener('click', () => {
  gsap.to(portal, {
    clipPath: 'circle(150% at 50% 50%)',
    duration: 1.5,
    ease: 'power4.inOut',
    onComplete: () => {
      portal.style.display = 'none';
      initHero(); // Start hero animations
    }
  });
});
```

---

## 2. Bottom Explore Menu
A navigation system that lives at the bottom of the screen and reveals a menu on click.

### Core Concepts
- **Fixed Position**: The "Explore" button is pinned to the bottom center.
- **Expanding UI**: When clicked, a menu container rises from the bottom or expands from the button.
- **Staggered Links**: Navigation items reveal sequentially using GSAP staggers.

### Implementation (Vanilla JS + GSAP)
```javascript
const exploreTrigger = document.querySelector('.explore-trigger');
const menuOverlay = document.querySelector('.menu-overlay');

exploreTrigger.addEventListener('click', () => {
  gsap.to(menuOverlay, {
    y: '0%',
    duration: 0.8,
    ease: 'expo.out'
  });
  
  gsap.from('.menu-link', {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power3.out'
  });
});
```

## Why It Looks Premium
1. **Fluid Clip-Path**: Changing the shape of the viewport itself creates a modern, immersive feel.
2. **Exponential Easing**: The portal expansion starts slow and ends fast (or vice-versa), feeling "magical".
3. **Motion Separation**: The menu items slide in asynchronously from the overlay itself.
