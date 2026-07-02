import Particles from "@/components/hero/Particles";

export default function Hero() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative h-full w-screen flex pl-[12vh]">
        <Particles
          particleCount={1000}
          particleSpread={10}
          speed={0.015}
          particleColors={["#376FA3"]}
          moveParticlesOnHover={false}
          particleHoverFactor={0.1}
          alphaParticles={false}
          particleBaseSize={90}
          sizeRandomness={0.2}
          cameraDistance={15}
          disableRotation={false}
        />
      </div>
    </div>
  );
}
