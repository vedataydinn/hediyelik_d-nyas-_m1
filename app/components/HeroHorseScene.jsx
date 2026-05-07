"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";

function RunningHorse({ scrollProgress = 0 }) {
  const groupRef = useRef(null);
  const legs = useRef([]);

  const legOffsets = useMemo(() => [0, Math.PI, Math.PI, 0], []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const base = Math.min(scrollProgress, 1.8);

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.2 - base * 0.9;
      groupRef.current.position.y = Math.sin(t * 5) * 0.04;
      groupRef.current.position.z = Math.sin(t * 0.9) * 0.25;
    }

    legs.current.forEach((leg, idx) => {
      if (!leg) return;
      leg.rotation.x = Math.sin(t * 8 + legOffsets[idx]) * 0.45;
    });
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]} scale={1.05}>
      <mesh castShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[2.2, 0.85, 0.7]} />
        <meshStandardMaterial color="#9a5d2d" metalness={0.2} roughness={0.35} />
      </mesh>

      <mesh castShadow position={[1.15, 0.85, 0]}>
        <boxGeometry args={[0.7, 0.55, 0.6]} />
        <meshStandardMaterial color="#a86736" metalness={0.2} roughness={0.3} />
      </mesh>

      <mesh castShadow position={[1.55, 1.05, 0]}>
        <boxGeometry args={[0.42, 0.24, 0.28]} />
        <meshStandardMaterial color="#b1703b" metalness={0.2} roughness={0.28} />
      </mesh>

      <mesh castShadow position={[-1.3, 0.85, 0]}>
        <boxGeometry args={[0.75, 0.15, 0.15]} />
        <meshStandardMaterial color="#8b4c23" />
      </mesh>

      {[
        [-0.75, -0.3, -0.24],
        [-0.75, -0.3, 0.24],
        [0.75, -0.3, -0.24],
        [0.75, -0.3, 0.24],
      ].map((pos, idx) => (
        <group key={idx} position={pos} ref={(el) => (legs.current[idx] = el)}>
          <mesh castShadow position={[0, -0.32, 0]}>
            <boxGeometry args={[0.22, 0.75, 0.22]} />
            <meshStandardMaterial color="#7a3f1e" />
          </mesh>
          <mesh castShadow position={[0, -0.78, 0]}>
            <boxGeometry args={[0.2, 0.24, 0.2]} />
            <meshStandardMaterial color="#5b2b12" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function HeroHorseScene({ scrollProgress = 0 }) {
  return (
    <div className="horse-scene-wrap" aria-hidden="true">
      <Canvas shadows dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 1.2, 5]} fov={45} />
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          intensity={2}
          color="#ffe8b1"
          position={[3, 5, 3]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
          <RunningHorse scrollProgress={scrollProgress} />
        </Float>
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#1d1a2f" metalness={0.1} roughness={0.9} />
        </mesh>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
