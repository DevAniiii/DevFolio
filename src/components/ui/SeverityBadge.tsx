import type { Severity } from "@/types/content";

const severityStyles: Record<Severity, string> = {
  critical: "text-critical",
  high: "text-high",
  medium: "text-medium",
};

interface SeverityBadgeProps {
  code: string;
  severity: Severity;
  label: string;
  className?: string;
}

export function SeverityBadge({
  code,
  severity,
  label,
  className = "",
}: SeverityBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[0.75rem] leading-none uppercase tracking-[0.14em] ${severityStyles[severity]} ${className}`}
    >
      <span aria-hidden="true" className="h-[5px] w-[5px] bg-current" />
      <span>{code}</span>
      <span aria-hidden="true" className="text-mist/80">
        /
      </span>
      <span>{label}</span>
    </span>
  );
}
