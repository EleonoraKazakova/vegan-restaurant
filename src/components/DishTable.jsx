export default function DishTable({ dishSection }) {
  const table = dishSection.nutritionFacts.map((fact, index) => (
    <tr className={index % 2 ? "dish-table-text" : null}>
      <td>{fact[0]}</td>
      <td className="dish-table-td">{fact[1]}</td>
    </tr>
  ));
  return (
    <div>
      <table className="dish-table">{table}</table>
    </div>
  );
}
