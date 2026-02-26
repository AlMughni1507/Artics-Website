"use client";

import { useRef, useState, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

interface BentoCardProps {
    title: string;
    width?: string;
    flex?: number;
    modelRotation?: [number, number, number];
    modelPosition?: [number, number, number];
    modelScale?: number;
}

function BentoModel({ rotation, positionOffset, scaleMultiplier = 1 }: {
    rotation: [number, number, number];
    positionOffset: [number, number, number];
    scaleMultiplier?: number;
}) {
    const { scene } = useGLTF("/models/textured_model.glb");
    const clonedScene = useMemo(() => scene.clone(true), [scene]);
    const meshRef = useRef<THREE.Group>(null);
    const baseY = positionOffset[1];

    const normalizedScale = useMemo(() => {
        const box = new THREE.Box3().setFromObject(clonedScene);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);
        clonedScene.position.sub(center);
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim === 0) return 1;
        return 6 / maxDim; // Scale for cards
    }, [clonedScene]);

    const finalScale = normalizedScale * scaleMultiplier;

    // Apply dark theme material
    useEffect(() => {
        clonedScene.traverse((child: any) => {
            if (child.isMesh && child.material) {
                const oldMat = child.material;
                const newMat = new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color("#070B19"),
                    metalness: 0.9,
                    roughness: 0.1,
                    ior: 1.5,
                    clearcoat: 0.8,
                    clearcoatRoughness: 0.1,
                    iridescence: 0.8,
                    iridescenceIOR: 1.5,
                    iridescenceThicknessRange: [100, 400],
                    emissive: new THREE.Color("#070B19"),
                    emissiveIntensity: 0.1,
                    envMapIntensity: 1.0,
                });
                if (oldMat.map) newMat.map = oldMat.map;
                if (oldMat.normalMap) newMat.normalMap = oldMat.normalMap;
                child.material = newMat;
                child.material.needsUpdate = true;
            }
        });
    }, [clonedScene]);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            // Gentle bobbing
            meshRef.current.position.y = baseY + Math.sin(t * 1.2) * 0.1;

            // Very slow continuous rotation to constantly show new shapes
            meshRef.current.rotation.x = rotation[0] + Math.sin(t * 0.1) * 0.05;
            meshRef.current.rotation.y = rotation[1] + t * 0.15;
            meshRef.current.rotation.z = rotation[2] + Math.cos(t * 0.1) * 0.05;
        }
    });

    return (
        <group ref={meshRef} position={positionOffset} scale={[finalScale, finalScale, finalScale]}>
            <primitive object={clonedScene} />
        </group>
    );
}

export default function BentoCard({ title, width, flex, modelRotation, modelPosition, modelScale }: BentoCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={divRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            style={{
                position: "relative",
                width: width || "100%",
                height: "100%",
                flex: flex || "none",
                minHeight: "300px",
                backgroundColor: "rgba(255,255,255,0.03)",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "32px",
                transition: "border-color 0.3s ease, transform 0.3s ease",
                cursor: "pointer",
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"
            }}
        >
            {/* Spotlight Effect */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: "none",
                    transition: "opacity 0.3s ease-in-out",
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(37,99,235,0.15), transparent 40%)`,
                    zIndex: 2,
                }}
            />

            {/* 3D Model Background */}
            {modelRotation && (
                <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.8, pointerEvents: "none", overflow: "hidden" }}>
                    <Canvas
                        camera={{ position: [0, 0, 8], fov: 45 }}
                        dpr={[1, 1]} // Capped at 1 for performance across 7 canvases
                        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }} // no antialias for performance
                        style={{ background: "transparent" }}
                    >
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.1} />
                            <spotLight position={[10, 5, 10]} angle={0.4} penumbra={1} intensity={6} color="#1E65A7" />
                            <pointLight position={[-8, 12, 5]} intensity={4} color="#0C1124" />
                            <pointLight position={[15, -10, -5]} intensity={2} color="#001D4A" />

                            <BentoModel
                                rotation={modelRotation}
                                positionOffset={modelPosition || [2, -1, 0]}
                                scaleMultiplier={modelScale || 1}
                            />
                            <Environment preset="city" resolution={128} />
                        </Suspense>
                    </Canvas>
                </div>
            )}

            {/* Content Top */}
            <div style={{ zIndex: 2 }}>
                <h3 style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontSize: "26px",
                    lineHeight: 1.2,
                    color: "#EEEEEE",
                    letterSpacing: "-0.5px",
                    maxWidth: "80%",
                    margin: 0
                }}>
                    {title}
                </h3>
            </div>

            {/* Content Bottom (Button) */}
            <div style={{ zIndex: 2 }}>
                <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px 20px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "999px",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                    backgroundColor: isHovered ? "rgba(255,255,255,0.1)" : "transparent"
                }}>
                    Our Portofolios
                </div>
            </div>
        </div>
    );
}
