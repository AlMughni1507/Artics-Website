"use client";

import { useState, useCallback } from "react";
import LoadingScreen from "./LoadingScreen";
import { AnimatePresence } from "framer-motion";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [showChildren, setShowChildren] = useState(false);

    const handleFadeStart = useCallback(() => {
        // Start showing children BEHIND the loading screen fade out
        // so that hero animations begin playing
        setShowChildren(true);
    }, []);

    const handleLoadingComplete = useCallback(() => {
        // Loading screen is fully faded out, unmount it
        setLoading(false);
    }, []);

    return (
        <>
            <AnimatePresence>
                {loading && (
                    <LoadingScreen
                        onWipeStart={handleFadeStart}
                        onComplete={handleLoadingComplete}
                    />
                )}
            </AnimatePresence>

            {/* Children rendered when fade out starts — animations begin behind the fading screen */}
            {showChildren && children}
        </>
    );
}
