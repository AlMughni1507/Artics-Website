"use client";

import { useRef, useState, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    modelRotation?: [number, number, number];
    modelPosition?: [number, number, number];
    modelScale?: number;
    onHoverChange?: (hovered: boolean) => void;
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
                child.material = newMat;
                child.material.needsUpdate = true;
            }
        });
    }, [clonedScene]);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            // Gentle bobbing
            meshRef.current.position.y = baseY + Math.sin(t * 0.8) * 0.05;
            // Fixed rotation based on props
            meshRef.current.rotation.set(rotation[0], rotation[1], rotation[2]);
        }
    });

    return (
        <group ref={meshRef} position={positionOffset} scale={[finalScale, finalScale, finalScale]}>
            <primitive object={clonedScene} />
        </group>
    );
}

export default function ServiceCard({ title, description, modelRotation, modelPosition, modelScale, onHoverChange }: ServiceCardProps) {
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
            onMouseEnter={() => {
                setIsHovered(true);
                onHoverChange?.(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                onHoverChange?.(false);
            }}
            onMouseMove={handleMouseMove}
            style={{
                position: "relative",
                width: "100%",
                minHeight: "240px",
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "32px 64px",
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
                    background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(37,99,235,0.12), transparent 40%)`,
                    zIndex: 1,
                }}
            />

            {/* Content Left */}
            <div style={{ zIndex: 2, display: "flex", flexDirection: "column", gap: "16px", flex: 1, maxWidth: "600px" }}>
                <h3 style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: 1.1,
                    color: "#EEEEEE",
                    letterSpacing: "-0.5px",
                    margin: 0
                }}>
                    {title}
                </h3>
                <p style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    color: "#A0A0A0",
                    lineHeight: 1.6,
                    margin: 0,
                    maxWidth: "480px"
                }}>
                    {description}
                </p>
            </div>

            {/* 3D Model Right */}
            {modelRotation && (
                <div style={{
                    position: "relative",
                    width: "300px",
                    height: "240px",
                    zIndex: 2,
                    pointerEvents: "none",
                    // Masking to blend edges
                    maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
                }}>
                    <Canvas
                        camera={{ position: [0, 0, 8], fov: 45 }}
                        dpr={1}
                        performance={{ min: 0.5 }}
                        gl={{ alpha: true, antialias: true, powerPreference: "high-performance", stencil: false, depth: true }}
                        style={{ background: "transparent" }}
                    >
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.4} />
                            <pointLight position={[10, 10, 10]} intensity={3} color="#1E65A7" />
                            <Environment preset="city" resolution={32} />

                            <BentoModel
                                rotation={modelRotation}
                                positionOffset={modelPosition || [0, 0, 0]}
                                scaleMultiplier={modelScale || 1.8}
                            />
                        </Suspense>
                    </Canvas>
                </div>
            )}
        </div>
    );
}
