import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { methodSteps } from "@/data/expertise";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "A high-level account of Anirban Banerjee’s security research process, from framing an application surface to coordinated disclosure.",
  alternates: {
    canonical: "/methodology",
  },
  openGraph: {
    title: "Methodology — Anirban Banerjee",
    description:
      "A disciplined approach to application security research, evidence, and coordinated disclosure.",
    url: "/methodology",
  },
};

const boundaries = [
  {
    title: "Authorized scope only",
    description:
      "Research begins with permission and a defined scope. No testing is performed on third-party systems without authorization.",
  },
  {
    title: "Minimum necessary data",
    description:
      "Evidence is limited to what demonstrates the behavior. Customer data, credentials, and unrelated records are not collected or retained.",
  },
  {
    title: "No operational detail",
    description:
      "Public writing explains the weakness and its impact without publishing weaponized steps, live targets, or sensitive endpoints.",
  },
  {
    title: "Coordinated timing",
    description:
      "Disclosure follows the program’s policy and an agreed timeline. Private material stays private even after a public summary is possible.",
  },
];

const disclosureStates = [
  {
    state: "Private",
    description:
      "The default during investigation and reporting. Details stay with the people who need them to validate and fix the issue.",
  },
  {
    state: "Coordinated",
    description:
      "The program is aware, a timeline is understood, and any public communication is aligned with their process.",
  },
  {
    state: "Published",
    description:
      "A public-safe summary may be shared after coordination. It describes the class and lesson, not the confidential report.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Methodology / Research practice"
        title={
          <>
            Slow where it <em className="italic">matters.</em>
          </>
        }
        lead="A high-level account of how I move from a question about a system to a defensible finding and a responsible disclosure decision."
        marker="05 phases / disclosure included"
        aside={
          <>
            <p className="label text-bone/80">Starting condition</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Scope, permission, and privacy are settled before the first
              request. Curiosity does not override authorization.
            </p>
          </>
        }
      />

      <section className="border-b border-line">
        <div className="shell py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="eyebrow">The path</span>
                <h2 className="type-section-title mt-6 text-bone">
                  Five phases, one thread.
                </h2>
                <p className="body-copy mt-6 max-w-sm text-sm">
                  The phases are not a rigid checklist. They are a way to keep
                  the work honest: understand the surface, question the
                  assumptions, prove only what is necessary, and disclose with
                  care.
                </p>

                <div
                  aria-hidden="true"
                  className="mt-10 hidden border border-line bg-surface/30 p-5 lg:block"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-mist/80">
                      Research trace
                    </span>
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-acid">
                      Fig. 02
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 220 130"
                    className="mt-4 h-auto w-full"
                    role="presentation"
                  >
                    <g
                      fill="none"
                      stroke="#29312B"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    >
                      <path d="M12 24 H 208 M12 66 H 208 M12 108 H 208" opacity="0.5" />
                      <path d="M28 24 V 108" opacity="0.8" />
                      <path d="M28 24 L 70 24 L 70 66 L 128 66 L 128 108 L 192 108" stroke="#B7F36B" opacity="0.55" />
                    </g>
                    {[24, 66, 108].map((y) => (
                      <rect
                        key={y}
                        x="25.5"
                        y={y - 2.5}
                        width="5"
                        height="5"
                        fill="#B7F36B"
                      />
                    ))}
                    <g
                      fill="#929B91"
                      fontFamily="ui-monospace, SFMono-Regular, monospace"
                      fontSize="6.5"
                      letterSpacing="0.8"
                    >
                      <text x="40" y="20">FRAME</text>
                      <text x="82" y="62">MAP</text>
                      <text x="140" y="104">PROVE</text>
                      <text x="176" y="122">DISCLOSE</text>
                      <text x="12" y="126" opacity="0.6">TRACE / 01</text>
                    </g>
                  </svg>
                </div>

                <Link
                  href="#disclosure"
                  className="link-line mt-8 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone hover:text-acid"
                >
                  Disclosure principles
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </aside>

            <ol className="relative lg:col-span-7 lg:col-start-6">
              <span
                aria-hidden="true"
                className="absolute top-2 bottom-2 left-[3px] w-px bg-line"
              />
              {methodSteps.map((step) => (
                <li
                  key={step.number}
                  className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
                  data-reveal
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 left-0 h-[7px] w-[7px] bg-acid"
                  />
                  <span className="font-mono text-[0.75rem] tracking-[0.14em] text-acid">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.015em] text-bone sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-mist">
                    {step.description}
                  </p>
                  <div className="mt-6 border-l border-line pl-4">
                    <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/80">
                      Output
                    </p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-bone/80">
                      {step.output}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="disclosure"
        className="scroll-mt-24 border-b border-line bg-surface/30"
      >
        <div className="shell py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4" data-reveal>
              <span className="eyebrow">Disclosure</span>
              <h2 className="type-section-title mt-6 text-bone">
                Private by default.
              </h2>
              <p className="body-copy mt-6 max-w-sm text-sm">
                Responsible disclosure is not a final step added to the end of
                a report. It is a boundary that shapes what gets collected,
                retained, and published.
              </p>
              <Link
                href="/contact"
                className="link-line mt-8 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone hover:text-acid"
              >
                Discuss a disclosure
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
                {boundaries.map((boundary) => (
                  <div key={boundary.title} className="bg-obsidian p-6">
                    <h3 className="font-display text-2xl leading-tight text-bone">
                      {boundary.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {boundary.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="label text-bone/80">Disclosure states</p>
                <div className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-3">
                  {disclosureStates.map((item, index) => (
                    <div key={item.state} className="bg-obsidian p-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-acid">
                          {item.state}
                        </span>
                        <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-mist/75">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-4 text-xs leading-relaxed text-mist">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-8 text-xs leading-relaxed text-mist/85">
                Nothing on this site should be read as an invitation to test a
                third-party system. Research requires authorization, and
                disclosure follows the relevant program’s policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell py-16 lg:py-20">
          <div className="flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Continue</span>
              <h2 className="mt-5 font-display text-4xl leading-none tracking-[-0.02em] text-bone sm:text-5xl">
                Read the research.
              </h2>
            </div>
            <Link href="/research" className="btn btn-primary">
              Field notes
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
