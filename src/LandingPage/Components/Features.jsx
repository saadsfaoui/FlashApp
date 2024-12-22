import React from 'react';
import FeatureCard from './FeatureCard';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: "Quick Quiz Creation",
      description: "Design 5-minute quizzes effortlessly with an intuitive and user-friendly interface.",
      icon: "⚡",
    },
    {
      title: "Engaging Questions",
      description: "Craft interactive and dynamic questions to keep your audience hooked.",
      icon: "❓",
    },
    {
      title: "Take and Share Quizzes",
      description: "Challenge yourself or your friends by taking quizzes and sharing them instantly across platforms.",
      icon: "🌍",
    },
    
  ];

  return (
    <section id='features-section' className="features">
      <h2>Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
