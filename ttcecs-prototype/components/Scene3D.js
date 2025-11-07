// components/Scene3D.js
'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

function AnimatedSphere() {
  return (
    <Suspense fallback={null}>
      <Sphere args={[1.2, 128, 128]} scale={2}>
        <MeshDistortMaterial
          color="#00d9ff"
          attach="material"
          distort={0.45}
          speed={1.4}
          roughness={0.2}
        />
      </Sphere>
    </Suspense>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <AnimatedSphere />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </Canvas>
  );
}
