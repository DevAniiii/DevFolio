import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { PageIntro } from "@/components/ui/PageIntro";
import { siteConfig, socialLinks } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Anirban Banerjee for security research, application security conversations, and responsible disclosure questions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Anirban Banerjee",
    description:
      "Direct contact for security research, application security conversations, and responsible disclosure questions.",
    url: "/contact",
  },
};

const messageGuides = [
  {
    title: "Security findings",
    description:
      "Include a short summary, the program or property involved, the impact you believe is relevant, and the safest way to continue. Do not include live exploit material in a first message.",
  },
  {
    title: "Teams & reviews",
    description:
      "Describe the surface, the scope, the constraints, and the decision you need to make. A short description of the system and what is authorized is enough to begin.",
  },
  {
    title: "Recruiters & peers",
    description:
      "Share the role, team, or research question, and what makes this work relevant. A link to the research is more useful than a long introduction.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact / Direct line"
        title={
          <>
            Start with the <em className="italic">surface.</em>
          </>
        }
        lead="For security research, application security conversations, or a considered question about a finding, email is the most direct route."
        marker="Direct email / no contact form"
        aside={
          <>
            <p className="label text-bone/80">Before you send</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Please avoid credentials, customer data, or sensitive exploit
              material in a first message. Describe what is needed and we can
              agree on an appropriate channel.
            </p>
          </>
        }
      />

      <section className="border-b border-line">
        <div className="shell py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <span className="eyebrow">Direct email</span>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
                No contact form, no marketing list, no tracking. A direct
                message reaches the researcher.
              </p>
              <div className="mt-8 border-t border-line pt-4">
                <p className="font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.14em] text-mist/80">
                  For questions about a public note, include the note title and,
                  where relevant, the program.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group block border-b border-line pb-8"
              >
                <span className="label">Write to</span>
                <span className="mt-4 block break-words font-display text-[clamp(1.3rem,3.8vw,3.5rem)] leading-[1.02] tracking-[-0.025em] text-bone transition-colors group-hover:text-acid">
                  {siteConfig.emailDisplay}
                </span>
              </a>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <CopyEmail email={siteConfig.email} />
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/75">
                  Opens your mail client
                </span>
              </div>

              <p className="lead mt-12 max-w-2xl">
                Good security conversations tend to start small: a system, a
                question, a constraint. You do not need a complete report to
                make the first message useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface/30">
        <div className="shell py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4" data-reveal>
              <span className="eyebrow">What to include</span>
              <h2 className="type-section-title mt-6 text-bone">
                A useful first message.
              </h2>
              <p className="body-copy mt-6 max-w-sm text-sm">
                Context matters more than length. The goal is to make the next
                step obvious for both sides.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <ul className="border-t border-line">
                {messageGuides.map((guide, index) => (
                  <li
                    key={guide.title}
                    className="grid gap-4 border-b border-line py-7 lg:grid-cols-12"
                  >
                    <div className="lg:col-span-4">
                      <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-acid">
                        0{index + 1}
                      </span>
                      <h3 className="mt-2 font-display text-2xl leading-tight text-bone">
                        {guide.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-mist lg:col-span-8">
                      {guide.description}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-l-2 border-l-acid bg-obsidian p-5">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-acid">
                  Sensitive material
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist">
                  Do not send credentials, personal data, customer records, or
                  live exploit material in a first email. If a secure channel is
                  required, say so without including the sensitive details.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/methodology#disclosure"
                  className="link-line font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone hover:text-acid"
                >
                  Disclosure principles
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/research"
                  className="link-line font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist hover:text-acid"
                >
                  Read the research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell py-16 lg:py-20">
          <div className="flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Elsewhere</span>
              <h2 className="mt-5 font-display text-4xl leading-none tracking-[-0.02em] text-bone sm:text-5xl">
                The record, in context.
              </h2>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="me noreferrer"
                    className="link-line font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist transition-colors hover:text-acid"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <Link href="/recognition" className="btn btn-outline">
              Recognition
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
