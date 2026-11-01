export const siteConfig = {
  name: "Anirban Banerjee",
  role: "Independent Security Researcher",
  tagline: "The art of finding what others miss.",
  supporting:
    "I investigate application security, uncover vulnerabilities, and help make digital systems more resilient.",
  description:
    "Anirban Banerjee is an independent security researcher focused on web application security, API security, authorization, and business logic. Research, recognition, and responsible disclosure.",
  url: "https://anirbanbanerjee.dev",
  email: "anirbanbanerjee3112@gmail.com",
  emailDisplay: "anirbanbanerjee3112@gmail.com",
  disclosure:
    "Research is shared through coordinated disclosure. Report details, affected targets, and customer data remain private.",
} as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anirbanbanerjeee/",
  },
  {
    label: "GitHub",
    href: "https://github.com/DevAniiii",
  },
] as const;

export const navigation = [
  { label: "Research", href: "/research" },
  { label: "Recognition", href: "/recognition" },
  { label: "Methodology", href: "/methodology" },
  { label: "About", href: "/about" },
] as const;

export const focusAreas = [
  {
    number: "01",
    title: "Access control",
    description: "Object-level authorization, tenancy, and privilege boundaries.",
  },
  {
    number: "02",
    title: "API security",
    description: "Surface mapping, trust between services, and enforcement gaps.",
  },
  {
    number: "03",
    title: "Authentication",
    description: "Identity, sessions, token lifecycle, and account transitions.",
  },
  {
    number: "04",
    title: "Business logic",
    description: "Sequence, state, and rules that valid requests can still violate.",
  },
] as const;

export const workingPrinciples = [
  {
    title: "Scope before signal",
    description:
      "Authorization and disclosure boundaries are established before anything is tested. Curiosity does not override permission.",
  },
  {
    title: "Evidence over novelty",
    description:
      "A finding matters when it is reproducible, its impact is understood, and the smallest safe proof supports the claim.",
  },
  {
    title: "Clarity is part of the work",
    description:
      "A report is an argument. Reproduction steps, impact, and remediation should be legible to the people who have to act on them.",
  },
  {
    title: "Privacy by default",
    description:
      "Customer data, credentials, private endpoints, and confidential correspondence do not belong in a public portfolio.",
  },
] as const;
