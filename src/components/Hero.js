import React, { useState } from 'react';
import './Hero.css';

const Hero = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(input);
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          WELCOME TO <span className="hero-highlight">BOOKSTORE</span>
        </h1>
        <p className="hero-desc">
          A house to millions of digital and non-digital books from around the world
        </p>
        <form className="hero-search" onSubmit={handleSubmit}>
          <input
            className="hero-search-input"
            placeholder="Write Title Here"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button className="hero-search-btn" type="submit">Search</button>
          <select className="hero-search-dropdown">
            <option>The Author</option>
            <option>Year</option>
          </select>
        </form>
      </div>
      <div className="hero-image-block">
        <img className="hero-image" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=400&q=80" alt="Book Hero" />
        <div className="hero-badge">BEST SELLER</div>
      </div>
    </section>
  );
};

export default Hero; 