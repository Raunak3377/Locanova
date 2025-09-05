import React from 'react';
import './ValueProposition.css';

const ValueProposition = () => {
  const stats = [
    { number: "20+", label: "Happy Clients" },
    { number: "3x", label: "Average Growth" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section className="value-proposition-section">
      <div className="container">
        <div className="value-content">
          <div className="value-text">
            <h2 className="value-heading">
              We Help You Scale Your <span className="highlight">Business</span>
            </h2>
            <p className="value-description">
              Transform your business with data-driven digital marketing strategies. 
              We help companies grow 3x faster with proven methodologies and cutting-edge technology.
            </p>
            <div className="value-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="value-cta">
              <button className="btn btn-primary">Get Started Today</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="value-visual">
            <div className="visual-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="card-title">Business Growth Dashboard</div>
              </div>
              <div className="card-content">
                <div className="chart-placeholder">
                  <div className="chart-bar" style={{ height: '60%' }}></div>
                  <div className="chart-bar" style={{ height: '80%' }}></div>
                  <div className="chart-bar" style={{ height: '45%' }}></div>
                  <div className="chart-bar" style={{ height: '90%' }}></div>
                  <div className="chart-bar" style={{ height: '75%' }}></div>
                </div>
                <div className="chart-labels">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

