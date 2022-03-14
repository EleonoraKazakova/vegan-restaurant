import "./styles/app.css";
import Bar from "./components/Bar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Section from "./components/Section";
import Dish from "./components/Dish";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom"; // this should be at the top of your imports, as it comes from the node_modules/ folder not the src/ folder

// You should do the 1 line import -1
// Good component organization
// For DataTime.json and DishData.json, they should be on a data/ folder instead inside the components/ folder -1
export default function App() {
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
