import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { disciplines, researchMethods, toolkit } from "@/data/expertise";
import { siteConfig, socialLinks, workingPrinciples } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Anirban Banerjee is an independent security researcher focused on web application security, APIs, authorization, business logic, and responsible disclosure.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Anirban Banerjee",
    description:
      "An independent security researcher focused on application security, APIs, authorization, and business logic.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About / Independent researcher"
        title={
          <>
            The researcher behind the{" "}
            <em className="italic">report.</em>
          </>
        }
        lead="I’m Anirban Banerjee, an independent security researcher focused on application security: the places where identity, ownership, and intent are translated into code."
        marker="Independent research practice"
        aside={
          <>
            <p className="label text-bone/80">Operating principle</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Understand the system before challenging it. Prove the smallest
              thing that matters. Disclose with care.
            </p>
          </>
        }
      />

      <section className="border-b border-line">
        <div className="shell py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div data-reveal>
                <span className="eyebrow">Point of view</span>
                <h2 className="type-section-title mt-6 text-bone">
                  A question before a payload.
                </h2>
              </div>

              <div className="mt-8 space-y-6 text-[1.0625rem] leading-[1.8] text-bone/75">
                <p>
                  My work concentrates on application security: web
                  applications, APIs, authentication and sessions, business
                  logic, and the authorization decisions that hold them
                  together. These are the parts of a system closest to intent,
                  and often the parts where intent is least explicit.
                </p>
                <p>
                  I’m less interested in a payload than in the model that made
                  the payload relevant. A request that should have been
                  impossible is usually evidence of an assumption that was
                  never written down. Finding it starts with reading the system
                  carefully: who it believes is calling, what it believes they
                  own, and what it believes has already happened.
                </p>
                <p>
                  The work is part technical and part editorial. A finding only
                  becomes useful when it can be explained clearly to the people
                  who have to fix it. That means understanding the business
                  rule, isolating the smallest safe proof, and separating
                  behavior from consequence.
                </p>
              </div>

              <div className="mt-10 border-l border-acid pl-5" data-reveal>
                <p className="font-display text-2xl leading-snug tracking-[-0.01em] text-bone sm:text-3xl">
                  “The smallest details can expose the biggest weaknesses.”
                </p>
                <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist">
                  A working idea, not a slogan
                </p>
              </div>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-28">
                <div className="surface-panel relative overflow-hidden border border-line">
                  <div
                    aria-hidden="true"
                    className="hero-grid absolute inset-0 opacity-50"
                  />
                  <div className="relative flex aspect-[4/5] items-center justify-center">
                    <span
                      aria-hidden="true"
                      className="font-display text-[clamp(7rem,14vw,11rem)] leading-none tracking-[-0.06em] text-bone/[0.08]"
                    >
                      AB
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute top-5 right-5 h-2 w-2 bg-acid"
                    />
                    <span className="absolute top-5 left-5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-mist/80">
                      Fig. 03 / Identity
                    </span>
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-line bg-obsidian/40 px-5 py-3 backdrop-blur-sm">
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-mist">
                        Independent
                      </span>
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-mist">
                        Security research
                      </span>
                    </div>
                  </div>
                </div>

                <dl className="mt-6 border-t border-line">
                  {[
                    { term: "Role", detail: siteConfig.role },
                    {
                      term: "Focus",
                      detail: "Web applications, APIs, authorization, logic",
                    },
                    {
                      term: "Disclosure",
                      detail: "Coordinated; private by default",
                    },
                    { term: "Direct", detail: siteConfig.emailDisplay },
                  ].map((item) => (
                    <div
                      key={item.term}
                      className="grid grid-cols-12 gap-3 border-b border-line py-3.5"
                    >
                      <dt className="col-span-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/75">
                        {item.term}
                      </dt>
                      <dd className="col-span-8 text-right font-mono text-[0.6875rem] leading-relaxed tracking-[0.03em] text-bone/80">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="me noreferrer"
                      className="link-line font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist transition-colors hover:text-acid"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface/30">
        <div className="shell py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4" data-reveal>
              <span className="eyebrow">Working principles</span>
              <h2 className="type-section-title mt-6 text-bone">
                How the work is done.
              </h2>
              <p className="body-copy mt-6 max-w-sm text-sm">
                These principles are not unique to security research. They are
                what keep it useful, proportionate, and trustworthy.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <ul className="border-t border-line">
                {workingPrinciples.map((principle, index) => (
                  <li
                    key={principle.title}
                    className="grid grid-cols-12 gap-4 border-b border-line py-6"
                  >
                    <span className="col-span-2 font-mono text-[0.75rem] tracking-[0.14em] text-acid sm:col-span-1">
                      0{index + 1}
                    </span>
                    <div className="col-span-10 sm:col-span-11">
                      <h3 className="font-display text-2xl leading-tight text-bone">
                        {principle.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist">
                        {principle.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="/methodology#disclosure"
                className="link-line mt-8 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone hover:text-acid"
              >
                Full disclosure methodology
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="scroll-mt-24 border-b border-line">
        <div className="shell py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4" data-reveal>
              <span className="eyebrow">Expertise</span>
              <h2 className="type-section-title mt-6 text-bone">
                Security domains.
              </h2>
              <p className="body-copy mt-6 max-w-sm text-sm">
                A working focus, not a ranking. Each area reflects the kind of
                application-layer trust decisions I investigate.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
                {disciplines.map((discipline, index) => (
                  <div key={discipline.title} className="bg-obsidian p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl leading-tight text-bone">
                        {discipline.title}
                      </h3>
                      <span className="mt-1 font-mono text-[0.6875rem] tracking-[0.14em] text-mist/75">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {discipline.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-8 border-t border-line pt-6 sm:grid-cols-2">
                <div>
                  <p className="label text-bone/80">Working toolkit</p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {toolkit.map((tool) => (
                      <li
                        key={tool}
                        className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-mist"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-mist/85">
                    A working set, not a proficiency score. Tool choice follows
                    the question.
                  </p>
                </div>
                <div>
                  <p className="label text-bone/80">Research methods</p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {researchMethods.map((method) => (
                      <li
                        key={method}
                        className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-mist"
                      >
                        {method}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-mist/85">
                    Reproducible evidence, proportionately gathered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell py-16 lg:py-20">
          <div className="flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Next</span>
              <h2 className="mt-5 font-display text-4xl leading-none tracking-[-0.02em] text-bone sm:text-5xl">
                Read a field note.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/research" className="btn btn-primary">
                Research
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
