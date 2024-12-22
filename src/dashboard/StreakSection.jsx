import React from "react";
import "./StreakSection.css";

function StreakSection() {
  return (
    <section className="streak-section">
      <h3>Streak</h3>
      <div className="streak-tracker">
        <div className="day active">M</div>
        <div className="day">T</div>
        <div className="day">W</div>
        <div className="day">T</div>
        <div className="day">F</div>
        <div className="day">S</div>
        <div className="day">Su</div>
      </div>
      <div className="streak-info">
        <p>Current Streak: <span>0 days</span></p>
        <p>Longest Streak: <span>0 days</span></p>
        <button className="streak-saver-btn">Set Streak Saver</button>
      </div>
    </section>
  );
}

export default StreakSection;
