"use client";

import { useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

interface StatCardProps {
    value: number;
    suffix?: string;
    duration?: number;
    title: string;
    description: React.ReactNode;
}

export default function StatCard({ value, suffix = "", duration = 2000, title, description }: StatCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "32px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                transition: "transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)",
                cursor: "default"
            }}
        >
            <h3 style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: 1,
                color: "#EEEEEE",
                margin: 0,
                letterSpacing: "-1px"
            }}>
                <AnimatedCounter value={value} suffix={suffix} duration={duration} />
            </h3>
            <div style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "16px",
                color: "#EEEEEE",
            }}>
                {title}
            </div>
            <p style={{
                fontFamily: "var(--font-inter)",
                fontSize: "14px",
                color: "#A0A0A0",
                lineHeight: 1.5,
                margin: "8px 0 0 0"
            }}>
                {description}
            </p>
        </div>
    );
}
