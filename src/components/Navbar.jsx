import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'Home', href: '#home', page: 'home' },
    { name: 'Services', href: '#services', page: 'home' },
    { name: 'Pricing', href: '#pricing', page: 'pricing' }, // replaced Clients
    { name: 'Blog', href: '#blog', page: 'blog' },
    { name: 'Contact', href: '#contact', page: 'contact' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        {/* Logo */}
        <motion.div 
          className="navbar-brand"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="logo-container">
            <span className="logo-text">LOCANOVA</span>
            <span className="logo-dot">.</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="navbar-nav desktop-menu">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => {
                setCurrentPage(item.page);
                closeMenu();
              }}
              className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className={`navbar-toggler ${isOpen ? 'active' : ''}`}
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          whileTap={{ scale: 0.95 }}
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-modal="true"
              role="dialog"
            >
              <motion.div
                className="mobile-menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div className="mobile-menu-header">
                  <div className="logo-container">
                    <span className="logo-text">LOCANOVA</span>
                    <span className="logo-dot">.</span>
                  </div>
                  <button 
                    className="close-btn"
                    onClick={closeMenu}
                    aria-label="Close menu"
                    tabIndex={0}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                
                <div className="mobile-menu-items">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        setCurrentPage(item.page);
                        closeMenu();
                      }}
                      className={`mobile-menu-item ${currentPage === item.page ? 'active' : ''}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      tabIndex={0}
                      aria-current={currentPage === item.page ? "page" : undefined}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                <div className="mobile-menu-footer">
                  <motion.button
                    className="btn btn-primary btn-lg w-100"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    tabIndex={0}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

