import "../styles/section.css";
import "../styles/base/button.css";
import { useParams, useNavigate } from "react-router-dom";
import DishData from "./DishData.json";

export default function Section() {
  const params = useParams();
  const history = useNavigate();
  function toggleSection(dish) {
    history(`/section/${params.section}/${dish}`);
  }

  const dishSection = Object.values(DishData[params.section]).map((dish) => (
    <section key={dish.id} className="section-content">
      <img
        src={require(`../pictures/${params.section}/${dish.imgProject}.jpg`)}
        className="section-image"
        alt=""
      />
      <span className="section-text-grid">
        <span className="section-text-content">
          <h4>{dish.title}</h4>
          <p className="section-text">{dish.description}</p>
          <button
            onClick={() => toggleSection(dish.webTitle)}
            className="button"
          >
            See more
          </button>
        </span>
      </span>
    </section>
  ));

  return (
    <main className="section-grid">
      <header
        className={`section-${params.section} section-hero section-grid-hero`}
      ></header>
      <section className="section-grid-content">
        <h1 className="section-title">{params.section}</h1>
        <span className="section-menu ">{dishSection}</span>
      </section>
    </main>
  );
}
