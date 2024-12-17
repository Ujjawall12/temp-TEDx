import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/about.scss";

const About = () => {
  useEffect(() => {
    gsap.from(".about-title", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power4.out",
    });
    gsap.from(".about-text", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="about">
      <h1 className="about-title">About TED and TEDx</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>About TED</h2>
          <p className="about-text">
            TED is a nonprofit organization devoted to spreading ideas, usually in the form of short, powerful talks. TED began in 1984 as a conference where Technology, Entertainment, and Design converged, and today it covers topics from science to business to global issues.
          </p>
        </div>
        <div className="about-section">
          <h2>About TEDx</h2>
          <p className="about-text">
            TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At TEDx events, live speakers and videos combine to spark deep discussion and connections in smaller groups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
