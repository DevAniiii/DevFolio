"use client"
import { useRef, useState } from "react";
import { navLinks } from "../../lib/consts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const panelRef = useRef(null);
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    if (!panelRef.current) return;
    gsap.set(panelRef.current, {
      height: 0,
      opacity: 0,
      y: -8,
      pointerEvents: "none",
    });
  }, []);

  const animatePanel = (next: boolean) => {
    const panel = panelRef.current;
    if (!panel) return;

    gsap.to(panel, {
      height: next ? "auto" : 0,
      opacity: next ? 1 : 0,
      y: next ? 0 : -8,
      duration: 0.25,
      ease: "power2.out",
      onStart: () => gsap.set(panel, { pointerEvents: "auto" }),
      onComplete: () => {
        if (!next) gsap.set(panel, { pointerEvents: "none" });
      },
    });
  };

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      animatePanel(next);
      return next;
    });
  };

  const goTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    if (open) {
      setOpen(false);
      animatePanel(false);
    }

    ScrollTrigger.refresh();
    gsap.to(window, {
      duration: 1,
      ease: "power3.out",
      scrollTo: { y: el, offsetY: 80 },
    });
  };

  return (
    <nav className="navbar fixed left-0 right-0 top-4 z-[1000] px-[14px] font-sans">
      <div className="navbar-wrapper mx-auto flex w-full max-w-[920px] max-[640px]:max-w-[560px] items-center justify-between gap-3 rounded-full border border-white/10 bg-[rgba(0,0,0,0.35)] px-[14px] py-[10px] shadow-[0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-[12px]">
        <a className="nav-home inline-flex flex-none items-center justify-center rounded-full border border-white/10 p-[15px]" href="#home" onClick={goTo("home")} aria-label="Home">
          <Image
            src="./assets/images/common/home.svg"
            alt="Logo"
            width={26}
            height={26}
            className="block"
          />
        </a>

        <ul className="nav-links flex min-w-0 flex-1 items-center justify-around max-[640px]:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="whitespace-nowrap text-[14px] leading-none text-white/90 transition-[opacity,transform] duration-200 hover:-translate-y-[1px] hover:opacity-100" onClick={goTo(link.id)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="download-button group relative inline-flex cursor-pointer items-center justify-center overflow-hidden isolate rounded-full border border-white/20 bg-white/5 px-[26px] py-[14px] text-white/90 backdrop-blur-[10px] transition-[transform,color,border-color] duration-200 hover:-translate-y-[2px] hover:border-[#c46b1f]/55 hover:text-white before:absolute before:inset-0 before:-z-10 before:-translate-x-full before:bg-[#c46b1f]/35 before:transition-transform before:duration-300 hover:before:translate-x-0"
              href="/assets/files/ResumeAnirban.pdf"
              download="ResumeAnirban.pdf"
            >
              RESUME
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="relative hidden h-[44px] w-[44px] flex-none cursor-pointer rounded-full border border-white/10 bg-black/30 max-[640px]:inline-flex max-[640px]:items-center max-[640px]:justify-center"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-panel"
          onClick={toggle}
        >
          <span
            className={`absolute left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-[2px] bg-white transition-all duration-200 ${
              open ? "top-[21px] rotate-45" : "top-4"
            }`}
          />
        
          <span
            className={`absolute left-1/2 top-[21px] h-[2px] w-5 -translate-x-1/2 rounded-[2px] bg-white transition-all duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
        
          <span
            className={`absolute left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-[2px] bg-white transition-all duration-200 ${
              open ? "top-[21px] -rotate-45" : "top-[26px]"
            }`}
          />
        </button>
      </div>

      <div ref={panelRef} id="nav-panel" className="nav-panel mx-auto mt-[10px] w-full max-w-[920px] overflow-hidden rounded-[18px] border border-white/10 bg-black/55 p-[10px] shadow-[0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-[12px] min-[641px]:hidden">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="block rounded-xl px-3 py-3 text-white/90 transition-[background,opacity] duration-200 hover:bg-white/5 hover:opacity-100" onClick={goTo(link.id)}>
            {link.label}
          </a>
        ))}
        <a
              className="download-button"
              href="/assets/files/ResumeAnirban.pdf"
              download="ResumeAnirban.pdf"
            >
              RESUME
            </a>
      </div>
    </nav>
  );
};

export default Navbar;