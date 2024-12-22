import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma Johnson",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 4,
      feedback: "QuizMaster makes learning fun and easy!",
    },
    {
      name: "Liam Smith",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 3,
      feedback: "A fantastic app for quiz lovers!",
    },
    {
      name: "Sophia Brown",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 5,
      feedback: "The quizzes are challenging and engaging!",
    },
    {
      name: "James Lee",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 4,
      feedback: "Great features and easy to use!",
    },
    {
      name: "Olivia Green",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 5,
      feedback: "I love creating quizzes with this app!",
    },
    {
      name: "Emma Johnson",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 5,
      feedback: "QuizMaster makes learning fun and easy!",
    },
    {
      name: "Liam Smith",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      rating: 5,
      feedback: "A fantastic app for quiz lovers!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic scrolling logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < testimonials.length - 3 ? prevIndex + 1 : 0
      );
    }, 3000); // Change slide every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <h2>Hear from our awesome users!</h2>
      <div className="testimonials-container">
        <div
          className="testimonial-cards"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s avatar`}
                className="avatar"
              />
              <h3>{testimonial.name}</h3>
              <div className="rating">{"⭐".repeat(testimonial.rating)}</div>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
