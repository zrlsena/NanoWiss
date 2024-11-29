import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Achievements from './components/Achievements';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="scrollable-container">
      <AboutUs />
      <Achievements />
      <Products />
      <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
