import "../styles/Footer.css";
import LogoInstagram from "../pictures/instagram-brands.svg";
import LogoFacebook from "../pictures/facebook-brands.svg";
import { ExternalLink } from "react-external-link";

export default function Footer() {
  return (
    <div className="footer-content">
      <ExternalLink href="https://www.instagram.com/">
        <img src={LogoInstagram} className="footer-img" />
      </ExternalLink>
      <ExternalLink href="https://www.facebook.com/">
        <img src={LogoFacebook} className="footer-img" />
      </ExternalLink>
      ;
    </div>
  );
}
