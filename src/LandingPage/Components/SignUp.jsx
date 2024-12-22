import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SignUp.css';

const SignUp = () => {
  return (
    <section id="signup-section" className="signup-section">
      <div className="signup-left">
        <h1>
          Join our community <br />
          <span>of learners</span>
        </h1>
      </div>
      <div className="signup-right">
        <div className="signup-form-container">
          <h3>Create Account</h3>
          <p>Join us and start creating your quizzes!</p>
          <form className="signup-form">
            <div className="form-group">
              <span className="icon">👤</span>
              <input type="text" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <span className="icon">📧</span>
              <input type="email" placeholder="Your email address" required />
            </div>
            <div className="form-group">
              <span className="icon">🔒</span>
              <input type="password" placeholder="Create a password" required />
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree with Terms & Conditions</label>
            </div>
            <button type="submit" className="create-account-btn">
              Create Account
            </button>
          </form>
          <p className="login-link">
            Already registered? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
