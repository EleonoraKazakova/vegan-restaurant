import "../styles/HeroDish.css";

export default function HeroDish({ dish }) {
  return <div className={`hero-dish-${dish} hero-dish`}></div>;
}
