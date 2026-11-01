import type { ResearchNote } from "@/types/content";

export const readingAnApi: ResearchNote = {
  slug: "reading-an-api-like-a-researcher",
  number: "04",
  title: "Reading an API like a researcher",
  category: "API security",
  focus: "Surface analysis",
  summary:
    "Before testing a single request, map what the API believes about identity, ownership, and sequence. The shape of those beliefs is where the work begins.",
  readingTime: 5,
  published: "2026-08-19",
  displayDate: "19 August 2026",
  disclosure:
    "This is an educational analysis of a vulnerability class. It contains no target details, private endpoints, credentials, customer data, or exploit instructions.",
  sections: [
    {
      id: "start-with-the-shape",
      title: "Start with the shape",
      paragraphs: [
        "An API is not a list of endpoints. It is a description of trust: who calls it, what each caller is assumed to know, which objects exist, and how state moves from one form to another. Reading that description before probing individual requests is the difference between collecting observations and understanding a system.",
        "Begin with the nouns. Every resource implies an owner, a relationship, and a lifecycle. Then look at the verbs. Reads, writes, approvals, exports, and deletions rarely share the same authorization model. Finally, look at the boundaries around them: what terminates a session, what changes a role, and which client is expected to enforce a rule that the server also needs to enforce.",
      ],
      quote:
        "The useful question is not only what the API exposes, but what it assumes about the people who call it.",
    },
    {
      id: "read-the-negative-space",
      title: "Read the negative space",
      paragraphs: [
        "Public documentation describes the intended surface. The behavior around it describes the real one. Inconsistent error responses can reveal where authorization is enforced, where it is missing, and where a record simply does not exist. Fields accepted but not documented can suggest a model that has moved on while the contract has not.",
        "Versioning is another form of negative space. An older version may still be reachable through a client that has not been updated, or a service may accept a deprecated field for compatibility long after the current UI stopped sending it. Deprecation is not the same as removal, and a forgotten path is still part of the surface.",
        "None of these observations is a vulnerability by itself. They are signals that help form a hypothesis. The work is to connect a signal to an assumption, then test the assumption safely.",
      ],
      points: [
        "Compare what the documentation says with what the response actually accepts.",
        "Treat old versions and compatibility fields as live surface until proven otherwise.",
        "Use error consistency to understand enforcement, not to enumerate data.",
        "A signal is a hypothesis, not a finding.",
      ],
    },
    {
      id: "trust-between-clients",
      title: "Trust between clients",
      paragraphs: [
        "Many API assumptions are inherited from the client that came first. A web application may hide a control, send a role flag, or calculate a price before submitting a form. A mobile client may use the same endpoint with a different sequence. An integration may call it with no interface at all.",
        "The server has to remain the authority for decisions that matter, regardless of which client is calling. That is easy to say and difficult to keep true as surfaces multiply. When reviewing an API, ask which values are merely reported by the caller and which ones the server independently establishes. The gap between those two lists is often where the interesting behavior lives.",
      ],
    },
    {
      id: "restraint-as-method",
      title: "Restraint as method",
      paragraphs: [
        "Reading is cheap. Testing has consequences. Use controlled accounts and data, respect rate limits, and avoid actions that could change another person’s state. A request that proves an authorization boundary should be small, repeatable, and limited to the evidence needed to explain the issue.",
        "The same restraint applies to writing. A strong API finding explains the intended model, the assumption that failed, the minimum safe observation, and the practical fix. It does not need a long list of every response the researcher saw. Precision is more persuasive than volume.",
      ],
    },
    {
      id: "a-better-map",
      title: "A better map",
      paragraphs: [
        "Good API security work produces a map rather than a checklist. The map shows actors, objects, ownership rules, state transitions, and the points where enforcement is delegated. It makes missing decisions visible and gives engineers a shared language for fixing them.",
        "That map also changes how testing feels. Instead of trying everything, you learn where to look. The surface becomes smaller, the questions become sharper, and the findings become easier to explain.",
      ],
    },
  ],
  closing:
    "An API rewards the reader who asks what it assumes. The most valuable findings usually begin there, long before the first unexpected response.",
};
