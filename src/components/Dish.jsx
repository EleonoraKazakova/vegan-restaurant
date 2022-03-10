import "../styles/Dish.css";
import { useParams, useNavigate } from "react-router-dom";
import DishData from "./DishData.json";
import HeroDish from "./HeroDish";
import "../styles/base/button.css";

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
        <table className="dish-table">
          <tr className="dish-table-text">
            <td> servingSize:</td>
            <td>{dishSection.nutritionFacts.servingSize}</td>
          </tr>
          <tr className="dish-table-text">
            <td>calories:</td>
            <td>{dishSection.nutritionFacts.calories}</td>
          </tr>
          <tr className="dish-table-text">
            <td>caloriesFromFat:</td>
            <td>{dishSection.nutritionFacts.caloriesFromFat}</td>
          </tr>
          <tr>
            <td>TotalFat: {dishSection.nutritionFacts.TotalFat[0]}</td>
            <td>{dishSection.nutritionFacts.TotalFat[1]}</td>
          </tr>
          <tr>
            <td>SaturatedFat: {dishSection.nutritionFacts.SaturatedFat[0]}</td>
            <td>{dishSection.nutritionFacts.SaturatedFat[1]}</td>
          </tr>
          <tr className="dish-table-text">
            <td>Cholesterol: {dishSection.nutritionFacts.Cholesterol[0]}</td>
            <td>{dishSection.nutritionFacts.Cholesterol[1]}</td>
          </tr>
          <tr>
            <td>Sodium: {dishSection.nutritionFacts.Sodium[0]}</td>
            <td>{dishSection.nutritionFacts.Sodium[1]}</td>
          </tr>
          <tr className="dish-table-text">
            <td>
              TotalCarbohydrate:{" "}
              {dishSection.nutritionFacts.TotalCarbohydrate[0]}
            </td>
            <td>{dishSection.nutritionFacts.TotalCarbohydrate[1]}</td>
          </tr>
          <tr>
            <td>DietaryFiber: {dishSection.nutritionFacts.DietaryFiber[0]}</td>
            <td>{dishSection.nutritionFacts.DietaryFiber[1]}</td>
          </tr>
          <tr>
            <td>Sugars:</td>
            <td>{dishSection.nutritionFacts.Sugars}</td>
          </tr>
          <tr className="dish-table-text">
            <td>Protein:</td>
            <td>{dishSection.nutritionFacts.Protein}</td>
          </tr>
        </table>
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
