"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#0C1124", minHeight: "100vh" }}>
            <GalleryHeroSection />
            {/* Future gallery content will go here */}
        </div>
    );
}

function GalleryHeroSection() {
    // Reusing the deterministic random background grid from Home/About
    const gridPattern = useMemo(() => {
        const size = 50;
        const cols = 40;
        const rows = 30;
        const colors = ["#0B1641", "#00092C", "#000D40"];

        const rects = [];
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const seed = i * 137 + j * 149;
                const pseudoRandom = Math.abs(Math.sin(seed) * 10000) % 1;

                if (pseudoRandom < 0.25) {
                    const colorIndex = Math.floor((pseudoRandom / 0.25) * 3);
                    rects.push(
                        <rect
                            key={`${i}-${j}`}
                            x={i * size}
                            y={j * size}
                            width={size}
                            height={size}
                            fill={colors[colorIndex]}
                            opacity={Math.round((0.3 + (pseudoRandom * 1.5)) * 1000) / 1000}
                        />
                    );
                }
            }
        }

        return (
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1, opacity: 0.5 }}>
                <defs>
                    <pattern id="random-boxes-gallery" x="0" y="0" width={size * cols} height={size * rows} patternUnits="userSpaceOnUse">
                        {rects}
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#random-boxes-gallery)" />
            </svg>
        );
    }, []);

    return (
        <section
            style={{
                position: "relative",
                height: "80vh",
                minHeight: "600px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                backgroundColor: "var(--bg-primary)"
            }}
        >
            {gridPattern}
            <div className="spotlight-overlay" />
            <div className="spotlight-ray" />

            {/* Decorative SVGs scattered around the hero */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                animate={{ opacity: 0.3, scale: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ position: "absolute", bottom: "-5%", left: "-5%", zIndex: 2, width: "400px", height: "400px" }}
            >
                <motion.div
                    animate={{ y: [-15, 15] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    style={{ width: "100%", height: "100%", position: "relative" }}
                >
                    <Image src="/ethic.svg" alt="Ethic Decoration" fill style={{ objectFit: "contain" }} priority />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 0.3, scale: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                style={{ position: "absolute", bottom: "-10%", right: "-5%", zIndex: 2, width: "500px", height: "500px" }}
            >
                <motion.div
                    animate={{ y: [-20, 20] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    style={{ width: "100%", height: "100%", position: "relative" }}
                >
                    <Image src="/performance.svg" alt="Performance Decoration" fill style={{ objectFit: "contain" }} priority />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 0.2, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                style={{ position: "absolute", top: "10%", left: "15%", zIndex: 2, width: "150px", height: "150px" }}
            >
                <motion.div
                    animate={{ y: [-15, 15] }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 1
                    }}
                    style={{ width: "100%", height: "100%", position: "relative" }}
                >
                    <Image src="/passionate.svg" alt="Passionate Decoration" fill style={{ objectFit: "contain" }} priority />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 0.2, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                style={{ position: "absolute", top: "5%", right: "10%", zIndex: 2, width: "200px", height: "200px" }}
            >
                <motion.div
                    animate={{ y: [-12, 12] }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.2
                    }}
                    style={{ width: "100%", height: "100%", position: "relative" }}
                >
                    <Image src="/skill.svg" alt="Skill Decoration" fill style={{ objectFit: "contain" }} priority />
                </motion.div>
            </motion.div>

            {/* Header Content */}
            <div style={{ position: "relative", zIndex: 10, textAlign: "center", display: "flex", flexDirection: "column", gap: "24px" }}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "24px",
                        color: "#A0A0A0",
                        letterSpacing: "0.5px"
                    }}
                >
                    Gallery Artics
                </motion.span>

                <h1 style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontSize: "72px",
                    lineHeight: 1.1,
                    color: "#EEEEEE",
                    letterSpacing: "-2px",
                    margin: 0,
                    textShadow: "0px 4px 24px rgba(0, 0, 0, 0.5)"
                }}>
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Moment</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>People</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>, And</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>Stories</motion.span>
                    <br />
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>Behind</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>Artics</motion.span>
                </h1>
            </div>

            {/* Bottom Fade Mask */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "200px",
                    background: "linear-gradient(180deg, rgba(12, 17, 36, 0) 0%, rgba(12, 17, 36, 1) 100%)",
                    pointerEvents: "none",
                    zIndex: 3,
                }}
            />
        </section>
    );
}
