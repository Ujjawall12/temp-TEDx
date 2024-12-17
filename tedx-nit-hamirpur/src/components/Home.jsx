import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/home.scss";

const Home = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(".hero-title", { opacity: 0, y: 50, duration: 1 })
      .from(".hero-subtitle", { opacity: 0, x: -50, duration: 1 }, "-=0.5")
      .from(".hero-button", { opacity: 0, scale: 0.8, duration: 1 }, "-=0.5");
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to TEDx NIT Hamirpur</h1>
        <p className="hero-subtitle">13 February 2024 | Innovision - ज्ञानं परमं बलम्</p>
        <button className="hero-button">Learn More</button>
      </div>
      <div className="hero-image">
        <img src="/src/assets/images/hero.jpg" alt="Hero" />
      </div>
    </div>
  );
};

export default Home;
