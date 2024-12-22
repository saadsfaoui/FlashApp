import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleGetStarted = () => {
    const signUpSection = document.getElementById('signup-section');
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the Sign Up section
    }
  };

  return (
    <section className="hero">
      <h1>Create, Share, and Take 5-Minute Quizzes</h1>
      <p>Engage in fun and interactive quizzes or challenge your friends with FlashSkill!</p>
      <button className="get-started" onClick={handleGetStarted}>
        Get Started
      </button>
    </section>
  );
};

export default Hero;
