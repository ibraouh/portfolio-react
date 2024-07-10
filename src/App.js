import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Work />
        <Projects />
        <Research />
      </main>
      <Footer />
    </div>
  );
}

export default App;
