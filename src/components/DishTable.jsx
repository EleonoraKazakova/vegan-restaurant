export default function DishTable({ dishSection }) {
  return (
    <table className="dish-table">
      <tr className="dish-table-text">
        <td> Serving size:</td>
        <td>{dishSection.nutritionFacts.servingSize}</td>
      </tr>
      <tr className="dish-table-text">
        <td>Calories:</td>
        <td>{dishSection.nutritionFacts.calories}</td>
      </tr>
      <tr className="dish-table-text">
        <td>Calories from fat:</td>
        <td>{dishSection.nutritionFacts.caloriesFromFat}</td>
      </tr>
      <tr>
        <td>Total fat: {dishSection.nutritionFacts.TotalFat[0]}</td>
        <td>{dishSection.nutritionFacts.TotalFat[1]}</td>
      </tr>
      <tr>
        <td>Saturated fat: {dishSection.nutritionFacts.SaturatedFat[0]}</td>
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
          Total carbohydrate: {dishSection.nutritionFacts.TotalCarbohydrate[0]}
        </td>
        <td>{dishSection.nutritionFacts.TotalCarbohydrate[1]}</td>
      </tr>
      <tr>
        <td>Dietary fiber: {dishSection.nutritionFacts.DietaryFiber[0]}</td>
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
  );
}
