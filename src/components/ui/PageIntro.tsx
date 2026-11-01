import type { ReactNode } from "react";

interface PageIntroProps {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  aside?: ReactNode;
  marker?: string;
}

export function PageIntro({
  eyebrow,
  title,
  lead,
  aside,
  marker,
}: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-35"
      />
      <div className="shell relative pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="flex items-center justify-between gap-6">
          <span className="eyebrow">{eyebrow}</span>
          {marker ? <span className="label hidden sm:block">{marker}</span> : null}
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h1 className="type-page-title text-bone">{title}</h1>
            <p className="lead mt-8 max-w-2xl">{lead}</p>
          </div>

          {aside ? (
            <aside className="lg:col-span-3 lg:col-start-10 lg:self-end">
              <div className="border-t border-line pt-5">{aside}</div>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}
