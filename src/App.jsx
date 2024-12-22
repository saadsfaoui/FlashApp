import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import LandingPage from "./LandingPage/LandingPage";
import Home from "./Home/Home";
import LoginPage from "./Login/LoginPage";
import QuizPage from "./Quizz/QuizPage";
import QuizDesignPage from "./create/QuizDesignPage"; // Import the Create page
import Dashboard from "./dashboard/dashboard"; // Import the Dashboard page
import MyQuizzes from "./MyQuizzes/MyQuizzes";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Existing routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/my-quizzes" element={<MyQuizzes />} />

        {/* New routes */}
        <Route path="/create" element={<QuizDesignPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
