export default function HeroBadge() {
    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "999px",
                padding: "4px 20px 4px 4px",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                background: "rgba(11, 22, 65, 0.3)",
                marginBottom: "32px",
            }}
        >
            {/* Inner Pill - Artics Communication */}
            <span
                style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    background: "linear-gradient(90deg, #3582CB 0%, #1E65A7 100%)",
                    padding: "8px 24px",
                    borderRadius: "999px",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    boxShadow: "inset 0 1px 2px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.1)",
                }}
            >
                ARTICS COMMUNICATION
            </span>

            {/* Right segment - Tagline */}
            <span
                style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "rgba(255, 255, 255, 0.9)",
                    marginLeft: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                }}
            >
                Strategic &amp; Creative Digital Partner
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ opacity: 0.9, marginTop: "1px" }}
                >
                    <path
                        d="M9 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        </div>
    );
}
