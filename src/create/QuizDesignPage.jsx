import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizDesignPage.css';
import Header2 from '../Header2/Header2';
const QuizDesignPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ question: '', options: ['', '', '', ''], answer: '' });
  const navigate = useNavigate();

  const userId = "currentUser"; // Replace with the actual logged-in user's ID or username

  const addQuestion = () => {
    if (newQuestion.question && newQuestion.answer && newQuestion.options.every((opt) => opt)) {
      setQuestions([...questions, newQuestion]);
      setNewQuestion({ question: '', options: ['', '', '', ''], answer: '' });
    }
  };

  const handleCreateQuiz = async () => {
    if (!title || !description || !category || questions.length === 0) {
      alert('Please complete all fields and add at least one question.');
      return;
    }

    const newQuiz = {
      title,
      description,
      category,
      questions,
      createdBy: userId, // Mark the quiz with the current user's identifier
    };

    try {
      const response = await fetch('http://localhost:5000/quizzes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newQuiz),
      });

      if (!response.ok) throw new Error('Failed to create quiz');

      alert('Quiz created successfully!');
      navigate('/my-quizzes');
    } catch (error) {
      console.error('Error creating quiz:', error);
      alert('Error creating quiz.');
    }
  };

  return (
    <>
    <Header2 />

    <div className="quiz-design-page">
      <h1>Design Your Quiz</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Quiz Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="programming">Programming</option>
          <option value="data-structures">Data Structures</option>
          <option value="networking">Networking</option>
          <option value="machine-learning">Machine Learning</option>
        </select>
        <h3>Questions</h3>
        {questions.map((q, index) => (
          <div key={index} className="question-item">
            <p>{q.question}</p>
          </div>
        ))}
        <input
          type="text"
          placeholder="Question"
          value={newQuestion.question}
          onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
        />
        {newQuestion.options.map((opt, idx) => (
          <input
            key={idx}
            type="text"
            placeholder={`Option ${idx + 1}`}
            value={opt}
            onChange={(e) => {
              const options = [...newQuestion.options];
              options[idx] = e.target.value;
              setNewQuestion({ ...newQuestion, options });
            }}
          />
        ))}
        <input
          type="text"
          placeholder="Correct Answer"
          value={newQuestion.answer}
          onChange={(e) => setNewQuestion({ ...newQuestion, answer: e.target.value })}
        />
        <button onClick={addQuestion} className="add-question-button">Add Question</button>
        <button onClick={handleCreateQuiz} className="create-quiz-button">
          Save Quiz
        </button>
      </div>
    </div>
    </>);
};

export default QuizDesignPage;
