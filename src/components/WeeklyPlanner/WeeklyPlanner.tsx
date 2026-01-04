import { styles } from "@components/WeeklyPlanner/WeeklyPlanner.styles";
import type { WeeklyPlannerDocumentProps } from "@components/WeeklyPlanner/WeeklyPlanner.types";
import { Document, Page, Text, View } from "@react-pdf/renderer";

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
