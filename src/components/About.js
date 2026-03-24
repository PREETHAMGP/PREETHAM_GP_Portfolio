import React from 'react';
import './About.css';

const About = () => {
  const profileImage = process.env.PUBLIC_URL + '/profile.jpeg';
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <img src={profileImage} alt="Preetham G P" className="profile-photo" />
            </div>
            <div className="experience-badge">
              <span className="years">5+</span>
              <span className="text">Years of Experience</span>
            </div>
          </div>
          <div className="about-text">
            <h3>Full Stack Engineer specializing in building exceptional digital experiences</h3>
            <p>
              I am a Full Stack Engineer with over 5 years of experience, specializing in front-end 
              development with strong hands-on exposure to backend systems. I build scalable, 
              high-availability web and mobile applications using React.js and Node.js microservices.
            </p>
            <p>
              My journey includes delivering platforms serving <strong>8M+ users</strong>, improving 
              system throughput by <strong>50%</strong>, and leading cross-functional engineering teams 
              of 15+ members. I have strong expertise in distributed systems, AWS cloud deployments, 
              and CI/CD automation.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="highlight-text">
                  <h4>Technical Leadership</h4>
                  <p>Leading 15-member engineering team</p>
                </div>
              </div>
              <div className="highlight">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <div className="highlight-text">
                  <h4>Performance Optimization</h4>
                  <p>50% TPS improvement achieved</p>
                </div>
              </div>
              <div className="highlight">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div className="highlight-text">
                  <h4>Global Deployments</h4>
                  <p>Multi-region rollouts worldwide</p>
                </div>
              </div>
            </div>
            <div className="about-contact">
              <a href="mailto:preethamgp1@gmail.com" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                preethamgp1@gmail.com
              </a>
              <a href="tel:+917259736403" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91-7259736403
              </a>
              <a href="https://www.linkedin.com/in/preethamgp-7267571b4" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
