import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate hooks
import './Header2.css';
import avatar from './av.jpg';

const Header2 = () => {
  const location = useLocation(); // Get the current route path
  const navigate = useNavigate(); // Initialize navigate function

  const scrollToFooter = () => {
    const footer = document.getElementById('footer-section');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToDashboard = () => {
    navigate('/dashboard'); // Redirect to Dashboard
  };

  return (
    <header className="header2">
      <div className="logo">
        <img
          src="/src/LandingPage/images/logo.png"
          alt="FlashSkill Logo"
          className="logo-icon"
        />
        <span>FlashSkill</span>
      </div>
      <div className="nav-container">
        <nav className="nav-links">
          <a
            href="/home"
            className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}
          >
            Home
          </a>
        
          <button
            onClick={scrollToFooter}
            className={`nav-link button-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact Us
          </button>
          <a
            href="/create"
            className={`nav-link ${location.pathname === '/create' ? 'active' : ''}`}
          >
            Create
          </a>
          <a href="/my-quizzes" className={`nav-link ${location.pathname === '/my-quizzes' ? 'active' : ''}`}>
            My Quizzes
          </a>

        </nav>
        <div className="user-profile" onClick={goToDashboard} style={{ cursor: 'pointer' }}>
          <img
            src={avatar}
            alt="User Avatar"
            className="user-avatar"
          />
          <span className="user-name">Taha</span>
        </div>
      </div>
    </header>
  );
};

export default Header2;
