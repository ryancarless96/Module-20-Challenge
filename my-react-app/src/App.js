
import './App.css';
import React, { useState } from "react";
import AboutMe from "./components/AboutMe/me";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");
  function renderPage() {
    switch (currentPage) {
      case "About Me":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  }
  return (
    <div className="App">
      <Header setCurrentPage= {setCurrentPage}></Header>
     {
        renderPage()
     }
       <Footer></Footer>
    </div>
  );
}

export default App;