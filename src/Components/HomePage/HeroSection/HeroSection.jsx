import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>lifelong memories just a few seconds away</h1>
        <p>let start your journey with us, your dream will come true</p>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="button">
            Start YOur Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
