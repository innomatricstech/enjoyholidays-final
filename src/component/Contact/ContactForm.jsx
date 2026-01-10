import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"; // We'll create this CSS file

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    emailjs.init("pA0i5E39NRJLfMBZ8");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.sendForm(
        "service_6junq1p",
        "template_57bye08",
        formRef.current,
        "pA0i5E39NRJLfMBZ8"
      );

      setSuccess(true);
      formRef.current.reset();

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(true);
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Send us a message and we'll respond as soon as possible</p>
      </div>

      {success && (
        <div className="alert alert-success">
          <span className="alert-icon">✓</span>
          <div>
            <strong>Message Sent!</strong>
            <p>Thank you for contacting us. We'll get back to you soon.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert-error">
          <span className="alert-icon">✕</span>
          <div>
            <strong>Message Failed</strong>
            <p>Please try again or contact us directly via email.</p>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input 
              id="name"
              name="name" 
              placeholder="Enter your full name" 
              required 
              className="form-input"
            />
            <div className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input 
              id="email"
              name="email" 
              type="email" 
              placeholder="your.email@example.com" 
              required 
              className="form-input"
            />
            <div className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            id="phone"
            name="phone" 
            placeholder="(123) 456-7890" 
            className="form-input"
          />
          <div className="input-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea 
            id="message"
            name="message" 
            placeholder="Please write your message here..." 
            rows="5" 
            required 
            className="form-textarea"
          />
          <div className="input-icon textarea-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          className="submit-button"
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="send-icon">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </>
          )}
        </button>
        
        <p className="form-note">* Required fields</p>
      </form>
    </div>
  );
};

export default ContactForm;