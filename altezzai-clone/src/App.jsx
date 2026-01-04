import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landing/page";
import Mainservices from "./components/Services/Mainservices";
import Mainworks from "./components/Works/Mainworks";
import Mainteams from "./components/Teams/Mainteams";
import Maincontact from "./components/Contact/Maincontact";
import About from "./components/About/About";
import Product from "./landing/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Mainservices />} />
        <Route path="/works" element={<Mainworks />} />
        <Route path="/teams" element={<Mainteams />} />
        <Route path="/contact" element={<Maincontact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
