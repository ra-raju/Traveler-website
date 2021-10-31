import React from 'react';
import About from '../About/About';
import Events from '../Events/Events';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Events />
      <About />
    </div>
  );
};

export default Home;
