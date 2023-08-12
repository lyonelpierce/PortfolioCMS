"use client";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

interface HeroContentProps {
  info: string[];
}

const HeroContent: React.FC<HeroContentProps> = ({ info }) => {
  return (
    <section
      id="home"
      className="flex flex-row justify-between items-center min-h-screen"
    >
      <div className="w-[40%]">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
          {info[0]}
        </h1>
        <h2 className="font-semibold my-3">{info[1]}</h2>
        <button className="border border-[#f66e4c] p-3 px-5 rounded-lg font-bold uppercase text-[#f66e4c] hover:bg-[#f66e4c] hover:text-[#1f1f1f]">
          Get In Touch
        </button>
      </div>
      <div className="w=[60%] relative">
        <div className="bg-[#f66e4c] hero-container"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <Canvas
            shadows
            gl={{ antialias: true }}
            camera={{ position: [5, 2, 11], fov: 35 }}
            className="cursor-pointer"
          >
            <Experience />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
