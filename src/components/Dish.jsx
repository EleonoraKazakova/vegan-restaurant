import "../styles/dish.css";
import { useParams, useNavigate } from "react-router-dom";
import HeroDish from "./HeroDish";
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
    <section className="dish-content">
      <HeroDish dish={dishSection.imgProject} />
      <div className="dish-content-block">
        <h2>{dishSection.title}</h2>
        <p className="dish-text">{dishSection.description}</p>
        <div className="dish-ingredient">
          {dishSection.ingredients.join(", ")}
        </div>
        <h3>Nutrition Facts</h3>
        <DishTable dishSection={dishSection} />
        <button
          className="button"
          onClick={() => toggleSection(params.section)}
        >
          Go back
        </button>
      </div>
    </section>
  );
}
