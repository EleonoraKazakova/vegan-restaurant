import "./styles/App.css";
import Hero from "./components/Hero";
import Bar from "./components/Bar";
import Footer from "./components/Footer";
import Menu from "./components/Section";

function App() {
  return (
    <div className="app-grid">
      <header className="app-header">
        <Bar />
      </header>
      <section className="app-section-hero">
        <Hero />
      </section>
      <section className="app-section-menu-background"></section>
      <section className="app-section-menu">
        <Menu />
      </section>

      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
