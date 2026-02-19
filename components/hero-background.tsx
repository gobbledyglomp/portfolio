'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function WireframeShape() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#00E5FF'),
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      }),
    []
  );

  // Track mouse position
  useMemo(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Slow auto-rotation
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;

    // Smooth lerp toward mouse position
    target.current.x = mouse.current.x * 0.3;
    target.current.y = mouse.current.y * 0.3;

    meshRef.current.rotation.x +=
      (target.current.y - meshRef.current.rotation.x * 0.1) * delta * 0.5;
    meshRef.current.rotation.y +=
      (target.current.x - meshRef.current.rotation.y * 0.1) * delta * 0.5;
  });

  const scale = Math.min(viewport.width, viewport.height) * 0.35;

  return (
    <Icosahedron
      ref={meshRef}
      args={[scale, 1]}
      material={material}
    ></Icosahedron>
  );
}

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: true }}
      >
        <WireframeShape />
      </Canvas>
    </div>
  );
}
