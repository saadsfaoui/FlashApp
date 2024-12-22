import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyQuizzes.css';
import Header2 from '../Header2/Header2';
const MyQuizzes = () => {
  const [myQuizzes, setMyQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userId = "currentUser"; // Replace with the actual logged-in user's ID or username

  useEffect(() => {
    const fetchMyQuizzes = async () => {
      try {
        const response = await fetch('http://localhost:5000/quizzes'); // Fetch all quizzes
        if (!response.ok) throw new Error('Failed to fetch quizzes');
        const data = await response.json();

        // Filter quizzes by the current user's ID
        const userQuizzes = data.filter((quiz) => quiz.createdBy === userId);
        setMyQuizzes(userQuizzes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMyQuizzes();
  }, []);

  return (
    <>
    <Header2 />
    <div className="my-quizzes-page">
      <h1>My Quizzes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : myQuizzes.length === 0 ? (
        <p>No quizzes created yet.</p>
      ) : (
        <div className="quiz-list">
          {myQuizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-card">
              <h3>{quiz.title}</h3>
              <p>{quiz.description}</p>
              <button onClick={() => navigate(`/quiz/${quiz.id}`)}>View Quiz</button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>);
};

export default MyQuizzes;
