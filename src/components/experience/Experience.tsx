// 

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const TIMELINE = [
  {
    date: "JAN 2022 – DEC 2024",
    title: "Python Automation Developer",
    org: "Freelance (Self-Employed)",
    desc: "Developed custom Python automation scripts, Telegram bots, web scrapers, and REST API integrations for clients using Selenium, BeautifulSoup, Requests, and Python.",
  },
  {
    date: "2024 – PRESENT",
    title: "Bachelor of Computer Applications",
    org: "Brainware University",
    desc: "Pursuing BCA with a focus on Full Stack Development, databases, software engineering, and modern web technologies.",
  },
  {
    date: "2025",
    title: "Brainware University Student Portal",
    org: "Academic Project",
    desc: "Built a MERN-based university management portal with JWT authentication, RBAC, attendance tracking, grade management, announcements, and an interactive GSAP-powered interface.",
  },
  {
    date: "2025",
    title: "Internship Check",
    org: "Academic Project",
    desc: "Developed a trust verification platform enabling students to verify internship opportunities, check company trust scores, and report suspicious listings with RBAC authentication.",
  },
  {
    date: "2025",
    title: "DevToolKit",
    org: "Personal Project",
    desc: "Created a TypeScript-based developer toolkit featuring JWT inspection, Base64 encoding/decoding, JSON formatting, and real-time processing utilities.",
  },
  {
    date: "PRESENT",
    title: "Full Stack Developer",
    org: "Seeking Internship Opportunities",
    desc: "Building scalable MERN and Next.js applications while actively seeking Full Stack / MERN Developer internship opportunities.",
  },
];

/**
 * @author Sisvanthkumar Sathivadivel
 * @returns Experience component that renders a vertical timeline of professional milestones. Each timeline item animates into view as the user scrolls, with a line that fills up to indicate progress through the timeline. The component uses GSAP for scroll-triggered animations, creating an engaging way to showcase career highlights and achievements.
 */
export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const lineFillRef = useRef(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      const wrap = timelineRef.current;
      const items = gsap.utils.toArray(".tl-item", wrap);

      // Initial states
      (items as Element[]).forEach((item) => {
        const card = item.querySelector(".tl-card");
        const dot = item.querySelector(".tl-dot");

        gsap.set(card, { opacity: 0.18, y: 60, filter: "blur(10px)" });
        gsap.set(dot, { scale: 0.9, opacity: 0.55 });
      });

      // Line fill (grows as you scroll through the timeline)
      gsap.set(lineFillRef.current, { scaleY: 0, transformOrigin: "top" });
      gsap.to(lineFillRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top 60%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      // Activate item when it hits center-ish
      (items as Element[]).forEach((item) => {
        const card = item.querySelector(".tl-card");
        const dot = item.querySelector(".tl-dot");
        
        if (!card || !dot) return;

        ScrollTrigger.create({
          trigger: item,
          start: "top 55%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.9,
                ease: "power3.out",
              });
              gsap.to(dot, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out",
              });
              item.classList.add("is-active");
            } else {
              gsap.to(card, {
                opacity: 0.18,
                y: 60,
                filter: "blur(10px)",
                duration: 0.7,
                ease: "power3.out",
              });
              gsap.to(dot, {
                scale: 0.9,
                opacity: 0.55,
                duration: 0.35,
                ease: "power3.out",
              });
              item.classList.remove("is-active");
            }
          },
        });
      });
      
      ScrollTrigger.refresh();
    },
    { scope: sectionRef }
  );

  return (
    <section className="relative  w-full font-sans text-white pt-[clamp(40px,6vw,90px)] pb-[clamp(60px,8vw,110px)]" ref={sectionRef} id="timeline">
      {/* Hero heading like your video */}
      <div className="mb-[clamp(24px,5vw,56px)] flex flex-col items-center px-[clamp(16px,4vw,40px)] text-center">
        <h2 className="mb-4 text-3xl font-[font2] font-semibold leading-[0.95]">Professional Path</h2>
        <p className="m-0 max-w-[62ch] text-[clamp(0.95rem,1.5vw,1rem)] leading-[1.7] text-white/60">
          A timeline of key milestones—training, internships, and production roles
          focused on scalable web platforms.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full px-[clamp(14px,4vw,60px)]" ref={timelineRef}>
        <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 hidden w-[2px] -translate-x-1/2 md:flex lg:block max-[900px]:hidden">
          <span className="absolute left-0 top-0 h-full w-[2px] bg-white/8" />
          <span className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-[linear-gradient(to_bottom,#c46b1f,rgba(196,107,31,0.15))]" ref={lineFillRef} />
        </div>

        {TIMELINE.map((t, i) => {
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <div className={`tl-item relative flex items-center py-[clamp(26px,4vw,44px)] ${side}`} key={`${t.date}-${i}`}>
              <div
                className={`tl-side tl-left flex flex-1 min-w-0 justify-end pr-[clamp(18px,4vw,52px)]
                ${side === "right"
                  ? "max-[900px]:hidden"
                  : "max-[900px]:w-full max-[900px]:justify-center max-[900px]:pr-0"}`}
              >
                {side === "left" ? (
                  <article className="tl-card w-full max-w-[560px] text-center will-change-[transform,filter,opacity] max-[900px]:max-w-none">
                    <div className="mb-3 text-[11px] tracking-[0.38em] text-[#c46b1f]">{t.date}</div>
                    <h3 className="mb-[10px] text-[clamp(1.6rem,4.2vw,3.5rem)] leading-[1.05]">{t.title}</h3>
                    <div className="mb-[14px] text-[0.9rem] tracking-[0.08em] text-white/75">{t.org}</div>
                    <p className="mx-auto max-w-[58ch] text-[0.95rem] leading-[1.8] text-white/45 max-[420px]:leading-[1.7]">{t.desc}</p>
                  </article>
                ) : null}
              </div>

              <div className="tl-center relative w-[clamp(56px,6vw,80px)] flex-[0_0_clamp(56px,6vw,80px)] max-[900px]:hidden">
                <span className="tl-dot absolute left-1/2 top-1/2 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#c46b1f] bg-[rgba(5,5,5,0.9)] shadow-[0_0_0_6px_rgba(196,107,31,0.08)]" aria-hidden="true" />
              </div>

              <div
                className={`tl-side tl-right flex flex-1 min-w-0 justify-start pl-[clamp(18px,4vw,52px)]
                ${side === "left"
                  ? "max-[900px]:hidden"
                  : "max-[900px]:w-full max-[900px]:justify-center max-[900px]:pl-0"}`}
              >
                {side === "right" ? (
                  <article className="tl-card w-full max-w-[560px] text-center will-change-[transform,filter,opacity] max-[900px]:max-w-none">
                    <div className="mb-3 text-[11px] tracking-[0.38em] text-[#c46b1f]">{t.date}</div>
                    <h3 className="mb-[10px] text-[clamp(1.6rem,4.2vw,3.5rem)] leading-[1.05]">{t.title}</h3>
                    <div className="mb-[14px] text-[0.9rem] tracking-[0.08em] text-white/75">{t.org}</div>
                    <p className="mx-auto max-w-[58ch] text-[0.95rem] leading-[1.8] text-white/45 max-[420px]:leading-[1.7]">{t.desc}</p>
                  </article>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
