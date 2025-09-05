import React from 'react';
import './Capabilities.css';

const Capabilities = () => {
  const capabilities = [
    { icon: "📊", title: "Analytics", description: "Data-driven insights" },
    { icon: "📈", title: "Growth", description: "Scalable strategies" },
    { icon: "🎯", title: "Targeting", description: "Precise audience reach" },
    { icon: "⚡", title: "Performance", description: "Optimized results" },
    { icon: "🔧", title: "Automation", description: "Streamlined processes" },
    { icon: "📱", title: "Mobile", description: "Cross-platform solutions" }
  ];

  return (
    <section className="capabilities-section">
      <div className="container">
        <div className="capabilities-strip">
          {capabilities.map((capability, index) => (
            <div key={index} className="capability-item">
              <div className="capability-icon">{capability.icon}</div>
              <div className="capability-content">
                <h4 className="capability-title">{capability.title}</h4>
                <p className="capability-description">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

