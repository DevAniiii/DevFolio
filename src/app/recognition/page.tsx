import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SeverityBadge } from "@/components/ui/SeverityBadge";
import { PageIntro } from "@/components/ui/PageIntro";
import { recognition } from "@/data/recognition";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Verified security program acknowledgements and the disclosure context behind them. Program names, assessments, and public-safe details only.",
  alternates: {
    canonical: "/recognition",
  },
  openGraph: {
    title: "Recognition — Anirban Banerjee",
    description:
      "Verified security program acknowledgements and the disclosure context behind them.",
    url: "/recognition",
  },
};

const recordNotes = [
  {
    title: "Program-assessed severity",
    description:
      "P-levels and severity labels come from each program’s own rubric. They are not comparable across programs and are not awards presented by this site.",
  },
  {
    title: "Acknowledgement, not endorsement",
    description:
      "A record indicates that a program acknowledged a report. It does not imply employment, sponsorship, certification, or an endorsement of this work.",
  },
  {
    title: "Private by default",
    description:
      "Report contents, affected endpoints, proof-of-concept material, customer data, and correspondence remain private under coordinated disclosure.",
  },
];

export default function RecognitionPage() {
  return (
    <>
      <PageIntro
        eyebrow="Recognition / Verified acknowledgement"
        title={
          <>
            A record of <em className="italic">acknowledgement.</em>
          </>
        }
        lead="Verified acknowledgements from security programs, limited to what can be stated publicly: the program, its assessment, and the fact of acknowledgement."
        marker="04 records / details withheld"
        aside={
          <>
            <p className="label text-bone/80">A note on severity</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              P1, P2, and P3 are program-assigned assessments. They are not
              public awards, and they do not imply endorsement.
            </p>
          </>
        }
      />

      <section>
        <div className="shell py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-3 pb-4">
            <span className="label text-bone/80">
              Program / assessment / disclosure
            </span>
            <span className="label">Verified listing / 04</span>
          </div>

          <div>
            {recognition.map((entry, index) => (
              <article
                key={`${entry.program}-${entry.code}`}
                className="grid grid-cols-12 gap-x-4 gap-y-6 border-t border-line py-8 lg:items-center lg:py-10"
                data-reveal
              >
                <div className="col-span-12 flex items-start gap-5 sm:col-span-6 lg:col-span-5">
                  <span className="mt-1 font-mono text-[0.75rem] tracking-[0.14em] text-acid">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="font-display text-3xl leading-tight tracking-[-0.015em] text-bone sm:text-4xl">
                      {entry.program}
                    </h2>
                    <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/80">
                      Security program acknowledgement
                    </p>
                  </div>
                </div>

                <dl className="col-span-12 grid grid-cols-3 gap-4 sm:col-span-6 lg:col-span-6 lg:col-start-7">
                  <div>
                    <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/75">
                      Assessment
                    </dt>
                    <dd className="mt-2">
                      <SeverityBadge
                        code={entry.code}
                        severity={entry.severity}
                        label={entry.severityLabel}
                      />
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/75">
                      Record
                    </dt>
                    <dd className="mt-2 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone/85">
                      {entry.record}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/75">
                      Detail
                    </dt>
                    <dd className="mt-2 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist">
                      Withheld
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-mist/85">
            Company and program names identify the acknowledgement only. No
            logos, testimonials, or implied endorsements are used. Public
            references will be added only where a program publishes them and
            the disclosure status allows it.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-surface/30">
        <div className="shell py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4" data-reveal>
              <span className="eyebrow">Reading the record</span>
              <h2 className="type-section-title mt-6 text-bone">
                Evidence, not theatre.
              </h2>
              <p className="body-copy mt-6 max-w-sm text-sm">
                The record is deliberately narrow. It shows what was
                acknowledged without turning a private report into public
                content.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <ul className="border-t border-line">
                {recordNotes.map((item, index) => (
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
                  Disclosure methodology
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="link-line font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist hover:text-acid"
                >
                  Questions about the record
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
