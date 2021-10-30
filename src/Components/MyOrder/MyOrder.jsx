import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrderList from '../MyOrderList/MyOrderList';
import './MyOrder.css';

const MyOrder = () => {
  const { user } = useAuth();
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allorders')
      .then((res) => res.json())
      .then((data) => {
        const myOrder = data.filter((order) => order.email === user.email);
        setTours(myOrder);
        // console.log(myOrder);
      })
      .catch((error) => console.log(error.message));
  }, [tours]);

  return (
    <div>
      <h1 className="text-center py-3">My Journeys</h1>
      <div className="orders-container">
        {tours.map((tour) => (
          <MyOrderList key={tour._id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
