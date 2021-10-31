import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrderList from '../MyOrderList/MyOrderList';
import './MyOrder.css';

const MyOrder = () => {
  const { user } = useAuth();
  const [tours, setTours] = useState([]);
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    fetch('https://frightful-dracula-76672.herokuapp.com/allorders')
      .then((res) => res.json())
      .then((data) => {
        const myOrder = data.filter((order) => order.email === user.email);
        setTours(myOrder);
        isLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, [tours]);

  return (
    <div>
      <h1 className="text-center py-3">My Journeys</h1>
      {loading ? (
        <div class="d-flex align-items-center mx-4">
          <strong>Loading...</strong>
          <div
            class="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      ) : (
        <div className="orders-container">
          {tours.map((tour) => (
            <MyOrderList key={tour._id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrder;
