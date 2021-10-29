import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';
// import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useFirebase();
  console.log(user);
  return (
    <div>
      <nav className="navbar navbar-expand-lg  sticky-top navbar-light bg-light">
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/home#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            </ul>
            {user.email && (
              <div className="">
                <button
                  className="btn btn-sm btn-outline-secondary user-btn"
                  type="button"
                >
                  My Order
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary user-btn"
                  type="button"
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
