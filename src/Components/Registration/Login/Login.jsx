import React from 'react';
import useAuth from '../../../Hooks/useAuth';
// import useFirebase from '../../../Hooks/useFirebase';
import './Login.css';

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="">
      <div className="login-container">
        <div className="login-img">
          <img src="./images/login.jpg" alt="" />
        </div>
        <div className="login-box">
          <h1>Login</h1>
          <p>you have to login for get our all services</p>
          <div className="d-grid">
            <button
              className="btn btn-primary"
              type="button"
              onClick={signInUsingGoogle}
            >
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
