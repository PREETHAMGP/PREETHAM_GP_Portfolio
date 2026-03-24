import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ['JavaScript (ES6+)', 'React.js', 'HTML5', 'CSS3', 'Ant Design', 'Material UI'],
      color: '#61DAFB'
    },
    {
      title: 'Backend Technologies',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: ['Node.js', 'FeathersJS', 'RESTful APIs'],
      color: '#68A063'
    },
    {
      title: 'Databases',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: ['PostgreSQL', 'MySQL', 'Redis'],
      color: '#336791'
    },
    {
      title: 'Messaging & Testing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      skills: ['Apache Kafka', 'Jest', 'Mocha'],
      color: '#C21325'
    },
    {
      title: 'Cloud & DevOps',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
      skills: ['AWS (EC2, Route 53, Lambda)', 'GitLab CI/CD', 'Git'],
      color: '#FF9900'
    },
    {
      title: 'Architecture & Monitoring',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      skills: ['Microservices', 'Client-Server Architecture', 'Prometheus', 'Grafana', 'Jira'],
      color: '#E6522C'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index} style={{'--accent-color': category.color}}>
              <div className="skill-card-header">
                <div className="skill-icon" style={{backgroundColor: `${category.color}20`}}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span className="skill-tag" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
