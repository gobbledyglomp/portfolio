'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COLS = 48;
const ROWS = 48;

function WaveGrid() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  // Smoothed mouse — lerps toward real position each frame for a trailing feel
  const smooth = useRef({ x: 0, y: 0 });

  // Build a plane geometry we'll deform manually each frame
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(55, 22, COLS, ROWS);
    return geo;
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(({ clock }, delta) => {
    const pos = geometry.attributes.position;
    const t = clock.getElapsedTime();

    // Lerp smoothed mouse toward real position — gives the dip a trailing weight
    const lerpSpeed = Math.min(delta * 5, 1);
    smooth.current.x += (mouse.current.x - smooth.current.x) * lerpSpeed;
    smooth.current.y += (mouse.current.y - smooth.current.y) * lerpSpeed;

    // Map smoothed mouse to grid space (wider range → more visible wave shift)
    const mx = smooth.current.x * 6;
    const my = smooth.current.y * 6;

    // Gaussian dip params — radius in grid units, depth relative to wave amplitude
    const dipR2 = 4.5 * 4.5; // radius²
    const dipDepth = 1.2;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      // Distance from smoothed mouse position (for ripple origin + dip)
      const dx = x - mx;
      const dy = y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Layered sine waves for an organic ripple
      const z =
        Math.sin(dist * 0.6 - t * 1.4) * 0.35 +
        Math.sin(x * 0.4 + t * 0.6) * 0.18 +
        Math.sin(y * 0.35 - t * 0.5) * 0.12;

      // Gaussian depression under cursor — mesh physically sinks where cursor is
      const dip = Math.exp(-(dx * dx + dy * dy) / dipR2) * dipDepth;

      pos.setZ(i, z - dip);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      // Tilt back so it reads as a receding floor/horizon grid
      rotation={[-Math.PI / 2.6, 0, 0]}
      position={[0, -2.5, -2]}
    >
      <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.09} />
    </mesh>
  );
}

// A second, sparser layer offset in time for depth
function WaveGridSparse() {
  const meshRef = useRef<THREE.Mesh>(null!);

  const geometry = useMemo(() => new THREE.PlaneGeometry(55, 22, 20, 20), []);

  useFrame(({ clock }) => {
    const pos = geometry.attributes.position;
    const t = clock.getElapsedTime() + 1.5; // phase offset

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const dist = Math.sqrt(x * x + y * y);
      const z =
        Math.sin(dist * 0.5 - t * 1.1) * 0.25 +
        Math.sin(x * 0.3 - t * 0.4) * 0.1;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      rotation={[-Math.PI / 2.6, 0, 0]}
      position={[0, -2.5, -2]}
    >
      <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.04} />
    </mesh>
  );
}

export function HeroBackground() {
  // Stay invisible until the WebGL context is actually ready to render.
  // This prevents the grid from "popping in" when the user scrolls to the
  // hero section before WebGL has finished initialising (~300-600ms).
  const [ready, setReady] = useState(false);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 -z-10"
      animate={{ opacity: ready ? 1 : 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <Canvas
        camera={{ position: [0, 3, 8], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: true }}
        scene={{ background: null }}
        onCreated={() => setReady(true)}
      >
        {/* Fog fades the grid edges into the dark background — infinite feel */}
        <fog attach="fog" args={['#0d0d0d', 6, 20]} />
        <WaveGrid />
        <WaveGridSparse />
      </Canvas>
    </motion.div>
  );
}
