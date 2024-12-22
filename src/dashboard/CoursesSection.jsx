import React from "react";
import "./CoursesSection.css";

function CoursesSection() {
  return (
    <section className="courses-section">
      <h3>Courses Progress</h3>
      <div className="course">
        <div className="course-name">Introduction to Python</div>
        <div className="status">In Progress</div>
      </div>
      <div className="course">
        <div className="course-name">Front-end for Beginners</div>
        <div className="status">In Progress</div>
      </div>
      <button className="browse-btn">Browse Courses</button>
    </section>
  );
}

export default CoursesSection;
