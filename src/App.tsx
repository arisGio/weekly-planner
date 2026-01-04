import { PDFViewer } from "@react-pdf/renderer";
import WeeklyPlanner from "./components/WeeklyPlanner/WeeklyPlanner";
import { getCreationDate, getModificationDate } from "./utils/dates";

const App = () => (
  <PDFViewer style={{ width: "100vw", height: "100vh" }}>
    <WeeklyPlanner
      title="Weekly Planner"
      author="Aris Giotis"
      creationDate={getCreationDate()}
      modificationDate={getModificationDate()}
    />
  </PDFViewer>
);

export default App;
