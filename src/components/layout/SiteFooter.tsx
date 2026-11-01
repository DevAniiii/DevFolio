import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { navigation, siteConfig, socialLinks } from "@/data/profile";

const secondaryLinks = [
  { label: "Expertise", href: "/about#expertise" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-line bg-obsidian">
      <div className="shell pt-16 pb-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="label">Obsidian / Research practice</p>
            <p className="mt-5 font-display text-4xl leading-none tracking-[-0.02em] text-bone lg:text-5xl">
              Anirban Banerjee
            </p>
            <p className="body-copy mt-5 max-w-sm text-sm">
              Independent security research focused on application security,
              APIs, authorization, and business logic.
            </p>
            <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/80">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:col-start-5">
            <div>
              <p className="label">Index</p>
              <ul className="mt-5 space-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="link-line font-mono text-xs uppercase tracking-[0.14em] text-mist transition-colors hover:text-bone"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">More</p>
              <ul className="mt-5 space-y-3">
                {secondaryLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="link-line font-mono text-xs uppercase tracking-[0.14em] text-mist transition-colors hover:text-bone"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {socialLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="me noreferrer"
                      className="link-line inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.14em] text-mist transition-colors hover:text-bone"
                    >
                      {item.label}
                      <ArrowUpRight
                        className="h-3 w-3"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="label">Direct</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group mt-5 inline-flex items-start gap-2 font-mono text-xs leading-relaxed tracking-[0.02em] text-bone transition-colors hover:text-acid"
            >
              <span className="break-all">{siteConfig.emailDisplay}</span>
              <ArrowUpRight
                className="mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>Static site. No cookies, no tracking.</p>
          <a
            href="#top"
            className="link-line w-fit items-center text-mist transition-colors hover:text-bone"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
