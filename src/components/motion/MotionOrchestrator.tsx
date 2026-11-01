"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MotionOrchestrator() {
  const pathname = usePathname();

  useEffect(() => {
    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const progress = document.querySelector<HTMLElement>(
          "[data-scroll-progress]",
        );

        if (progress) {
          gsap.fromTo(
            progress,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.35,
              },
            },
          );
        }

        const revealElements = gsap.utils.toArray<HTMLElement>("[data-reveal]");

        revealElements.forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 26 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            },
          );
        });
      });
    });

    let cancelled = false;

    document.fonts?.ready.then(() => {
      if (!cancelled) {
        ScrollTrigger.refresh();
      }
    });

    return () => {
      cancelled = true;
      context.revert();
      media.revert();
    };
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      data-scroll-progress
      className="fixed inset-x-0 top-0 z-[80] h-px origin-left scale-x-0 bg-acid/80"
    />
  );
}
