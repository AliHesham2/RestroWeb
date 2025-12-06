'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function useGsapFadeIn() {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
        }
    }, []);

    return ref;
}
