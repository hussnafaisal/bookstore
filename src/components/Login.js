import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>
        <form className="auth-form">
          <div className="auth-input-group">
            <FiMail className="auth-input-icon" />
            <input className="auth-input" type="email" placeholder="Email" required />
          </div>
          <div className="auth-input-group">
            <FiLock className="auth-input-icon" />
            <input className="auth-input" type="password" placeholder="Password" required />
          </div>
          <button className="auth-btn" type="submit">Login</button>
          <div className="auth-links">
            <Link to="/forget-password" className="auth-link">Forgot password?</Link>
            <span> | </span>
            <Link to="/signup" className="auth-link">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 