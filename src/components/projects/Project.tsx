import Image from "next/image";

const PROJECTS = [
  {
    title: "DevToolKit — Next.Js + TypeScript",
    desc: "Created a web application for JWT inspection, Base64 encoding/decoding, and JSON formatting with real time processing",
    image: "/assets/images/common/DevToolKit.png",
    tags: ["Next.Js", "Tailwind CSS", "TypeScript"],
    links: [
      {
        label: "Live Demo",
        href: "https://developerstoolkit.vercel.app/",
        icon: "↗",
      },
      {
        label: "Source Code",
        href: "https://github.com/DevAniiii/DevToolKit",
        icon: "⌂",
      },
    ],
  },
  {
    title: "Internship Check — MERN",
    desc: "Built a platform that helps students verify internship opportunities, check company trust scores, and report suspicious listings with RBAC authentication.",
    image: "/assets/images/common/intern.png",
    tags: ["Next.Js", "Tailwind CSS", "TypeScript", "MongoDB", "REST APIs"],
    links: [
      {
        label: "Live Demo",
        href: "https://developerstoolkit.vercel.app/",
        icon: "↗",
      },
    ],
  },
  {
    title: "Brainware University Student Portal — MERN",
    desc: "MERN stack based University Management Portal with JWT and RBAC authentication system, attendance tracking, grade management and announcements",
    image: "/assets/images/common/bwuweb.png",
    tags: [
      "Next.Js",
      "Tailwind CSS",
      "GSAP",
      "MongoDB",
      "REST APIs",
      "Express.Js",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://bwu-web.vercel.app/",
        icon: "↗",
      },
      {
        label: "Source Code",
        href: "https://github.com/DevAniiii/BWUWeb",
        icon: "⌂",
      },
    ],
  },
  {
    title: "Personal Portfolio V2 — Three.js",
    desc: "Next.js portfolio website with Three.js animations and Framer Motion for smooth scrolling animated components with Three.js soccerball scene",
    image: "/assets/images/common/portfoliov2.png",
    tags: [
      "Next.Js",
      "Tailwind CSS",
      "GSAP",
      "TypeScript",
      "Three.js",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://aniporfolio-v2.vercel.app/",
        icon: "↗",
      },
      {
        label: "Source Code",
        href: "https://github.com/DevAniiii/anirban-portfolio",
        icon: "⌂",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section
      className="projects relative w-full pt-[90px] pb-[70px] font-sans text-white"
      id="projects"
    >
      {/* Header like your Certifications screenshot */}
      <div className="sectionHeader mx-auto mb-[42px] w-[min(1200px,92%)] text-center">
        <h2 className="sectionTitle m-0 text-lg font-semibold font-[font2] leading-tight tracking-[-0.02em] max-[900px]:mx-auto max-[900px]:max-w-[16ch]">
          <span className="inline-flex rounded-full border border-[#667eea40] bg-[#667eea1a] shadow-[0_0_4px_#1F64A7] px-6 py-2">
            PROJECTS
          </span>
        </h2>

        <p className="sectionSub mx-auto mt-4 max-w-[70ch] text-[clamp(0.95rem,1.35vw,1.05rem)] leading-[1.7] text-white/55">
          A selection of builds that showcase frontend motion craft and
          cloud-first architecture.
        </p>
      </div>

      {/* Cards like your first screenshot */}
      <div className="projectsGrid mx-auto grid w-[min(1200px,92%)] grid-cols-2 gap-7 max-[900px]:grid-cols-1">
        {PROJECTS.map((p) => (
          <article
            className="projectCard translate-z-0 overflow-hidden rounded-[18px] border border-white/8 bg-[rgba(10,10,10,0.35)] shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-[10px] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[10px] hover:border-[#c46b1f]/35 hover:shadow-[0_26px_90px_rgba(0,0,0,0.7),0_0_0_1px_rgba(196,107,31,0.18),0_0_38px_rgba(196,107,31,0.18)] focus-within:-translate-y-[10px] focus-within:border-[#c46b1f]/35 focus-within:shadow-[0_26px_90px_rgba(0,0,0,0.7),0_0_0_1px_rgba(196,107,31,0.18),0_0_38px_rgba(196,107,31,0.18)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            key={p.title}
          >
            <div className="projectMedia relative h-[clamp(180px,16vw,240px)] overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="h-full w-full scale-[1.02] object-cover saturate-105 contrast-[1.02] transition-[transform,filter] duration-700 group-hover:scale-[1.08] group-hover:saturate-[1.15] group-hover:contrast-[1.08] motion-reduce:transition-none"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              <div className="projectMediaOverlay absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.55)_65%,rgba(0,0,0,0.85))] opacity-100 transition-opacity duration-300 group-hover:opacity-[0.85] motion-reduce:transition-none" />
            </div>

            <div className="projectBody px-5 pt-[18px] pb-[18px] max-[420px]:p-4">
              <h3 className="projectTitle mb-[10px] text-[clamp(1.1rem,1.6vw,1.35rem)] font-bold tracking-[-0.01em] transition-colors group-hover:text-white/95 motion-reduce:transition-none">
                {p.title}
              </h3>
              <p className="projectDesc mb-4 max-w-[72ch] text-[0.95rem] leading-[1.7] text-white/52 transition-colors group-hover:text-white/62 motion-reduce:transition-none">
                {p.desc}
              </p>

              <div className="projectTags mb-[18px] flex flex-wrap gap-[10px]">
                {p.tags.map((t) => (
                  <span
                    className="tag rounded-full border border-white/8 bg-white/6 px-3 py-2 text-[0.78rem] text-white/65 transition-[background,border-color,color] duration-300 group-hover:border-white/14 group-hover:bg-white/8 group-hover:text-white/78 motion-reduce:transition-none"
                    key={t}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="projectFooter flex gap-[18px] border-t border-white/8 pt-[14px] max-[420px]:flex-wrap max-[420px]:gap-y-[10px]">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    className="projectLink inline-flex items-center gap-2 text-[0.95rem] text-[rgba(120,210,255,0.95)] transition-[color,transform] duration-200 group-hover:text-[rgba(196,107,31,0.95)] hover:translate-x-[2px] hover:underline motion-reduce:transition-none"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon opacity-90">{l.icon}</span>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
