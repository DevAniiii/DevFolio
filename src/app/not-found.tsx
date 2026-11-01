import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-40"
      />
      <div className="shell relative py-24 lg:py-36">
        <div className="flex items-center justify-between gap-6">
          <span className="eyebrow">404 / Off the map</span>
          <span className="label hidden sm:block">Requested surface unavailable</span>
        </div>

        <h1 className="type-page-title mt-12 max-w-4xl text-bone">
          This surface
          <br />
          does not <em className="italic">exist.</em>
        </h1>

        <p className="lead mt-8 max-w-xl">
          The page you requested is not part of this research index. It may
          have moved, or it may never have been public.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Return home
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/research" className="btn btn-outline">
            Read the research
          </Link>
        </div>

        <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist/80">
          <span>Status / 404</span>
          <span>No data was disclosed</span>
          <span>Try the research index</span>
        </div>
      </div>
    </section>
  );
}
