import { useState } from "react";
import "../styles/bookingForm.css";

// Component length is too long -1
export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function toggleBook(event) {
    event.preventDefault();
    if (
      name.length > 0 &&
      time.length > 2 &&
      date.length > 0 &&
      email.length > 0
    ) {
      setName("");
      setEmail("");
      setDate("");
      setTime("");
      alert("We got your booking");
    }
  }

  // DRY and Abstraction -1
  // You can create a InputField class to wrap the label and the input as a single React component
  return (
    <form className="bookingForm-form">
      <h3 className="bookingForm-form-title">Book a table</h3>
      <label>Your Full Name</label>
      <input
        required
        type="text"
        value={name}
        placeholder="David"
        onChange={(event) => setName(event.target.value)}
      />
      <label>Your Email address</label>
      <input
        required
        type="email"
        value={email}
        placeholder="david@gmail.com"
        onChange={(event) => setEmail(event.target.value)}
      />
      <label>Choose date</label>
      <input
        required
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <label>Choose time</label>
      <input
        required
        type="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
      />
      <button className="bookingForm-button" onClick={toggleBook}>
        Book
      </button>
    </form>
  );
}
