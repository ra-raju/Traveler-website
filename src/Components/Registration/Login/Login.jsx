import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirectUri = location.state?.from || '/home';

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        console.log(result.user);
        history.push(redirectUri);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
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
              onClick={handleGoogleLogin}
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
