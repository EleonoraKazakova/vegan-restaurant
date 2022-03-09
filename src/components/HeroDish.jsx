import "../styles/HeroDish.css";

export default function HeroDish({ dish }) {
  return <div className={`hero-content-${dish} hero-content`}></div>;
}
