import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    fetch('https://frightful-dracula-76672.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        if (data) {
          isLoading(false);
        }
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div id="services">
      <h1 className="text-center py-4">Our Services</h1>
      {loading ? (
        <div class="d-flex align-items-center mx-4 ">
          <strong>Loading...</strong>
          <div
            class="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      ) : (
        <div className="services-container">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
