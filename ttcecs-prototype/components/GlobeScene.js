// components/GlobeScene.js
'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import { Suspense } from 'react';

function LocationPin({ position, name, members, onClick, isActive }) {
  return (
    <group position={position} onClick={onClick}>
      {/* Pin marker */}
      <mesh>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          color={isActive ? "#00ff00" : "#00d9ff"}
          emissive={isActive ? "#00ff00" : "#00d9ff"}
          emissiveIntensity={isActive ? 0.8 : 0.5}
        />
      </mesh>
      
      {/* Pulse ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.05, 0.08, 32]} />
        <meshBasicMaterial color="#00d9ff" opacity={0.5} transparent />
      </mesh>
      
      {/* Tooltip when active */}
      {isActive && (
        <Html distanceFactor={10}>
          <div className="glass px-3 py-2 rounded-lg text-xs whitespace-nowrap pointer-events-none">
            <div className="font-bold">{name}</div>
            <div className="text-electric">{members}</div>
          </div>
        </Html>
      )}
    </group>
  );
}

function EarthGlobe({ onPinClick, activePin }) {
  const locations = [
    { name: 'Anna Nagar (HQ)', members: '2,500+', position: [1.2, 0.5, 0.8], address: 'Anna Nagar West, Chennai 600040' },
    { name: 'T Nagar', members: '1,800+', position: [1.15, 0.45, 0.85], address: 'T Nagar, Chennai' },
    { name: 'Arumbakkam', members: '1,200+', position: [1.25, 0.55, 0.75], address: 'Arumbakkam, Chennai' },
    { name: 'Kilambakkam', members: '800+', position: [1.1, 0.35, 0.9], address: 'Kilambakkam, Chennai' },
    { name: 'Coimbatore', members: '600+', position: [0.9, 0.7, 1.0], address: 'Coimbatore Branch' },
    { name: 'Nagercoil', members: '400+', position: [1.0, 0.2, 1.1], address: 'Nagercoil Branch' },
  ];

  return (
    <Suspense fallback={null}>
      <mesh rotation={[0.3, 0, 0]}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshStandardMaterial
          color="#072033"
          roughness={0.7}
          metalness={0.1}
          emissive="#00d9ff"
          emissiveIntensity={0.05}
        />
      </mesh>
      
      {/* Location pins */}
      {locations.map((loc) => (
        <LocationPin
          key={loc.name}
          position={loc.position}
          name={loc.name}
          members={loc.members}
          onClick={() => onPinClick(loc)}
          isActive={activePin?.name === loc.name}
        />
      ))}
      
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </Suspense>
  );
}

export default function GlobeScene({ onPinClick, activePin }) {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#00d9ff" />
      <EarthGlobe onPinClick={onPinClick} activePin={activePin} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}
