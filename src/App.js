import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Code, Server, Database, Cloud, Award, Users, Briefcase } from 'lucide-react';

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observerRef.current.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const skills = [
    { name: 'Java & Spring Boot', level: 95, icon: <Code style={{width: '20px', height: '20px'}} />, delay: 0 },
    { name: 'React & Frontend', level: 90, icon: <Code style={{width: '20px', height: '20px'}} />, delay: 100 },
    { name: 'Microservices', level: 88, icon: <Server style={{width: '20px', height: '20px'}} />, delay: 200 },
    { name: 'SQL & Databases', level: 92, icon: <Database style={{width: '20px', height: '20px'}} />, delay: 300 },
    { name: 'AWS & Cloud', level: 85, icon: <Cloud style={{width: '20px', height: '20px'}} />, delay: 400 },
    { name: 'CI/CD & DevOps', level: 80, icon: <Server style={{width: '20px', height: '20px'}} />, delay: 500 }
  ];

  const achievements = [
    { icon: <Award style={{width: '32px', height: '32px'}} />, title: "Enterprise Solutions", desc: "Architected 15+ enterprise applications serving millions of users", delay: 0 },
    { icon: <Users style={{width: '32px', height: '32px'}} />, title: "Team Leadership", desc: "Led cross-functional teams of 5-8 developers in Agile environments", delay: 200 },
    { icon: <Briefcase style={{width: '32px', height: '32px'}} />, title: "Performance Optimization", desc: "Improved system performance by 40% through strategic refactoring", delay: 400 }
  ];

  const experiences = [
    {
      title: "Senior Java Full Stack Developer",
      company: "American Family Insurance",
      period: "2022 - Present",
      color: "#4f46e5",
      bgColor: "#ddd6fe",
      achievements: [
        "Architected microservices handling 10M+ daily transactions",
        "Reduced API response time by 60% through optimization",
        "Led migration of legacy systems to cloud-native architecture"
      ],
      tech: ['React', 'Spring Boot', 'Kafka', 'AWS', 'PostgreSQL', 'Jenkins'],
      delay: 0
    },
    {
      title: "Full Stack Developer",
      company: "Hyland Software",
      period: "2020 - 2022",
      color: "#9333ea",
      bgColor: "#f3e8ff",
      achievements: [
        "Built document management system serving 500K+ users",
        "Improved system performance by 25% through code optimization",
        "Implemented automated testing reducing bugs by 40%"
      ],
      tech: ['React', 'Java', 'Spring Boot', 'JUnit', 'Mockito', 'Scrum'],
      delay: 200
    },
    {
      title: "Java Developer",
      company: "Macy's Inc.",
      period: "2018 - 2020",
      color: "#2563eb",
      bgColor: "#dbeafe",
      achievements: [
        "Developed e-commerce backend serving millions of customers",
        "Optimized database queries improving performance by 35%",
        "Implemented monitoring solutions with AWS CloudWatch"
      ],
      tech: ['Spring Boot', 'SQL', 'AWS', 'CloudWatch', 'TDD'],
      delay: 400
    },  {
      title: "Java Developer",
      company: "M&T Bank – Buffalo, NY",
      period: "2017 - 2019",
      color: "#2563eb",
      bgColor: "#dbeafe",
      achievements: [
        "Designed and delivered Spring Boot microservices for customer onboarding and loan servicing, integrating Kafka for real-time updates.",
        "Automated CI/CD with Jenkins, implemented unit testing (JUnit/Mockito), and enhanced security using Spring Security, JWT, and role-based access control.",
        "Collaborated in Agile sprints with cross-functional teams, applying TDD and documenting architecture for future scalability.",
        "Optimized database queries improving performance by 35%",
        "Implemented monitoring solutions with AWS CloudWatch"
      ],
      tech: ['Spring Boot', 'SQL', 'AWS', 'CloudWatch', 'TDD'],
      delay: 400
    }, {
      title: "Software Engineer",
      company: "Shrewdify ",
      period: "2018 - 2020",
      color: "#2563eb",
      bgColor: "#dbeafe",
      achievements: [
        "Developed customer-facing applications using Java, Spring Boot, and React.js, designing RESTful APIs and integrating third-party services.",
        "Implemented Kafka queues for asynchronous processing and worked with MySQL & Oracle databases for efficient data management.",
        "Automated build and deployment pipelines with Jenkins, wrote unit/integration tests, and implemented logging and monitoring for stability.",
        "Collaborated with clients and cross-functional teams in Agile sprints, delivering tailored software solutions."
      ],
      tech: ['Spring Boot', 'SQL', 'AWS', 'CloudWatch', 'TDD'],
      delay: 400
    } 
  ];

  return (
    <div style={styles.container}>
      <style>{cssStyles}</style>
      
      {/* Floating particles background */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 20}s`
          }} />
        ))}
      </div>
      
      {/* Hero Section */}
      <section style={styles.hero} data-animate id="hero">
        <div 
          className="hero-bg"
          style={{
            ...styles.heroBackground,
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0001})`
          }}
        />
        
        <div style={styles.heroContent} className="hero-content">
          <div style={styles.heroGlass} className="hero-glass">
            <h1 style={styles.heroTitle} className="hero-title">
              Sandhya Rani Katike
            </h1>
            <p style={styles.heroSubtitle} className="hero-subtitle">
              Senior Full Stack Developer • Enterprise Solutions Architect
            </p>
            <div style={styles.heroBadges} className="hero-badges">
              <span style={styles.badge} className="badge">8+ Years Experience</span>
              <span style={styles.badge} className="badge">Java Ecosystem Expert</span>
              <span style={styles.badge} className="badge">Cloud Architecture</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section} data-animate id="about">
        <div style={styles.maxWidth}>
          <div 
            style={styles.glass} 
            className={`glass-card ${visibleSections.has('about') ? 'animate-in' : ''}`}
          >
            <h2 style={styles.sectionTitle} className="fade-in-up">About</h2>
            <div style={styles.aboutGrid}>
              <div className="fade-in-left">
                <p style={styles.aboutText}>
                  Senior Full Stack Developer with <strong>8+ years</strong> of expertise in designing and delivering 
                  enterprise-grade applications. Specialized in Java ecosystem, modern React frontends, and 
                  scalable cloud architectures.
                </p>
                <p style={styles.aboutSubtext}>
                  Throughout my career, I've architected solutions serving millions of users across insurance, 
                  e-commerce, and document management domains. My focus lies in building maintainable, 
                  performant systems that drive business value through technical excellence.
                </p>
              </div>
              <div style={styles.achievementsGrid} className="fade-in-right">
                {achievements.map((achievement, idx) => (
                  <div 
                    key={idx} 
                    style={{
                      ...styles.achievementCard,
                      animationDelay: `${achievement.delay}ms`
                    }}
                    className={`achievement-card ${visibleSections.has('about') ? 'bounce-in' : ''}`}
                  >
                    <div style={styles.achievementIcon} className="icon-pulse">
                      {achievement.icon}
                    </div>
                    <h4 style={styles.achievementTitle}>{achievement.title}</h4>
                    <p style={styles.achievementDesc}>{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={styles.section} data-animate id="skills">
        <div style={styles.skillsContainer}>
          <h2 style={styles.sectionTitle} className="fade-in-up">Technical Expertise</h2>
          <div style={styles.skillsGrid}>
            {skills.map((skill, idx) => (
              <div 
                key={idx} 
                style={{
                  ...styles.skillCard,
                  animationDelay: `${skill.delay}ms`
                }}
                className={`skill-card ${visibleSections.has('skills') ? 'slide-in-up' : ''}`}
              >
                <div style={styles.skillHeader}>
                  <div style={styles.skillInfo}>
                    <div style={styles.skillIcon} className="skill-icon-rotate">
                      {skill.icon}
                    </div>
                    <span style={styles.skillName}>{skill.name}</span>
                  </div>
                  <span style={styles.skillLevel} className="skill-percentage">{skill.level}%</span>
                </div>
                <div style={styles.skillBarBg}>
                  <div 
                    className={`skill-bar ${visibleSections.has('skills') ? 'animate-bar' : ''}`}
                    style={{
                      ...styles.skillBar,
                      width: visibleSections.has('skills') ? `${skill.level}%` : '0%',
                      animationDelay: `${skill.delay + 500}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={styles.section} data-animate id="experience">
        <div style={styles.maxWidth}>
          <h2 style={styles.sectionTitle} className="fade-in-up">Professional Journey</h2>
          <div style={styles.experienceContainer}>
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                style={{
                  ...styles.experienceCard,
                  animationDelay: `${exp.delay}ms`
                }}
                className={`experience-card ${visibleSections.has('experience') ? 'slide-in-left' : ''}`}
              >
                <div style={styles.expHeader}>
                  <div>
                    <h3 style={styles.expTitle} className="exp-title-hover">{exp.title}</h3>
                    <p style={{...styles.expCompany, color: exp.color}} className="company-glow">{exp.company}</p>
                  </div>
                  <span style={{...styles.expDate, backgroundColor: exp.bgColor, color: exp.color}} className="date-badge">
                    {exp.period}
                  </span>
                </div>
                <div style={styles.expContent}>
                  <div>
                    <h4 style={styles.expSectionTitle}>Key Achievements</h4>
                    <ul style={styles.expList} className="achievement-list">
                      {exp.achievements.map((achievement, aidx) => (
                        <li key={aidx} className="achievement-item" style={{animationDelay: `${exp.delay + (aidx * 100)}ms`}}>
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 style={styles.expSectionTitle}>Technologies</h4>
                    <div style={styles.techTags} className="tech-tags">
                      {exp.tech.map((tech, tidx) => (
                        <span 
                          key={tech} 
                          style={{
                            ...styles.techTag,
                            animationDelay: `${exp.delay + 300 + (tidx * 50)}ms`
                          }}
                          className={`tech-tag ${visibleSections.has('experience') ? 'tech-tag-animate' : ''}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section style={styles.section} data-animate id="education">
        <div style={styles.skillsContainer}>
          <h2 style={styles.sectionTitle} className="fade-in-up">Education</h2>
          <div style={styles.educationGrid}>
            <div 
              style={styles.educationCard}
              className={`education-card ${visibleSections.has('education') ? 'flip-in' : ''}`}
            >
              <div style={styles.educationIcon} className="education-icon-float">
                <Award style={{width: '32px', height: '32px'}} />
              </div>
              <h3 style={styles.educationTitle}>Master's Degree</h3>
              <p style={styles.educationSubtitle}>Computer and Information Systems</p>
              <p style={styles.educationUniversity}>Saint Louis University</p>
            </div>
            <div 
              style={styles.educationCard}
              className={`education-card ${visibleSections.has('education') ? 'flip-in' : ''}`}
            >
              <div style={{...styles.educationIcon, background: 'linear-gradient(135deg, #a855f7, #ec4899)'}} className="education-icon-float">
                <Award style={{width: '32px', height: '32px'}} />
              </div>
              <h3 style={styles.educationTitle}>Bachelor's Degree</h3>
              <p style={styles.educationSubtitle}>Computer Science</p>
              <p style={{...styles.educationUniversity, color: '#9333ea'}}>JB Institute of Engineering and Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={styles.section} data-animate id="contact">
        <div style={styles.skillsContainer}>
          <h2 style={styles.sectionTitle} className="fade-in-up">Let's Connect</h2>
          <div 
            style={styles.contactGlass}
            className={`glass-card ${visibleSections.has('contact') ? 'zoom-in' : ''}`}
          >
            <p style={styles.contactText} className="fade-in-up">
              Ready to discuss your next enterprise solution or explore collaboration opportunities?
            </p>
            <div style={styles.contactGrid}>
              <a 
                href="mailto:sandhyak5757@gmail.com" 
                style={styles.contactButton}
                className="contact-button pulse-button"
              >
                <Mail style={{width: '24px', height: '24px'}} />
                <span style={styles.contactButtonText}>sandhyak5757@gmail.com</span>
              </a>
              <a 
                href="tel:+13145657252" 
                style={{...styles.contactButton, background: 'linear-gradient(135deg, #a855f7, #ec4899)'}}
                className="contact-button pulse-button"
              >
                <Phone style={{width: '24px', height: '24px'}} />
                <span style={styles.contactButtonText}>314-565-7252</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8fafc, #e0f2fe, #e0e7ff)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden'
  },
  
  hero: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  
  heroBackground: {
    position: 'absolute',
    inset: '0',
    background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(139, 92, 246, 0.1), rgba(37, 99, 235, 0.2))',
    transition: 'transform 0.1s ease-out'
  },
  
  heroContent: {
    position: 'relative',
    zIndex: '10',
    textAlign: 'center',
    padding: '0 2rem',
    maxWidth: '64rem'
  },
  
  heroGlass: {
    backdropFilter: 'blur(40px)',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '1.5rem',
    padding: '3rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  heroTitle: {
    fontSize: '3.75rem',
    fontWeight: '200',
    color: '#1f2937',
    marginBottom: '1rem',
    letterSpacing: '-0.025em'
  },
  
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#4b5563',
    marginBottom: '2rem',
    fontWeight: '300'
  },
  
  heroBadges: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  
  badge: {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease'
  },
  
  section: {
    padding: '5rem 2rem'
  },
  
  maxWidth: {
    maxWidth: '72rem',
    margin: '0 auto'
  },
  
  skillsContainer: {
    maxWidth: '64rem',
    margin: '0 auto'
  },
  
  glass: {
    backdropFilter: 'blur(40px)',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '1.5rem',
    padding: '3rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  sectionTitle: {
    fontSize: '2.25rem',
    fontWeight: '200',
    color: '#1f2937',
    marginBottom: '3rem',
    textAlign: 'center'
  },
  
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'center'
  },
  
  aboutText: {
    fontSize: '1.125rem',
    color: '#374151',
    lineHeight: '1.75',
    marginBottom: '1.5rem'
  },
  
  aboutSubtext: {
    color: '#4b5563',
    lineHeight: '1.75'
  },
  
  achievementsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem'
  },
  
  achievementCard: {
    textAlign: 'center',
    transition: 'transform 0.3s ease'
  },
  
  achievementIcon: {
    width: '4rem',
    height: '4rem',
    margin: '0 auto 1rem',
    borderRadius: '1rem',
    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transition: 'all 0.3s ease'
  },
  
  achievementTitle: {
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  
  achievementDesc: {
    fontSize: '0.875rem',
    color: '#4b5563'
  },
  
  skillsGrid: {
    display: 'grid',
    gap: '1.5rem'
  },
  
  skillCard: {
    backdropFilter: 'blur(40px)',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  skillHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  
  skillInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  
  skillIcon: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '0.75rem',
    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transition: 'transform 0.3s ease'
  },
  
  skillName: {
    fontWeight: '500',
    color: '#1f2937'
  },
  
  skillLevel: {
    fontSize: '0.875rem',
    color: '#4b5563'
  },
  
  skillBarBg: {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '9999px',
    height: '0.5rem',
    overflow: 'hidden'
  },
  
  skillBar: {
    height: '0.5rem',
    background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
    borderRadius: '9999px',
    transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative'
  },
  
  experienceContainer: {
    display: 'grid',
    gap: '2rem'
  },
  
  experienceCard: {
    backdropFilter: 'blur(40px)',
    background: 'rgba(255, 255, 255, 0.25)',
    borderRadius: '1.5rem',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  expHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.5rem'
  },
  
  expTitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#1f2937',
    transition: 'color 0.3s ease'
  },
  
  expCompany: {
    fontWeight: '500',
    transition: 'all 0.3s ease'
  },
  
  expDate: {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    transition: 'all 0.3s ease'
  },
  
  expContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  
  expSectionTitle: {
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: '0.75rem'
  },
  
  expList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    color: '#4b5563',
    lineHeight: '1.5'
  },
  
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  },
  
  techTag: {
    padding: '0.25rem 0.75rem',
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    color: '#374151',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  educationGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  
  educationCard: {
    backdropFilter: 'blur(40px)',
    background: 'rgba(255, 255, 255, 0.25)',
    borderRadius: '1.5rem',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    textAlign: 'center',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  educationIcon: {
    width: '4rem',
    height: '4rem',
    margin: '0 auto 1.5rem',
    borderRadius: '1rem',
    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transition: 'transform 0.3s ease'
  },
  
  educationTitle: {
    fontSize: '1.25rem',
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  
  educationSubtitle: {
    color: '#4b5563',
    marginBottom: '0.5rem'
  },
  
  educationUniversity: {
    color: '#4f46e5',
    fontWeight: '500'
  },
  
  contactGlass: {
    backdropFilter: 'blur(40px)',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '1.5rem',
    padding: '3rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    textAlign: 'center',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  contactText: {
    fontSize: '1.125rem',
    color: '#374151',
    marginBottom: '2rem'
  },
  
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  
  contactButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    padding: '1.5rem',
    borderRadius: '1rem',
    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  contactButtonText: {
    fontWeight: '500'
  }
};

const cssStyles = `
  /* Floating particles */
  .particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
  
  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: radial-gradient(circle, rgba(79, 70, 229, 0.6), transparent);
    border-radius: 50%;
    animation: float infinite ease-in-out;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-10px) rotate(360deg); opacity: 0; }
  }
  
  /* Scroll indicator */
  .scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
  }
  
  .scroll-arrow {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    animation: arrowMove 1.5s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }
  
  @keyframes arrowMove {
    0% { opacity: 0; transform: rotate(-45deg) translate(-5px, -5px); }
    50% { opacity: 1; }
    100% { opacity: 0; transform: rotate(-45deg) translate(5px, 5px); }
  }
  
  /* Hero animations */
  .hero-content {
    animation: heroFadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @keyframes heroFadeIn {
    from { opacity: 0; transform: translateY(50px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  
  .hero-glass {
    animation: glassSlideIn 1s 0.3s both cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @keyframes glassSlideIn {
    from { opacity: 0; transform: translateY(30px); backdrop-filter: blur(0px); }
    to { opacity: 1; transform: translateY(0); backdrop-filter: blur(40px); }
  }
  
  .hero-title {
    animation: titleTypewriter 2s 0.8s both;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid #4f46e5;
  }
  
  @keyframes titleTypewriter {
    from { width: 0; }
    to { width: 100%; border-right: 3px solid transparent; }
  }
  
  .hero-subtitle {
    animation: slideInUp 1s 1.5s both cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hero-badges {
    animation: fadeIn 1s 2s both;
  }
  
  .badge {
    animation: badgePop 0.6s ease-out both;
  }
  
  .badge:nth-child(1) { animation-delay: 2.2s; }
  .badge:nth-child(2) { animation-delay: 2.4s; }
  .badge:nth-child(3) { animation-delay: 2.6s; }
  
  @keyframes badgePop {
    from { opacity: 0; transform: scale(0.5) rotateY(90deg); }
    to { opacity: 1; transform: scale(1) rotateY(0deg); }
  }
  
  .badge:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);
  }
  
  /* Section animations */
  .animate-in {
    animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(60px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .fade-in-up {
    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .fade-in-left {
    animation: fadeInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .fade-in-right {
    animation: fadeInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .bounce-in {
    animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
  }
  
  @keyframes bounceIn {
    from { opacity: 0; transform: scale(0.3) translateY(-50px); }
    50% { opacity: 1; transform: scale(1.1) translateY(-10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  
  .achievement-card:hover {
    transform: translateY(-10px) scale(1.05);
  }
  
  .icon-pulse {
    animation: iconPulse 2s infinite;
  }
  
  @keyframes iconPulse {
    0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
    70% { box-shadow: 0 0 0 20px rgba(79, 70, 229, 0); }
    100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
  }
  
  /* Skill animations */
  .slide-in-up {
    animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
  
  .skill-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.35);
  }
  
  .skill-icon-rotate:hover {
    transform: rotateY(360deg);
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.5);
  }
  
  .skill-percentage {
    animation: numberCount 1.5s ease-out;
  }
  
  @keyframes numberCount {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-bar {
    position: relative;
    overflow: visible;
  }
  
  .animate-bar::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
    animation: shimmer 2s ease-in-out;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100px); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(100px); opacity: 0; }
  }
  
  /* Experience animations */
  .slide-in-left {
    animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-100px) rotateY(-90deg); }
    to { opacity: 1; transform: translateX(0) rotateY(0deg); }
  }
  
  .experience-card:hover {
    background: rgba(255, 255, 255, 0.4) !important;
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
  
  .exp-title-hover:hover {
    color: #4f46e5 !important;
    text-shadow: 0 0 10px rgba(79, 70, 229, 0.3);
  }
  
  .company-glow:hover {
    text-shadow: 0 0 15px currentColor;
    transform: scale(1.05);
  }
  
  .date-badge:hover {
    transform: scale(1.1) rotate(-2deg);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .achievement-list li {
    animation: slideInFromLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
    transition: all 0.3s ease;
  }
  
  .achievement-item:hover {
    transform: translateX(10px);
    color: #4f46e5;
  }
  
  @keyframes slideInFromLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .tech-tag-animate {
    animation: techTagPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
  }
  
  @keyframes techTagPop {
    from { opacity: 0; transform: scale(0.5) rotate(180deg); }
    to { opacity: 1; transform: scale(1) rotate(0deg); }
  }
  
  .tech-tag:hover {
    transform: translateY(-3px) scale(1.1);
    background: rgba(79, 70, 229, 0.2);
    color: #4f46e5;
    box-shadow: 0 5px 15px rgba(79, 70, 229, 0.2);
  }
  
  /* Education animations */
  .flip-in {
    animation: flipIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
  
  @keyframes flipIn {
    from { opacity: 0; transform: rotateY(-90deg) scale(0.8); }
    to { opacity: 1; transform: rotateY(0deg) scale(1); }
  }
  
  .education-card:hover {
    transform: translateY(-10px) rotateY(10deg);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  }
  
  .education-icon-float {
    animation: iconFloat 3s ease-in-out infinite;
  }
  
  @keyframes iconFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
  }
  
  .education-icon-float:hover {
    animation-play-state: paused;
    transform: scale(1.2) rotateY(360deg);
  }
  
  /* Contact animations */
  .zoom-in {
    animation: zoomIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @keyframes zoomIn {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .pulse-button {
    position: relative;
    overflow: hidden;
  }
  
  .pulse-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  .pulse-button:hover::before {
    width: 300px;
    height: 300px;
  }
  
  .pulse-button:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  
  .pulse-button:active {
    animation: buttonPress 0.1s ease;
  }
  
  @keyframes buttonPress {
    from { transform: translateY(-5px) scale(1.05); }
    to { transform: translateY(-3px) scale(1.02); }
  }
  
  /* Glass card hover effects */
  .glass-card:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  }
  
  /* Loading animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  /* Responsive animations */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem !important;
      white-space: normal;
      border-right: none;
      animation: fadeInUp 1s 0.5s both;
    }
    
    .achievements-grid {
      grid-template-columns: 1fr !important;
    }
    
    .exp-content {
      grid-template-columns: 1fr !important;
    }
    
    .contact-grid {
      grid-template-columns: 1fr !important;
    }
    
    .achievement-card {
      animation-delay: 0.1s;
    }
    
    .skill-card {
      animation-delay: 0.1s;
    }
    
    .experience-card {
      animation-delay: 0.1s;
    }
  }
  
  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #3730a3, #6d28d9);
  }
  
  /* Performance optimizations */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Prefers reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default App; 
