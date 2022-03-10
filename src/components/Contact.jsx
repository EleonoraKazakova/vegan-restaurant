import { useState } from "react";
import "../styles/Contact.css";
import HeroContact from "./HeroContact";
import Map from "../pictures/map.jpg";
import DataTime from "./DataTime.json";

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

  const timeData = DataTime.schedule.map((data) => (
    <tr>
      <td>{data[0]}</td> <td>{data[1]}</td>
    </tr>
  ));

  const address = DataTime.address.map((data) => (
    <tr>
      <td>{data}</td>
    </tr>
  ));

  return (
    <section className="contact-content text">
      <HeroContact />
      <div className="contact-text-form">
        <div>
          <h2>Opening hours</h2>
          <table className="contact-table">{timeData}</table>
          <h4>Address</h4>
          <table className="contact-table">{address}</table>
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
