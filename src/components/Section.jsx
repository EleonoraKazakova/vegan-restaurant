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

  const sectionDescription = DishData.homePageDishes.find(
    (homePagesection) => homePagesection.section === params.section
  ).description;

  const dishSection = Object.values(DishData[params.section]).map((dish) => (
    <div key={dish.id} className="section-content">
      <img
        src={require(`../pictures/${params.section}/${dish.imgProject}.jpg`)}
        className="section-image"
        alt=""
      />
      <div className="section-text-grid">
        <div className="section-text-content">
          <h4>{dish.title}</h4>
          <p className="section-text">{dish.description}</p>
          <button
            onClick={() => toggleSection(dish.webTitle)}
            className="button"
          >
            See more
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <main>
      <header className={`section-${params.section} section-hero`}>
        <h1 className="section-content-block">{params.section}</h1>
      </header>
      <section className="section-grid-content">
        <p className="section-description">{sectionDescription}</p>
        <div className="section-menu ">{dishSection}</div>
      </section>
    </main>
  );
}
