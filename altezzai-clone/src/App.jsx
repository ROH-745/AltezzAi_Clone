import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landing/page";
import Mainservices from "./components/Services/Mainservices";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Mainservices />} />
      </Routes>
    </Router>
  );
}

export default App;
