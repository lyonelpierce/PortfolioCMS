import { OrbitControls } from "@react-three/drei";
import { Hero } from "./Hero";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={2.5} />
      <directionalLight
        intensity={3}
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />
      <OrbitControls enableZoom={false} />
      <Hero scale={3} position={[0, -2.5, 0]} />
    </>
  );
};
