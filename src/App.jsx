import "./styles/app.css";
import Bar from "./components/Bar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Section from "./components/Section";
import Dish from "./components/Dish";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-content">
      <Bar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/section/:section" element={<Section />} />
        <Route path="/section/:section/:dish" element={<Dish />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
