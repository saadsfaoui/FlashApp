import React from 'react';
import './QuizCard.css';

const QuizCard = ({ title, description, duration, participants }) => {
  return (
    <div className="quiz-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Duration: {duration} mins | Participants: {participants}</p>
      <button>View More</button>
    </div>
  );
};

export default QuizCard;
