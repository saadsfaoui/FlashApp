import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './QuizPage.css';
import Header2 from '../Header2/Header2';
const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`http://localhost:5000/quizzes/${id}`);
        const data = await response.json();
        setQuiz(data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;

    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: selectedAnswer,
    }));

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  if (!quiz) return <p className="loading-message">Loading...</p>;

  return (
    <>
    <Header2 />
    <div className="quiz-page">
      <h1>{quiz.title}</h1>
      {!isCompleted ? (
        <div className="question-section">
          <h2>
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </h2>
          <p className="question-text">{quiz.questions[currentQuestionIndex].question}</p>
          <div className="options">
            {quiz.questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="results-section">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {quiz.questions.length}</p>
          <div className="corrections-section">
            <h3>Review Your Answers</h3>
            {quiz.questions.map((question, index) => (
              <div key={index} className="correction-item">
                <p>
                  <strong>Question {index + 1}:</strong> {question.question}
                </p>
                <p>
                  <strong>Your Answer:</strong>{' '}
                  <span
                    className={
                      userAnswers[question.id] === question.answer
                        ? 'correct'
                        : 'incorrect'
                    }
                  >
                    {userAnswers[question.id] || 'No Answer'}
                  </span>
                </p>
                <p>
                  <strong>Correct Answer:</strong> {question.answer}
                </p>
              </div>
            ))}
          </div>
          <button onClick={() => navigate('/home')} className="home-button">
            Back to Home
          </button>
        </div>
      )}
    </div>
    </>);
 
};

export default QuizPage;
