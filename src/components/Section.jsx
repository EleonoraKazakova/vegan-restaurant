import "../styles/section.css";
import "../styles/base/button.css";
import { useParams, useNavigate } from "react-router-dom";
import DishData from "./DishData.json";
import HeroSection from "./HeroSection";

export default function Section() {
  const params = useParams();
  const history = useNavigate();
  function toggleSection(dish) {
    history(`/section/${params.section}/${dish}`);
  }

  const dishSection = Object.values(DishData[params.section]).map((dish) => (
    <div key={dish.id} className="section-content">
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
    </div>
  ));

  return (
    <div>
      <HeroSection section={params.section} />
      <h1 className="section-title">{params.section}</h1>
      <div className="section-menu">{dishSection}</div>
    </div>
  );
}
