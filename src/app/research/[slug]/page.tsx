import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  getAdjacentNotes,
  getResearchNote,
  researchNotes,
} from "@/content/research";
import { siteConfig } from "@/data/profile";

export const dynamicParams = false;

interface NotePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return researchNotes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getResearchNote(slug);

  if (!note) {
    return {};
  }

  return {
    title: note.title,
    description: note.summary,
    alternates: {
      canonical: `/research/${note.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${note.title} — Anirban Banerjee`,
      description: note.summary,
      url: `/research/${note.slug}`,
      publishedTime: note.published,
      authors: [siteConfig.name],
      tags: [note.category, note.focus, "Security research"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${note.title} — Anirban Banerjee`,
      description: note.summary,
    },
  };
}

export default async function ResearchNotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getResearchNote(slug);

  if (!note) {
    notFound();
  }

  const { previous, next } = getAdjacentNotes(note.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.summary,
    datePublished: note.published,
    articleSection: note.category,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/research/${note.slug}`,
    url: `${siteConfig.url}/research/${note.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        <header className="relative overflow-hidden border-b border-line">
          <div
            aria-hidden="true"
            className="hero-grid pointer-events-none absolute inset-0 opacity-30"
          />
          <div className="shell relative pt-8 pb-14 lg:pt-10 lg:pb-20">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist transition-colors hover:text-bone"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                All research
              </Link>
              <span className="label">
                Field note {note.number} / 04
              </span>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-acid">
                {note.category}
              </span>
              <span aria-hidden="true" className="h-3 w-px bg-line" />
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist">
                {note.focus}
              </span>
            </div>

            <h1 className="type-article-title mt-6 max-w-5xl text-bone">
              {note.title}
            </h1>
            <p className="lead mt-7 max-w-2xl">{note.summary}</p>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-5">
              <div>
                <dt className="label">Published</dt>
                <dd className="mt-1.5 font-mono text-xs tracking-[0.04em] text-bone/85">
                  <time dateTime={note.published}>{note.displayDate}</time>
                </dd>
              </div>
              <div>
                <dt className="label">Reading time</dt>
                <dd className="mt-1.5 font-mono text-xs tracking-[0.04em] text-bone/85">
                  {note.readingTime} minutes
                </dd>
              </div>
              <div>
                <dt className="label">Author</dt>
                <dd className="mt-1.5 font-mono text-xs tracking-[0.04em] text-bone/85">
                  {siteConfig.name}
                </dd>
              </div>
              <div>
                <dt className="label">Disclosure</dt>
                <dd className="mt-1.5 font-mono text-xs tracking-[0.04em] text-bone/85">
                  Public-safe analysis
                </dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="shell py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-28">
                <p className="label text-bone/80">Contents</p>
                <nav aria-label="Article contents" className="mt-4">
                  <ol className="space-y-3">
                    {note.sections.map((section, index) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="group flex gap-3 text-sm leading-snug text-mist transition-colors hover:text-bone"
                        >
                          <span className="mt-px font-mono text-[0.6875rem] tracking-[0.14em] text-mist/75 transition-colors group-hover:text-acid">
                            0{index + 1}
                          </span>
                          <span>{section.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>

                <div className="mt-10 border-t border-line pt-4">
                  <p className="font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.14em] text-mist/80">
                    A conceptual note. No live targets or confidential program
                    details are described.
                  </p>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8 lg:col-start-5">
              <details className="mb-10 border border-line bg-surface/30 lg:hidden">
                <summary className="cursor-pointer px-4 py-3 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone">
                  Contents
                </summary>
                <ol className="border-t border-line px-4 py-4">
                  {note.sections.map((section, index) => (
                    <li key={section.id} className="py-1.5">
                      <a
                        href={`#${section.id}`}
                        className="flex gap-3 text-sm text-mist hover:text-bone"
                      >
                        <span className="font-mono text-[0.6875rem] text-acid">
                          0{index + 1}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>

              <div className="article-body">
                {note.sections.map((section, index) => (
                  <section key={section.id} id={section.id}>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[0.75rem] tracking-[0.14em] text-acid">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px flex-1 bg-line"
                      />
                    </div>
                    <h2 className="mt-4 font-display text-3xl leading-[1.08] tracking-[-0.02em] text-bone sm:text-4xl">
                      {section.title}
                    </h2>

                    <div className="mt-6">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    {section.quote ? (
                      <blockquote className="article-quote">
                        {section.quote}
                      </blockquote>
                    ) : null}

                    {section.points ? (
                      <ul>
                        {section.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="mt-14 border border-line border-l-2 border-l-acid bg-surface/40 p-6">
                <p className="label text-bone/80">Scope & disclosure</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist">
                  {note.disclosure}
                </p>
                <Link
                  href="/methodology#disclosure"
                  className="link-line mt-5 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-bone hover:text-acid"
                >
                  How disclosure is handled
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

              <p className="mt-12 border-t border-line pt-8 font-display text-2xl leading-snug tracking-[-0.01em] text-bone sm:text-3xl">
                {note.closing}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/75">
                  Filed under {note.category}
                </span>
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/75">
                  {note.readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </div>

        <nav
          aria-label="Research navigation"
          className="border-t border-line bg-surface/20"
        >
          <div className="shell py-10">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist transition-colors hover:text-bone"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              All research
            </Link>

            {previous || next ? (
              <div
                className={`mt-8 grid gap-px border border-line bg-line ${
                  previous && next ? "sm:grid-cols-2" : ""
                }`}
              >
                {previous ? (
                  <Link
                    href={`/research/${previous.slug}`}
                    className="group flex flex-col justify-between gap-6 bg-obsidian p-6 transition-colors hover:bg-surface"
                  >
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist">
                      Newer note / {previous.number}
                    </span>
                    <span className="flex items-start justify-between gap-4">
                      <span className="font-display text-2xl leading-tight tracking-[-0.01em] text-bone transition-colors group-hover:text-acid sm:text-3xl">
                        {previous.title}
                      </span>
                      <ArrowLeft
                        className="mt-1 h-4 w-4 shrink-0 text-mist transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-acid"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                ) : null}

                {next ? (
                  <Link
                    href={`/research/${next.slug}`}
                    className="group flex flex-col justify-between gap-6 bg-obsidian p-6 text-left transition-colors hover:bg-surface sm:text-right"
                  >
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist">
                      Earlier note / {next.number}
                    </span>
                    <span className="flex items-start justify-between gap-4 sm:flex-row-reverse">
                      <span className="font-display text-2xl leading-tight tracking-[-0.01em] text-bone transition-colors group-hover:text-acid sm:text-3xl">
                        {next.title}
                      </span>
                      <ArrowRight
                        className="mt-1 h-4 w-4 shrink-0 text-mist transition-transform duration-300 group-hover:translate-x-1 group-hover:text-acid"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>
        </nav>
      </article>
    </>
  );
}
