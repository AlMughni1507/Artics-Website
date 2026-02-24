"use client";

import HeroBadge from "./HeroBadge";
import { useMemo, useRef } from "react";
import Image from "next/image";
import ceoImage from "@/assets/CEO artics.jpg";
import skillIcon from "@/assets/skill.svg";
import performanceIcon from "@/assets/performance.svg";
import passionateIcon from "@/assets/passionate.svg";
import ethicIcon from "@/assets/ethic.svg";
import BentoCard from "@/components/BentoCard";
import StatCard from "@/components/StatCard";
import VideoCard from "@/components/VideoCard";
import maskGroupBg from "@/assets/Mask Group.png";

export default function HomePage() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <HeroSection />
            <AboutSection />
            <ClientMarqueeSection />
            <EnhanceBusinessSection />
            <StatsSection />
            <CampaignsInActionSection />
            <style jsx>{`
                @keyframes marqueeLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                @keyframes marqueeRight {
                    0% { transform: translateX(-33.33%); }
                    100% { transform: translateX(0); }
                }
                .pause-on-hover:hover .animate-marquee,
                .pause-on-hover:hover .animate-marquee-reverse {
                    animation-play-state: paused !important;
                }
                .animate-marquee {
                    animation: marqueeLeft 30s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marqueeRight 30s linear infinite;
                }
            `}</style>
        </div>
    );
}

function HeroSection() {
    // Generate deterministic random background grid
    const gridPattern = useMemo(() => {
        const size = 30; // Size of each square (smaller)
        const cols = 40; // Pattern width: 1200px
        const rows = 40; // Pattern height: 1200px

        const rects = [];
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                // Fixed seed based on coordinates so SSR and CSR result in the exact same pattern
                const seed = i * 137 + j * 149;
                // Simple pseudo-random generator between 0 and 1
                const pseudoRandom = Math.abs(Math.sin(seed) * 10000) % 1;

                // Only ~12% chance for the darker random boxes to appear
                if (pseudoRandom < 0.12) {
                    rects.push(
                        <rect
                            key={`${i}-${j}`}
                            x={i * size}
                            y={j * size}
                            width={size}
                            height={size}
                            fill="#00092C"
                            // varying opacity for extra subtle randomness
                            opacity={Math.round((0.3 + (pseudoRandom * 2)) * 1000) / 1000}
                        />
                    );
                }
            }
        }

        return (
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1, opacity: 0.5 }}>
                <defs>
                    <pattern
                        id="random-boxes"
                        x="0"
                        y="0"
                        width={size * cols}
                        height={size * rows}
                        patternUnits="userSpaceOnUse"
                    >
                        {rects}
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#random-boxes)" />
            </svg>
        );
    }, []);

    return (
        <section
            id="home"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "120px 24px 80px",
                overflow: "hidden",
                backgroundColor: "var(--bg-primary)", // Bring back original dark blue background
            }}
        >
            {/* Background grid texture */}
            {gridPattern}

            {/* Spotlight overlay - radial glow */}
            <div className="spotlight-overlay" />

            {/* Spotlight ray - Anchored to the top-left corner of the section */}
            <div className="spotlight-ray" />

            {/* Additional ambient glow at center (subtle) */}
            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "600px",
                    height: "400px",
                    background:
                        "radial-gradient(ellipse, rgba(37, 99, 235, 0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: "740px",
                    width: "100%",
                }}
            >
                {/* Badge */}
                <HeroBadge />

                {/* Main Heading */}
                <h1 className="hero-heading">
                    Think Big{" "}
                    <span className="highlight">Dream</span>{" "}
                    Wild
                    <br />
                    Never Stop{" "}
                    <span className="highlight">Learning</span>
                </h1>

                {/* Subtitle */}
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "var(--text-secondary)",
                        textAlign: "center",
                        maxWidth: "480px",
                        lineHeight: 1.7,
                        marginTop: "24px",
                        marginBottom: "40px",
                    }}
                >
                    We recently ran a national campaign on TikTok, reaching over 350
                    million views with 11,000 pieces of organic content in just three
                    months.
                </p>

                {/* CTA Buttons */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    <a href="#contact" className="btn-primary">
                        Contact Us
                    </a>
                    <a href="#portfolio" className="btn-outline">
                        Our Portofolios
                    </a>
                </div>
            </div>

            {/* 3D Model placeholder areas — these will be replaced with actual 3D models later */}
            {/* Left side decorative area */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "35%",
                    height: "60%",
                    background:
                        "radial-gradient(ellipse at 30% 80%, rgba(6, 182, 212, 0.04) 0%, transparent 60%)",
                    pointerEvents: "none",
                    zIndex: 2,
                }}
            />

            {/* Right side decorative area */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "35%",
                    height: "60%",
                    background:
                        "radial-gradient(ellipse at 70% 80%, rgba(37, 99, 235, 0.04) 0%, transparent 60%)",
                    pointerEvents: "none",
                    zIndex: 2,
                }}
            />

            {/* Bottom Fade Mask (Figma spec) */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "414px",
                    background:
                        "linear-gradient(180deg, rgba(12, 17, 36, 0.01) 0%, rgba(12, 17, 36, 1) 100%)",
                    pointerEvents: "none",
                    zIndex: 3,
                }}
            />
        </section >
    );
}

function AboutSection() {
    return (
        <section
            id="about"
            style={{
                width: "100%",
                minHeight: "100vh", // Makes it a full-page section
                display: "flex",
                alignItems: "center",
                backgroundColor: "#0C1124",
                position: "relative",
                zIndex: 10,
                padding: "80px 0", // Padding top and bottom, but centered overall
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start", // Top align like Figma
                    justifyContent: "space-between",
                    padding: "0 20px",
                    width: "100%",
                    maxWidth: "1380px", // Match CoreValuesSection max-width
                    margin: "0 auto",
                    gap: "80px", // Moderate gap
                }}
            >
                {/* Left Column: Typography */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

                    {/* About Badge */}
                    <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "999px",
                        padding: "4px 16px 4px 4px",
                        gap: "12px",
                        marginBottom: "24px" // Tighter gap to main text
                    }}>
                        <div style={{
                            background: "#1E65A7",
                            borderRadius: "999px",
                            padding: "6px 20px", // Thicker padding like Figma
                            color: "#FFFFFF",
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px", // Default 14px size
                            fontWeight: 500
                        }}>
                            ABOUT ARTICS
                        </div>
                        <span style={{
                            color: "#C9C9C9",
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px", // Default 14px
                            fontWeight: 400
                        }}>
                            A brief introduction to who we are &gt;
                        </span>
                    </div>

                    {/* Main Heading Text */}
                    <h2 style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 600, // SemiBold
                        fontSize: "32px", // Dikecilkan sedikit agar lebih proporsional dengan layout full lebar
                        lineHeight: 1.4, // Match Figma line breaks
                        color: "#EEEEEE",
                        letterSpacing: "-1.5px", // Adjusted Figma Spec for web rendering
                        textAlign: "justify", // Rata kiri-kanan
                        textJustify: "inter-word", // Mencegah spasi kosong terlalu renggang saat justified
                    }}>
                        ARTICS is a digital marketing agency specializing in product marketing and data-driven campaigns. The name “ARTICS,”{" "}
                        <span style={{ color: "#666666" }}>
                            short for “Archipelago Informatics,” reflects our mission to connect and elevate brands in the digital landscape.
                        </span>
                    </h2>
                </div>

                {/* Right Column: CEO Photo */}
                <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                    <div style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "500px", // Exact Figma dimension
                        aspectRatio: "500 / 513" // Explicit 500x513 aspect ratio
                    }}>
                        <Image
                            src={ceoImage}
                            alt="CEO Artics"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
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
            <div style={{
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
                    <div style={{ flex: 1, minWidth: "300px" }}>
                        {/* Badge */}
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
                                padding: "6px 16px",
                                color: "#FFFFFF",
                                fontFamily: "var(--font-inter)",
                                fontSize: "12px",
                                fontWeight: 600
                            }}>
                                CORE VALUES
                            </div>
                            <span style={{
                                color: "#C9C9C9",
                                fontFamily: "var(--font-inter)",
                                fontSize: "13px",
                                fontWeight: 400
                            }}>
                                The foundation behind every decision &gt;
                            </span>
                        </div>

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
                    </div>

                    {/* Right Side */}
                    <div style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px", maxWidth: "480px" }}>
                        <p style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "16px",
                            color: "#A0A0A0",
                            lineHeight: 1.6,
                            margin: 0
                        }}>
                            Our values define how we work, think, and deliver. They ensure that every campaign we execute is ethical, effective, and built for long-term success.
                        </p>
                        <button style={{
                            background: "#1E65A7",
                            color: "white",
                            border: "none",
                            borderRadius: "999px",
                            padding: "10px 24px",
                            fontFamily: "var(--font-inter)",
                            fontSize: "15px",
                            fontWeight: 500,
                            cursor: "pointer",
                            transition: "background 0.2s"
                        }}>
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Bottom Row: 4 Columns */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "40px",
                    marginTop: "20px"
                }}>
                    <ValueCard
                        icon={ethicIcon}
                        title="Ethic"
                        description={<>Without ethics, skills and performance <strong style={{ color: "#EEEEEE", fontWeight: 600 }}>have no long-term value.</strong></>}
                    />
                    <ValueCard
                        icon={performanceIcon}
                        title="Performance"
                        description={<>The background may be different, <strong style={{ color: "#EEEEEE", fontWeight: 600 }}>but the standard performance remains the same.</strong></>}
                    />
                    <ValueCard
                        icon={skillIcon}
                        title="Skill"
                        description={<>The background may be different, <strong style={{ color: "#EEEEEE", fontWeight: 600 }}>but the standard performance remains the same.</strong></>}
                    />
                    <ValueCard
                        icon={passionateIcon}
                        title="Passionate"
                        description={<>Passionate is not just enthusiasm at beginning, <strong style={{ color: "#EEEEEE", fontWeight: 600 }}>but a commitment to continue caring.</strong></>}
                    />
                </div>
            </div>
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
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                maxWidth: "800px",
                padding: "0 20px"
            }}>
                {/* Badge */}
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
                        OUR CLIENTS
                    </div>
                    <span style={{
                        color: "#C9C9C9",
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        fontWeight: 400
                    }}>
                        Brands that trust our process &gt;
                    </span>
                </div>

                {/* Title */}
                <h2 style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: 1.2,
                    color: "#EEEEEE",
                    letterSpacing: "-1px",
                    margin: "0 0 16px 0"
                }}>
                    Who we've work with
                </h2>

                {/* Description Text */}
                <p style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "16px",
                    color: "#A0A0A0",
                    lineHeight: 1.6,
                    margin: 0,
                    maxWidth: "600px"
                }}>
                    We collaborate with brands from various industries, helping them scale their digital presence through tailored strategies, creative execution, and consistent performance.
                </p>
            </div>

            {/* Marquee Track Container */}
            <div style={{
                width: "100%",
                marginTop: "40px",
                position: "relative",
            }}>
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
            </div>
        </section>
    );
}

function EnhanceBusinessSection() {
    return (
        <section
            id="enhance-business"
            style={{
                width: "100%",
                backgroundColor: "#0C1124",
                padding: "40px 0 100px 0",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div style={{
                width: "100%",
                maxWidth: "1380px", // Match CoreValuesSection max-width
                display: "flex",
                flexDirection: "column",
                gap: "60px",
                padding: "0 20px"
            }}>
                {/* Header Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "40px" }}>
                    {/* Left Column (Badge & Title) */}
                    <div style={{ flex: 1, minWidth: "300px" }}>
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
                    </div>

                    {/* Right Column (Desc & Button) */}
                    <div style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "24px" }}>
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
                        <button style={{
                            background: "#1E65A7",
                            color: "white",
                            border: "none",
                            borderRadius: "999px",
                            padding: "12px 32px",
                            fontFamily: "var(--font-inter)",
                            fontSize: "15px",
                            fontWeight: 500,
                            cursor: "pointer",
                            transition: "background 0.2s"
                        }}>
                            Our Services
                        </button>
                    </div>
                </div>

                {/* Bento Grid layout */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: "24px",
                    width: "100%"
                }}>
                    {/* Row 1 */}
                    <div style={{ gridColumn: "span 4" }}>
                        <BentoCard title="Media Monitoring / Social Media Analyst" />
                    </div>
                    <div style={{ gridColumn: "span 3" }}>
                        <BentoCard title="Strategic Brand Plan" />
                    </div>

                    {/* Row 2 */}
                    <div style={{ gridColumn: "span 3" }}>
                        <BentoCard title="Social Media Management" />
                    </div>
                    <div style={{ gridColumn: "span 4" }}>
                        <BentoCard title="KOL Management" />
                    </div>

                    {/* Row 3 */}
                    <div style={{ gridColumn: "span 2" }}>
                        <BentoCard title="UGC Campaign" />
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                        <BentoCard title="KOC Campaign" />
                    </div>
                    <div style={{ gridColumn: "span 3" }}>
                        <BentoCard title="Creative Consultant" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatsSection() {
    return (
        <section
            id="stats"
            style={{
                width: "100%",
                backgroundColor: "#0C1124",
                padding: "100px 0",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div style={{
                width: "100%",
                maxWidth: "1380px", // Match max-width
                display: "flex",
                flexDirection: "row",
                gap: "80px",
                padding: "0 20px",
                alignItems: "center"
            }}>
                {/* Left Side: Stats Grid */}
                <div style={{
                    flex: 1.2,
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "24px"
                }}>
                    {/* Stat Box 1 */}
                    <StatCard
                        value={3}
                        suffix=" Bio"
                        duration={2500}
                        title="Video Views"
                        description={<>We achieve more than 3 Bio<br />Views on Social Media</>}
                    />

                    {/* Stat Box 2 */}
                    <StatCard
                        value={200}
                        suffix="+"
                        duration={2000}
                        title="Total Project"
                        description={<>We handling more than 150<br />Project and run smoothly</>}
                    />

                    {/* Stat Box 3 */}
                    <StatCard
                        value={300}
                        suffix="K+"
                        duration={3000}
                        title="Video Production"
                        description={<>We created more than 300K<br />Videos</>}
                    />

                    {/* Stat Box 4 */}
                    <StatCard
                        value={50}
                        suffix="+"
                        duration={1500}
                        title="Brands Client"
                        description={<>We work with more than 50<br />Clients</>}
                    />
                </div>

                {/* Right Side: Copy Content */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}>

                    {/* Badge */}
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
                            YEAR IN REVIEW
                        </div>
                        <span style={{
                            color: "#C9C9C9",
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px",
                            fontWeight: 400
                        }}>
                            Results driven by creativity &gt;
                        </span>
                    </div>

                    {/* Title */}
                    <h2 style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 700,
                        fontSize: "48px",
                        lineHeight: 1.1,
                        color: "#EEEEEE",
                        letterSpacing: "-1.5px",
                        margin: "0 0 24px 0",
                        maxWidth: "400px" // Forces the two line wrap
                    }}>
                        What We've Done<br />This Year
                    </h2>

                    {/* Description */}
                    <p style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "16px",
                        color: "#A0A0A0",
                        lineHeight: 1.6,
                        margin: 0,
                        maxWidth: "460px"
                    }}>
                        Our results speak for themselves. ARTICS has delivered billions of views, managed hundreds of projects, and partnered with dozens of brands to achieve sustainable digital growth.
                    </p>
                </div>

            </div>
        </section>
    );
}

function CampaignsInActionSection() {

    // Top Row Videos
    const campaignsRow1 = [
        {
            title: "Creative Campaign",
            description: "Lorem ipsum dolor sit amet consectetur.",
            videoUrl: "https://www.instagram.com/reels/DCBdAYty490/",
        },
        {
            title: "Creative Campaign",
            description: "Lorem ipsum dolor sit amet consectetur.",
            videoUrl: "https://www.instagram.com/reel/DPjLUSQiepq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
        },
        {
            title: "Creative Campaign",
            description: "Lorem ipsum dolor sit amet consectetur.",
            videoUrl: "https://youtu.be/-Glr_7FFh6Y?si=lhOk6iev7uByU3ue",
        },
    ];

    // Bottom Row Videos
    const campaignsRow2 = [
        {
            title: "Video Production",
            description: "Lorem ipsum dolor sit amet consectetur.",
            videoUrl: "https://www.youtube.com/watch?v=haP5iWB4rcs",
        },
        {
            title: "Video Production",
            description: "Lorem ipsum dolor sit amet consectetur.",
            videoUrl: "https://youtu.be/yWKjrvqgLFw?si=h9aYr8ODhTnx0wYA",
        },
        {
            title: "Video Production",
            description: "Lorem ipsum dolor sit amet consectetur.",
            videoUrl: "https://youtu.be/KwYdFybhoII?si=LJOqJ_57AMSrlKFi",
        },
    ];

    return (
        <section
            id="campaigns"
            style={{
                width: "100%",
                backgroundColor: "#0C1124",
                padding: "100px 0",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
            }}
        >
            {/* Decorative Background */}
            <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "50%",
                zIndex: 0,
                pointerEvents: "none",
                opacity: 0.8
            }}>
                <Image
                    src={maskGroupBg}
                    alt="Background Accent"
                    fill
                    style={{ objectFit: "cover", objectPosition: "right center" }}
                />
            </div>

            {/* Header Area */}
            <div style={{
                width: "100%",
                maxWidth: "1380px",
                margin: "0 auto",
                padding: "0 20px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end", // Align to bottom to match buttons
                gap: "40px",
                position: "relative",
                zIndex: 2,
                marginBottom: "60px"
            }}>
                {/* Left Side: Badge and Title */}
                <div style={{ flex: 1, maxWidth: "600px" }}>
                    <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "999px",
                        padding: "4px 16px 4px 4px",
                        gap: "12px",
                        marginBottom: "24px",
                        backgroundColor: "rgba(12, 17, 36, 0.5)",
                        backdropFilter: "blur(4px)"
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
                            OUR WORK
                        </div>
                        <span style={{
                            color: "#C9C9C9",
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px",
                            fontWeight: 400
                        }}>
                            Real campaigns. Real results. &gt;
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
                        Our Campaigns in Action
                    </h2>
                </div>

                {/* Right Side: Description and Navigation Buttons */}
                <div style={{ flex: 1, maxWidth: "500px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px" }}>
                    <p style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "16px",
                        color: "#A0A0A0",
                        lineHeight: 1.6,
                        margin: 0,
                    }}>
                        From viral social media content to data-driven digital campaigns, these projects showcase how ARTICS turns ideas into high-performing brand experiences.
                    </p>
                    <button style={{
                        background: "#1E65A7",
                        color: "white",
                        border: "none",
                        borderRadius: "999px",
                        padding: "12px 32px",
                        fontFamily: "var(--font-inter)",
                        fontSize: "15px",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "background 0.2s"
                    }}>
                        Our Portofolios
                    </button>
                </div>
            </div>

            {/* Video Cards Grid */}
            <div style={{
                width: "100%",
                maxWidth: "1380px",
                margin: "0 auto",
                padding: "0 20px",
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                gap: "32px",
            }}>

                {/* Row 1 */}
                <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
                    {campaignsRow1.map((campaign, idx) => (
                        <div key={`row1-${idx}`} style={{ flex: "1 1 320px", maxWidth: "420px" }}>
                            <VideoCard
                                title={campaign.title}
                                description={campaign.description}
                                videoUrl={campaign.videoUrl}
                            />
                        </div>
                    ))}
                </div>

                {/* Row 2 */}
                <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
                    {campaignsRow2.map((campaign, idx) => (
                        <div key={`row2-${idx}`} style={{ flex: "1 1 320px", maxWidth: "420px" }}>
                            <VideoCard
                                title={campaign.title}
                                description={campaign.description}
                                videoUrl={campaign.videoUrl}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
