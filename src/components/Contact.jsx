import "../styles/Contact.css";
import HeroContact from "./HeroContact";

export default function Contact() {
  return (
    <section>
      <HeroContact />
      <h2>Opening hours</h2>
      <p>Monday to Friday08:00 - 20:00 </p>
      <p>Saturdays09:00 - 22:00 </p>
      <p>Sundays10:00 - 22:00 </p>
      <p>Address Ursviksvägen 28, 172 76 Sundbyberg</p>

      <form>
        <label> Your Full Name</label>
        <input type="text"></input>

        <label> Your Email address</label>
        <input type="text"></input>

        <label> Choose date</label>
        <input type="date"></input>

        <label> Choose time</label>
        <input type="time"></input>
      </form>
    </section>
  );
}
