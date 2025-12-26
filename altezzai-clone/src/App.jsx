import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landing/page";
import Mainservices from "./components/Services/Mainservices";
import Mainworks from "./components/Works/Mainworks";
import Mainteams from "./components/Teams/Mainteams";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Mainservices />} />
        <Route path="/works" element={<Mainworks />} />
        <Route path="/teams" element={<Mainteams />} />
      </Routes>
    </Router>
  );
}

export default App;
