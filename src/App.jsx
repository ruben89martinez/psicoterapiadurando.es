import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Discover from "./components/Discover";
import Testimonials from "./components/Testimonials";
import TestBlocks from "./components/TestBlocks";
import ScrollToTop from "./ScrollToTop";

const App = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <main>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Services />
            <Testimonials />
          </>
        } />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/descubre" element={<Discover />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/la-terapia" element={<TestBlocks />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
