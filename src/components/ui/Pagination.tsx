"use client";

import { motion } from "framer-motion";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const renderPageNumbers = () => {
        const pages = [];
        const delta = 1;

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - delta && i <= currentPage + delta)
            ) {
                pages.push(
                    <PaginationButton
                        key={i}
                        active={currentPage === i}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </PaginationButton>
                );
            } else if (
                (i === currentPage - delta - 1 && i > 1) ||
                (i === currentPage + delta + 1 && i < totalPages)
            ) {
                pages.push(
                    <div key={i} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        color: "#94A3B8",
                        fontSize: "14px",
                        letterSpacing: "2px",
                        opacity: 0.5
                    }}>
                        ...
                    </div>
                );
            }
        }
        return pages;
    };

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px",
            borderRadius: "12px",
            backgroundColor: "rgba(12, 17, 36, 0.5)", // Blends with #0C1124
            border: "1px solid rgba(255, 255, 255, 0.08)",
            width: "fit-content"
        }}>
            {/* Prev Arrow */}
            <PaginationButton
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                </svg>
            </PaginationButton>

            {/* Page Numbers */}
            <div style={{ display: "flex", gap: "4px" }}>
                {renderPageNumbers()}
            </div>

            {/* Next Arrow */}
            <PaginationButton
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </PaginationButton>
        </div>
    );
}

function PaginationButton({
    children,
    active,
    onClick,
    disabled
}: {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}) {
    return (
        <motion.button
            whileHover={!disabled ? { backgroundColor: active ? "#1D61AB" : "rgba(255, 255, 255, 0.05)" } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
            onClick={onClick}
            disabled={disabled}
            style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                border: "none",
                cursor: disabled ? "not-allowed" : "pointer",
                backgroundColor: active ? "#1D61AB" : "transparent",
                color: active ? "#FFFFFF" : disabled ? "#334155" : "#94A3B8",
                fontSize: "14px",
                fontWeight: 500,
                transition: "all 0.2s ease",
                outline: "none",
                fontFamily: "var(--font-inter)"
            }}
        >
            {children}
        </motion.button>
    );
}
