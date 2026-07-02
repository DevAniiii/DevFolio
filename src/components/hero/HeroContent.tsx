import TextType from "../TextType";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function HeroContent() {
  const heroRef = useRef(null);
   const zoomRef = useRef(null);
   const stRef = useRef<ScrollTrigger | null>(null);
 
   useGSAP(() => {
     const heroEl = heroRef.current;
     const zoomEl = zoomRef.current;
     if (!heroEl || !zoomEl) return;
 
     const mm = gsap.matchMedia();
 
     mm.add(
       {
         mobile: "(max-width: 767px)",
         tablet: "(min-width: 768px) and (max-width: 1023px)",
         desktop: "(min-width: 1024px)",
         reduce: "(prefers-reduced-motion: reduce)",
         short: "(max-height: 650px)",
       },
        (ctx) => {
          const c = ctx.conditions;
          if (!c) return;
          const { mobile, tablet, desktop, reduce, short } = c;
 
         if (reduce) {
           gsap.set(zoomEl, { clearProps: "transform,opacity" });
           return;
         }
 
         // tune these per screen so it feels consistent
         const scaleTo = mobile ? 6 : tablet ? 8 : 10;
         const endDist = short ? "+=55%" : mobile ? "+=70%" : "+=80%";
 
         const tl = gsap.timeline({
           defaults: { ease: "none" },
           scrollTrigger: {
             trigger: heroEl,
             start: "top top",
             end: endDist,
             scrub: 1.2,
             pin: true,
             anticipatePin: 1,
             invalidateOnRefresh: true,
             id: "heroPin",
           },
         });
 
         // make sure we start clean when switching breakpoints
         gsap.set(zoomEl, { scale: 1, opacity: 1, force3D: true });
 
         tl.to(zoomEl, { scale: scaleTo, opacity: 0 });
 
          stRef.current = tl.scrollTrigger ?? null;
         return () => {
           tl.scrollTrigger?.kill();
           tl.kill();
         };
       }
     );
 
     return () => mm.revert();
   }, []);

  return (
    <div className="w-full max-w-[42rem]" ref={heroRef}>
      {" "}
      <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#667eea40] bg-[#667eea1a] px-4 py-1.5">
        {" "}
        <div className="h-2 w-2 rounded-full bg-[#1F64A7] shadow-[0_0_8px_#1F64A7]" />{" "}
        <span ref={zoomRef}  className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/70">
          {" "}
          Full Stack Developer ( MERN ){" "}
        </span>{" "}
      </div>{" "}
      <div className="mb-6 ">
        <span className="text-2xl font-[font4] font-extrabold  uppercase tracking-[0.3em] text-white sm:text-2xl lg:text-3xl">
          ANIRBAN
        </span>
        <span className="text-2xl font-[font4] font-extrabold  uppercase tracking-[0.3em] text-[#2167AB] sm:text-2xl lg:text-3xl">
          BANERJEE
        </span>
      </div>
      <h1 className="font-[font4] text-3xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-6xl">
        {" "}
        I Engineer <br />{" "}
        <div className="mt-1 w-4xl text-[#2167AB]">
          {" "}
          <TextType
            text={[
              "Full-Stack Applications",
              "Responsive Websites",
              "Scalable Platforms",
              "Dynamic Web Apps",
            ]}
            typingSpeed={60}
            pauseDuration={1500}
            deletingSpeed={50}
            showCursor
            cursorCharacter="_"
            cursorBlinkDuration={0.5}
          />{" "}
        </div>{" "}
      </h1>{" "}
      <p className="text-font[font2] mt-6 max-w-[34rem] text-lg leading-9 text-gray-400">
        {" "}
        I build fast, responsive, and scalable web applications using the MERN
        stack. Passionate about creating clean user experiences, secure
        backends, and modern digital products.{" "}
      </p>{" "}
      <Link href="#contact" className="cursor-target   inline-flex  mt-6 cursor-pointer rounded-xl bg-gradient-to-r from-[#0b3359] to-[#05325c] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(42,119,189,0.45)]">
        {" "}
        Start a Project{" "}
      </Link>{" "}
      <motion.button
        aria-label="Scroll to about section"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/80 md:flex"
      >
        {" "}
        <span className="text-[10px] uppercase tracking-[0.25em]">
          {" "}
          Scroll{" "}
        </span>{" "}
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          {" "}
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-white/70"
          />{" "}
        </span>{" "}
      </motion.button>{" "}
    </div>
  );
}
