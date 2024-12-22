import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Testimonials from './Components/Testimonials';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="Landing-Page">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <SignUp />
      <Footer />
    </div>
  );
};

export default LandingPage;
