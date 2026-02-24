"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
    value: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

// Easing function: easeOutExpo
const easeOutExpo = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export default function AnimatedCounter({
    value,
    duration = 2000,
    suffix = "",
    prefix = ""
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsVisible(true);
                    hasAnimated.current = true; // Prevents re-animating if scrolled away
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;

            // Calculate current percentage (0 to 1)
            const percentage = Math.min(progress / duration, 1);

            // Apply easing
            const easedProgress = easeOutExpo(percentage);

            // Calculate current value
            const currentCount = Math.floor(easedProgress * value);

            setCount(currentCount);

            if (progress < duration) {
                animationFrameId = window.requestAnimationFrame(animate);
            } else {
                setCount(value); // Ensure it perfectly finishes on the target number
            }
        };

        animationFrameId = window.requestAnimationFrame(animate);

        return () => window.cancelAnimationFrame(animationFrameId);
    }, [value, duration, isVisible]);

    return (
        <span ref={ref}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}
