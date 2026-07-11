import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const count = 600;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.4 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.03;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.2, 48, 48]} />
        <meshBasicMaterial color="#0b1020" transparent opacity={0.9} />
      </mesh>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.22, 48, 48]} />
        <meshBasicMaterial color="#1e3a8a" wireframe transparent opacity={0.25} />
      </mesh>
      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3.2, 0.015, 16, 100]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
        </mesh>
        <mesh rotation={[0, Math.PI / 3, 0]}>
          <torusGeometry args={[3.4, 0.01, 16, 100]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
        </mesh>
      </group>
      <points geometry={particles}>
        <pointsMaterial size={0.035} color="#60a5fa" transparent opacity={0.8} sizeAttenuation />
      </points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="h-[420px] w-full md:h-[520px]">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
        <Globe />
      </Canvas>
    </div>
  );
}
