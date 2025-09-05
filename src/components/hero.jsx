// src/components/Hero.jsx
import { motion } from "framer-motion";
import heroImg from "../assets/locanova.png";
import "./hero.css";

const MotionDiv = motion.div;
const MotionButton = motion.button;

export default function Hero() {
  return (
    <section className="hero-section position-relative overflow-hidden">
      {/* Background Elements */}
      <div className="hero-bg-pattern"></div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      
      <div className="container">
        <div className="row align-items-center min-vh-100">
          {/* LEFT SIDE - Content */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <MotionDiv
              className="text-center text-lg-start"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <MotionDiv
                className="mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="hero-badge d-inline-flex align-items-center gap-2 px-3 py-2">
                  <span className="badge-icon">🚀</span>
                  <span>Trusted by 20+ Companies</span>
                </div>
              </MotionDiv>

              {/* Main Heading */}
              <MotionDiv
                className="mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="hero-heading display-3 fw-bold mb-3">
                  We Help You Scale Your{" "}
                  <span className="highlight-text">
                    Business
                  </span>{" "}
                  to New Heights
                </h1>
              </MotionDiv>

              {/* Subtitle */}
              <MotionDiv
                className="mb-5"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p className="hero-subtitle lead text-light-emphasis">
                  Empowering Local Businesses to Thrive in Digital Age
                  We help companies grow 3x faster with proven methodologies and cutting-edge technology.
                </p>
              </MotionDiv>

              {/* Stats */}
              <MotionDiv
                className="mb-5"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="row g-4 justify-content-center justify-content-lg-start">
                  <div className="col-auto">
                    <div className="text-center">
                      <div className="stat-number text-primary fw-bold fs-2">10+</div>
                      <div className="stat-label text-muted small">Happy Clients</div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="text-center">
                      <div className="stat-number text-purple fw-bold fs-2">3x</div>
                      <div className="stat-label text-muted small">Growth Rate</div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="text-center">
                      <div className="stat-number text-success fw-bold fs-2">98%</div>
                      <div className="stat-label text-muted small">Success Rate</div>
                    </div>
                  </div>
                </div>
              </MotionDiv>

              {/* CTA Buttons */}
              <MotionDiv
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                  <MotionButton
                    className="btn btn-primary btn-xl btn-shimmer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-rocket me-2"></i>
                    Get Free Demo
                  </MotionButton>
                  <MotionButton
                    className="btn btn-outline-light btn-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-play me-2"></i>
                    Watch Video
                  </MotionButton>
                </div>
              </MotionDiv>
            </MotionDiv>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="col-lg-6 col-md-12">
            <MotionDiv
              className="d-flex justify-content-center align-items-center position-relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              {/* Floating Elements */}
              <div className="floating-card-1"></div>
              <div className="floating-card-2"></div>
              
              <div className="hero-image-container position-relative">
                <img
                  src={heroImg}
                  alt="Digital Marketing Success"
                  className="hero-image img-fluid rounded-4 shadow-lg"
                />
                
                {/* Image Overlay Elements */}
                <div className="image-glow"></div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
