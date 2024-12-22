import React from "react";
import "./ProfileSection.css";

function ProfileSection() {
  return (
    <section className="profile-section">
      <div className="profile-header">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>

        <div className="profile-avatar">👤</div>
        <div className="profile-info">
          <h2>Utilisateur</h2>
          <p>Morocco - Lvl 1</p>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
