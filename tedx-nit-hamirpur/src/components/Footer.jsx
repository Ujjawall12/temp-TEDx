import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>This independent TEDx event is operated under license from TED.</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
