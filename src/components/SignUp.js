import React from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Login.css';

const SignUp = () => {
  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2 className="auth-title">Sign Up</h2>
        <form className="auth-form">
          <div className="auth-input-group">
            <FiUser className="auth-input-icon" />
            <input className="auth-input" type="text" placeholder="Name" required />
          </div>
          <div className="auth-input-group">
            <FiMail className="auth-input-icon" />
            <input className="auth-input" type="email" placeholder="Email" required />
          </div>
          <div className="auth-input-group">
            <FiLock className="auth-input-icon" />
            <input className="auth-input" type="password" placeholder="Password" required />
          </div>
          <button className="auth-btn" type="submit">Sign Up</button>
          <div className="auth-links">
            <Link to="/login" className="auth-link">Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp; 