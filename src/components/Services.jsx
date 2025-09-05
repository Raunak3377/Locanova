import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { 
      name: "Digital Marketing", 
      icon: "📈",
      description: "Data-driven strategies to boost your online presence and drive conversions"
    },
    { 
      name: "Social Media Management", 
      icon: "📱",
      description: "Engaging content and community management across all platforms"
    },
    { 
      name: "Web Development", 
      icon: "💻",
      description: "Modern, responsive websites that convert visitors into customers"
    },
    { 
      name: "SEO Optimization", 
      icon: "🔍",
      description: "Improve your search rankings and organic traffic growth"
    },
    { 
      name: "Content Creation", 
      icon: "✍️",
      description: "Compelling content that resonates with your target audience"
    },
    { 
      name: "Analytics & Reporting", 
      icon: "📊",
      description: "Comprehensive insights to track and optimize your performance"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital solutions to accelerate your business growth
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
