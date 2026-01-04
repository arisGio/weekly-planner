import { Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./WeeklyPlanner.styles";
import type { WeeklyPlannerDocumentProps } from "./WeeklyPlanner.types";

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
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

export default WeeklyPlanner;
