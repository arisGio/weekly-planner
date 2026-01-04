import { PDFViewer } from "@react-pdf/renderer";
import WeeklyPlanner from "./WeeklyPlanner";

function App() {
  return (
    <PDFViewer>
      <WeeklyPlanner />
    </PDFViewer>
  );
}

export default App;
