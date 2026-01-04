import { PDFViewer } from "@react-pdf/renderer";
import WeeklyPlanner from "./WeeklyPlanner";

const App = () => (
  <PDFViewer style={{ width: "100vw", height: "100vh" }}>
    <WeeklyPlanner />
  </PDFViewer>
);

export default App;
