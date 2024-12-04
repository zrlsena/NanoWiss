import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Achievements from '../components/Achievements';
import Products from '../components/Products';
import Footer from '../components/Footer';
import News from '../components/News';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Achievements />
      <Products />
      <News />
      <Footer />
    </div>
  );
}

export default Home;