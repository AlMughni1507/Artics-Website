"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface VideoCardProps {
    title: string;
    description: string;
    videoUrl: string; // the link to full video (youtube/drive)
    previewUrl?: string; // a short 5s clip or gif 
    thumbnail?: StaticImageData | string;
}

export default function VideoCard({ title, description, videoUrl, previewUrl, thumbnail }: VideoCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Helper to extract YouTube ID
    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    // Helper to extract Google Drive ID
    const getDriveId = (url: string) => {
        const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
        return match ? match[1] : null;
    };

    // Helper to extract Instagram ID
    const getIgId = (url: string) => {
        const match = url.match(/(?:reel|reels|p)\/([a-zA-Z0-9_-]+)/);
        return match ? match[1] : null;
    };

    const youtubeId = getYoutubeId(videoUrl);
    const driveId = getDriveId(videoUrl);
    const igId = getIgId(videoUrl);

    return (
        <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                width: "420px",
                height: "560px",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                overflow: "hidden",
                textDecoration: "none",
                flexShrink: 0,
                transform: isHovered ? "scale(0.98)" : "scale(1)",
                transition: "transform 0.3s ease",
                backgroundColor: "rgba(255, 255, 255, 0.03)"
            }}
        >
            {/* Background Image/Video */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#111827", // Dark gray fallback
                zIndex: 0,
                overflow: "hidden"
            }}>
                {youtubeId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&showinfo=0`}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "300%",
                            height: "100%",
                            transform: "translate(-50%, -50%) " + (isHovered ? "scale(1.05)" : "scale(1)"),
                            border: "none",
                            pointerEvents: "none",
                            transition: "transform 0.5s ease"
                        }}
                        allow="autoplay; encrypted-media"
                    />
                ) : driveId ? (
                    <div style={{ width: "100%", height: "100%", position: "relative" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`https://lh3.googleusercontent.com/d/${driveId}`}
                            alt="Drive Video Thumbnail"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transform: isHovered ? "scale(1.05)" : "scale(1)",
                                transition: "transform 0.5s ease"
                            }}
                        />
                        {/* Play Icon Overlay */}
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            border: "2px solid rgba(255,255,255,0.8)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: isHovered ? 1 : 0.8,
                            transition: "all 0.3s ease",
                            pointerEvents: "none"
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "4px" }}>
                                <path d="M5 3l14 9-14 9V3z" />
                            </svg>
                        </div>
                    </div>
                ) : igId ? (
                    <iframe
                        src={`https://www.instagram.com/p/${igId}/embed/`}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: "none",
                            transform: isHovered ? "scale(1.02)" : "scale(1)",
                            transition: "transform 0.5s ease"
                        }}
                        scrolling="no"
                        allowTransparency={true}
                    />
                ) : thumbnail ? (
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        style={{
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                            transform: isHovered ? "scale(1.05)" : "scale(1)"
                        }}
                    />
                ) : (
                    <div style={{
                        width: "100%", height: "100%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "rgba(255,255,255,0.2)"
                    }}>
                        {/* Empty fallback */}
                    </div>
                )}
            </div>

            {/* Gradient Overlay for Text Legibility */}
            <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "60%",
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
                zIndex: 1
            }} />

            {/* Content Content Container */}
            <div style={{
                position: "relative",
                zIndex: 2,
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
            }}>
                <div style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#D1D5DB", // Tailwind gray-300
                }}>
                    {title}
                </div>
                <h3 style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: 1.2,
                    color: "#FFFFFF",
                    margin: 0,
                    letterSpacing: "-0.5px"
                }}>
                    {description}
                </h3>
            </div>

            {/* Play Button Overlay (Visible on Hover) */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0.8})`,
                opacity: isHovered ? 1 : 0,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: 3,
                width: "64px",
                height: "64px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(8px)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255, 255, 255, 0.5)"
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="white" />
                </svg>
            </div>
        </a>
    );
}
