import WeekBody from "@/components/WeekBody/WeekBody";
import WeekHeader from "@/components/WeekHeader/WeekHeader";
import { styles } from "@components/WeeklyPlanner/WeeklyPlanner.styles";
import type { WeeklyPlannerDocumentProps } from "@components/WeeklyPlanner/WeeklyPlanner.types";
import { Document, Page } from "@react-pdf/renderer";

const WeeklyPlanner = ({
  title,
  author,
  creationDate,
  modificationDate,
}: WeeklyPlannerDocumentProps) => {
  return (
    <Document
      title={title}
      author={author}
      creationDate={creationDate}
      modificationDate={modificationDate}
    >
      <Page size="A4" orientation="landscape" style={styles.page}>
        <WeekHeader />
        <WeekBody />
      </Page>
    </Document>
  );
};

export default WeeklyPlanner;
