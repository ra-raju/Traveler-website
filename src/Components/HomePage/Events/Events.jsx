import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <h1 className="text-center">Upcomming Events</h1>
      <div className="event-container">
        {events.map((event) => (
          <Event key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
