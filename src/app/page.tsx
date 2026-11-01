import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SurfaceMap } from "@/components/diagrams/SurfaceMap";
import { RecognitionRow } from "@/components/recognition/RecognitionRow";
import { ResearchRow } from "@/components/research/ResearchRow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { researchNotes } from "@/content/research";
import { methodSteps } from "@/data/expertise";
import { focusAreas, siteConfig, socialLinks } from "@/data/profile";
import { recognition } from "@/data/recognition";

function lineStyle(index: number): CSSProperties {
  return { "--line-index": index } as CSSProperties;
}

function fadeStyle(delay: string): CSSProperties {
  return { "--fade-delay": delay } as CSSProperties;
}

export default function HomePage() {
  const featured = researchNotes.slice(0, 3);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    image: `${siteConfig.url}/pic.png`,
    sameAs: socialLinks.map((link) => link.href),
    knowsAbout: [
      "Web application security",
      "API security",
      "Broken access control",
      "Authentication and session management",
      "Business logic vulnerabilities",
      "Vulnerability research",
      "Responsible disclosure",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="hero-grid pointer-events-none absolute inset-0 opacity-45"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[8%] hidden w-px bg-line/50 lg:block"
        />

        <div className="shell relative pt-10 pb-10 lg:pt-12 lg:pb-14">
          <div className="flex items-center justify-between gap-6">
            <span className="eyebrow">Independent security researcher</span>
            <span className="label hidden md:block">
              Application security / Coordinated disclosure
            </span>
          </div>

          <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h1 className="type-hero max-w-[13ch] text-bone lg:max-w-none">
                <span className="line-mask">
                  <span
                    className="hero-line-inner sm:whitespace-nowrap"
                    style={lineStyle(0)}
                  >
                    The smallest details
                  </span>
                </span>
                <span className="line-mask">
                  <span
                    className="hero-line-inner sm:whitespace-nowrap"
                    style={lineStyle(1)}
                  >
                    expose the <em className="italic">biggest</em>
                  </span>
                </span>
                <span className="line-mask">
                  <span
                    className="hero-line-inner sm:whitespace-nowrap"
                    style={lineStyle(2)}
                  >
                    weaknesses<span className="text-acid">.</span>
                  </span>
                </span>
              </h1>

              <div className="mt-9 border-t border-line pt-8 lg:mt-10 lg:pt-9">
                <p className="lead max-w-xl">{siteConfig.supporting}</p>

                <div
                  className="hero-fade mt-7 flex flex-col gap-3 sm:flex-row"
                  style={fadeStyle("650ms")}
                >
                  <Link
                    href="/research"
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    Selected research
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn btn-outline w-full sm:w-auto"
                  >
                    Get in touch
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>

                <div
                  className="hero-fade mt-7 flex items-start gap-3"
                  style={fadeStyle("760ms")}
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-acid"
                  />
                  <div className="space-y-1.5">
                    <p className="font-mono text-[0.6875rem] leading-relaxed uppercase tracking-[0.14em] text-mist">
                      {siteConfig.tagline}
                    </p>
                    <p className="font-mono text-[0.6875rem] leading-relaxed uppercase tracking-[0.14em] text-mist/80">
                      Web applications, APIs, authorization, and business logic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pt-1">
              <div className="hero-fade" style={fadeStyle("820ms")}>
                <SurfaceMap />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-5 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">
            <span className="label shrink-0 text-bone/80">
              Verified acknowledgements
            </span>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {recognition.map((entry) => (
                <li
                  key={`${entry.program}-${entry.code}`}
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-bone/85"
                >
                  {entry.shortProgram}
                  <span className="ml-2 text-acid">{entry.code}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/recognition"
              className="link-line w-fit shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist transition-colors hover:text-acid"
            >
              Record
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Research focus" className="border-b border-line">
        <div className="shell py-10 lg:py-14">
          <div className="flex items-center justify-between gap-4">
            <span className="label text-bone/80">Research focus</span>
            <span className="label hidden sm:block">Expertise / 01–04</span>
          </div>
          <div className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area.number} className="border-t border-line pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs tracking-[0.16em] text-acid">
                    {area.number}
                  </span>
                  <span aria-hidden="true" className="h-px w-6 bg-line" />
                </div>
                <h2 className="mt-4 font-display text-2xl leading-none tracking-[-0.01em] text-bone">
                  {area.title}
                </h2>
                <p className="mt-2.5 text-xs leading-relaxed text-mist">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="shell py-20 lg:py-28">
          <div data-reveal>
            <SectionHeading
              index="02"
              label="Selected research"
              title={
                <>
                  What systems <em className="italic">assume.</em>
                </>
              }
              note="Publishable notes on access control, API trust, and the rules software follows without stating."
              action={
                <Link
                  href="/research"
                  className="link-line font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone hover:text-acid"
                >
                  All research
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              }
            />
          </div>

          <div className="mt-14 lg:mt-20">
            {featured.map((note) => (
              <div key={note.slug} data-reveal>
                <ResearchRow note={note} />
              </div>
            ))}
            <div className="border-t border-line" />
          </div>

          <div
            data-reveal
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="max-w-2xl text-xs leading-relaxed text-mist/85">
              Publication policy: client and program details are shared only
              under coordinated disclosure. The notes above are educational
              analyses, not confidential report material.
            </p>
            <Link
              href="/methodology#disclosure"
              className="link-line shrink-0 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist hover:text-acid"
            >
              Disclosure approach
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface/30">
        <div className="shell py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4" data-reveal>
              <span className="eyebrow">03 / Recognition</span>
              <h2 className="type-section-title mt-6 text-bone">
                A record of acknowledgement.
              </h2>
              <p className="body-copy mt-6 max-w-sm text-sm">
                Verified acknowledgements from security programs. Severity is
                the program’s assessment of the reported issue, not a public
                award. No report contents are disclosed.
              </p>
              <Link
                href="/recognition"
                className="link-line mt-7 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone hover:text-acid"
              >
                Read the record
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
                <span className="label text-bone/80">Verified recognition</span>
                <span className="label">Program assessment</span>
              </div>
              {recognition.map((entry) => (
                <RecognitionRow key={`${entry.program}-${entry.code}`} entry={entry} />
              ))}
              <p className="mt-5 font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.14em] text-mist/80">
                Acknowledged by the program. No endorsement or employment is
                implied.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="shell py-20 lg:py-28">
          <div data-reveal>
            <SectionHeading
              index="04"
              label="Method"
              title="Method, not magic."
              note="A repeatable way to move from a question about system behavior to a finding someone can act on."
              action={
                <Link
                  href="/methodology"
                  className="link-line font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone hover:text-acid"
                >
                  Full methodology
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              }
            />
          </div>

          <div className="mt-12 border-t border-line lg:mt-16" data-reveal>
            {methodSteps.slice(0, 4).map((step) => (
              <div
                key={step.number}
                className="group grid gap-3 border-b border-line py-7 transition-colors hover:bg-surface/25 sm:grid-cols-12 sm:items-start sm:gap-6 lg:py-8"
              >
                <span className="font-mono text-xs tracking-[0.16em] text-acid sm:col-span-1">
                  {step.number}
                </span>
                <h3 className="font-display text-2xl leading-[1.05] tracking-[-0.01em] text-bone sm:col-span-3 lg:text-[1.75rem]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-mist sm:col-span-7 sm:col-start-6">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.14em] text-mist/80">
              Scope / restraint / evidence / disclosure
            </p>
            <Link
              href="/methodology#disclosure"
              className="link-line font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist hover:text-acid"
            >
              Responsible disclosure
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="shell py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <span className="eyebrow">05 / Position</span>
            </div>
            <blockquote className="lg:col-span-8">
              <p className="font-display text-[clamp(2rem,4.2vw,3.9rem)] leading-[1.06] tracking-[-0.02em] text-bone">
                “The most interesting vulnerabilities rarely begin with a
                payload. They begin with a question about how a system expects
                to be used.”
              </p>
              <footer className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-acid">
                  Anirban Banerjee
                </span>
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist">
                  Independent security researcher
                </span>
              </footer>
            </blockquote>
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between lg:ml-[25%]">
            <p className="max-w-xl text-sm leading-relaxed text-mist">
              My work concentrates on the application layer: the places where
              identity, ownership, sequence, and trust are decided. The aim is
              not novelty. It is evidence.
            </p>
            <Link
              href="/about"
              className="link-line shrink-0 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone hover:text-acid"
            >
              About the researcher
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-acid text-obsidian">
        <div className="shell py-20 lg:py-28">
          <div className="flex items-center justify-between gap-6">
            <span className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-obsidian/70">
              06 / Contact
            </span>
            <span className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-obsidian/70">
              Coordinated disclosure
            </span>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <h2 className="font-display text-[clamp(2.9rem,6.8vw,6.8rem)] leading-[0.93] tracking-[-0.035em] text-obsidian lg:col-span-8">
              Have a surface
              <br />
              worth examining?
            </h2>
            <div className="flex flex-col justify-end lg:col-span-3 lg:col-start-10">
              <p className="max-w-sm text-base leading-relaxed text-obsidian/75">
                For security research, application security reviews, or a
                considered conversation about a finding.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group mt-7 inline-flex items-center justify-between gap-6 border border-obsidian bg-obsidian px-5 py-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-acid transition-colors hover:bg-transparent hover:text-obsidian"
              >
                <span className="break-all">{siteConfig.emailDisplay}</span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
