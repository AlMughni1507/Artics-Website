"use client";

import { useRef, useState } from "react";

interface BentoCardProps {
    title: string;
    width?: string;
    flex?: number;
}

export default function BentoCard({ title, width, flex }: BentoCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={divRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            style={{
                position: "relative",
                width: width || "100%",
                height: "100%",
                flex: flex || "none",
                minHeight: "300px",
                backgroundColor: "rgba(255,255,255,0.03)",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "32px",
                transition: "border-color 0.3s ease, transform 0.3s ease",
                cursor: "pointer",
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"
            }}
        >
            {/* Spotlight Effect */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: "none",
                    transition: "opacity 0.3s ease-in-out",
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(37,99,235,0.15), transparent 40%)`,
                    zIndex: 1,
                }}
            />

            {/* Content Top */}
            <div style={{ zIndex: 2 }}>
                <h3 style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontSize: "26px",
                    lineHeight: 1.2,
                    color: "#EEEEEE",
                    letterSpacing: "-0.5px",
                    maxWidth: "80%",
                    margin: 0
                }}>
                    {title}
                </h3>
            </div>

            {/* Content Bottom (Button) */}
            <div style={{ zIndex: 2 }}>
                <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px 20px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "999px",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                    backgroundColor: isHovered ? "rgba(255,255,255,0.1)" : "transparent"
                }}>
                    Our Portofolios
                </div>
            </div>
        </div>
    );
}
