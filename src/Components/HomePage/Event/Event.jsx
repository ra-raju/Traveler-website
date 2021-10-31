import React from 'react';
import { useHistory } from 'react-router';
import './Event.css';

const Event = (props) => {
  const { img, place, date, staying, price, From } = props.event;
  const history = useHistory();
  const bookingHandler = () => {
    history.push('/travelform');
  };
  return (
    <div>
      <div className="event-card">
        <div className="event-img-container">
          <img src={img} alt="" />
        </div>
        <div className="event-info-container">
          <p>
            Place: <span className="tour-data">{place}</span>
          </p>
          <p>
            From: <span className="tour-data">{From}</span>
          </p>
          <p>
            Date: <span className="tour-data">{date}</span>
          </p>
          <p>
            Staying: <span className="tour-data">{staying}</span>
          </p>
          <p>
            Cost: <span className="tour-data"> {price}</span>
          </p>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={bookingHandler}
          >
            Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
