import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/all";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Frontend icons
const reactIcon = "/assets/images/tech-icons/reactjsIcon.svg";
const htmlIcon = "/assets/images/tech-icons/htmlIcon.svg";
const cssIcon = "/assets/images/tech-icons/cssIcon.svg";
const jsIcon = "/assets/images/tech-icons/javascriptIcon.svg";
const tsIcon = "/assets/images/tech-icons/typescriptIcon.svg";
const jqueryIcon = "/assets/images/tech-icons/jqueryIcon.svg";
const tailwindIcon = "/assets/images/tech-icons/tailwindIcon.svg";
const gsapIcon = "/assets/images/tech-icons/gsapIcon.svg";
const nextJsIcon = "/assets/images/tech-icons/nextjsIcon.svg";

// Backend icons
const NodeJsIcon = "/assets/images/tech-icons/nodejs.svg";
const expressIcon = "/assets/images/tech-icons/expressIcon.svg";
const apiIcon = "/assets/images/tech-icons/apiIcon.svg";

// Database icons
const mongoIcon = "/assets/images/tech-icons/mongoIcon.svg";
const redisIcon = "/assets/images/tech-icons/redisIcon.svg";
const mysqlIcon = "/assets/images/tech-icons/mysqlIcon.svg";

// Cloud & DevOps icons
const dockerIcon = "/assets/images/tech-icons/dockerIcon.svg";
const githubActionsIcon = "/assets/images/tech-icons/githubActionsIcon.svg";
const ciCdIcon = "/assets/images/tech-icons/ciCdIcon.svg";
const vercelIcon = "/assets/images/tech-icons/vercel.svg";

// Tools icons
const postmanIcon = "/assets/images/tech-icons/postmanIcon.svg";
const burpSuiteIcon = "/assets/images/tech-icons/BurpSuite_logo.svg";
const vscodeIcon = "/assets/images/tech-icons/vscodeIcon.svg";
const gitIcon = "/assets/images/tech-icons/githubActionsIcon.svg";

const SECTIONS = [
  {
    label: "FRONTEND",
    techs: [
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "Tailwind CSS",
      "GSAP",
    ],
  },
  {
    label: "BACKEND",
    techs: ["Node.js", "Express.js", "TypeScript", "REST APIs"],
  },
  {
    label: "DATABASE",
    techs: ["MongoDB", "MySQL", "Redis"],
  },
  {
    label: "TOOLS",
    techs: ["Git", "GitHub", "VS Code", "Postman", "Burp Suite"],
  },
  {
    label: "CLOUD & DEVOPS",
    techs: ["Docker", "Vercel", "GitHub Actions","CI/CD",],
  },
];
const TECH_ICONS: Record<string, string | undefined> = {
  "React.js": reactIcon,
  "Next.js": nextJsIcon,
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  TypeScript: tsIcon,
  jQuery: jqueryIcon,
  "Tailwind CSS": tailwindIcon,
  GSAP: gsapIcon,

  "Node.js": NodeJsIcon,
  "Express.js": expressIcon,
  "REST APIs": apiIcon,

  MongoDB: mongoIcon,
  MySQL: mysqlIcon,
  Redis: redisIcon,

  Docker: dockerIcon,
  Vercel: vercelIcon,
  "GitHub Actions": githubActionsIcon,
  "CI/CD": ciCdIcon,

  Postman: postmanIcon,
  "VS Code": vscodeIcon,
  "Burp Suite": burpSuiteIcon,
  Git: gitIcon,
  GitHub: gitIcon,
};
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

/**
 * @author Sisvanthkumar Sathivadivel
 * @returns TechStack component that creates an interactive 3D showcase of technologies. As the user scrolls, they navigate through a virtual space filled with tech cards and stars. The cards display technology names, icons, and metadata, while the stars create a dynamic background. The component uses GSAP for smooth animations and ScrollTrigger for scroll-based interactions, creating an engaging way to present the tech stack.
 */
export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const worldRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const viewportEl = viewportRef.current;
    const worldEl = worldRef.current;
    if (!sectionEl || !viewportEl || !worldEl) return;

    const getConfig = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mobile = w < 640;

      return {
        starCount: mobile ? 90 : 150,
        zGap: mobile ? 520 : 800,
        camSpeed: mobile ? 2.0 : 2.5,
        internalLerp: 0.12,
        velLerp: 0.18,
        velScale: 0.00035,
        velClamp: mobile ? 1.0 : 1.25,
        tiltMul: mobile ? 18 : 45,
        shadowMul: mobile ? 18 : 40,

        radiusX: Math.min(w * (mobile ? 0.22 : 0.32), 520),
        radiusY: Math.min(h * (mobile ? 0.18 : 0.3), 420),

        baseFov: mobile ? 760 : 1000,
      };
    };

    let cleanup = () => {};
    let raf = 0;

    const build = () => {
      cleanup();
      const CONFIG = getConfig();

      worldEl.innerHTML = "";

      const items: {
        el: HTMLElement;
        type: string;
        x: number;
        y: number;
        rot?: number;
        baseZ: number;
      }[] = [];
      let idx = 0;
      const totalCount = SECTIONS.reduce(
        (acc, s) => acc + 1 + s.techs.length,
        0,
      );

      const pushText = (label: string) => {
        const el = document.createElement("div");
        el.className =
          "absolute left-0 top-0 flex items-center justify-center [backface-visibility:hidden] origin-center";
        const txt = document.createElement("div");
        txt.className =
          "font-display font-extrabold text-transparent uppercase whitespace-nowrap pointer-events-none -translate-x-1/2 -translate-y-1/2 text-[clamp(3.2rem,12vw,10rem)] tracking-[clamp(-0.1rem,-1vw,-0.5rem)] mix-blend-normal opacity-90";
        txt.innerText = label;
        el.appendChild(txt);
        worldEl.appendChild(el);
        items.push({
          el,
          type: "text",
          x: 0,
          y: 0,
          rot: 0,
          baseZ: -idx * CONFIG.zGap,
        });
        idx++;
      };

      const pushCard = (domain: string, tech: string) => {
        const el = document.createElement("div");
        el.className =
          "absolute left-0 top-0 flex items-center justify-center [backface-visibility:hidden] origin-center";

        const card = document.createElement("div");
        card.className =
          "relative flex flex-col justify-between text-center bg-[rgba(10,10,10,0.4)] border border-white/10 backdrop-blur-[8px] [-webkit-backdrop-filter:blur(8px)] shadow-[0_0_0_1px_rgba(0,0,0,0.5),0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] -translate-x-1/2 -translate-y-1/2 w-[clamp(220px,70vw,320px)] h-[clamp(300px,85vw,460px)] p-[clamp(1rem,4vw,2rem)] before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:top-[-1px] before:left-[-1px] before:border before:border-transparent before:border-t-[#e0e0e0] before:border-l-[#e0e0e0] before:transition-all after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:bottom-[-1px] after:right-[-1px] after:border after:border-transparent after:border-b-[#e0e0e0] after:border-r-[#e0e0e0] after:transition-all hover:border-[#c46b1f] hover:bg-[rgba(20,20,20,0.8)] hover:shadow-[0_0_30px_rgba(196,107,31,0.22)] hover:z-[100] hover:before:w-full hover:before:h-full hover:before:border-[#c46b1f] hover:after:w-full hover:after:h-full hover:after:border-[#c46b1f]";

        const randId = Math.floor(Math.random() * 9999);
        const iconSrc = TECH_ICONS[tech];

        card.innerHTML = `
          <div class="flex items-center justify-center gap-4 border-b border-white/10 pb-4 mb-4">
            <span class="font-mono text-[#c46b1f] text-[0.8rem]">ID-${randId}</span>
            <div class="w-[10px] h-[10px] bg-[#c46b1f]"></div>
          </div>
          <h2 class="m-0 font-display text-[clamp(1.4rem,6vw,2.5rem)] font-bold leading-[0.95] uppercase text-white mix-blend-normal">${tech}</h2>
          <div class="mt-3 font-mono text-xs tracking-[0.06em] uppercase text-white/45">DOMAIN: ${domain}</div>
          ${iconSrc ? `<img class="block object-contain mx-auto mt-[clamp(18px,5vw,50px)] mb-[14px] w-[clamp(44px,12vw,75px)] h-[clamp(44px,12vw,75px)] transition-[transform,filter,opacity] duration-250 ease-in-out hover:scale-[1.08] hover:opacity-100" src="${iconSrc}" alt="${tech} icon" loading="lazy" />` : ""}
          <div class="mt-auto flex justify-center gap-6 font-mono text-[0.7rem] text-white/40">
            <span>GRID: ${Math.floor(Math.random() * 10)}x${Math.floor(Math.random() * 10)}</span>
            <span>DATA_SIZE: ${(Math.random() * 100).toFixed(1)}MB</span>
          </div>
          <div class="absolute bottom-8 right-8 text-[4rem] font-black opacity-10">0${idx}</div>
        `;

        el.appendChild(card);
        worldEl.appendChild(el);

        const angle = (idx / totalCount) * Math.PI * 6;
        const x = Math.cos(angle) * CONFIG.radiusX;
        const y = Math.sin(angle) * CONFIG.radiusY;
        const rot = (Math.random() - 0.5) * 30;

        items.push({ el, type: "card", x, y, rot, baseZ: -idx * CONFIG.zGap });
        idx++;
      };

      SECTIONS.forEach((s) => {
        pushText(s.label);
        s.techs.forEach((t) => pushCard(s.label, t));
      });

      const totalDepth = Math.max(0, (idx - 1) * CONFIG.zGap);
      const scrollRangePx = Math.max(1, totalDepth / CONFIG.camSpeed);

      for (let i = 0; i < CONFIG.starCount; i++) {
        const el = document.createElement("div");
        el.className =
          "absolute w-[2px] h-[2px] bg-white -translate-x-1/2 -translate-y-1/2";
        worldEl.appendChild(el);
        items.push({
          el,
          type: "star",
          x: (Math.random() - 0.5) * 2600,
          y: (Math.random() - 0.5) * 2600,
          baseZ: -Math.random() * totalDepth,
        });
      }

      const internal = { value: 0, target: 0 };
      const vel = { v: 0, target: 0 };
      const mouse = { x: 0, y: 0 };

      const onPointerMove = (e: PointerEvent) => {
        mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("pointermove", onPointerMove, { passive: true });

      const smoother = ScrollSmoother.get();
      const scrollerEl = smoother ? smoother.wrapper() : undefined;

      const st = ScrollTrigger.create({
        trigger: sectionEl,
        scroller: scrollerEl,
        start: "top top",
        end: () => `+=${scrollRangePx}`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          internal.target = self.progress * scrollRangePx;
          const v = self.getVelocity() * CONFIG.velScale;
          vel.target = clamp(v, -CONFIG.velClamp, CONFIG.velClamp);
        },
      });

      const render = () => {
        internal.value +=
          (internal.target - internal.value) * CONFIG.internalLerp;
        vel.v += (vel.target - vel.v) * CONFIG.velLerp;

        const cameraZ = internal.value * CONFIG.camSpeed;

        const tiltX = mouse.y * 5 - vel.v * CONFIG.tiltMul;
        const tiltY = mouse.x * 5;

        worldEl.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

        const fov = CONFIG.baseFov - Math.min(Math.abs(vel.v) * 220, 520);
        viewportEl.style.perspective = `${fov}px`;

        items.forEach((item) => {
          const vizZ = item.baseZ + cameraZ;

          let alpha = 1;
          if (vizZ < -3000) alpha = 0;
          else if (vizZ < -2000) alpha = (vizZ + 3000) / 1000;
          if (vizZ > 100 && item.type !== "star")
            alpha = 1 - (vizZ - 100) / 400;

          alpha = clamp(alpha, 0, 1);
          item.el.style.opacity = String(alpha);
          if (alpha <= 0) return;

          let trans = `translate3d(${item.x || 0}px, ${item.y || 0}px, ${vizZ}px)`;

          if (item.type === "star") {
            const stretch = Math.max(1, Math.min(1 + Math.abs(vel.v) * 18, 10));
            trans += ` scale3d(1, 1, ${stretch})`;
          } else if (item.type === "text") {
            trans += ` rotateZ(${item.rot || 0}deg)`;
            if (Math.abs(vel.v) > 0.02) {
              const offset = clamp(vel.v * CONFIG.shadowMul, -40, 40);
              item.el.style.textShadow = `${offset}px 0 #c46b1f, ${-offset}px 0 #ffffff`;
            } else {
              item.el.style.textShadow = "none";
            }
          } else {
            const t = gsap.ticker.time;
            const float = Math.sin(t + (item.x || 0)) * 10;
            trans += ` rotateZ(${item.rot || 0}deg) rotateY(${float}deg)`;
          }

          item.el.style.transform = trans;
        });
      };

      gsap.ticker.add(render);

      raf = requestAnimationFrame(() => ScrollTrigger.refresh());

      cleanup = () => {
        cancelAnimationFrame(raf);
        gsap.ticker.remove(render);
        window.removeEventListener("pointermove", onPointerMove);
        st.kill();
        worldEl.innerHTML = "";
      };
    };

    build();

    const onResize = () => build();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cleanup();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" relative w-full h-svh text-[#e0e0e0] overflow-hidden isolate z-[2]"
      id="skills"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col items-center gap-5 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#667eea40] bg-[#667eea1a] px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#1F64A7] shadow-[0_0_8px_#1F64A7]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
            Technology Stack
          </span>
        </div>

        <h2 className="font-[font4] text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
          Technologies I Work With
        </h2>

        <p className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          A curated technology stack focused on building fast, scalable, and
          reliable applications from modern frontends to robust backends, cloud
          infrastructure, and automation.
        </p>
      </motion.div>
      <div
        ref={viewportRef}
        className="absolute inset-0 overflow-hidden z-[1] [perspective:700px]"
      >
        <div
          ref={worldRef}
          className="absolute top-1/2 left-1/2 [transform-style:preserve-3d] will-change-transform"
        />
      </div>
    </section>
  );
}
