import React, { useState, useEffect } from 'react';
import Header from '../Header2/Header2';
import Footer from "../LandingPage/Components/Footer";
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch quizzes and categories from mock API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const quizzesResponse = await fetch('http://localhost:5000/quizzes');
        const categoriesResponse = await fetch('http://localhost:5000/categories');
        if (!quizzesResponse.ok || !categoriesResponse.ok) {
          throw new Error('Failed to fetch data');
        }
        const quizzesData = await quizzesResponse.json();
        const categoriesData = await categoriesResponse.json();

        // Update categories with quiz counts dynamically
        const updatedCategories = categoriesData.map((category) => {
          const quizCount = quizzesData.filter(
            (quiz) => quiz.category === category.key
          ).length;
          return { ...category, quizCount };
        });

        setQuizzes(quizzesData);
        setFilteredQuizzes(quizzesData);
        setCategories(updatedCategories);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle category selection
  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory(categoryKey);
    if (categoryKey) {
      const filtered = quizzes.filter((quiz) => quiz.category === categoryKey);
      setFilteredQuizzes(filtered);
    } else {
      setFilteredQuizzes(quizzes); // Show all quizzes if "All" is selected
    }
  };

  return (
    <>
      <Header />
      <main className="main22">
        {/* Categories Section */}
        <section className="categories">
          <h2>Categories</h2>
          {loading ? (
            <p style={{ textAlign: 'center', color: 'white' }}>Loading categories...</p>
          ) : error ? (
            <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
          ) : (
            <div className="category-grid">
              <button
                className={`category-card ${!selectedCategory ? 'active' : ''}`}
                onClick={() => handleCategoryClick(null)}
              >
                <h3>All Categories</h3>
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`category-card ${selectedCategory === cat.key ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(cat.key)}
                >
                  <div className="category-icon">{cat.icon}</div>
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                  <p>Quizzes Available: {cat.quizCount}</p>
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Quizzes Section */}
        <section className="quizzes">
          <h2>Available Quizzes</h2>
          {loading ? (
            <p style={{ textAlign: 'center', color: 'white' }}>Loading quizzes...</p>
          ) : error ? (
            <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
          ) : filteredQuizzes.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'white' }}>
              No quizzes available for this category.
            </p>
          ) : (
            <div className="quiz-grid">
              {filteredQuizzes.map((quiz) => (
                <div key={quiz.id} className="quiz-card">
                  <h4>{quiz.title}</h4>
                  <p>{quiz.description}</p>
                  <p>
                    Duration: {quiz.duration} | Participants: {quiz.participants}
                  </p>
                  <button onClick={() => navigate(`/quiz/${quiz.id}`)}>Take Quiz</button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
