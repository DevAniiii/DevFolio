export type Severity = "critical" | "high" | "medium";

export interface RecognitionEntry {
  program: string;
  shortProgram: string;
  code: "P1" | "P2" | "P3";
  severity: Severity;
  severityLabel: "Critical" | "High" | "Medium";
  record: "Acknowledged";
}

export interface ResearchSection {
  id: string;
  title: string;
  paragraphs: string[];
  points?: string[];
  quote?: string;
}

export interface ResearchNote {
  slug: string;
  number: string;
  title: string;
  category: string;
  focus: string;
  summary: string;
  readingTime: number;
  published: string;
  displayDate: string;
  disclosure: string;
  sections: ResearchSection[];
  closing: string;
}

export interface Discipline {
  title: string;
  description: string;
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  output: string;
}
