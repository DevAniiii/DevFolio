import type { Discipline, MethodStep } from "@/types/content";

export const disciplines: Discipline[] = [
  {
    title: "Broken access control",
    description:
      "Object-level authorization, ownership and tenancy checks, privilege transitions, and the gap between route protection and object protection.",
  },
  {
    title: "API security",
    description:
      "Surface mapping, schema and mass-assignment risks, inconsistent enforcement between services, and assumptions about who consumes an API.",
  },
  {
    title: "Authentication & sessions",
    description:
      "Identity transitions, token lifecycle, session state, account recovery, step-up flows, and trust carried across boundaries.",
  },
  {
    title: "Business logic",
    description:
      "Workflow invariants, state transitions, sequence, concurrency, and decisions that should remain server-authoritative.",
  },
  {
    title: "Security misconfiguration",
    description:
      "Trust boundaries that drift: verbose errors, permissive defaults, environment separation, and unintended exposure.",
  },
  {
    title: "Client-side security",
    description:
      "Where browser assumptions become server-side trust: interface gating, storage, cross-origin behavior, and client-supplied state.",
  },
];

export const toolkit = [
  "Burp Suite",
  "Caido",
  "Postman",
  "Chrome DevTools",
  "ffuf",
  "mitmproxy",
  "Python",
];

export const researchMethods = [
  "Threat modeling",
  "Manual authorization testing",
  "Differential analysis",
  "Workflow analysis",
  "Evidence capture",
  "Coordinated disclosure writing",
];

export const methodSteps: MethodStep[] = [
  {
    number: "01",
    title: "Frame the surface",
    description:
      "Start with the system as it is meant to work: actors, objects, data flows, trust boundaries, and the business rules that hold the workflow together. Scope and permission are settled before a request is sent.",
    output: "A working model of intended behavior and a bounded research surface.",
  },
  {
    number: "02",
    title: "Map the assumptions",
    description:
      "Identify where the system assumes identity, ownership, sequence, or client trust. The most useful questions are usually about what has been taken for granted rather than what looks unusual.",
    output: "A short list of assumptions worth challenging, ranked by potential impact.",
  },
  {
    number: "03",
    title: "Test with restraint",
    description:
      "Use the smallest safe request that can confirm or reject a hypothesis. Stay inside scope, use controlled accounts and data, avoid destructive payloads, and stop once the evidence is sufficient.",
    output: "Reproducible observations with minimal data and no unnecessary disruption.",
  },
  {
    number: "04",
    title: "Prove the impact",
    description:
      "Separate behavior from consequence. Validate the finding against the intended model, isolate the cause, and document the smallest demonstration that makes the risk legible without exposing more than necessary.",
    output: "A defensible finding, clear impact, and proportionate evidence.",
  },
  {
    number: "05",
    title: "Write and disclose",
    description:
      "Write for the engineer who must fix it: concise reproduction, affected behavior, impact, and a practical remediation direction. Follow the program’s timeline, keep private details private, and state the disclosure status plainly.",
    output: "A clear report, a coordinated timeline, and a public-safe summary.",
  },
];
