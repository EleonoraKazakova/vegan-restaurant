import "../styles/contact.css";
import HeroContact from "./HeroContact";
import Map from "../pictures/map.jpg";
import DataTime from "./DataTime.json";
import BookingForm from "./BookingForm";

export default function Contact() {
  const timeData = DataTime.schedule.map((data) => (
    <tr key={data[0]}>
      <td>{data[0]}</td>
      <td>{data[1]}</td>
    </tr>
  ));

  const address = DataTime.address.map((data) => (
    <tr key={data}>
      <td>{data}</td>
    </tr>
  ));

  return (
    <section className="contact-content text">
      <HeroContact />
      <div className="contact-text-form">
        <div>
          <h2>Opening hours</h2>
          <table className="contact-table">
            <tbody>{timeData}</tbody>
          </table>
          <h4>Address</h4>
          <table className="contact-table">
            <tbody>{address}</tbody>
          </table>
        </div>

        <BookingForm />
      </div>
      <img src={Map} className="contact-image" />
    </section>
  );
}
