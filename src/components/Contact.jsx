import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const MotionDiv = motion.div;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMethod, setSubmitMethod] = useState('email');
  const [showSuccess, setShowSuccess] = useState(false);

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
    'Consulting',

    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using EmailJS for email submission
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        service: formData.service,
        message: formData.message,
        to_email: 'vraunakraj456@gmail.com' // Replace with your email
      };

      // EmailJS service call (you'll need to set this up)
      // For now, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        service: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `Hello! I'm interested in your services.

*Contact Information:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

*Service Interest:*
${formData.service}

*Subject:*
${formData.subject}

*Message:*
${formData.message}

Looking forward to hearing from you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '1234567890'; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/7766828618?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    if (submitMethod === 'email') {
      handleEmailSubmit(e);
    } else {
      handleWhatsAppSubmit(e);
    }
  };

  if (showSuccess) {
    return (
      <div className="contact-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <MotionDiv
                className="success-message text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h2>Message Sent Successfully!</h2>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowSuccess(false)}
                >
                  Send Another Message
                </button>
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="container">
          <MotionDiv
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="contact-title display-4 fw-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="contact-subtitle lead text-muted mb-5">
              Ready to grow your business? Let's discuss how we can help you achieve your goals.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <MotionDiv
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="contact-form-container">
                  <div className="form-header text-center mb-4">
                    <h2 className="form-title">Send us a Message</h2>
                    <p className="form-subtitle text-muted">
                      Choose how you'd like to contact us
                    </p>
                    
                    {/* Submission Method Toggle */}
                    <div className="submission-methods mb-4">
                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className={`btn ${submitMethod === 'email' ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => setSubmitMethod('email')}
                        >
                          <i className="fas fa-envelope me-2"></i>
                          Email
                        </button>
                        <button
                          type="button"
                          className={`btn ${submitMethod === 'whatsapp' ? 'btn-success' : 'btn-outline-success'}`}
                          onClick={() => setSubmitMethod('whatsapp')}
                        >
                          <i className="fab fa-whatsapp me-2"></i>
                          WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-control"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="company" className="form-label">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="form-control"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="service" className="form-label">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          className="form-select"
                          value={formData.service}
                          onChange={handleInputChange}
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="subject" className="form-label">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows="6"
                        placeholder="Tell us about your project, goals, or any questions you have..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="text-center">
                                        <button
                    type="submit"
                    className={`btn btn-xl btn-shimmer ${
                      submitMethod === 'email' ? 'btn-primary' : 'btn-secondary'
                    }`}
                    disabled={isSubmitting}
                  >
                        {isSubmitting ? (
                          <>
                            <span className="spinner me-2"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            {submitMethod === 'email' ? (
                              <>
                                <i className="fas fa-paper-plane me-2"></i>
                                Send Email
                              </>
                            ) : (
                              <>
                                <i className="fab fa-whatsapp me-2"></i>
                                Open WhatsApp
                              </>
                            )}
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <MotionDiv
                className="contact-info-card text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>Email Us</h4>
                <p>vraunakraj456@gmail.com</p>
                <p>support@locanova.com</p>
              </MotionDiv>
            </div>
            <div className="col-lg-4 col-md-6">
              <MotionDiv
                className="contact-info-card text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h4>Call Us</h4>
                <p>7766828618</p>
                <p>Mon - Sat, 9AM - 9PM</p>
              </MotionDiv>
            </div>
            <div className="col-lg-4 col-md-6">
              <MotionDiv
                className="contact-info-card text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="info-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h4>WhatsApp</h4>
                <p>7766828618</p>
                <p>Available 24/7</p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <MotionDiv
                className="text-center mb-5"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="text-muted">Quick answers to common questions</p>
              </MotionDiv>

              <div className="accordion" id="contactFAQ">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How quickly do you respond to inquiries?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters, WhatsApp is the fastest way to reach us.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Do you offer free consultations?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      Yes! We offer a free 30-minute consultation to discuss your project and how we can help you achieve your goals.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      What information should I include in my message?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      Please include your project goals, timeline, budget range, and any specific requirements. The more details you provide, the better we can assist you.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
