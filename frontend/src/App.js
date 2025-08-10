import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CarShowcase from "./components/CarShowcase";
import RacingResults from "./components/RacingResults";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <div id="fleet">
          <CarShowcase />
        </div>
        <div id="results">
          <RacingResults />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;