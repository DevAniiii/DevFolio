import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ResearchRow } from "@/components/research/ResearchRow";
import { PageIntro } from "@/components/ui/PageIntro";
import { researchNotes } from "@/content/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Public-safe research notes on access control, API security, authentication, and business logic by Anirban Banerjee.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Research — Anirban Banerjee",
    description:
      "Public-safe research notes on access control, API security, authentication, and business logic.",
    url: "/research",
  },
};

export default function ResearchPage() {
  return (
    <>
      <PageIntro
        eyebrow="Research / Field notes"
        title={
          <>
            Field <em className="italic">notes.</em>
          </>
        }
        lead="Public-safe analyses of the weakness classes I study. No target details, confidential reports, or operational material. The work begins with how a system is supposed to behave."
        marker="04 notes / 2026"
        aside={
          <>
            <p className="label text-bone/80">Publication standard</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Case studies are published only under coordinated disclosure.
              Educational notes are labeled as such and contain no private
              program material.
            </p>
          </>
        }
      />

      <section>
        <div className="shell py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-3 pb-4">
            <h2 className="label text-bone/80">All notes</h2>
            <span className="label">Newest first / 04 entries</span>
          </div>

          <div>
            {researchNotes.map((note, index) => (
              <div key={note.slug} data-reveal>
                <ResearchRow note={note} featured={index === 0} />
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-mist/85">
            These notes describe vulnerability classes in general terms. They
            are written to be useful to engineers and researchers without
            exposing confidential report contents or providing operational
            exploit instructions.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-surface/30">
        <div className="shell py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4" data-reveal>
              <span className="eyebrow">Publication</span>
              <h2 className="type-section-title mt-6 text-bone">
                Public-safe by design.
              </h2>
              <p className="body-copy mt-6 max-w-sm text-sm">
                A portfolio can demonstrate technical depth without disclosing
                information that belongs to a program, a client, or the people
                whose data was involved.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <ul className="border-t border-line">
                {[
                  {
                    title: "No confidential material",
                    description:
                      "Report contents, affected endpoints, proof-of-concept artifacts, customer data, and private correspondence stay private.",
                  },
                  {
                    title: "Educational, not operational",
                    description:
                      "Notes explain the shape of a weakness and the reasoning behind it, not step-by-step exploitation of a live target.",
                  },
                  {
                    title: "Clarity over spectacle",
                    description:
                      "Findings are described with the smallest useful level of detail, consistent with program policy and coordinated timelines.",
                  },
                ].map((item, index) => (
                  <li
                    key={item.title}
                    className="grid grid-cols-12 gap-4 border-b border-line py-6"
                  >
                    <span className="col-span-2 font-mono text-[0.75rem] tracking-[0.14em] text-acid sm:col-span-1">
                      0{index + 1}
                    </span>
                    <div className="col-span-10 sm:col-span-11">
                      <h3 className="font-display text-2xl leading-tight text-bone">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/methodology#disclosure"
                  className="link-line font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone hover:text-acid"
                >
                  Disclosure approach
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="link-line font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist hover:text-acid"
                >
                  Corrections and context
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
