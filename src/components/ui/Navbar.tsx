"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#home", active: true },
    { label: "About Us", href: "#about", active: false },
    { label: "Services", href: "#services", active: false },
    { label: "Gallery", href: "#gallery", active: false },
    { label: "Blog", href: "#blog", active: false },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 100) {
            setHidden(true); // Scrolling down and passed 100px
        } else {
            setHidden(false); // Scrolling up or near top
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                height: "76px", // Adjusted from 90px
                padding: isMobile ? "0 20px" : "0 48px", // Adjusted from 60px
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                backgroundColor: "rgba(11, 22, 65, 0.05)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            }}
        >
            {/* Logo — placeholder, user said to skip for now */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5px" }}>
                <span
                    style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "26px", // Adjusted from 32px
                        fontWeight: 700,
                        color: "#FFFFFF",
                        letterSpacing: "-0.01em",
                        lineHeight: 1,
                    }}
                >
                    artics
                </span>
                <span
                    style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "7px", // Adjusted from 8.5px
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.45)",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        lineHeight: 1,
                        marginLeft: "1px",
                    }}
                >
                    COMMUNICATION
                </span>
            </div>

            {/* Desktop: Nav Links + CTA grouped together on the right */}
            {!isMobile && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0px",
                    }}
                >
                    {/* Nav Links */}
                    <div style={{ display: "flex", alignItems: "center", gap: "32px" }}> {/* Adjusted from 40px */}
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "14px", // Adjusted from 16px
                                    fontWeight: link.active ? 500 : 400,
                                    color: link.active
                                        ? "#FFFFFF"
                                        : "rgba(255, 255, 255, 0.55)",
                                    textDecoration: "none",
                                    transition: "color 0.2s ease",
                                    letterSpacing: "0.005em",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#FFFFFF";
                                }}
                                onMouseLeave={(e) => {
                                    if (!link.active) {
                                        e.currentTarget.style.color = "rgba(255, 255, 255, 0.55)";
                                    }
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Contact Us CTA */}
                    <a
                        href="#contact"
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px", // Adjusted from 16px
                            fontWeight: 400,
                            color: "#FFFFFF",
                            textDecoration: "none",
                            padding: "10px 24px", // Adjusted from 14px 32px
                            borderRadius: "999px",
                            border: "none",
                            background: "#1E65A7",
                            transition: "all 0.3s ease",
                            whiteSpace: "nowrap",
                            marginLeft: "40px", // Adjusted from 48px
                            boxShadow: "0 2px 4px rgba(0,0,0,0.15)"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#257AС5";
                            e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#1E65A7";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        Contact Us
                    </a>
                </div>
            )}

            {/* Mobile Hamburger */}
            {isMobile && (
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "8px",
                    }}
                >
                    <span
                        style={{
                            display: "block",
                            width: "22px",
                            height: "2px",
                            background: "#FFFFFF",
                            transition: "all 0.3s ease",
                            transform: mobileMenuOpen
                                ? "rotate(45deg) translate(5px, 5px)"
                                : "none",
                        }}
                    />
                    <span
                        style={{
                            display: "block",
                            width: "22px",
                            height: "2px",
                            background: "#FFFFFF",
                            transition: "all 0.3s ease",
                            opacity: mobileMenuOpen ? 0 : 1,
                        }}
                    />
                    <span
                        style={{
                            display: "block",
                            width: "22px",
                            height: "2px",
                            background: "#FFFFFF",
                            transition: "all 0.3s ease",
                            transform: mobileMenuOpen
                                ? "rotate(-45deg) translate(5px, -5px)"
                                : "none",
                        }}
                    />
                </button>
            )}

            {/* Mobile Menu */}
            {isMobile && mobileMenuOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "60px",
                        left: 0,
                        right: 0,
                        background: "rgba(11, 22, 65, 0.95)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        padding: "20px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "15px",
                                fontWeight: 400,
                                color: "rgba(255, 255, 255, 0.65)",
                                textDecoration: "none",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                    {/* Mobile Contact Us */}
                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            textAlign: "center",
                            marginTop: "8px",
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px", // Adjusted from 16px
                            fontWeight: 400,
                            color: "#FFFFFF",
                            textDecoration: "none",
                            padding: "10px 24px", // Adjusted from 14px 32px
                            borderRadius: "999px",
                            border: "none",
                            background: "#1E65A7",
                            transition: "all 0.3s ease",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.15)"
                        }}
                    >
                        Contact Us
                    </a>
                </div>
            )}
        </motion.nav>
    );
}
