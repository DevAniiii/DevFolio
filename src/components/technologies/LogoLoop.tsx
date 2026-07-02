

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiGit,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiNpm,
  SiPostman,
  SiLinux,
  SiHtml5,
} from "react-icons/si";
import LogoLoop from "../ui/LogoLoop";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "NPM", icon: SiNpm, color: "#CB3837" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
];
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const techLogos = technologies.map((tech) => {
  const Icon = tech.icon;

  return {
    node: (
      <div className="cursor-target flex items-center gap-3 h-14 px-6 min-w-[180px] rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-violet-500/40">
        <Icon className="text-2xl shrink-0" style={{ color: tech.color }} />
        <span className=" text-sm font-medium text-white">{tech.name}</span>
      </div>
    ),
  };
});



export default function About() {
  return (
    <>
      <section id="about" className="relative overflow-hidden py-10">
        {/*<div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 mb-6"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#667eea40] bg-[#667eea1a] px-4 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-[#1F64A7] shadow-[0_0_8px_#1F64A7]" />
              <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/70">
                Technology Stack
              </span>
            </div>

            <h2 className="font-[font4] text-center text-4xl md:text-2xl font-semibold text-white">
              Technologies I Work With
            </h2>
          </motion.div>
        </div>*/}
        <div className="w-full flex flex-col gap-6 mt-12">
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={30}
            gap={24}
            pauseOnHover
            fadeOut
            fadeOutColor="#1a0018"
          />

          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="right"
            logoHeight={30}
            gap={24}
            pauseOnHover
            fadeOut
            fadeOutColor="#1a0018"
          />
        </div>
      </section>
    </>
  );
}
