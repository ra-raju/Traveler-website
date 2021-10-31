import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    fetch('https://frightful-dracula-76672.herokuapp.com/events')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        if (data) {
          isLoading(false);
        }
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <h1 className="text-center">Upcomming Events</h1>
      {loading ? (
        <div class="d-flex justify-content-center align-items-center vh-100 mx-4">
          <strong>Loading...</strong>
          <div
            class="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      ) : (
        <div className="event-container">
          {events.map((event) => (
            <Event key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
