import Image from "next/image";
import React from 'react';

// Using simple SVG placeholders for social icons if needed, 
// or Lucide React if available (but sticking to raw SVG for safety)
const LinkedinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM7.12 20.452H3.559V9H7.12V20.452ZM5.34 7.434C4.195 7.434 3.267 6.506 3.267 5.361C3.267 4.217 4.195 3.289 5.34 3.289C6.484 3.289 7.412 4.217 7.412 5.361C7.413 6.506 6.484 7.434 5.34 7.434ZM20.453 20.452H16.892V14.88C16.892 13.552 16.868 11.841 15.044 11.841C13.194 11.841 12.91 13.286 12.91 14.786V20.452H9.352V9H12.774V10.565H12.822C13.298 9.664 14.462 8.715 16.182 8.715C19.775 8.715 20.453 11.08 20.453 14.28V20.452Z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.014 2.286 18.646 2.483 19.034 2.634C19.55 2.834 19.92 3.085 20.306 3.471C20.693 3.858 20.943 4.227 21.144 4.743C21.295 5.131 21.492 5.763 21.545 6.927C21.603 8.193 21.615 8.573 21.615 11.777C21.615 14.981 21.603 15.361 21.545 16.627C21.492 17.791 21.295 18.423 21.144 18.811C20.943 19.327 20.693 19.696 20.306 20.083C19.92 20.47 19.55 20.72 19.034 20.921C18.646 21.072 18.014 21.268 16.85 21.321C15.584 21.379 15.204 21.391 12 21.391C8.796 21.391 8.416 21.379 7.15 21.321C5.986 21.268 5.354 21.072 4.966 20.921C4.45 20.72 4.08 20.47 3.694 20.083C3.307 19.696 3.057 19.327 2.856 18.811C2.705 18.423 2.508 17.791 2.455 16.627C2.397 15.361 2.385 14.981 2.385 11.777C2.385 8.573 2.397 8.193 2.455 6.927C2.508 5.763 2.705 5.131 2.856 4.743C3.057 4.227 3.307 3.858 3.694 3.471C4.08 3.085 4.45 2.834 4.966 2.634C5.354 2.483 5.986 2.286 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C5.775 0.131 4.902 0.333 4.14 0.63C3.354 0.935 2.686 1.341 2.023 2.004C1.359 2.667 0.954 3.336 0.649 4.122C0.352 4.884 0.15 5.757 0.092 7.035C0.034 8.315 0.02 8.723 0.02 11.983C0.02 15.243 0.034 15.651 0.092 16.93C0.15 18.209 0.352 19.082 0.649 19.843C0.954 20.63 1.359 21.298 2.023 21.962C2.686 22.626 3.354 23.031 4.14 23.336C4.902 23.633 5.775 23.835 7.053 23.893C8.333 23.952 8.741 23.966 12 23.966C15.259 23.966 15.667 23.952 16.947 23.893C18.225 23.835 19.098 23.633 19.86 23.336C20.646 23.031 21.314 22.626 21.977 21.962C22.641 21.298 23.046 20.63 23.351 19.843C23.648 19.082 23.85 18.209 23.908 16.93C23.966 15.651 23.98 15.243 23.98 11.983C23.98 8.723 23.966 8.315 23.908 7.035C23.85 5.757 23.648 4.884 23.351 4.122C23.046 3.336 22.641 2.667 21.977 2.004C21.314 1.341 20.646 0.935 19.86 0.63C19.098 0.333 18.225 0.131 16.947 0.072C15.667 0.014 15.259 0 12 0ZM12 5.838C8.604 5.838 5.851 8.591 5.851 11.987C5.851 15.383 8.604 18.136 12 18.136C15.396 18.136 18.149 15.383 18.149 11.987C18.149 8.591 15.396 5.838 12 5.838ZM12 15.973C9.799 15.973 8.014 14.188 8.014 11.987C8.014 9.786 9.799 8.001 12 8.001C14.201 8.001 15.986 9.786 15.986 11.987C15.986 14.188 14.201 15.973 12 15.973ZM18.406 4.154C17.61 4.154 16.963 4.8 16.963 5.596C16.963 6.392 17.61 7.038 18.406 7.038C19.202 7.038 19.849 6.392 19.849 5.596C19.849 4.8 19.202 4.154 18.406 4.154Z" />
    </svg>
);

const TiktokIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95v7.41c-.01 2.66-1.55 5.2-4.04 6.22-2.31.96-5.11.66-7.07-.84-1.92-1.47-2.92-3.88-2.58-6.24.32-2.3 1.83-4.27 3.97-5.18 1.94-.83 4.24-.65 6.01.52.02-1.43.04-2.86.04-4.29-1.87-.71-4-1-5.96-.53-1.89.44-3.55 1.66-4.63 3.32-1.18 1.8-1.46 4.12-.76 6.13.72 2.06 2.37 3.79 4.39 4.6 2.01.81 4.39.81 6.39-.02 2.02-.83 3.65-2.53 4.41-4.57.43-1.15.65-2.38.64-3.62V.02h-4.88z" />
    </svg>
);

const YoutubeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.542 12 3.542 12 3.542s-7.505 0-9.377.508A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.508 9.376.508 9.376.508s7.505 0 9.377-.508a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: "#00101F", // Very dark blue/black background from image
            width: "100%",
            color: "white",
            padding: "80px 48px 48px 48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "var(--font-inter)",
            position: "relative",
            overflow: "hidden"
        }}>
            <div style={{
                width: "100%",
                maxWidth: "1380px",
                display: "flex",
                flexDirection: "column",
                gap: "80px",
                zIndex: 2,
            }}>
                {/* Top Section */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "60px"
                }}>
                    {/* Left Column: Branding */}
                    <div style={{ flex: "1 1 500px", maxWidth: "600px" }}>
                        {/* Logo and Name */}
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
                            {/* Logo SVG Placeholder */}
                            <svg width="80" height="24" viewBox="0 0 120 30" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <text x="0" y="24" fontFamily="Montserrat, sans-serif" fontSize="28" fontWeight="bold" letterSpacing="-1">artics</text>
                            </svg>
                            <span style={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF" }}>Artics Communication</span>
                        </div>

                        {/* Title Hook */}
                        <h2 style={{
                            fontSize: "48px",
                            fontWeight: 700,
                            lineHeight: 1.15,
                            letterSpacing: "-1px",
                            margin: "0 0 40px 0"
                        }}>
                            Think Big Dream Wild<br />
                            Never Stop Learning
                        </h2>

                        <p style={{
                            fontSize: "13px",
                            color: "#6b7280",
                            margin: 0
                        }}>
                            © 2024 Artics. Semua hak dilindungi.
                        </p>
                    </div>

                    {/* Right Columns: Info */}
                    <div style={{
                        display: "flex",
                        gap: "80px",
                        flexWrap: "wrap"
                    }}>
                        {/* Column 1: Location & Email */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "32px", minWidth: "240px" }}>
                            <div>
                                <h4 style={{ color: "#8a94a6", fontSize: "14px", fontWeight: 500, marginBottom: "12px", margin: 0 }}>Lokasi</h4>
                                <p style={{ fontSize: "15px", lineHeight: 1.5, margin: 0, fontWeight: 400, color: "#d1d5db", marginTop: "12px" }}>
                                    Jl. Tebet Barat Dalam VIII<br />
                                    No.12, Kota Jakarta<br />
                                    Selatan, DKI Jakarta 12810
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: "#8a94a6", fontSize: "14px", fontWeight: 500, marginBottom: "12px", margin: 0 }}>Email</h4>
                                <p style={{ fontSize: "15px", margin: 0, fontWeight: 400, color: "#d1d5db", marginTop: "12px" }}>
                                    kontak@artics.co.id
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Contact & Socials */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                            <div>
                                <h4 style={{ color: "#8a94a6", fontSize: "14px", fontWeight: 500, marginBottom: "12px", margin: 0 }}>Kontak</h4>
                                <p style={{ fontSize: "15px", margin: 0, fontWeight: 400, color: "#d1d5db", marginTop: "12px" }}>
                                    +62 811-9721-120
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: "#8a94a6", fontSize: "14px", fontWeight: 500, marginBottom: "12px", margin: 0 }}>Media Sosial</h4>
                                <div style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "12px" }}>
                                    <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", backgroundColor: "#ffffff", borderRadius: "50%", color: "#0B1021" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM7.12 20.452H3.559V9H7.12V20.452ZM5.34 7.434C4.195 7.434 3.267 6.506 3.267 5.361C3.267 4.217 4.195 3.289 5.34 3.289C6.484 3.289 7.412 4.217 7.412 5.361C7.413 6.506 6.484 7.434 5.34 7.434ZM20.453 20.452H16.892V14.88C16.892 13.552 16.868 11.841 15.044 11.841C13.194 11.841 12.91 13.286 12.91 14.786V20.452H9.352V9H12.774V10.565H12.822C13.298 9.664 14.462 8.715 16.182 8.715C19.775 8.715 20.453 11.08 20.453 14.28V20.452Z" /></svg>
                                    </a>
                                    <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", backgroundColor: "#ffffff", borderRadius: "50%", color: "#0B1021" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.014 2.286 18.646 2.483 19.034 2.634C19.55 2.834 19.92 3.085 20.306 3.471C20.693 3.858 20.943 4.227 21.144 4.743C21.295 5.131 21.492 5.763 21.545 6.927C21.603 8.193 21.615 8.573 21.615 11.777C21.615 14.981 21.603 15.361 21.545 16.627C21.492 17.791 21.295 18.423 21.144 18.811C20.943 19.327 20.693 19.696 20.306 20.083C19.92 20.47 19.55 20.72 19.034 20.921C18.646 21.072 18.014 21.268 16.85 21.321C15.584 21.379 15.204 21.391 12 21.391C8.796 21.391 8.416 21.379 7.15 21.321C5.986 21.268 5.354 21.072 4.966 20.921C4.45 20.72 4.08 20.47 3.694 20.083C3.307 19.696 3.057 19.327 2.856 18.811C2.705 18.423 2.508 17.791 2.455 16.627C2.397 15.361 2.385 14.981 2.385 11.777C2.385 8.573 2.397 8.193 2.455 6.927C2.508 5.763 2.705 5.131 2.856 4.743C3.057 4.227 3.307 3.858 3.694 3.471C4.08 3.085 4.45 2.834 4.966 2.634C5.354 2.483 5.986 2.286 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C5.775 0.131 4.902 0.333 4.14 0.63C3.354 0.935 2.686 1.341 2.023 2.004C1.359 2.667 0.954 3.336 0.649 4.122C0.352 4.884 0.15 5.757 0.092 7.035C0.034 8.315 0.02 8.723 0.02 11.983C0.02 15.243 0.034 15.651 0.092 16.93C0.15 18.209 0.352 19.082 0.649 19.843C0.954 20.63 1.359 21.298 2.023 21.962C2.686 22.626 3.354 23.031 4.14 23.336C4.902 23.633 5.775 23.835 7.053 23.893C8.333 23.952 8.741 23.966 12 23.966C15.259 23.966 15.667 23.952 16.947 23.893C18.225 23.835 19.098 23.633 19.86 23.336C20.646 23.031 21.314 22.626 21.977 21.962C22.641 21.298 23.046 20.63 23.351 19.843C23.648 19.082 23.85 18.209 23.908 16.93C23.966 15.651 23.98 15.243 23.98 11.983C23.98 8.723 23.966 8.315 23.908 7.035C23.85 5.757 23.648 4.884 23.351 4.122C23.046 3.336 22.641 2.667 21.977 2.004C21.314 1.341 20.646 0.935 19.86 0.63C19.098 0.333 18.225 0.131 16.947 0.072C15.667 0.014 15.259 0 12 0ZM12 5.838C8.604 5.838 5.851 8.591 5.851 11.987C5.851 15.383 8.604 18.136 12 18.136C15.396 18.136 18.149 15.383 18.149 11.987C18.149 8.591 15.396 5.838 12 5.838ZM12 15.973C9.799 15.973 8.014 14.188 8.014 11.987C8.014 9.786 9.799 8.001 12 8.001C14.201 8.001 15.986 9.786 15.986 11.987C15.986 14.188 14.201 15.973 12 15.973ZM18.406 4.154C17.61 4.154 16.963 4.8 16.963 5.596C16.963 6.392 17.61 7.038 18.406 7.038C19.202 7.038 19.849 6.392 19.849 5.596C19.849 4.8 19.202 4.154 18.406 4.154Z" /></svg>
                                    </a>
                                    <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", backgroundColor: "#ffffff", borderRadius: "50%", color: "#0B1021" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95v7.41c-.01 2.66-1.55 5.2-4.04 6.22-2.31.96-5.11.66-7.07-.84-1.92-1.47-2.92-3.88-2.58-6.24.32-2.3 1.83-4.27 3.97-5.18 1.94-.83 4.24-.65 6.01.52.02-1.43.04-2.86.04-4.29-1.87-.71-4-1-5.96-.53-1.89.44-3.55 1.66-4.63 3.32-1.18 1.8-1.46 4.12-.76 6.13.72 2.06 2.37 3.79 4.39 4.6 2.01.81 4.39.81 6.39-.02 2.02-.83 3.65-2.53 4.41-4.57.43-1.15.65-2.38.64-3.62V.02h-4.88z" /></svg>
                                    </a>
                                    <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", backgroundColor: "#ffffff", borderRadius: "50%", color: "#0B1021" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.542 12 3.542 12 3.542s-7.505 0-9.377.508A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.508 9.376.508 9.376.508s7.505 0 9.377-.508a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Map Card */}
                <a
                    href="https://maps.google.com/maps?q=Artics+Communication"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "block",
                        position: "relative",
                        width: "100%",
                        height: "300px",
                        borderRadius: "16px",
                        overflow: "hidden",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        cursor: "pointer",
                        textDecoration: "none"
                    }}
                >
                    <iframe
                        src="https://maps.google.com/maps?q=Artics+Communication&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{
                            border: 0,
                            filter: "grayscale(1) invert(0.9) contrast(1.2) opacity(0.6)",
                            pointerEvents: "none", // Allow clicks to pass through to the anchor tag
                        }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Artics Communication"
                    />

                    {/* Google Reviews Card */}
                    <div style={{
                        position: "absolute",
                        top: "24px",
                        left: "24px",
                        backgroundColor: "#363636", // From color palette
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        padding: "20px 24px",
                        borderRadius: "16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        maxWidth: "340px",
                        pointerEvents: "none", // Ensure clicks on the card also trigger the anchor
                    }}>
                        <h4 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "#FFFFFF" }}>Artics Communication</h4>
                        <p style={{ margin: 0, fontSize: "13px", color: "#A0A0A0", lineHeight: 1.5 }}>
                            Jalan Durian Mateng No 12 Bogor Timur, Bogor, Jawa Barat
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                            <span style={{ fontSize: "14px", fontWeight: 600, color: "#FFFFFF" }}>5.0</span>
                            <div style={{ display: "flex", gap: "2px", color: "#FED150" }}>
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <span style={{ fontSize: "13px", color: "#A0A0A0", marginLeft: "4px" }}>718.372 Penilaian</span>
                        </div>
                    </div>
                </a>
            </div>
        </footer>
    );
}
