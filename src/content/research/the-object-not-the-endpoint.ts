import type { ResearchNote } from "@/types/content";

export const objectNotEndpoint: ResearchNote = {
  slug: "the-object-not-the-endpoint",
  number: "01",
  title: "The object, not the endpoint",
  category: "Access control",
  focus: "IDOR / BOLA",
  summary:
    "Object-level authorization fails when a route is protected but the thing behind it is not. The distinction is small, and the consequences rarely are.",
  readingTime: 7,
  published: "2026-10-14",
  displayDate: "14 October 2026",
  disclosure:
    "This is an educational analysis of a vulnerability class. It contains no target details, private endpoints, credentials, customer data, or exploit instructions.",
  sections: [
    {
      id: "route-is-not-the-boundary",
      title: "The route is not the boundary",
      paragraphs: [
        "Authorization is often described as a question of who may use an endpoint. In practice, the harder question is what they may touch once they are there. A route can be correctly protected and still expose an object that belongs to someone else. The endpoint passes its check; the object does not.",
        "This is the family of flaws commonly called IDOR or BOLA. The names matter less than the distinction: a role or a client is permitted to perform an action, yet the specific object involved has a separate relationship to the requester. When software checks the first and assumes the second, access control becomes a formality.",
      ],
      quote:
        "A route check answers whether someone may knock. Object authorization answers what they may take.",
    },
    {
      id: "where-the-assumption-hides",
      title: "Where the assumption hides",
      paragraphs: [
        "Object references appear in path segments, query parameters, request bodies, nested resources, batch operations, exports, and background jobs. A single workflow may pass the same identifier through a browser, an API gateway, several services, and a queue. Every hop is an opportunity for the identifier to be treated as data rather than a claim about ownership.",
        "The failure is easy to miss because the interface tells a reassuring story. A dashboard may render only the records a user owns, while the API behind it accepts any well-formed identifier. A role check may reject a customer from an admin route while allowing one customer to read another customer’s invoice through a route they both legitimately use. The interface is not the policy. It is one possible path through it.",
        "Nested routes deserve particular attention. A parent resource may be validated correctly while the child resource is fetched by its own identifier with no check that it belongs to that parent. The composition looks safe at a glance because the surrounding request appears to establish context. In reality, the two identifiers can describe unrelated objects.",
      ],
      points: [
        "Every object reference should map to an explicit subject–object–action decision.",
        "Route-level middleware is necessary, but it is rarely sufficient on its own.",
        "Batch and export operations can turn one missing check into many exposed records.",
        "Client-side hiding is presentation, not enforcement.",
      ],
    },
    {
      id: "a-safe-way-to-look",
      title: "A safe way to look",
      paragraphs: [
        "Begin by listing every object a workflow touches and who is expected to own it. For each action, write the complete decision: subject, object, action, and context. Then ask where that decision is actually enforced. If the only answer is “the UI does not show it” or “the route is behind a login,” the model is incomplete.",
        "A controlled comparison is usually enough to test the hypothesis. Use two accounts with the same role, data you are permitted to create, and a single request that should be denied. Stop at the point where the distinction is demonstrated. There is no need to enumerate records, retain another person’s data, or establish impact beyond what the program’s guidance permits.",
        "The same discipline applies to validation. Confirm that the request is one the system accepts, that the object genuinely belongs to another controlled identity, and that the response exposes only the minimum necessary to prove the issue. A clean observation is more useful than a dramatic one.",
      ],
    },
    {
      id: "what-good-enforcement-looks-like",
      title: "What good enforcement looks like",
      paragraphs: [
        "Object-level authorization belongs close to the data access decision, not only at the edge. A policy should answer for every object read or written, with deny as the default and explicit relationships for ownership, tenancy, sharing, and delegation. Unguessable identifiers can raise the cost of discovery, but they are not an authorization control.",
        "Good systems make the decision legible in their logs as well: who asked, which object, what relationship, and what the policy concluded. That record helps engineers debug access behavior and helps researchers reason about the model without guessing. It also creates a useful separation between authentication failures, authorization denials, and missing records.",
      ],
      points: [
        "Centralize the policy, but enforce it at every data boundary.",
        "Model ownership, tenancy, sharing, and delegation explicitly.",
        "Prefer deny-by-default decisions over scattered role checks.",
        "Test the composition of parent and child resources, not just each route.",
      ],
    },
  ],
  closing:
    "The endpoint is a doorway. The question is never only whether the door opens, but what the visitor is allowed to carry back through it.",
};
