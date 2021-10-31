import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../Hooks/useFirebase';
import './Header.css';

const Header = () => {
  const { user, logOut } = useFirebase();
  const history = useHistory();

  const handleMyorder = () => {
    history.push('/myorders');
  };

  const handleManageOrder = () => {
    history.push('/manageorders');
  };

  return (
    <div className=" sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Traveler
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/home#services">
                  Services
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/home#about">
                  About us
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/home#contact">
                  Contact
                </HashLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
            {user?.email && (
              <div className="">
                <button
                  className="btn btn-sm btn-outline-secondary user-btn"
                  type="button"
                  onClick={handleMyorder}
                >
                  My Order
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary user-btn"
                  type="button"
                  onClick={handleManageOrder}
                >
                  Manage All Order
                </button>
                <img src={user.photoURL} alt="img" className="user-img" />
                <button
                  className="btn btn-sm btn-outline-secondary user-btn"
                  type="button"
                  onClick={logOut}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
