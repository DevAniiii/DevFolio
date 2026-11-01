import type { ResearchNote } from "@/types/content";

export const permissionNotAuthorization: ResearchNote = {
  slug: "permission-is-not-authorization",
  number: "03",
  title: "Permission is not authorization",
  category: "Authentication",
  focus: "Sessions / privilege",
  summary:
    "A valid session answers who is asking. It does not answer whether this action is allowed, on this object, in this context, right now.",
  readingTime: 6,
  published: "2026-09-08",
  displayDate: "8 September 2026",
  disclosure:
    "This is an educational analysis of a vulnerability class. It contains no target details, private endpoints, credentials, customer data, or exploit instructions.",
  sections: [
    {
      id: "two-different-questions",
      title: "Two different questions",
      paragraphs: [
        "Authentication is evidence. Authorization is a decision. A session proves that a request comes from a known actor; it says almost nothing about whether the actor should be allowed to do what the request asks. When the two are treated as the same question, every authenticated request becomes a potential permission.",
        "The distinction sounds basic, yet it is lost in small, ordinary places. A role stored in a token is read as a fact rather than a claim. A scope checked at the gateway is assumed to apply to every service behind it. A hidden control is treated as a denied action. Each shortcut works until a new route, client, or workflow arrives with a different context.",
      ],
      quote:
        "A session is an assertion about identity. Authorization is a decision about an action.",
    },
    {
      id: "where-permission-leaks",
      title: "Where permission leaks",
      paragraphs: [
        "Authorization decisions drift when they are distributed. The web client checks one role, the mobile client checks another, the gateway checks a scope, and a downstream service trusts the gateway. A new export endpoint is built against the internal service directly. A support tool reuses an admin query. None of these paths is necessarily wrong in isolation; together they describe several different policies.",
        "Role labels are another frequent shortcut. A label such as “admin” or “manager” may be accurate for one action and too broad for another. Permission to view a record is not automatically permission to edit it, export it, or share it. Permission to act on one object is not permission to act on every object of that type. The matrix is larger than the label.",
        "Time matters too. A session created before a role change may continue to carry the old privileges. A token issued for one context may be replayed in another. Account recovery, email changes, and delegated access all move identity across a boundary, and each transition is a place where the old decision can linger after the new one should apply.",
      ],
      points: [
        "Same role, different relationship, different object: the decision may not be the same.",
        "Scopes at the edge do not guarantee enforcement inside the service.",
        "Privilege changes should be reflected in the session lifecycle.",
        "Recovery and delegation flows are identity transitions, not side quests.",
      ],
    },
    {
      id: "build-the-matrix",
      title: "Build the matrix",
      paragraphs: [
        "A useful research model lists subjects, actions, objects, contexts, and states. For each combination, write what should happen and where the decision is enforced. The matrix exposes assumptions quickly: actions that share a policy without sharing a meaning, objects with no ownership rule, or contexts the design never considered.",
        "Test the boundaries with controlled identities. Compare two accounts with the same role, then accounts with different roles, then the same account after a state change. Use test objects you are authorized to create. The goal is not to enumerate every case; it is to find where the model and the implementation disagree, and to show that disagreement with the smallest safe evidence.",
        "Remember that a denial is information. A missing object, a forbidden response, and an empty result may all be authorization decisions wearing different clothes. Consistent behavior across them is part of the security model, and inconsistency is often the signal that the enforcement is not centralized.",
      ],
    },
    {
      id: "decisions-not-labels",
      title: "Decisions, not labels",
      paragraphs: [
        "The strongest authorization systems treat permission as a decision made against a policy, not a flag consulted at a distance. They use explicit relationships, deny by default, centralize the model while enforcing it at each data boundary, and log the decision rather than only the outcome.",
        "They also design for change. A new endpoint should inherit a policy rather than remember to add one. A new role should require an explicit set of relationships. A session should not outlive the privileges that justified it. These properties do not make a system perfect, but they make permission something that can be reasoned about, tested, and repaired.",
      ],
      points: [
        "Separate identity, authentication state, and authorization policy.",
        "Require an explicit decision for every object and action.",
        "Re-evaluate privilege after sensitive identity transitions.",
        "Log the policy decision, not just the response status.",
      ],
    },
  ],
  closing:
    "Permission is a claim about what someone may do. Authorization is the work of deciding whether that claim is true here, now, for this object.",
};
