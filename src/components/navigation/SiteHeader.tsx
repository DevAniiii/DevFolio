"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";
import { navigation, siteConfig } from "@/data/profile";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/80 bg-obsidian/90 backdrop-blur-md">
        <div className="shell flex h-[72px] items-center justify-between gap-6 lg:h-20">
          <Link
            href="/"
            aria-label="Anirban Banerjee — home"
            className="group flex items-center gap-3"
          >
            <span
              aria-hidden="true"
              className="block h-2.5 w-2.5 rotate-45 bg-acid transition-transform duration-500 group-hover:rotate-[135deg]"
            />
            <span className="font-display text-[1.35rem] leading-none tracking-[-0.015em] text-bone lg:text-[1.5rem]">
              Anirban Banerjee
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                    active ? "text-bone" : "text-mist hover:text-bone"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute right-0 bottom-0 left-0 h-px bg-acid transition-transform duration-300 ${
                      active
                        ? "scale-x-100"
                        : "origin-left scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group hidden items-center gap-2 border border-line px-3.5 py-2.5 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone transition-colors hover:border-acid hover:text-acid sm:inline-flex"
            >
              Contact
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 items-center gap-2 border border-line px-3.5 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone transition-colors hover:border-acid hover:text-acid lg:hidden"
            >
              Menu
              <span aria-hidden="true" className="flex flex-col gap-1">
                <span className="block h-px w-3.5 bg-current" />
                <span className="block h-px w-3.5 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          ref={panelRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="menu-enter fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-obsidian lg:hidden"
        >
          <div className="shell flex h-[72px] shrink-0 items-center justify-between border-b border-line">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
              aria-label="Anirban Banerjee — home"
            >
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rotate-45 bg-acid"
              />
              <span className="font-display text-[1.35rem] leading-none text-bone">
                Anirban Banerjee
              </span>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 items-center gap-2 border border-line px-3.5 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone transition-colors hover:border-acid hover:text-acid"
            >
              Close
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="shell mt-6 flex-1">
            {navigation.map((item, index) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between gap-6 border-b border-line py-5"
                >
                  <span
                    className={`font-display text-[clamp(2.5rem,9vw,3.75rem)] leading-none tracking-[-0.025em] transition-colors ${
                      active
                        ? "text-acid"
                        : "text-bone group-hover:text-acid"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="font-mono text-xs tracking-[0.14em] text-mist">
                    0{index + 1}
                  </span>
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between gap-6 border-b border-line py-5"
            >
              <span className="font-display text-[clamp(2.5rem,9vw,3.75rem)] leading-none tracking-[-0.025em] text-bone transition-colors group-hover:text-acid">
                Contact
              </span>
              <ArrowUpRight
                className="h-6 w-6 text-mist transition-colors group-hover:text-acid"
                aria-hidden="true"
              />
            </Link>
          </nav>

          <div className="shell mt-auto pt-12 pb-8">
            <p className="label">Direct contact</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-line mt-3 inline-block font-mono text-sm tracking-[0.02em] text-bone hover:text-acid"
            >
              {siteConfig.emailDisplay}
            </a>
            <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/80">
              Independent security research / Coordinated disclosure
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
