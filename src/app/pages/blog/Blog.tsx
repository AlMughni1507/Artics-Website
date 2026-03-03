"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Pagination from "@/components/ui/Pagination";

export default function BlogPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#0C1124", minHeight: "100vh" }}>
            <BlogHeroSection />
            <BlogBody />
        </div>
    );
}

function BlogHeroSection() {
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
                    <pattern id="random-boxes-blog" x="0" y="0" width={size * cols} height={size * rows} patternUnits="userSpaceOnUse">
                        {rects}
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#random-boxes-blog)" />
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

            {/* Decorative SVGs scattered around */}
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

            {/* Content */}
            <div style={{ position: "relative", zIndex: 10, textAlign: "center", display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px", padding: "0 20px" }}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ fontFamily: "var(--font-inter)", fontSize: "24px", color: "#A0A0A0", letterSpacing: "0.5px" }}
                >
                    Blog Artics
                </motion.span>

                <h2 style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontSize: "clamp(48px, 8vw, 72px)",
                    lineHeight: 1.1,
                    color: "#EEEEEE",
                    letterSpacing: "-2px",
                    margin: 0,
                    textShadow: "0px 4px 24px rgba(0, 0, 0, 0.5)"
                }}>
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Thoughts,</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>stories,</motion.span>
                    <br />
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>and</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>digital</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>learnings</motion.span>
                </h2>
            </div>

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

function BlogBody() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 25;

    return (
        <section style={{
            padding: "80px 5% 120px 5%",
            backgroundColor: "#0C1124",
            position: "relative",
            zIndex: 4
        }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* Header Badge */}
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

                {/* Grid matching Home page layout exactly */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                    gap: "24px",
                    marginBottom: "80px"
                }}>
                    <BlogCard title="Building Data-Driven Campaigns in a Content-First Era" excerpt="Learn how data guides every decision from ideation to execution...." />
                    <BlogCard title="From Insight to Impact: Turning Social Data into Strategy" excerpt="This article explores how brands can translate data into actionable digital strategies...." />
                    <BlogCard title="Building Data-Driven Campaigns in a Content-First Era" excerpt="Learn how data guides every decision from ideation to execution...." />
                    <BlogCard title="From Insight to Impact: Turning Social Data into Strategy" excerpt="This article explores how brands can translate data into actionable digital strategies...." />
                    <BlogCard title="Building Data-Driven Campaigns in a Content-First Era" excerpt="Learn how data guides every decision from ideation to execution...." />
                    <BlogCard title="From Insight to Impact: Turning Social Data into Strategy" excerpt="This article explores how brands can translate data into actionable digital strategies...." />
                </div>

                {/* Pagination */}
                <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
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

function BlogCard({ title, excerpt }: { title: string; excerpt: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "#000414",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                padding: "24px",
                gap: "24px",
                cursor: "pointer"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(0.98)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
            {/* Image Placeholder matching Home exactly */}
            <div style={{
                width: "100%",
                aspectRatio: "16/9",
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
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

            {/* Text Content matching Home exactly */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                <h3 style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontSize: "28px",
                    lineHeight: 1.2,
                    color: "white",
                    margin: 0,
                    letterSpacing: "-0.5px"
                }}>{title}</h3>
                <p style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "16px",
                    color: "#A0A0A0",
                    lineHeight: 1.6,
                    margin: 0
                }}>{excerpt}</p>
            </div>
        </motion.div>
    );
}
