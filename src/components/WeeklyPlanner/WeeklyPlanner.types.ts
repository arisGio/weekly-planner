import type { DocumentProps } from "@react-pdf/renderer";

export type WeeklyPlannerDocumentProps = Pick<
  DocumentProps,
  "title" | "author" | "creationDate" | "modificationDate"
>;
