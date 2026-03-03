"use client";

import { useRef, Suspense, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// Preload the model
useGLTF.preload("/models/textured_model.glb");

// Shared material to avoid re-creation
function useOptimizedMaterial() {
    return useMemo(() => new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#070B19"), // Dark navy matching theme
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
    }), []);
}

function Model({ url, rotation, positionOffset, scaleMultiplier = 1 }: {
    url: string;
    rotation: [number, number, number];
    positionOffset: [number, number, number];
    scaleMultiplier?: number;
}) {
    const { scene } = useGLTF(url);
    const clonedScene = useMemo(() => scene.clone(true), [scene]);
    const meshRef = useRef<THREE.Group>(null);
    const material = useOptimizedMaterial();
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

    // Apply shared material
    useEffect(() => {
        clonedScene.traverse((child: any) => {
            if (child.isMesh) {
                const oldMat = child.material;
                // Reuse the optimized material but keep the maps if they exist
                const meshMat = material.clone();
                if (oldMat.map) meshMat.map = oldMat.map;
                if (oldMat.normalMap) meshMat.normalMap = oldMat.normalMap;
                child.material = meshMat;
            }
        });
    }, [clonedScene, material]);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            const walkSpeed = 0.8;
            const cycle = t * walkSpeed;

            const strideZ = Math.sin(cycle) * 0.15;
            const swayX = Math.cos(cycle) * 0.1;
            const bobY = (Math.cos(cycle * 2) * -0.5 + 0.5) * 0.1;

            const tiltZ = Math.cos(cycle) * 0.02;
            const tiltX = Math.sin(cycle * 2) * 0.01;

            meshRef.current.position.x = positionOffset[0] + swayX;
            meshRef.current.position.y = baseY + bobY;
            meshRef.current.position.z = strideZ;

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
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [isReady, setIsReady] = useState(false);

    // View-based rendering optimization
    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // Fade in effect: set ready after a small delay to mask initial heavy initialization
    useEffect(() => {
        const timer = setTimeout(() => setIsReady(true), 1500); // 1.5s delay for smooth transition
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: isReady ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 5,
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                dpr={[1, 1.5]} // Allow up to 1.5 on high DPI but cap it
                performance={{ min: 0.5 }}
                gl={{
                    alpha: true,
                    antialias: false, // Performance boost: disable antialias
                    stencil: false,
                    depth: true,
                    powerPreference: "high-performance",
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.0,
                }}
                style={{ background: "transparent" }}
                // Demand mode when not visible to save GPU
                frameloop={isVisible ? "always" : "never"}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.15} />

                    {/* Consolidated lighting: use fewer but more effective lights */}
                    <spotLight position={[10, 10, 10]} angle={0.4} penumbra={1} intensity={8} color="#1E65A7" />
                    <pointLight position={[-10, -5, 5]} intensity={3} color="#0C1124" />

                    <Model
                        url={modelUrl}
                        rotation={[0.8, 1.8, 0.5]}
                        positionOffset={[-7.5, -0.5, 0]}
                        scaleMultiplier={0.8}
                    />

                    <Model
                        url={modelUrl}
                        rotation={[-0.4, 5.2, -0.2]}
                        positionOffset={[7.5, -2.0, 0]}
                    />

                    <Environment preset="city" resolution={128} /> {/* Lower env resolution */}
                </Suspense>
            </Canvas>
        </motion.div>
    );
}
