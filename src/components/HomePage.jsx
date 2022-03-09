import "../styles/HomePage.css";
import DishData from "./DishData.json";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";

export default function HomePage() {
  const history = useNavigate();
  function toggleSection(section) {
    history(`/section/${section}`);
  }
  const dataDish = DishData.homePageDishes.map((dish, index) => (
    <div
      key={dish.id}
      className={index % 2 ? "homepage-block-reverse" : "homepage-block"}
    >
      <img
        src={require(`../pictures/homePage/${dish.dishImg}.jpg`)}
        className="homepage-image"
        alt=""
      />
      <span className="homepage-text-grid">
        <span className="homepage-text-content">
          <p>{dish.description}</p>
          <button
            className="homepage-button"
            onClick={() => toggleSection(dish.section)}
          >
            See more
          </button>
        </span>
      </span>
    </div>
  ));

  return (
    <section className="homepage-content">
      <Hero />
      <section className="homepage-menu">{dataDish}</section>
    </section>
  );
}
