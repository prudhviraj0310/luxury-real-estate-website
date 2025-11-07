// components/CoinScene.js
'use client';
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

function Coin({ position, delay }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + delay) * 0.3;
      // Rotation
      meshRef.current.rotation.y += 0.02;
      meshRef.current.rotation.x = Math.sin(time * 0.3 + delay) * 0.1;
    }
  });

  return (
    <group position={position} ref={meshRef}>
      <Cylinder args={[0.3, 0.3, 0.1, 32]}>
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.8}
          roughness={0.2}
          emissive="#FFA500"
          emissiveIntensity={0.3}
        />
      </Cylinder>
      {/* Coin edge */}
      <Cylinder args={[0.28, 0.28, 0.12, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#DAA520"
          metalness={0.9}
          roughness={0.3}
        />
      </Cylinder>
    </group>
  );
}

function CoinsFormation() {
  // Create 3D coin formation spelling "14.40%"
  const coinPositions = [
    // "1"
    [-3, 0, 0], [-3, 0.5, 0], [-3, 1, 0], [-3, 1.5, 0],
    // "4" 
    [-1.5, 0, 0], [-1.5, 0.5, 0], [-1.5, 1, 0],
    [-1, 1, 0], [-0.5, 1, 0],
    [-0.5, 0.5, 0], [-0.5, 0, 0],
    // "."
    [0.3, 0, 0],
    // "4"
    [1, 0, 0], [1, 0.5, 0], [1, 1, 0],
    [1.5, 1, 0], [2, 1, 0],
    [2, 0.5, 0], [2, 0, 0],
    // "0"
    [3, 0, 0], [3, 0.5, 0], [3, 1, 0], [3, 1.5, 0],
    [3.5, 0, 0], [3.5, 1.5, 0],
    [4, 0, 0], [4, 0.5, 0], [4, 1, 0], [4, 1.5, 0],
    // "%"
    [5, 1.5, 0], [5.5, 1, 0], [6, 0.5, 0],
    [5.2, 1.7, 0], [5.8, 0.3, 0],
  ];

  return (
    <>
      {coinPositions.map((pos, i) => (
        <Coin key={i} position={pos} delay={i * 0.1} />
      ))}
    </>
  );
}

export default function CoinScene() {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#00d9ff" intensity={0.5} />
      <spotLight position={[0, 10, 0]} angle={0.3} intensity={0.8} color="#FFD700" />
      
      <CoinsFormation />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}
