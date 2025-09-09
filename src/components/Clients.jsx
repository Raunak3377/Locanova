import React from 'react';
import './Clients.css';

const Clients = () => {
  const clients = [
    { name: "Jawed Habib Saloon", logo: "🏤" },
    { name: "KIDZEE PLAY SCHOOL", logo: "🏨" },
    { name: "BRAVE INSTITUTE ARA", logo: "🏨" },
    { name: "AURA NATIONAL ACADEMY", logo: "🏨" },
    { name: "MANYAVAR OUTLETS", logo: "🏨" },
    { name: "BATA SHOWROOM", logo: "🏨" },
    { name: "RANJAN SHOE STORE", logo: "🏨" },
    { name: "AKASH INSTITUTE PATNA", logo: "🏨" },
   
  ];

  // Duplicate clients for seamless scrolling
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading">Our Clients</h2>
          <p className="section-subtitle">
            Trusted by leading companies in various industries
          </p>
        </div>
        
        <div className="clients-scroll-container">
          <div className="clients-scroll">
            {duplicatedClients.map((client, index) => (
              <div key={index} className="client-item">
                <div className="client-logo">{client.logo}</div>
                <div className="client-name">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

