import React from 'react';
import { useHistory } from 'react-router';
import './HeroSection.css';

const HeroSection = () => {
  const history = useHistory();
  const travelFormHandler = () => {
    history.push('/travelform');
  };
  return (
    <div className="hero-section" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          lifelong memories just a few seconds away
        </h1>
        <p className="hero-subtitle">
          let start your journey with us, your dream will come true
        </p>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-primary"
            type="button"
            onClick={travelFormHandler}
          >
            Booking Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
