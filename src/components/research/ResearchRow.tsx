import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ResearchNote } from "@/types/content";

interface ResearchRowProps {
  note: ResearchNote;
  featured?: boolean;
}

export function ResearchRow({ note, featured = false }: ResearchRowProps) {
  return (
    <Link
      href={`/research/${note.slug}`}
      className="group relative grid grid-cols-12 gap-x-4 gap-y-5 border-t border-line py-8 transition-colors hover:bg-surface/35 lg:gap-x-8 lg:py-10"
    >
      <span
        aria-hidden="true"
        className="absolute -top-px left-0 h-px w-0 bg-acid transition-[width] duration-500 ease-out group-hover:w-full"
      />

      <div className="col-span-12 flex items-center gap-3 sm:col-span-2 sm:block">
        <span className="font-mono text-[0.75rem] tracking-[0.14em] text-acid">
          {note.number}
        </span>
        <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist sm:mt-2 sm:block">
          {note.category}
        </span>
      </div>

      <div className="col-span-12 sm:col-span-7">
        <h3
          className={`font-display leading-[1.02] tracking-[-0.02em] text-bone ${
            featured ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {note.title}
        </h3>
        <p className="body-copy mt-4 max-w-2xl text-sm">{note.summary}</p>
      </div>

      <div className="col-span-12 flex items-end justify-between gap-4 sm:col-span-3 sm:flex-col sm:items-end">
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist">
          {note.focus}
        </span>
        <span className="flex items-center gap-4 text-mist">
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em]">
            {note.readingTime} min read
          </span>
          <span className="flex h-9 w-9 items-center justify-center border border-line transition-colors group-hover:border-acid group-hover:text-acid">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </span>
      </div>
    </Link>
  );
}
