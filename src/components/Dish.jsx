import "../styles/dish.css";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/heroDish.css";
import "../styles/base/button.css";
import DishTable from "./DishTable";
import DishData from "./DishData.json";

export default function Dish() {
  const params = useParams();
  const history = useNavigate();
  function toggleSection(section) {
    history(`/section/${section}`);
  }
  const dishSection = DishData[params.section][params.dish];
  return (
    <main className="dish-grid">
      <header
        className={`hero-dish-${dishSection.imgProject} hero-dish dish-grid-hero`}
      ></header>

      <section className=" dish-grid-content">
        <h2>{dishSection.title}</h2>
        <p className="dish-text">{dishSection.description}</p>
        <span className="dish-ingredient">
          {dishSection.ingredients.join(", ")}
        </span>
        <h3>Nutrition Facts</h3>
        <DishTable dishSection={dishSection} />
        <button
          className="button"
          onClick={() => toggleSection(params.section)}
        >
          Go back
        </button>
      </section>
    </main>
  );
}
