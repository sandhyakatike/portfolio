
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Code, Server, Database, Cloud, Award, Users, Briefcase } from 'lucide-react';
import profilePicture from "./Pro.JPG";

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

  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java & Spring Boot', level: 95, years: '7+ years', companies: ['American Family', 'Hyland', 'M&T Bank', 'Macy\'s'] },
        { name: 'Microservices Architecture', level: 90, years: '5+ years', companies: ['American Family', 'Hyland', 'Macy\'s'] },
        { name: 'RESTful APIs & GraphQL', level: 88, years: '6+ years', companies: ['American Family', 'Hyland', 'M&T Bank'] }
      ],
      icon: <Server className="w-6 h-6" />,
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Frontend Development', 
      skills: [
        { name: 'React.js & Angular', level: 85, years: '5+ years', companies: ['American Family', 'Hyland', 'M&T Bank'] },
        { name: 'TypeScript & JavaScript', level: 82, years: '6+ years', companies: ['Hyland', 'M&T Bank', 'Macy\'s'] },
        { name: 'State Management (Redux/MobX)', level: 80, years: '4+ years', companies: ['American Family', 'Hyland'] }
      ],
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS Services & Lambda', level: 88, years: '4+ years', companies: ['American Family', 'Hyland', 'Shrewdify'] },
        { name: 'Docker & Kubernetes', level: 85, years: '3+ years', companies: ['Macy\'s', 'M&T Bank'] },
        { name: 'CI/CD Pipelines', level: 87, years: '5+ years', companies: ['American Family', 'Hyland', 'Macy\'s'] }
      ],
      icon: <Cloud className="w-6 h-6" />,
      gradient: 'from-teal-600 to-teal-800'
    },
    {
      title: 'Database & Storage',
      skills: [
        { name: 'SQL Databases (PostgreSQL, Oracle)', level: 90, years: '6+ years', companies: ['American Family', 'Hyland', 'M&T Bank'] },
        { name: 'NoSQL (MongoDB)', level: 85, years: '4+ years', companies: ['Hyland', 'Macy\'s', 'M&T Bank'] },
        { name: 'Data Optimization & Caching', level: 83, years: '5+ years', companies: ['American Family', 'M&T Bank'] }
      ],
      icon: <Database className="w-6 h-6" />,
      gradient: 'from-gray-600 to-gray-800'
    }
  ];

  const achievements = [
    { icon: <Award className="w-8 h-8" />, title: "Enterprise Solutions", desc: "Architected 15+ enterprise applications serving millions of users", delay: 0 },
    { icon: <Users className="w-8 h-8" />, title: "Team Leadership", desc: "Led cross-functional teams of 5-8 developers in Agile environments", delay: 200 },
    { icon: <Briefcase className="w-8 h-8" />, title: "Performance Optimization", desc: "Improved system performance by 40% through strategic refactoring", delay: 400 }
  ];

  const experiences = [
    {
      title: "Senior Java Full Stack Developer",
      company: "American Family Insurance",
      period: "2023 - Present",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      achievements: [
       "Developed scalable full-stack applications by building responsive React.js UIs, integrating with Spring Boot REST/GraphQL APIs, and securing access with OAuth2/JWT.",
       "Engineered high-performance backend services using Spring Data JPA, Hibernate, and Kafka, optimizing queries and enabling real-time claims workflow processing.",
       "Deployed cloud-native solutions on AWS (EC2, Lambda, S3) with Terraform IaC, auto-scaling, and CI/CD pipelines (Jenkins + Docker) to ensure reliability and faster releases.",
       "Improved code quality and collaboration through TDD with JUnit/Mockito, Agile sprints, and pair programming, reducing production issues and boosting delivery speed."
      ],
      delay: 0
    },
    {
      title: "Full Stack Developer",
      company: "Hyland Software",
      period: "2021 - 2023",
      color: "text-gray-700",
      bgColor: "bg-gray-50",
      achievements: [
        "Built dynamic, reusable React.js components with conditional rendering and higher-order patterns, integrating MobX state management and URQL for efficient GraphQL data fetching.",
        "Developed Spring Boot microservices with SOAP/REST APIs, RabbitMQ for asynchronous messaging, and optimized data access layers across Oracle and MongoDB for scalable integrations.",
        "Deployed and automated cloud infrastructure on AWS using CloudFormation, S3 Glacier, and CI/CD pipelines with Jenkins to ensure scalability, compliance, and faster releases.",
        "Enhanced reliability and collaboration by implementing TDD with JUnit, integration testing with Apache CXF, and Agile practices with cross-functional teams."
      ],
      delay: 200
    },
    {
      title: "Java Developer",
      company: "Macy's Inc.",
      period: "2019 - 2021",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      achievements: [
        "Developed dynamic Angular 12 front-end interfaces with reusable components and secure workflows, integrating with Spring Boot RESTful microservices for retail systems.",
        "Engineered scalable microservices with PostgreSQL and MongoDB, leveraging JMS for inter-service communication and optimizing order/loyalty processing performance.",
        "Deployed cloud-native applications on Azure using Docker and Ansible, implementing CI/CD pipelines in Jenkins and automated testing for faster, reliable releases.",
        "Monitored system health with Prometheus/Grafana and applied TDD (Karma, Jasmine, JUnit) to ensure high availability, resilience, and customer experience reliability."
      ],
      delay: 400
    }, 
    {
      title: "Java Developer",
      company: "M&T Bank – Buffalo, NY",
      period: "2018 - 2019",
      color: "text-teal-700",
      bgColor: "bg-teal-50",
      achievements: [
       "Built responsive Angular/TypeScript UIs with reusable components and NgRx state management, streamlining complex banking and loan processing workflows.",
       "Developed secure, high-performance Spring Boot APIs with Redis caching, IBM MQ messaging, and Spring Security for authentication/authorization of sensitive financial data.",
       "Designed scalable multi-database solutions using Hibernate, MongoDB, and Azure Cosmos DB, ensuring high availability, consistency, and multi-region support.",
       "Deployed containerized microservices on Azure AKS with CI/CD automation (Git + Jenkins), applying TDD (TestNG, JMeter) to deliver resilient and production-ready systems."
         ],
      delay: 600
    }, 
    {
      title: "Software Engineer",
      company: "Shrewdify",
      period: "2017 - 2018",
      color: "text-gray-700",
      bgColor: "bg-gray-50",
      achievements: [
       "Developed responsive analytics dashboards with interactive visualizations and secure RESTful APIs, integrating Shrewdify CRM with external applications.",
       "Optimized backend operations on Oracle 12c, improving query performance, data security, and overall system reliability.",
       "Deployed SaaS applications on AWS with CI/CD pipelines (Git + Jenkins), ensuring high availability, scalability, and automated deployments.",
       "Applied TDD with JUnit and collaborated in Agile teams, enhancing code stability, maintainability, and iterative feature delivery."
      ],
      delay: 800
    } 
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <style>{cssStyles}</style>
      
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-blue-700">Sandhya Rani Katike</h1>
          <div className="flex gap-6">
            <a href="#hero" className="text-gray-700 hover:text-blue-700 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-700 transition-colors">Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-700 transition-colors">Experience</a>
            <a href="#education" className="text-gray-700 hover:text-blue-700 transition-colors">Education</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
        <section
        className="relative pt-20 pb-10 flex items-center justify-center bg-white"
        data-animate
        id="hero"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 max-w-6xl">
          {/* Profile Picture - Left Side */}
          <div className="flex-shrink-0">
            <img
              src={profilePicture}
              alt="Sandhya Rani Katike"
              className="w-48 h-48 rounded-full object-cover shadow-2xl ring-4 ring-blue-100"
            />
          </div>

          {/* Name and Details - Center/Right */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
              Sandhya Rani Katike
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Senior Full Stack Developer • 8 Years of Enterprise Solutions
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="px-4 py-2 rounded-md bg-blue-50 text-blue-700 font-medium transition hover:bg-blue-100">
                Java & Spring Expert
              </span>
              <span className="px-4 py-2 rounded-md bg-teal-50 text-teal-700 font-medium transition hover:bg-teal-100">
                Cloud Architecture
              </span>
              <span className="px-4 py-2 rounded-md bg-gray-50 text-gray-700 font-medium transition hover:bg-gray-100">
                Agile Leadership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50" data-animate id="about">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-6 bg-white rounded-lg shadow-md transition-all duration-300 ${visibleSections.has('about') ? 'fade-in' : ''}`}>
              <p className="text-gray-700 leading-7">
                Senior Full Stack Developer with <strong>8+ years</strong> of expertise in designing and delivering 
                enterprise-grade applications. Specialized in Java ecosystem, modern React frontends, and 
                scalable cloud architectures.
              </p>
              <p className="text-gray-600 leading-7 mt-4">
                I've architected solutions serving millions of users across insurance, e-commerce, and document 
                management domains, focusing on maintainable, performant systems that drive business value.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 bg-white rounded-lg shadow-md text-center transition-all duration-300 ${visibleSections.has('about') ? 'fade-in' : ''}`}
                  style={{ animationDelay: `${achievement.delay}ms` }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 text-blue-700">{achievement.icon}</div>
                  <h4 className="font-medium text-gray-800 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section className="py-20 px-6 bg-gray-50" id="skills">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
      Technical Expertise
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Programming & Scripting",
          skills: ["Java 8/11/17", "JavaScript", "Python", "Bash", "Shell Script"]
        },
        {
          title: "Frameworks & Libraries",
          skills: ["Spring Boot", "Spring Core", "Spring Security", "Spring MVC", "Hibernate", "React.js", "Angular 12/16", "Node.js", "Vue.js", "Next.js"]
        },
        {
          title: "Web & Services",
          skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JSON", "Apache Axis", "CXF", "WSDL", "JAX-WS"]
        },
        {
          title: "Databases & Messaging",
          skills: ["Oracle 12c", "PostgreSQL", "MongoDB", "Redis", "Azure Cosmos DB", "Apache Kafka", "RabbitMQ", "IBM MQ", "JMS"]
        },
        {
          title: "Cloud & DevOps",
          skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Ansible", "CloudFormation", "Jenkins", "GitHub Actions", "Maven", "Gradle"]
        },
        {
          title: "Testing, Monitoring & Tools",
          skills: ["JUnit", "Mockito", "JMeter", "TestNG", "Cucumber", "Grafana", "Prometheus", "Splunk", "Dynatrace", "Nagios", "Git", "SVN"]
        }
      ].map((category, idx) => (
        <div 
          key={idx} 
          className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {category.title}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <li 
                key={i} 
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Experience Section */}
      <section className="py-16 px-4 bg-gray-50" data-animate id="experience">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Professional Journey</h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className={`p-6 bg-white rounded-lg shadow-md transition-all duration-300 ${visibleSections.has('experience') ? 'fade-in' : ''}`}
                style={{ animationDelay: `${exp.delay}ms` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                    <p className={`${exp.color} font-medium`}>{exp.company}</p>
                  </div>
                  <span className={`${exp.bgColor} ${exp.color} px-4 py-1 rounded-md text-sm font-medium mt-2 md:mt-0`}>{exp.period}</span>
                </div>
                <ul className="list-disc pl-5 text-gray-600">
                  {exp.achievements.map((achievement, aidx) => (
                    <li key={aidx} className="mb-2">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-white" data-animate id="education">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Education</h2>
          <div className={`p-6 bg-gray-50 rounded-lg shadow-md text-center transition-all duration-300 ${visibleSections.has('education') ? 'fade-in' : ''}`}>
            <div className="w-12 h-12 mx-auto mb-4 text-blue-700"><Award className="w-8 h-8" /></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Master's Degree</h3>
            <p className="text-gray-600 mb-2">Computer and Information Systems</p>
            <p className="text-blue-700 font-medium">Saint Louis University</p>
            <p className="text-gray-600 text-sm mt-2">2023 - 2025</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50" data-animate id="contact">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Let's Connect</h2>
          <div className={`p-6 bg-white rounded-lg shadow-md transition-all duration-300 ${visibleSections.has('contact') ? 'fade-in' : ''}`}>
            <p className="text-gray-600 mb-6">Ready to discuss your next enterprise solution or explore collaboration opportunities?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="mailto:sandhyak5757@gmail.com" 
                className="flex items-center justify-center gap-2 p-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
              >
                <Mail className="w-5 h-5" />
                <span>sandhyak5757@gmail.com</span>
              </a>
              <a 
                href="tel:+13145657252" 
                className="flex items-center justify-center gap-2 p-4 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition"
              >
                <Phone className="w-5 h-5" />
                <span>314-565-7252</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white text-center text-gray-600">
        <p>© 2025 Sandhya Rani Katike. All rights reserved.</p>
      </footer>
    </div>
  );
};

const cssStyles = `
  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes animateBar {
    from { width: 0%; }
    to { width: inherit; }
  }

  .fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }

  .animate-bar {
    animation: animateBar 1s ease-out forwards;
  }

  /* Smooth scroll */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #4b6cb7;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #3b5ca6;
  }

  /* Base styles */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Inter', sans-serif;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .text-4xl {
      font-size: 2rem;
    }

    .text-3xl {
      font-size: 1.5rem;
    }

    .grid-cols-2 {
      grid-template-columns: 1fr;
    }

    .md\\:grid-cols-2 {
      grid-template-columns: 1fr;
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default App;
