"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import Image from "next/image";

import ServiceCard from "@/components/ServiceCard";

const servicesData = [
    {
        title: "Media Monitoring / Social Media Analyst",
        description: "ARTICS helps businesses unlock their full digital potential. Through strategic planning, creative storytelling, we turn brand objectives into measurable outcomes.",
        modelRotation: [0.5, 1.2, 0.2] as [number, number, number],
        modelScale: 1.5
    },
    {
        title: "Strategic Brand Plan",
        description: "ARTICS helps businesses unlock their full digital potential. Through strategic planning, creative storytelling, we turn brand objectives into measurable outcomes.",
        modelRotation: [-0.4, 2.5, 0.1] as [number, number, number],
        modelScale: 1.5
    },
    {
        title: "Social Media Management",
        description: "ARTICS helps businesses unlock their full digital potential. Through strategic planning, creative storytelling, we turn brand objectives into measurable outcomes.",
        modelRotation: [0.8, -1.0, 0.5] as [number, number, number],
        modelScale: 1.6
    },
    {
        title: "KOL Management",
        description: "ARTICS helps businesses unlock their full digital potential. Through strategic planning, creative storytelling, we turn brand objectives into measurable outcomes.",
        modelRotation: [-0.2, 4.0, -0.3] as [number, number, number],
        modelScale: 1.7
    },
    {
        title: "UGC Campaign",
        description: "ARTICS helps businesses unlock their full digital potential. Through strategic planning, creative storytelling, we turn brand objectives into measurable outcomes.",
        modelRotation: [0.1, 0.8, 0.8] as [number, number, number],
        modelScale: 1.4
    },
    {
        title: "KOC Campaign",
        description: "ARTICS helps businesses unlock their full digital potential. Through strategic planning, creative storytelling, we turn brand objectives into measurable outcomes.",
        modelRotation: [1.2, 3.1, -0.2] as [number, number, number],
        modelScale: 1.5
    },
    {
        title: "Creative Consultant",
        description: "ARTICS helps businesses unlock their full digital potential. Through strategic planning, creative storytelling, we turn brand objectives into measurable outcomes.",
        modelRotation: [-0.8, -2.1, 0.4] as [number, number, number],
        modelScale: 1.6
    }
];

export default function ServicesPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#0C1124", minHeight: "100vh" }}>
            <ServicesHeroSection />
            <ServicesBodySection />
        </div>
    );
}

function ServicesBodySection() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const containerRef = useRef<HTMLElement>(null);

    // Track mouse position for the floating preview
    const cursorX = useSpring(0, { stiffness: 150, damping: 20 });
    const cursorY = useSpring(0, { stiffness: 150, damping: 20 });

    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const containerRect = containerRef.current.getBoundingClientRect();
            // We want position relative to the viewport or container?
            // Fixed position for cursor might be easier if container is shared.
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleGlobalMouseMove);
        return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
    }, [cursorX, cursorY]);

    return (
        <section
            ref={containerRef}
            style={{
                width: "100%",
                backgroundColor: "#0C1124",
                padding: "120px 0",
                display: "flex",
                justifyContent: "center",
                position: "relative",
                zIndex: 10
            }}
        >
            {/* Floating Preview Component */}
            <AnimatePresence>
                {hoveredIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        style={{
                            position: "fixed",
                            left: 0,
                            top: 0,
                            x: cursorX,
                            y: cursorY,
                            width: "320px",
                            height: "240px",
                            backgroundColor: "#84CC16", // Lime green base color from image
                            borderRadius: "16px",
                            zIndex: 1000,
                            pointerEvents: "none",
                            padding: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "30px", // Offset from cursor
                            marginTop: "-120px", // Center vertically to cursor
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                            overflow: "hidden"
                        }}
                    >
                        {/* Inner Content (Image Placeholder) */}
                        <div style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            overflow: "hidden"
                        }}>
                            {/* Blur "View" Circle */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "50%",
                                    background: "rgba(255, 255, 255, 0.2)",
                                    backdropFilter: "blur(8px)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#FFFFFF",
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    zIndex: 2,
                                    border: "1px solid rgba(255, 255, 255, 0.3)",
                                    gap: "6px"
                                }}
                            >
                                View
                                <div style={{
                                    width: "16px",
                                    height: "16px",
                                    borderRadius: "50%",
                                    background: "#F97316", // Orange circle
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Dummy Image Content */}
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                opacity: 0.1,
                                background: "radial-gradient(circle at center, #000 0%, transparent 100%)"
                            }} />

                            {/* Staggered cards preview look placeholder */}
                            <div style={{ position: "absolute", display: "flex", gap: "10px", bottom: "-20px" }}>
                                {[1, 2, 3].map(i => (
                                    <div key={i} style={{ width: "60px", height: "120px", background: "#f3f4f6", borderRadius: "8px", border: "1px solid #e5e7eb" }} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                style={{
                    width: "100%",
                    maxWidth: "1380px",
                    margin: "0 auto",
                    padding: "0 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "80px",
                }}
            >
                {/* Header Row matched from Home Page */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "40px" }}>
                    {/* Left Column (Badge & Title) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{ flex: 1, minWidth: "300px" }}
                    >
                        <div style={{
                            display: "inline-flex",
                            alignItems: "center",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "999px",
                            padding: "4px 16px 4px 4px",
                            gap: "12px",
                            marginBottom: "24px"
                        }}>
                            <div style={{
                                background: "#1E65A7",
                                borderRadius: "999px",
                                padding: "6px 20px",
                                color: "#FFFFFF",
                                fontFamily: "var(--font-inter)",
                                fontSize: "14px",
                                fontWeight: 500
                            }}>
                                OUR SERVICES
                            </div>
                            <span style={{
                                color: "#C9C9C9",
                                fontFamily: "var(--font-inter)",
                                fontSize: "14px",
                                fontWeight: 400
                            }}>
                                Turning ideas into measurable growth &gt;
                            </span>
                        </div>
                        <h2 style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 700,
                            fontSize: "48px",
                            lineHeight: 1.1,
                            color: "#EEEEEE",
                            letterSpacing: "-1.5px",
                            margin: 0
                        }}>
                            Enhance your<br />business
                        </h2>
                    </motion.div>

                    {/* Right Column (Desc) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "24px" }}
                    >
                        <p style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "16px",
                            color: "#A0A0A0",
                            lineHeight: 1.6,
                            margin: 0,
                            textAlign: "right",
                            maxWidth: "480px"
                        }}>
                            ARTICS helps businesses unlock their full digital potential. Through strategic planning, creative storytelling, we turn brand objectives into measurable outcomes.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    style={{ display: "flex", flexDirection: "column", gap: "24px" }}
                >
                    {servicesData.map((service, idx) => (
                        <motion.div
                            key={`service-${idx}`}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                modelRotation={service.modelRotation}
                                modelScale={service.modelScale}
                                onHoverChange={(hovered) => setHoveredIdx(hovered ? idx : null)}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ServicesHeroSection() {
    // Reusing the deterministic random background grid from other pages
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
                    <pattern id="random-boxes-services" x="0" y="0" width={size * cols} height={size * rows} patternUnits="userSpaceOnUse">
                        {rects}
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#random-boxes-services)" />
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

            {/* Standard 4 Decorative SVGs Dispersed consistency with other pages */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                animate={{ opacity: 0.3, scale: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ position: "absolute", bottom: "-5%", left: "-5%", zIndex: 2, width: "400px", height: "400px" }}
            >
                <motion.div
                    animate={{ y: [-15, 15] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    style={{ width: "100%", height: "100%", position: "relative" }}
                >
                    <Image src="/ethic.svg" alt="Ethic" fill style={{ objectFit: "contain" }} priority />
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
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                    style={{ width: "100%", height: "100%", position: "relative" }}
                >
                    <Image src="/performance.svg" alt="Performance" fill style={{ objectFit: "contain" }} priority />
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
                    transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
                    style={{ width: "100%", height: "100%", position: "relative" }}
                >
                    <Image src="/passionate.svg" alt="Passionate" fill style={{ objectFit: "contain" }} priority />
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
                    transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.2 }}
                    style={{ width: "100%", height: "100%", position: "relative" }}
                >
                    <Image src="/skill.svg" alt="Skill" fill style={{ objectFit: "contain" }} priority />
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
                    Services Artics
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
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Strategies</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>And</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>Creativity</motion.span>
                    <br />
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>That</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>Drive</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>Real</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>Growth</motion.span>
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
