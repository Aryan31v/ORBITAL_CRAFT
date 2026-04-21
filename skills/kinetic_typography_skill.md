# Skill: Kinetic Typography (Split-Text Staggered Reveal)

This skill documents the "Awwwards-level" text animation used for headlines and reveals. It uses `GSAP` for sequencing and `split-type` for DOM manipulation.

## Core Concepts
- **Split-Type:** Breaks a string into `char`, `word`, or `line` divs.
- **Stagger:** Applies a delay between each character animation.
- **Back Ease:** Adds a slight "bounce" to the end of the motion for a premium feel.

## Implementation Example (React)

```jsx
import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const KineticText = ({ children, delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: 'chars,lines' });

    gsap.from(split.chars, {
      opacity: 0,
      y: 100,
      rotateX: -45,
      stagger: 0.02,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      delay: delay
    });

    return () => split.revert();
  }, [children, delay]);

  return <div ref={textRef} style={{ overflow: 'hidden' }}>{children}</div>;
};
```

## Why It Looks Premium
1. **Overflow Hidden:** The characters appear to "rise" out of an invisible container.
2. **Back Easing:** The `back.out` ease makes the animation feel snappy and physical.
3. **Scroll Integration:** It only plays when the user sees it, saving GPU resources.
