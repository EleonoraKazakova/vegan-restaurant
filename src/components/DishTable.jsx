export default function DishTable({ dishSection }) {
  return (
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
        <td>Calories From Fat:</td>
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
          TotalCarbohydrate: {dishSection.nutritionFacts.TotalCarbohydrate[0]}
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
  );
}
