import type { ResearchNote } from "@/types/content";
import { objectNotEndpoint } from "./the-object-not-the-endpoint";
import { businessRule } from "./when-the-business-rule-is-the-vulnerability";
import { permissionNotAuthorization } from "./permission-is-not-authorization";
import { readingAnApi } from "./reading-an-api-like-a-researcher";

export const researchNotes: ResearchNote[] = [
  objectNotEndpoint,
  businessRule,
  permissionNotAuthorization,
  readingAnApi,
].sort((a, b) => (a.published < b.published ? 1 : -1));

export function getResearchNote(slug: string): ResearchNote | undefined {
  return researchNotes.find((note) => note.slug === slug);
}

export function getAdjacentNotes(slug: string) {
  const index = researchNotes.findIndex((note) => note.slug === slug);

  return {
    previous: index > 0 ? researchNotes[index - 1] : undefined,
    next:
      index >= 0 && index < researchNotes.length - 1
        ? researchNotes[index + 1]
        : undefined,
  };
}
