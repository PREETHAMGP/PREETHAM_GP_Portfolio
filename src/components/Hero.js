import React from 'react';
import './Hero.css';

const Hero = () => {
  const profileImage = process.env.PUBLIC_URL + '/profile.jpeg';
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Preetham G P</h1>
          <h2 className="hero-title">Technical Lead | Full Stack Developer</h2>
          <p className="hero-description">
            Building scalable, high-availability web and mobile applications
            with 5+ years of expertise in React.js and Node.js microservices
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">8M+</span>
              <span className="stat-label">Users Served</span>
            </div>
            <div className="stat">
              <span className="stat-number">50%</span>
              <span className="stat-label">Performance Boost</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#experience" className="btn btn-secondary">View My Work</a>
            <a 
              href={process.env.PUBLIC_URL + '/resume.pdf'} 
              download="PreethamGP_Resume.pdf" 
              className="btn btn-download"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-avatar">
              <img src={profileImage} alt="Preetham G P" />
            </div>
            <div className="profile-info">
              <h3>Preetham G P</h3>
              <p>Technical Lead</p>
              <div className="profile-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Bengaluru, Karnataka
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
