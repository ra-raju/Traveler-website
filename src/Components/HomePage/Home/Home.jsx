import React from 'react';
import Events from '../Events/Events';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Events />
    </div>
  );
};

export default Home;
