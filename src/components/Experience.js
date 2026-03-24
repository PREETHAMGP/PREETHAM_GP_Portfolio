import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Comviva',
      location: 'Bengaluru, Karnataka',
      positions: [
        {
          title: 'Technical Lead Engineer',
          period: 'Dec 2024 – Present',
          techStack: ['React.js', 'Node.js', 'FeathersJS', 'PostgreSQL', 'Redis', 'Kafka', 'AWS', 'GitLab CI/CD'],
          highlights: [
            'Leading a 15-member engineering team delivering a multi-tenant Loyalty Platform (OTN) serving 8M+ users',
            'Hands-on Technical Lead across multiple microservices, contributing to architecture design for scalable distributed systems',
            'Improved system performance by identifying bottlenecks and increasing TPS by 50%',
            'Designed and implemented Campaign, Rewards, Loyalty Points, and Notification modules',
            'Conducted code reviews, performance tuning, and production issue resolution',
            'Optimized database queries and caching strategies to enhance service responsiveness under high traffic loads',
            'Implemented GitLab CI/CD pipelines and managed AWS deployments'
          ]
        },
        {
          title: 'Senior Software Engineer',
          period: 'Dec 2022 – Dec 2024',
          techStack: ['React Native', 'React.js', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'AWS', 'Jest', 'Mocha'],
          highlights: [
            'Contributed to a React Native mobile payment application serving millions of users in Africa',
            'Built a Loyalty application widely used within the organization to demonstrate end-to-end loyalty capabilities and product features',
            'Designed and enhanced the admin portal using React.js with Ant Design and Material UI, improving usability and operational efficiency',
            'Developed scalable Node.js microservices integrated with PostgreSQL and Redis to support high-performance backend operations',
            'Implemented comprehensive unit testing using Jest and Mocha, increasing code coverage from 50% to over 80%'
          ]
        },
        {
          title: 'Software Engineer',
          period: 'Nov 2021 – Dec 2022',
          techStack: ['Vue.js (PWA)', 'MySQL', 'Consul', 'Keycloak', 'Apache Kafka', 'Nginx'],
          highlights: [
            'Led the end-to-end development of a Vue.js Progressive Web Application (PWA) from inception to production deployment',
            'Successfully rolled out the application across multiple regions: Nepal (500K+ users), Tunisia (300K+ users), and Ooredoo Qatar (B2E platform)',
            'Actively participated in Agile sprint planning, estimations, and release management cycles',
            'Leveraged tools such as Consul for service discovery, Keycloak for authentication and authorization, Apache Kafka for event-driven messaging, and Nginx for web server optimization'
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, expIndex) => (
            <div className="company-block" key={expIndex}>
              <div className="company-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="company-location">{exp.location}</span>
              </div>
              {exp.positions.map((position, posIndex) => (
                <div className="timeline-item" key={posIndex}>
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    {posIndex < exp.positions.length - 1 && <div className="marker-line"></div>}
                  </div>
                  <div className="timeline-content">
                    <div className="position-header">
                      <h4 className="position-title">{position.title}</h4>
                      <span className="position-period">{position.period}</span>
                    </div>
                    <ul className="position-highlights">
                      {position.highlights.map((highlight, hlIndex) => (
                        <li key={hlIndex}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="tech-stack">
                      {position.techStack.map((tech, techIndex) => (
                        <span className="tech-badge" key={techIndex}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
