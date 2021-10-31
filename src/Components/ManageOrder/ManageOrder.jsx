import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ManageOrderList from '../ManageOrderList/ManageOrderList';
import './ManangeOrder.css';

const ManageOrder = () => {
  const [tours, setTours] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:5000/allorders')
      .then((res) => res.json())
      .then((data) => setTours(data))
      .catch((error) => console.log(error.message));
  }, [tours]);

  const handleServiceAdd = () => {
    history.push('/serviceform');
  };
  return (
    <div>
      <h1 className="text-center py-3">All Orders</h1>
      <button
        type="button"
        className="btn btn-primary btn-sm add-service-btn"
        onClick={handleServiceAdd}
      >
        Add Service
      </button>
      <div className="orders-container">
        {tours.map((tour) => (
          <ManageOrderList key={tour._id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default ManageOrder;
