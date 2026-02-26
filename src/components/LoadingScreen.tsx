"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface LoadingScreenProps {
    onWipeStart: () => void;
    onComplete: () => void;
}

export default function LoadingScreen({ onWipeStart, onComplete }: LoadingScreenProps) {
    // text-fadeout -> wipe-up
    const [phase, setPhase] = useState<"quote" | "author" | "text-fadeout" | "wipe-up">("quote");

    const stableOnWipeStart = useCallback(onWipeStart, [onWipeStart]);
    const stableOnComplete = useCallback(onComplete, [onComplete]);

    // Phase transitions
    useEffect(() => {
        // Phase 1: Show author
        const t1 = setTimeout(() => {
            setPhase("author");
        }, 1800);

        // Phase 2: Fade out text (keep black background)
        const t2 = setTimeout(() => {
            setPhase("text-fadeout");
        }, 3600);

        // Phase 3: Start wipe up (and mount children behind it)
        const t3 = setTimeout(() => {
            setPhase("wipe-up");
            stableOnWipeStart();
        }, 4200);

        // Phase 4: Complete and unmount
        const t4 = setTimeout(() => {
            stableOnComplete();
        }, 5800);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, [stableOnWipeStart, stableOnComplete]);

    const quoteLine1 = "Think big, dream wild,";
    const quoteLine2 = "never stop learning.";

    return (
        <motion.div
            initial={{ y: "0%" }}
            animate={{ y: phase === "wipe-up" ? "-150%" : "0%" }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 1000,
                backgroundColor: "#0B1121",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                overflow: "visible", // visible so the wave SVG below the screen can be seen as it travels up
            }}
        >
            {/* Animated SVG Wave tail */}
            <svg
                style={{
                    position: "absolute",
                    bottom: "-149px", // slightly less than height to prevent 1px gap line
                    left: 0,
                    width: "100%",
                    height: "150px",
                    display: "block",
                    pointerEvents: "none",
                }}
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
            >
                <motion.path
                    fill="#0B1121"
                    initial={{ d: "M0,0 L1440,0 L1440,50 C1080,100 360,0 0,50 Z" }}
                    animate={{
                        d: [
                            "M0,0 L1440,0 L1440,50 C1080,100 360,0 0,50 Z",
                            "M0,0 L1440,0 L1440,50 C1080,0 360,100 0,50 Z",
                            "M0,0 L1440,0 L1440,50 C1080,100 360,0 0,50 Z",
                        ]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </svg>

            {/* Quote container - Fades out before the wipe happens */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: (phase === "text-fadeout" || phase === "wipe-up") ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: "700px",
                    padding: "0 40px",
                }}
            >
                {/* Quote text */}
                <div style={{ position: "relative" }}>
                    {/* Opening quote mark */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            position: "absolute",
                            top: "-10px",
                            left: "-30px",
                            fontFamily: "Georgia, 'Times New Roman', serif",
                            fontSize: "48px",
                            color: "rgba(255, 255, 255, 0.35)",
                            lineHeight: 1,
                        }}
                    >
                        &ldquo;
                    </motion.span>

                    {/* Line 1 */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            fontFamily: "Georgia, 'Times New Roman', serif",
                            fontSize: "28px",
                            fontWeight: 400,
                            color: "rgba(255, 255, 255, 0.9)",
                            lineHeight: 1.6,
                            margin: 0,
                            letterSpacing: "0.5px",
                        }}
                    >
                        {quoteLine1}
                    </motion.p>

                    {/* Line 2 */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            fontFamily: "Georgia, 'Times New Roman', serif",
                            fontSize: "28px",
                            fontWeight: 400,
                            color: "rgba(255, 255, 255, 0.9)",
                            lineHeight: 1.6,
                            margin: 0,
                            letterSpacing: "0.5px",
                        }}
                    >
                        {quoteLine2}
                        {/* Closing quote mark */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            style={{
                                fontFamily: "Georgia, 'Times New Roman', serif",
                                fontSize: "48px",
                                color: "rgba(255, 255, 255, 0.35)",
                                lineHeight: 0,
                                verticalAlign: "-8px",
                                marginLeft: "6px",
                            }}
                        >
                            &rdquo;
                        </motion.span>
                    </motion.p>
                </div>

                {/* Author attribution */}
                <AnimatePresence>
                    {(phase === "author" || phase === "text-fadeout" || phase === "wipe-up") && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                marginTop: "28px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                width: "100%",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: "rgba(255, 255, 255, 0.5)",
                                    letterSpacing: "1px",
                                }}
                            >
                                — Artics Communication
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
