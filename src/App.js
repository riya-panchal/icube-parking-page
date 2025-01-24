import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Products from './components/Products';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <Features />
      <Products />
      <Projects />
      <Testimonials />
      <EnquirySection />
      <Footer />
    </div>
  );
}

export default App;