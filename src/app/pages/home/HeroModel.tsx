"use client";

import { useRef, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

// Preload the model
useGLTF.preload("/models/textured_model.glb");

function Model({ url, rotation, positionOffset, scaleMultiplier = 1 }: {
    url: string;
    rotation: [number, number, number];
    positionOffset: [number, number, number];
    scaleMultiplier?: number;
}) {
    const { scene } = useGLTF(url);
    const clonedScene = useMemo(() => scene.clone(true), [scene]);
    const meshRef = useRef<THREE.Group>(null);
    const baseY = positionOffset[1];

    // Auto-scale + center
    const normalizedScale = useMemo(() => {
        const box = new THREE.Box3().setFromObject(clonedScene);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);
        clonedScene.position.sub(center);
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim === 0) return 1;
        return 7 / maxDim;
    }, [clonedScene]);

    const finalScale = normalizedScale * scaleMultiplier;

    // Boost material for glossy iridescent look
    useEffect(() => {
        clonedScene.traverse((child: any) => {
            if (child.isMesh && child.material) {
                // Ensure we are using MeshPhysicalMaterial for advanced properties
                const oldMat = child.material;
                const newMat = new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color("#070B19"), // Dark navy matching theme
                    metalness: 0.9,
                    roughness: 0.1, // Slightly rougher to diffuse reflections
                    ior: 1.5,
                    clearcoat: 0.8,
                    clearcoatRoughness: 0.1,
                    iridescence: 0.8, // Reduced iridescence
                    iridescenceIOR: 1.5,
                    iridescenceThicknessRange: [100, 400],
                    emissive: new THREE.Color("#070B19"), // Theme dark blue
                    emissiveIntensity: 0.1, // Much darker
                    envMapIntensity: 1.0, // Reduced reflections
                });

                // Transfer map if exists
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

            // 1. "Walking" cycle simulation (SOFTENED)
            // We use a specific frequency for the walk cycle (slightly slower now)
            const walkSpeed = 0.8;
            const cycle = t * walkSpeed;

            // Forward/backward stride (Z-axis) - very subtle
            const strideZ = Math.sin(cycle) * 0.15;

            // Side-to-side sway (X-axis) - very subtle
            const swayX = Math.cos(cycle) * 0.1;

            // Vertical bobbing (Y-axis) - gentle bounce
            const bobY = Math.abs(Math.sin(cycle)) * 0.1;

            // Slight tilting to sell the weight shift - extremely subtle
            const tiltZ = Math.cos(cycle) * 0.02;
            const tiltX = Math.sin(cycle * 2) * 0.01;

            // Apply positions with smooth lerping (no mouse parallax)
            meshRef.current.position.x = THREE.MathUtils.lerp(
                meshRef.current.position.x,
                positionOffset[0] + swayX,
                0.1
            );

            meshRef.current.position.y = THREE.MathUtils.lerp(
                meshRef.current.position.y,
                baseY + bobY,
                0.1
            );

            meshRef.current.position.z = THREE.MathUtils.lerp(
                meshRef.current.position.z,
                strideZ,
                0.1
            );

            // Apply base rotation + dynamic walking tilts
            meshRef.current.rotation.set(
                rotation[0] + tiltX,
                rotation[1],
                rotation[2] + tiltZ
            );
        }
    });

    return (
        <group ref={meshRef} position={positionOffset} rotation={rotation} scale={[finalScale, finalScale, finalScale]}>
            <primitive object={clonedScene} />
        </group>
    );
}

// Single canvas with both models
export default function HeroModels() {
    const modelUrl = "/models/textured_model.glb";

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 5,
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                dpr={[1, 1.5]} // Capped at 1.5 for performance on high-DPI

                gl={{
                    alpha: true,
                    antialias: true,
                    stencil: false,
                    powerPreference: "high-performance",
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.0, // Brighter for more vibrant colors
                }}
                style={{ background: "transparent" }}
                frameloop="always"
                performance={{ min: 0.5 }}
            >
                <Suspense fallback={null}>
                    {/* Darker, moodier lighting matching the theme */}
                    <ambientLight intensity={0.1} />

                    {/* Theme blue core light (softer) */}
                    <spotLight position={[10, 5, 10]} angle={0.4} penumbra={1} intensity={6} color="#1E65A7" />

                    {/* Deep navy fill light */}
                    <pointLight position={[-8, 12, 5]} intensity={4} color="#0C1124" />

                    {/* Subtle deep blue rim light */}
                    <pointLight position={[15, -10, -5]} intensity={2} color="#001D4A" />

                    {/* Left model - Slightly smaller and adjusted pose */}
                    <Model
                        url={modelUrl}
                        rotation={[0.8, 1.8, 0.5]}
                        positionOffset={[-7.5, -0.5, 0]}
                        scaleMultiplier={0.8}
                    />

                    {/* Right model - Rotated to match screenshot "U" highlight */}
                    <Model
                        url={modelUrl}
                        rotation={[-0.4, 5.2, -0.2]}
                        positionOffset={[7.5, -2.0, 0]}
                    />

                    <Environment preset="city" resolution={256} />
                </Suspense>
            </Canvas>
        </div>
    );
}
