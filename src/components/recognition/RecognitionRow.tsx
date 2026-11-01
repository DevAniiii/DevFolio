import { SeverityBadge } from "@/components/ui/SeverityBadge";
import type { RecognitionEntry } from "@/types/content";

interface RecognitionRowProps {
  entry: RecognitionEntry;
}

export function RecognitionRow({ entry }: RecognitionRowProps) {
  return (
    <div className="grid grid-cols-12 items-center gap-x-4 gap-y-4 border-t border-line py-6">
      <div className="col-span-12 sm:col-span-7">
        <p className="font-display text-2xl leading-tight tracking-[-0.01em] text-bone">
          {entry.program}
        </p>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <SeverityBadge
          code={entry.code}
          severity={entry.severity}
          label={entry.severityLabel}
        />
      </div>
      <div className="col-span-6 sm:col-span-2 sm:text-right">
        <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-mist">
          {entry.record}
        </span>
      </div>
    </div>
  );
}
