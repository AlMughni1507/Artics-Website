"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ceoImage from "@/assets/ceo artics (1).jpeg";

export default function AboutPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#0C1124", minHeight: "100vh" }}>
            <AboutHeroSection />
            <AboutContentSection />
            <AboutPartnersSection />
            <CoreValuesSection />
            <ClientMarqueeSection />
            <AboutContactSection />
        </div>
    );
}

function AboutHeroSection() {
    // Reusing the deterministic random background grid from Home
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
                    <pattern id="random-boxes-about" x="0" y="0" width={size * cols} height={size * rows} patternUnits="userSpaceOnUse">
                        {rects}
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#random-boxes-about)" />
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
                    About Artics
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
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Think</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>Big</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>Dream</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>Wild</motion.span>
                    <br />
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>Never</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>Stop</motion.span>{" "}
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>Learning</motion.span>
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

function AboutContentSection() {
    return (
        <section style={{ padding: "120px 24px", display: "flex", justifyContent: "center", position: "relative", zIndex: 10 }}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    gap: "80px",
                }}
            >
                {/* Left Column: CEO Photo */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
                        visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    style={{ flex: 1 }}
                >
                    <div style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "500px",
                        aspectRatio: "500 / 600",
                        overflow: "hidden"
                    }}>
                        <Image
                            src={ceoImage}
                            alt="CEO Artics"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center top" }}
                        />
                    </div>
                </motion.div>

                {/* Right Column: Typography */}
                <div style={{ flex: 1.2, display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "20px" }}>

                    {/* Badge */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "999px",
                            padding: "6px 16px",
                            marginBottom: "32px",
                            color: "#A0A0A0",
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px",
                        }}
                    >
                        A brief introduction to who we are &gt;
                    </motion.div>

                    {/* Content Title */}
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                        }}
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 700,
                            fontSize: "48px",
                            lineHeight: 1.2,
                            color: "#EEEEEE",
                            letterSpacing: "-1px",
                            margin: "0 0 32px 0",
                        }}
                    >
                        All About Artics Communication
                    </motion.h2>

                    {/* Description Paragraphs */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                        }}
                        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
                    >
                        <p style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "18px",
                            color: "#A0A0A0",
                            lineHeight: 1.6,
                            margin: 0,
                            textAlign: "justify"
                        }}>
                            ARTICS is a digital marketing agency specializing in product marketing and data-driven campaigns. The name “ARTICS,” short for “Archipelago Informatics,” reflects our mission to connect and elevate brands in the digital landscape.
                        </p>
                        <p style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "18px",
                            color: "#A0A0A0",
                            lineHeight: 1.6,
                            margin: 0,
                            textAlign: "justify"
                        }}>
                            We recently ran a national TikTok campaign that generated over 350 million views from 11,000 organic content pieces in just three months. This success underscores our dedication to delivering innovative and effective marketing solutions for both established and emerging brands.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

function AboutPartnersSection() {
    const partners = [
        {
            text: "“Artics Helped Us Reach Audiences We Never Thought Possible. The Strategy Was Clear, Execution Was Solid, And Results Spoke For Themselves.”",
            name: "Torabika Cappucino",
            category: "Produk Kopi",
            bgColor: "#C46F38" // Dummy color matching image
        },
        {
            text: "“Artics Helped Us Reach Audiences We Never Thought Possible. The Strategy Was Clear, Execution Was Solid, And Results Spoke For Themselves.”",
            name: "Torabika Cremy Latte",
            category: "Produk Kopi",
            bgColor: "#E2C39B" // Dummy color matching image
        },
        {
            text: "“Artics Helped Us Reach Audiences We Never Thought Possible. The Strategy Was Clear, Execution Was Solid, And Results Spoke For Themselves.”",
            name: "Cloud Seven",
            category: "Produk Kopi",
            bgColor: "#FFFFFF" // Dummy color matching image (will have black text)
        }
    ];

    return (
        <section style={{ padding: "0 24px 120px 24px", display: "flex", justifyContent: "center", position: "relative", zIndex: 10 }}>
            <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 700,
                        fontSize: "40px",
                        lineHeight: 1.2,
                        color: "#EEEEEE",
                        letterSpacing: "-1px",
                        margin: "0 0 60px 0",
                    }}
                >
                    What Our Partners Say
                </motion.h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "40px"
                }}>
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
                        >
                            <p style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "16px",
                                color: "#EEEEEE",
                                lineHeight: 1.6,
                                margin: 0,
                                fontStyle: "normal"
                            }}>
                                {partner.text}
                            </p>

                            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                                <div style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    backgroundColor: partner.bgColor,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    color: partner.bgColor === "#FFFFFF" ? "#0C1124" : "#FFFFFF",
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    border: partner.bgColor === "#FFFFFF" ? "2px solid #EEEEEE" : "none"
                                }}>
                                    {partner.name.substring(0, 2).toUpperCase()}
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <span style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        color: "#EEEEEE",
                                    }}>
                                        {partner.name}
                                    </span>
                                    <span style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "14px",
                                        color: "#A0A0A0",
                                    }}>
                                        {partner.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CoreValuesSection() {
    return (
        <section
            id="core-values"
            style={{
                width: "100%",
                backgroundColor: "#0C1124",
                padding: "83px 24px", // Top and bottom padding
                display: "flex",
                justifyContent: "center",
            }}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
                style={{
                    width: "100%",
                    maxWidth: "1380px", // Constrains the maximum width, slightly wider
                    display: "flex",
                    flexDirection: "column",
                    gap: "50px", // Reduced gap / "pagination" slightly
                    padding: "0 20px" // Adds some padding so it doesn't touch the edges completely on smaller screens
                }}>
                {/* Top Row: Title & Desc */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "40px" }}>
                    {/* Left Side */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -40, filter: "blur(10px)" },
                            visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                        }}
                        style={{ flex: 1, minWidth: "300px" }}
                    >
                        {/* Title */}
                        <h2 style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 700,
                            fontSize: "48px",
                            lineHeight: 1.1,
                            color: "#EEEEEE",
                            letterSpacing: "-1.5px",
                            margin: 0
                        }}>
                            ARTICS 3+1 Core<br />Values
                        </h2>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 40, filter: "blur(10px)" },
                            visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                        }}
                        style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "20px", maxWidth: "480px" }}
                    >
                    </motion.div>
                </div>

                {/* Bottom Row: 4 Columns */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "40px",
                        marginTop: "20px"
                    }}
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 40, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } } }}>
                        <ValueCard
                            icon="/ethic.svg"
                            title="Ethic"
                            description={<>Without ethics, skills and performance <strong style={{ color: "#EEEEEE", fontWeight: 600 }}>have no long-term value.</strong></>}
                        />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 40, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } } }}>
                        <ValueCard
                            icon="/performance.svg"
                            title="Performance"
                            description={<>The background may be different, <strong style={{ color: "#EEEEEE", fontWeight: 600 }}>but the standard performance remains the same.</strong></>}
                        />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 40, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } } }}>
                        <ValueCard
                            icon="/skill.svg"
                            title="Skill"
                            description={<>The background may be different, <strong style={{ color: "#EEEEEE", fontWeight: 600 }}>but the standard performance remains the same.</strong></>}
                        />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 40, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } } }}>
                        <ValueCard
                            icon="/passionate.svg"
                            title="Passionate"
                            description={<>Passionate is not just enthusiasm at beginning, <strong style={{ color: "#EEEEEE", fontWeight: 600 }}>but a commitment to continue caring.</strong></>}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section >
    );
}

function ValueCard({ icon, title, description }: { icon: any; title: string; description: React.ReactNode }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ width: "160px", height: "160px", position: "relative" }}>
                <Image src={icon} alt={title} fill style={{ objectFit: "contain", objectPosition: "left center" }} />
            </div>
            <h3 style={{
                fontFamily: "var(--font-inter)",
                fontSize: "28px",
                fontWeight: 600,
                color: "#EEEEEE",
                margin: 0,
                letterSpacing: "-0.5px"
            }}>
                {title}
            </h3>
            <p style={{
                fontFamily: "var(--font-inter)",
                fontSize: "16px",
                color: "#888888",
                lineHeight: 1.5,
                margin: 0,
                paddingRight: "20px"
            }}>
                {description}
            </p>
        </div>
    );
}

function ClientMarqueeSection() {
    // Generate two sets of placeholder items for the two marquee rows
    const originalBrandsRow1 = Array.from({ length: 12 }).map((_, i) => `Brand Logo ${i + 1}`);
    const originalBrandsRow2 = Array.from({ length: 12 }).map((_, i) => `Brand Logo ${i + 13}`);

    return (
        <section
            id="clients"
            style={{
                width: "100%",
                backgroundColor: "#0C1124",
                padding: "100px 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
                overflow: "hidden", // Hide the horizontal scroll
            }}
        >
            {/* Header Content */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    maxWidth: "800px",
                    padding: "0 20px"
                }}
            >
                {/* Title */}
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.95 },
                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 700,
                        fontSize: "48px",
                        lineHeight: 1.2,
                        color: "#EEEEEE",
                        letterSpacing: "-1px",
                        margin: "0 0 16px 0"
                    }}>
                    Who we've work with
                </motion.h2>

                {/* Description Text */}
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "16px",
                        color: "#A0A0A0",
                        lineHeight: 1.6,
                        margin: 0,
                        maxWidth: "600px"
                    }}>
                    We collaborate with brands from various industries, helping them scale their digital presence through tailored strategies, creative execution, and consistent performance.
                </motion.p>
            </motion.div>

            {/* Marquee Track Container */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                    width: "100%",
                    marginTop: "40px",
                    position: "relative",
                }}
            >
                {/* Fade masks on the edges */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: "150px",
                    background: "linear-gradient(to right, #0C1124 0%, transparent 100%)",
                    zIndex: 2,
                    pointerEvents: "none"
                }} />
                <div style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    width: "150px",
                    background: "linear-gradient(to left, #0C1124 0%, transparent 100%)",
                    zIndex: 2,
                    pointerEvents: "none"
                }} />

                {/* The Scrolling Flex Container - Row 1 */}
                <div className="pause-on-hover" style={{ display: "flex", overflow: "hidden", width: "100%", marginBottom: "30px" }}>
                    <div
                        className="animate-marquee"
                        style={{
                            display: "flex",
                            width: "max-content"
                        }}
                    >
                        {/* First Half */}
                        <div style={{ display: "flex", gap: "40px", paddingRight: "40px", alignItems: "center" }}>
                            {originalBrandsRow1.map((brand, idx) => (
                                <div
                                    key={`row1a-${idx}`}
                                    className="marquee-item-hover"
                                    style={{
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        width: "180px", height: "90px",
                                        backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "12px",
                                        color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)",
                                        fontSize: "18px", fontWeight: 600,
                                        border: "1px dashed rgba(255,255,255,0.2)", flexShrink: 0,
                                        transition: "all 0.3s ease", cursor: "pointer"
                                    }}
                                >
                                    {brand}
                                </div>
                            ))}
                        </div>
                        {/* Second Half (Duplicate) */}
                        <div style={{ display: "flex", gap: "40px", paddingRight: "40px", alignItems: "center" }}>
                            {originalBrandsRow1.map((brand, idx) => (
                                <div
                                    key={`row1b-${idx}`}
                                    className="marquee-item-hover"
                                    style={{
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        width: "180px", height: "90px",
                                        backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "12px",
                                        color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)",
                                        fontSize: "18px", fontWeight: 600,
                                        border: "1px dashed rgba(255,255,255,0.2)", flexShrink: 0,
                                        transition: "all 0.3s ease", cursor: "pointer"
                                    }}
                                >
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* The Scrolling Flex Container - Row 2 */}
                <div className="pause-on-hover" style={{ display: "flex", overflow: "hidden", width: "100%" }}>
                    <div
                        className="animate-marquee-reverse"
                        style={{
                            display: "flex",
                            width: "max-content",
                        }}
                    >
                        {/* First Half */}
                        <div style={{ display: "flex", gap: "40px", paddingRight: "40px", alignItems: "center" }}>
                            {originalBrandsRow2.map((brand, idx) => (
                                <div
                                    key={`row2a-${idx}`}
                                    className="marquee-item-hover"
                                    style={{
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        width: "180px", height: "90px",
                                        backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "12px",
                                        color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)",
                                        fontSize: "18px", fontWeight: 600,
                                        border: "1px dashed rgba(255,255,255,0.2)", flexShrink: 0,
                                        transition: "all 0.3s ease", cursor: "pointer",
                                    }}
                                >
                                    {brand}
                                </div>
                            ))}
                        </div>
                        {/* Second Half (Duplicate) */}
                        <div style={{ display: "flex", gap: "40px", paddingRight: "40px", alignItems: "center" }}>
                            {originalBrandsRow2.map((brand, idx) => (
                                <div
                                    key={`row2b-${idx}`}
                                    className="marquee-item-hover"
                                    style={{
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        width: "180px", height: "90px",
                                        backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "12px",
                                        color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)",
                                        fontSize: "18px", fontWeight: 600,
                                        border: "1px dashed rgba(255,255,255,0.2)", flexShrink: 0,
                                        transition: "all 0.3s ease", cursor: "pointer",
                                    }}
                                >
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function AboutContactSection() {
    return (
        <section
            id="contact"
            style={{
                width: "100%",
                backgroundColor: "#0C1124", // Original page background
                padding: "80px 24px 120px 24px",
                display: "flex",
                justifyContent: "center",
                position: "relative",
                zIndex: 1
            }}
        >
            <div style={{
                width: "100%",
                maxWidth: "1380px", // Increased width
                margin: "0 auto",
                backgroundColor: "#00101F", // Card color
                borderRadius: "24px",
                padding: "80px 60px", // Larger inside padding
                display: "flex",
                flexDirection: "column",
                gap: "50px", // slightly larger gap
                boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.4)"
            }}>
                {/* Header Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
                        <h2 style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 500,
                            fontSize: "32px",
                            lineHeight: 1.2,
                            color: "#EEEEEE",
                            letterSpacing: "-0.5px",
                            margin: 0
                        }}>
                            Hubungi Kami
                        </h2>
                        <p style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px",
                            color: "#A0A0A0",
                            lineHeight: 1.5,
                            margin: 0
                        }}>
                            Green House Bridges Ornamental Plant
                            <br />
                            Sellers In Bogor
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <button suppressHydrationWarning style={{
                            backgroundColor: "#1E65A7",
                            color: "white",
                            border: "none",
                            borderRadius: "999px",
                            padding: "10px 24px",
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px",
                            fontWeight: 500,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            width: "220px",
                            justifyContent: "center"
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Contact With Email
                        </button>
                        <button suppressHydrationWarning style={{
                            backgroundColor: "transparent",
                            color: "#A0A0A0",
                            border: "1px solid rgba(255,255,255,0.2)",
                            borderRadius: "999px",
                            padding: "10px 24px",
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px",
                            fontWeight: 500,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            width: "220px",
                            justifyContent: "center"
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            Contact With Whatsapp
                        </button>
                    </div>
                </div>

                {/* Form Elements */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "20px" }}>
                    <input suppressHydrationWarning
                        type="text"
                        placeholder="Nama Panjang"
                        style={{
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "none",
                            borderBottom: "1px solid rgba(255,255,255,0.1)",
                            padding: "12px 0",
                            color: "white",
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px",
                            outline: "none"
                        }}
                    />
                    <input suppressHydrationWarning
                        type="email"
                        placeholder="Email Anda"
                        style={{
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "none",
                            borderBottom: "1px solid rgba(255,255,255,0.1)",
                            padding: "12px 0",
                            color: "white",
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px",
                            outline: "none"
                        }}
                    />
                    <input suppressHydrationWarning
                        type="text"
                        placeholder="Apa Yang Anda Keluhkan"
                        style={{
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "none",
                            borderBottom: "1px solid rgba(255,255,255,0.1)",
                            padding: "12px 0",
                            color: "white",
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px",
                            outline: "none"
                        }}
                    />
                    <textarea suppressHydrationWarning
                        placeholder="Pesan"
                        rows={4}
                        style={{
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "none",
                            borderBottom: "1px solid rgba(255,255,255,0.1)",
                            padding: "12px 0",
                            color: "white",
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px",
                            outline: "none",
                            resize: "none"
                        }}
                    />
                </div>

                {/* Submit Button */}
                <div style={{ marginTop: "16px" }}>
                    <button suppressHydrationWarning style={{
                        backgroundColor: "transparent",
                        color: "#A0A0A0",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "999px",
                        padding: "10px 32px",
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.2s"
                    }}>
                        Contact Now
                    </button>
                </div>
            </div>
        </section>
    );
}
