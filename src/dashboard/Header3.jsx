import React from "react";
import "./Header3.css";

function Header3() {
  return (
    <header className="header3">
      <div className="logo">QuizMaster</div>
      <nav className="nav">
        
        <a href="/home">Home</a>
        <a href="/contact">Contact Us</a>
        <a href="/create">Create</a>
      </nav>
      <a href="/dashboard" className="profile-icon">👤</a>
    </header>
  );
}

export default Header3;
