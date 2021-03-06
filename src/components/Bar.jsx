import "../styles/bar.css";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

export default function Hero() {
  return (
    <nav className="bar-content">
      <Link to="/section/Dishes" className="bar-link">
        Dishes
      </Link>
      <Link to="/section/Desserts" className="bar-link">
        Desserts
      </Link>
      <Link to="/" className="bar-link">
        <img src={Logo} className="bar-image" />
      </Link>
      <Link to="/section/Drinks" className="bar-link">
        Drinks
      </Link>
      <Link to="/contact" className="bar-link">
        Contact
      </Link>
    </nav>
  );
}
