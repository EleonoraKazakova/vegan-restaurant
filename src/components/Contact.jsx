import { useState } from "react";
import "../styles/Contact.css";
import HeroContact from "./HeroContact";
import Map from "../pictures/map.jpg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const toggleBook = () => {
    if (
      name.length > 0 &&
      time.length > 0 &&
      date.length > 0 &&
      email.length > 0
    ) {
      setName("");
      setEmail("");
      setDate("");
      setTime("");
      return alert("We got your booking");
    }
  };
  return (
    <section className="contact-content text">
      <HeroContact />
      <div className="contact-text-form">
        <div>
          <h2>Opening hours</h2>
          <p>Monday to Friday08: 00 - 20:00 </p>
          <p>Saturdays 09:00 - 22:00 </p>
          <p>Sundays 10:00 - 22:00 </p>
          <p>Address: Gamla torget 5, 753 20 Uppsala</p>
        </div>
        <form className="contact-form">
          <label> Your Full Name</label>
          <input
            required
            type="text"
            value={name}
            placeholder="David"
            onChange={(name) => setName(name.target.value)}
          ></input>

          <label> Your Email address</label>
          <input
            required
            type="email"
            value={email}
            placeholder="david@gmail.com"
            onChange={(email) => setEmail(email.target.value)}
          ></input>

          <label> Choose date</label>
          <input
            required
            type="date"
            value={date}
            onChange={(date) => setDate(date.target.value)}
          ></input>

          <label> Choose time</label>
          <input
            required
            type="time"
            value={time}
            onChange={(time) => setTime(time.target.value)}
          ></input>
          <button className="contact-button" onClick={() => toggleBook()}>
            Book
          </button>
        </form>
      </div>
      <img src={Map} className="contact-image" />
    </section>
  );
}
