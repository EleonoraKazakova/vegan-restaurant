import "../styles/homePage.css";
import DishData from "./DishData.json";
import { useNavigate } from "react-router-dom";

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
        alt={dish.altImg}
      />
      <span className="homepage-text-grid">
        <span className="homepage-text-content">
          <p className="homepage-text">{dish.description}</p>
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
    <main className="homepage-content homepage-grid">
      <header className="homepage-hero-content homepage-grid-hero">
        <section className="hero-content-block">
          <h1 className="homepage-title">Pepper</h1>
          <h3 className="homepage-title-text">
            We will open a new vegan world!
          </h3>
        </section>
      </header>
      <section className="homepage-menu homepage-grid-content">
        {dataDish}
      </section>
    </main>
  );
}
