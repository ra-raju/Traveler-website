import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';

const Service = (props) => {
  const { serviceName, description, photoUrl1, price, _id } = props.service;

  const history = useHistory();
  const seeDetailHandler = () => {
    history.push(`service/${_id}`);
  };
  return (
    <div>
      <div className="service-card">
        <div className="service-img">
          <img src={photoUrl1} alt="" className="service-photo" />
        </div>
        <div className="service-info">
          <h4 className="service-name">{serviceName}</h4>
          <p className="service-descrip">{description.slice(0, 99)}</p>
          <p>price: {price}/per</p>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={seeDetailHandler}
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
