import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ManageOrderList from '../ManageOrderList/ManageOrderList';
import './ManangeOrder.css';

const ManageOrder = () => {
  const [tours, setTours] = useState([]);
  const [loading, isLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    fetch('https://frightful-dracula-76672.herokuapp.com/allorders')
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        if (data) {
          isLoading(false);
        }
      })
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
        <div className="orders-container">
          {tours.map((tour) => (
            <ManageOrderList key={tour._id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageOrder;
