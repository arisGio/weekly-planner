import { PDFViewer } from "@react-pdf/renderer";
import WeeklyPlanner from "./components/WeeklyPlanner/WeeklyPlanner";
import { documentConfig } from "./utils/config";

const App = () => (
  <PDFViewer style={{ width: "100vw", height: "100vh" }}>
    <WeeklyPlanner
      title={documentConfig.title}
      author={documentConfig.author}
      creationDate={documentConfig.creationDate}
      modificationDate={documentConfig.modificationDate}
    />
  </PDFViewer>
);

export default App;
