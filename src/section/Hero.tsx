import BackgroundVideo from "@/components/hero/BackgroundVideo";
import HeroTerminal from "@/components/hero/HeroTerminal";
import HeroContent from "@/components/hero/HeroContent";
import Particles from "@/components/hero/Particles";
export default function Hero() {
  return (
    <section id="home" className="relative  bg-black overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <BackgroundVideo />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-10">
        <Particles particleColors={["#2168AC"]} />
      </div>

      {/* Content layer */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[90rem] flex-col justify-center gap-12 px-6 py-28 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="w-full lg:w-[42%]">
          <HeroContent />
        </div>

        <div className="flex w-full justify-center lg:w-auto lg:justify-end">
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}
