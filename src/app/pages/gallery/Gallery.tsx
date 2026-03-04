"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Pagination from "@/components/ui/Pagination";

export default function GalleryPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#0C1124", minHeight: "100vh" }}>
            <GalleryHeroSection />
            <GalleryBody />
        </div>
    );
}

function GalleryBody() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 25; // Matching the reference image
    return (
        <section style={{
            padding: "120px 0",
            backgroundColor: "#0C1124",
            position: "relative",
            zIndex: 4
        }}>
            <div style={{ maxWidth: "1380px", margin: "0 auto", padding: "0 20px" }}>
                {/* Header section matching the "OUR BLOG" design in the image */}
                <div style={{ marginBottom: "64px" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "4px 20px 4px 4px",
                            borderRadius: "100px",
                            border: "1px solid rgba(255, 255, 255, 0.4)",
                            backgroundColor: "transparent",
                            gap: "12px",
                            marginBottom: "28px",
                            cursor: "pointer",
                        }}
                    >
                        <span style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#FFFFFF",
                            backgroundColor: "#1D61AB",
                            padding: "8px 18px",
                            borderRadius: "100px",
                            letterSpacing: "0.02em"
                        }}>OUR BLOG</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "14px", color: "#BBBBBB", fontWeight: 400 }}>Stories behind our thinking and work</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#BBBBBB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontSize: "clamp(32px, 5vw, 56px)",
                            fontWeight: 600,
                            letterSpacing: "-0.03em",
                            margin: 0,
                            color: "#F8FAFC",
                            lineHeight: 1.1
                        }}
                    >
                        Thoughts, stories, and digital learnings
                    </motion.h2>
                </div>

                {/* Grid section with staggered masonry-like layout */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridAutoRows: "minmax(280px, auto)",
                    gap: "24px",
                    marginBottom: "64px"
                }}>
                    {/* Pattern Unit 1 */}
                    <GalleryFrame /> {/* 1x1 */}
                    <GalleryFrame /> {/* 1x1 */}
                    <GalleryFrame style={{ gridRow: "span 2" }} /> {/* Tall 1x2 */}
                    <GalleryFrame style={{ gridColumn: "span 2" }} /> {/* Wide 2x1 */}

                    {/* Pattern Unit 2 (Staggered) */}
                    <GalleryFrame style={{ gridRow: "span 2" }} /> {/* Tall 1x2 */}
                    <GalleryFrame /> {/* 1x1 */}
                    <GalleryFrame /> {/* 1x1 */}
                    <GalleryFrame style={{ gridColumn: "span 2" }} /> {/* Wide 2x1 */}

                    {/* Pattern Unit 3 (Returning to initial pattern) */}
                    <GalleryFrame /> {/* 1x1 */}
                    <GalleryFrame /> {/* 1x1 */}
                    <GalleryFrame style={{ gridRow: "span 2" }} /> {/* Tall 1x2 */}
                    <GalleryFrame style={{ gridColumn: "span 2" }} /> {/* Wide 2x1 */}
                </div>

                {/* Pagination centered at the bottom */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </section>
    );
}

function GalleryFrame({ style }: { style?: React.CSSProperties }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            style={{
                backgroundColor: "#1E293B",
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                aspectRatio: style?.gridRow ? "unset" : style?.gridColumn ? "2 / 1.1" : "1 / 1.1",
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.03)",
                ...style
            }}
        >
            {/* Placeholder overlay to match the "photo look" even without images */}
            <div style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div style={{ opacity: 0.1 }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                </div>
            </div>

            {/* Subtle inner shadow for depth */}
            <div style={{
                position: "absolute",
                inset: 0,
                boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.2)",
                pointerEvents: "none"
            }} />
        </motion.div>
    );
}

function GalleryHeroSection() {
    const [trail, setTrail] = useState<{ x: number; y: number; rotation: number; id: number }[]>([]);
    const lastPos = useRef({ x: 0, y: 0 });
    const idCounter = useRef(0);
    const containerRef = useRef<HTMLElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        // Clear any existing stillness timeout
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        const threshold = 60; // Reduced threshold for smaller cards to maintain density
        const distance = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);

        if (distance > threshold) {
            lastPos.current = { x: e.clientX, y: e.clientY };

            const newImage = {
                x: e.clientX,
                y: e.clientY,
                rotation: Math.random() * 24 - 12, // Slightly more rotation for larger cards
                id: idCounter.current++
            };

            setTrail(prev => [...prev.slice(-7), newImage]);
        }

        // Start a fallback timeout to clear cards if user stops moving
        timeoutRef.current = setTimeout(() => {
            startClearingTrail();
        }, 800); // 0.8 seconds of stillness
    };

    const startClearingTrail = () => {
        const interval = setInterval(() => {
            setTrail(prev => {
                if (prev.length === 0) {
                    clearInterval(interval);
                    return prev;
                }
                return prev.slice(1); // Remove the oldest card
            });
        }, 100); // Remove one card every 100ms
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        startClearingTrail();
    };

    // Clean up timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

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
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
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

            {/* Photo Trail Cards */}
            <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 5 }}>
                <AnimatePresence>
                    {trail.map((img) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.8, x: img.x - 60, y: img.y - 75, rotate: img.rotation - 10 }}
                            animate={{ opacity: 1, scale: 1, x: img.x - 60, y: img.y - 75, rotate: img.rotation }}
                            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                            style={{
                                position: "absolute",
                                width: "120px",
                                height: "150px",
                                backgroundColor: "#FFFFFF",
                                padding: "6px",
                                borderRadius: "2px",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px"
                            }}
                        >
                            <div style={{
                                flex: 1,
                                backgroundColor: "#EEEEEE",
                                borderRadius: "2px",
                                overflow: "hidden",
                                position: "relative"
                            }}>
                                {/* Empty photo placeholder */}
                                <div style={{
                                    position: "absolute",
                                    inset: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: "#FCFCFC"
                                }}>
                                    <div style={{
                                        flex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)"
                                    }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                            <circle cx="9" cy="9" r="2" />
                                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                        </svg>
                                    </div>
                                    <div style={{ height: "20px", padding: "0 8px", display: "flex", alignItems: "center" }}>
                                        <div style={{ height: "4px", width: "60%", backgroundColor: "#F1F5F9", borderRadius: "99px" }} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

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

            {/* Content */}
            <div style={{ position: "relative", zIndex: 10, textAlign: "center", display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px", padding: "0 20px" }}>
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
                    fontSize: "clamp(48px, 8vw, 72px)",
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
