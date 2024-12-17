import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/sponsors.scss";

const Sponsors = () => {
  useEffect(() => {
    gsap.from(".sponsor-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".sponsor-card", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="sponsors">
      <h1 className="sponsor-title">Our Sponsors</h1>
      <div className="sponsor-grid">
        <div className="sponsor-card">
          <img src="/src/assets/images/sponsor1.png" alt="Sponsor 1" />
          <p>Sponsor 1</p>
        </div>
        <div className="sponsor-card">
          <img src="/src/assets/images/sponsor2.png" alt="Sponsor 2" />
          <p>Sponsor 2</p>
        </div>
        <div className="sponsor-card">
          <img src="/src/assets/images/sponsor1.png" alt="Sponsor 3" />
          <p>Sponsor 3</p>
        </div>
        <div className="sponsor-card">
          <img src="/src/assets/images/sponsor2.png" alt="Sponsor 4" />
          <p>Sponsor 4</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
