import React from 'react';
import { useHistory } from 'react-router';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const history = useHistory();
  const handleBackHomepage = () => {
    history.push('/home');
  };
  return (
    <div className="notfoundpage">
      <div className="d-grid gap-2 col-3 mx-auto notfound-btn">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleBackHomepage}
        >
          Back To Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
