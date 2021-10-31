import React from 'react';
import Contact from '../Contact/Contact';
import Map from '../Map/Map';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div>
      <h1 className="text-center py-3">Contact us</h1>
      <div className="contact-section">
        <Map />
        <Contact />
      </div>
    </div>
  );
};

export default ContactSection;
