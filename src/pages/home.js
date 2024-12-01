import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Achievements from '../components/Achievements';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
        <h1>Welcome to Home Page</h1>
      <Header />
      <Hero />
      <AboutUs />
      <Achievements />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;