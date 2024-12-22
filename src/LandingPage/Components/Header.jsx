import React from 'react';
import './Header.css';

const Header = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the section
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/src/LandingPage/images/logo.png" alt="FlashSkill Logo" className="logo-icon" />
        <span className="logo-text">FlashSkill</span>
      </div>
      <div className="actions">
        <button
          className="create-quiz"
          onClick={() => handleScrollToSection('signup-section')}
        >
          ✏️ Create Quiz
        </button>
        <button
          className="sign-up"
          onClick={() => handleScrollToSection('signup-section')}
        >
          👤 Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
