import React from 'react';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Login.css';

const ForgetPassword = () => {
  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2 className="auth-title">Forgot Password?</h2>
        <form className="auth-form">
          <div className="auth-input-group">
            <FiMail className="auth-input-icon" />
            <input className="auth-input" type="email" placeholder="Enter your email" required />
          </div>
          <button className="auth-btn" type="submit">Send Reset Link</button>
          <div className="auth-links">
            <Link to="/login" className="auth-link">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword; 