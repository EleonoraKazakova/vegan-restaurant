import "../styles/Bar.css";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

export default function Hero() {
  return (
    <div className="bar-content">
      <Link to="/section/dishes" className="bar-link">
        Dishes
      </Link>
      <Link to="/section/desserts" className="bar-link">
        Desserts
      </Link>
      <Link to="/" className="bar-link">
        <img src={Logo} className="bar-image" />
      </Link>
      <Link to="/section/drinks" className="bar-link">
        Drinks
      </Link>
      <Link to="/contact" className="bar-link">
        Contact
      </Link>
    </div>
  );
}
