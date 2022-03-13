export default function DishTable({ dishSection }) {
  const table = dishSection.nutritionFacts.map((fact, index) => (
    <tr key={fact[0]} className={index % 2 ? "dish-table-text" : null}>
      <td>{fact[0]}</td>
      <td className="dish-table-td">{fact[1]}</td>
    </tr>
  ));
  return (
    <table className="dish-table">
      <tbody>{table}</tbody>
    </table>
  );
}
