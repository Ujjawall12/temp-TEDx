import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "../styles/navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // GSAP animation for navbar load
    gsap.from(".navbar", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power4.out",
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src="/src/assets/images/logo.png" alt="TEDx Logo" />
        <h1>TEDx NIT Hamirpur</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

