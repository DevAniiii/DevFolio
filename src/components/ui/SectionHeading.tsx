import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  note?: ReactNode;
  action?: ReactNode;
}

export function SectionHeading({
  index,
  label,
  title,
  note,
  action,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-3">
        <span className="eyebrow">
          {index} / {label}
        </span>
      </div>
      <div className="lg:col-span-6">
        <h2 className="type-section-title text-bone">{title}</h2>
      </div>
      <div className="flex flex-col items-start gap-5 lg:col-span-3 lg:items-end lg:text-right">
        {note ? <div className="body-copy max-w-xs text-sm">{note}</div> : null}
        {action}
      </div>
    </div>
  );
}
