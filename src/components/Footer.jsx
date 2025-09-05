import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Footer.css';

const MotionDiv = motion.div;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle newsletter subscription
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscriptionMessage('Thank you for subscribing! We\'ll keep you updated.');
      setEmail('');
    } catch (error) {
      setSubscriptionMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubscriptionMessage(''), 3000);
    }
  };

  const services = [
    'Digital Marketing',
    'SEO Services',
    'Social Media Marketing',
    'Content Marketing',
    'Branding',
    'Web Development',
    'Analytics & Reporting',
    'Graphic Design',
    'Hiring',
    'Consulting'
  ];

  const quickLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Services', page: 'home' },
    { name: 'Clients', page: 'home' },
    { name: 'Blog', page: 'blog' },
    { name: 'Contact', page: 'contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: '#' }
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="row g-4">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <MotionDiv
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="footer-brand">
                  <div className="logo-container">
                    <span className="logo-text">LOC</span>
                    <span className="logo-dot">.</span>
                  </div>
                  <p className="footer-description">
                    We help businesses grow through innovative digital marketing strategies, 
                    cutting-edge web development, and data-driven solutions that deliver real results.
                  </p>
                  <div className="contact-info">
                    <div className="contact-item">
                      <i className="fas fa-envelope"></i>
                      <span>vraunakraj456@gmail.com</span>
                    </div>
                    <div className="contact-item">
                      <i className="fas fa-phone"></i>
                      <span>+91 7766828618</span>
                    </div>
                    <div className="contact-item">
                      <i className="fab fa-whatsapp"></i>
                      <span>+91 7766828618</span>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <MotionDiv
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="footer-section">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="footer-links">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <a href={`#${link.page}`} className="footer-link">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <MotionDiv
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="footer-section">
                  <h4 className="footer-title">Our Services</h4>
                  <ul className="footer-links">
                    {services.slice(0, 6).map((service, index) => (
                      <li key={index}>
                        <a href="#services" className="footer-link">
                          {service}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="#services" className="footer-link">
                        View All Services →
                      </a>
                    </li>
                  </ul>
                </div>
              </MotionDiv>
            </div>

            {/* Newsletter & Social */}
            <div className="col-lg-3 col-md-6">
              <MotionDiv
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="footer-section">
                  <h4 className="footer-title">Stay Connected</h4>
                  <p className="newsletter-text">
                    Subscribe to our newsletter for the latest updates and insights.
                  </p>
                  
                  {/* Newsletter Form */}
                  <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button 
                        className="btn btn-primary" 
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <i className="fas fa-spinner fa-spin"></i>
                        ) : (
                          <i className="fas fa-paper-plane"></i>
                        )}
                      </button>
                    </div>
                    {subscriptionMessage && (
                      <div className="subscription-message">
                        {subscriptionMessage}
                      </div>
                    )}
                  </form>

                  {/* Social Links */}
                  <div className="social-links">
                    <h5>Follow Us</h5>
                    <div className="social-icons">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className="social-icon"
                          aria-label={social.name}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <MotionDiv
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="copyright">
                  © {currentYear} LOC. All rights reserved. Made with ❤️ for your success.
                </p>
              </MotionDiv>
            </div>
            <div className="col-md-6">
              <MotionDiv
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-md-end"
              >
                <div className="footer-bottom-links">
                  <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
                  <a href="#terms" className="footer-bottom-link">Terms of Service</a>
                  <a href="#cookies" className="footer-bottom-link">Cookie Policy</a>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <MotionDiv
          className="back-to-top"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="fas fa-arrow-up"></i>
        </MotionDiv>
      )}
    </footer>
  );
}
