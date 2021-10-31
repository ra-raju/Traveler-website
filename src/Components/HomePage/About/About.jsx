import React from 'react';
import './About.css';
import img from './about.jpg';

const About = () => {
  return (
    <div>
      <h1 className="text-center py-4" id="about">
        About us
      </h1>
      <div className="about-container">
        <div className="about-img">
          <img src={img} alt="" />
        </div>
        <div className="about-info">
          <div className="about-heading">
            <h4 className="text-dark">Get ready for real time adventure</h4>
            <p className="about-para">
              Traveler, a Tripadvisor company, makes it easy to find and book
              something you'll love to do. With access to the world's largest
              selection of high-quality experiences, there's always something
              new to discover, both near and far from home. <br />
              With industry-leading flexibility and last-minute availability,
              it's never too late to make any day extraordinary. Plan ahead, or
              decide that morning. Change your dates. Or change your mind
              entirely! This is your time off, your way, and we're here to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
