import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './SingleService.css';

const SingleService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const history = useHistory();

  useEffect(() => {
    const uri = `https://frightful-dracula-76672.herokuapp.com/service/${id}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((error) => console.log(error.message));
  }, []);
  const handleConfirmJourney = () => {
    history.push('/travelform');
  };
  return (
    <div>
      <h1 className="text-center py-4">{service.serviceName}</h1>
      <p className="text-dark px-5">{service.description}</p>
      <div className="photo-container">
        <img src={service.photoUrl1} alt="" className="serviceImg" />
        <img src={service.photoUrl2} alt="" className="serviceImg" />
        <img src={service.photoUrl3} alt="" className="serviceImg" />
        <img src={service.photoUrl4} alt="" className="serviceImg" />
      </div>
      <div className="d-grid gap-2 col-6 mx-auto py-4">
        <button
          className="btn btn-primary "
          type="button"
          onClick={handleConfirmJourney}
        >
          Confirm Your Journey
        </button>
      </div>
    </div>
  );
};

export default SingleService;
