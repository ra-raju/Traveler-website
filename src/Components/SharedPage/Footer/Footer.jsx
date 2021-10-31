import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h5>Contact</h5>
          <p>
            <span>
              <i className="fas fa-mobile-alt"></i>
            </span>{' '}
            +8801867100385
          </p>
          <p>
            <span>
              <i className="fas fa-envelope"></i>
            </span>{' '}
            robeyoulawal@gmail.com
          </p>
        </div>
        <div className="address">
          <h5>Address</h5>
          <address>
            House: EC 1/11 <br />
            Thana: Alborshah <br />
            District: Chittagong
          </address>
        </div>
      </div>
      <p className="text-center text-white">
        All Right Reserved by &copy; Robeyoul Awal Raju
      </p>
    </div>
  );
};

export default Footer;
