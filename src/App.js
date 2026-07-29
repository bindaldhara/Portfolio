import React, { useState, useEffect } from "react";
import Preloader from "./components/preloader/Pre";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import ContinueExploring from "./components/ContinueExploring/ContinueExploring";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import CurrentlyBuilding from "./components/CurrentlyBuilding/CurrentlyBuilding";
import Projects from "./components/Projects/Projects";
import Acheivements from "./components/Acheivements/Acheivements";
import Testimonials from "./components/Testimonials/Testimonials";
import Resume from "./components/Resume/ResumeNew";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import "./style.css";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <section id="home"><Home /></section>
        <section id="explore"><ContinueExploring /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="building"><CurrentlyBuilding /></section>
        <section id="projects"><Projects /></section>
        <section id="achievements"><Acheivements /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </div>
    </>
  );
}

export default App;
