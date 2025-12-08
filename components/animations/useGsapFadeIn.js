"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGsapFadeIn = (
    ref,
    options = { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out', delay: 0 }
) => {
    useEffect(() => {
        if (ref.current) {
            gsap.fromTo(
                ref.current,
                { opacity: 0, y: options.y },
                {
                    opacity: 1,
                    y: 0,
                    duration: options.duration,
                    ease: options.ease,
                    delay: options.delay,
                }
            );
        }
    }, [ref, options.y, options.duration, options.ease, options.delay]);
};
