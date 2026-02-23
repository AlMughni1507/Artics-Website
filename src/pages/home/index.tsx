import HeroBadge from "./HeroBadge";
import { useMemo } from "react";
import Image from "next/image";
import ceoImage from "@/assets/CEO artics.jpg";

export default function HomePage() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <HeroSection />
            <AboutSection />
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
                            opacity={0.3 + (pseudoRandom * 2)}
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
                    padding: "0 60px",
                    width: "100%",
                    maxWidth: "1280px",
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
                        fontSize: "36px", // Figma Spec
                        lineHeight: 1.4, // Match Figma line breaks
                        color: "#EEEEEE",
                        letterSpacing: "-2px", // Figma Spec
                        textAlign: "justify", // Dikembalikan rata Kiri-Kanan (Justified)
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
