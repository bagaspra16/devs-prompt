'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function EnergySphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#FF8C42"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        emissive="#FF8C42"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
}

const loadingMessages = [
  "Refactoring your prompt...",
  "Enhancing technical precision...",
  "Optimizing developer thought pattern...",
  "Applying best practices...",
  "Finalizing masterpiece...",
];

export default function LoadingScene() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Block scroll when loading
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm overflow-hidden"
    >
      <div className="relative px-4">
        {/* 3D Energy Sphere */}
        <div className="w-48 h-48 md:w-64 md:h-64">
          <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#FF8C42" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#FFD700" />
            <EnergySphere />
          </Canvas>
        </div>

        {/* Loading Text */}
        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 w-full text-center px-4"
        >
          <p className="text-neon-orange font-display text-base md:text-xl font-semibold text-glow">
            {loadingMessages[messageIndex]}
          </p>
        </motion.div>

        {/* Pulsing Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-neon-orange"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-neon-gold"
          />
        </div>
      </div>
    </motion.div>
  );
}
