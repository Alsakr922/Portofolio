"use client"


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";
import Submit from "../components/Submit";
import Footer from "../components/Footer";

export default function Home() {
return (
  <Router>
    <Navbar />
    <Hero />
    <Skills />
    <Routes>
      <Route path="/" element={<Projects />}>
          <Route path="one" element={<SectionOne />} />
          <Route path="three" element={<SectionThree />} />
        </Route>
    </Routes>
    <SectionTwo />
    <Submit />
    <Footer />
  </Router>
    );
}
