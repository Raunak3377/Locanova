// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/locanova.png";
import "./hero.css";

const MotionDiv = motion.div;

export default function Hero() {
  const phoneNumber = "918084668414";
  const message = "Hi, I want to connect! i am interested in your services.my buisness is - ";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="hero-section">
      {/* Animated Gradient Background */}
      <div className="hero-gradient-bg"></div>
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="row align-items-center min-vh-100">
          {/* LEFT SIDE CONTENT */}
          <div className="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0">
            <MotionDiv
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="hero-badge">
                🚀 Trusted by 20+ Companies
              </div>

              {/* Heading */}
              <h1 className="hero-heading">
                Transform Your <span className="highlight-text">Business</span> with Us
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle">
                We empower local businesses with cutting-edge digital strategies.
                Scale faster, smarter, and better with us.
              </p>

              {/* CTA Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-btn"
              >
                <i className="fab fa-whatsapp me-2"></i>
                Connect on WhatsApp
              </a>
            </MotionDiv>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <MotionDiv
              className="hero-image-wrapper"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="hero-image-card">
                <img src={heroImg} alt="Digital Growth" className="hero-image" />
                <div className="glow-circle"></div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
