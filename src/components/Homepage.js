import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [text, setText] = useState('');
  const fullText = 'Welcome to our contests! Join now and showcase your skills!';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index += 1;
      if (index >= fullText.length) clearInterval(interval);
    }, 100); // Adjust typing speed here
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <div className="homepage-header">
        <h1>Our Amazing Contests</h1>
        <p className="typing-text">{text}</p>
      </div>
      <div className="trophy-container">🏆</div>
      <div className="contests">
        <h2>Ongoing Contests</h2>
        <div className="contest-cards">
          <div className="contest-card">
            <h3>Contest 1</h3>
            <p>Join the exciting Contest 1!</p>
            <button className="contest-button">Participate</button>
          </div>
          <div className="contest-card">
            <h3>Contest 2</h3>
            <p>Don't miss out on Contest 2!</p>
            <button className="contest-button">Participate</button>
          </div>
        </div>
      </div>
      <div className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>Details about Feature 1.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>Details about Feature 2.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
