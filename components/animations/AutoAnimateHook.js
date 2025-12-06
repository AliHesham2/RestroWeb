'use client';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function useAutoAnimateHook() {
    const [parent] = useAutoAnimate();
    return parent;
}
