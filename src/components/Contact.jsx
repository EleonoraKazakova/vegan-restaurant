import "../styles/contact.css";
import DataTime from "./DataTime.json";
import BookingForm from "./BookingForm";
import Map from "./Map";

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
    <main>
      <header className="contact-hero-content" />
      <section className="contact-grid-content">
        <div className="contact-text-form">
          {/* Unnecesary tag -1 Whatever you are using this div, can be applied directly to the table */}
          <h2>Opening hours</h2>
          <table className="contact-table">
            <tbody>{timeData}</tbody>
          </table>
          <h4>Address</h4>
          <table className="contact-table">
            <tbody>{address}</tbody>
          </table>
          <BookingForm />
        </div>

        <Map />
      </section>
    </main>
  );
}
