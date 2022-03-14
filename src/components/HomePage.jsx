import "../styles/homePage.css";
import DishData from "./DishData.json";
import { useNavigate } from "react-router-dom";

// Component lenght -1
/**
 * Note, your component was 49 under the limit, but when dataDish (should be DataDish, uppercase) is 23 lines long, it should be a separate React component.
 */
export default function HomePage() {
  const history = useNavigate();
  function toggleSection(section) {
    history(`/section/${section}`);
  }

  // Function length -1
  // No function should be longer than 12 lines, this should be a separate React component
  // Extra, if you refactor this, you can start using destructuring for the id, dishImg, description, section etc and make it look cleaner
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
      <div className="homepage-text-grid">
        <div className="homepage-text-content">
          <h3>{dish.section}</h3>
          <p className="homepage-text">{dish.description}</p>
          <button
            className="homepage-button"
            onClick={() => toggleSection(dish.section)}
          >
            See more
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <main className="homepage-content">
      <header className="homepage-hero-content">
        <div className="homepage-content-block">
          <h1 className="homepage-title">Pepper</h1>
          <h3 className="homepage-title-text">
            We will open a new vegan world!
          </h3>
        </div>
      </header>
      <section className="homepage-menu">{dataDish}</section>
    </main>
  );
}
