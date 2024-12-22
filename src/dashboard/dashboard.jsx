/*import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./dashboard/components/Header";
import ProfileSection from "./dashboard/components/ProfileSection";
import StreakSection from "./dashboard/components/StreakSection";
import CoursesSection from "./dashboard/components/CoursesSection";
import QuizDesignPage from "./dashboard/components/QuizDesignPage";

function App() {
  return (
    <Router>
      <div className="app">
        
        <Header />

        
        <Routes>
          <Route
            path="/"
            element={
              <main className="main">
                <ProfileSection />
                <StreakSection />
                <CoursesSection />
              </main>
            }
          />
          <Route path="/create" element={<QuizDesignPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/

import React from "react";
import "./dashboard.css";
import ProfileSection from "./ProfileSection";
import StreakSection from "./StreakSection";
import CoursesSection from "./CoursesSection";
import Footer from "../LandingPage/Components/Footer"
import Header2 from "../Header2/Header2";

function Dashboard() {
  return (<>
      
        <Header2 />
          
              <main className="main3">
                <ProfileSection />
                <StreakSection />
                <CoursesSection />
                <Footer />
              </main>
         </>
  );
}

export default Dashboard;