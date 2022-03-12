export default function ToggleBook({
  name,
  time,
  date,
  email,
  setName,
  setTime,
  setDate,
  setEmail,
}) {
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
}
