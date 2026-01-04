import { PDFViewer } from "@react-pdf/renderer";
import WeeklyPlanner from "./components/WeeklyPlanner/WeeklyPlanner";

const creationDate = new Date(2026, 1, 4);
const modificationDate = new Date(); // not working

const App = () => (
  <PDFViewer style={{ width: "100vw", height: "100vh" }}>
    <WeeklyPlanner
      title="Weekly Planner"
      author="Aris Giotis"
      creationDate={creationDate}
      modificationDate={modificationDate}
    />
  </PDFViewer>
);

export default App;
