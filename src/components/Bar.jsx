import "../styles/bar.css";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

// Naming -3
// The file is call Bar.jsx instead of NavigationBar.jsx BUT...
// here the component is called Hero()
export default function Hero() {
  // Properties
  const LogoImage = <img src={Logo} className="bar-image" />;

  return (
    /**
     * Tip 1
     * If every link needs .bar-link then
     * just call bar-content a {} in your CSS, as it achieves the same effect withouth needing extra classNames here.
     * Now look how clean it looks withouth the repeated classes.
     *
     * Tip 2:
     * To further clean up, you can create a LogoImage or similar name for the Image and now everything fits 1 line.
     */
    <nav className="bar-content">
      <Link to="/section/Dishes">Dishes</Link>
      <Link to="/section/Desserts">Desserts</Link>
      <Link to="/">{LogoImage}</Link>
      <Link to="/section/Drinks">Drinks</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
