import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { footerNavigation } from './footerData';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
  };

  // Luxury Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    const revealElements = document.querySelectorAll(
      '.footer-newsletter-section, .footer-grid, .footer-bottom'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ==========================================
           1. EDITORIAL MINIMALIST NEWSLETTER
        ========================================== */}
        <div className="footer-newsletter-section">
          <span className="newsletter-label">THE LETTER</span>
          
          <h3 className="newsletter-title">
            A little more beauty, <span className="italic-highlight">delivered occasionally.</span>
          </h3>
          
          <p className="newsletter-lead">
            Receive thoughtful gifting inspiration, new handcrafted collections, behind-the-scenes stories, and early access to limited releases.
          </p>
          
          <p className="newsletter-sub-clause">Never more than once a month.</p>

          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input" 
              required 
              aria-label="Email Address"
            />
            <button type="submit" className="newsletter-submit-btn">
              <span>Stay Inspired</span>
              <span className="btn-arrow">→</span>
            </button>
          </form>
        </div>

        {/* ==========================================
           2. NAVIGATION GRID (CLEAN TYPOGRAPHY)
        ========================================== */}
        <div className="footer-grid">
          
          {/* Brand Info Column */}
          <div className="footer-brand-column">
            <h2 className="brand-column-logo">ELNOR</h2>
            <p className="brand-column-desc">
              Handmade keepsakes created to celebrate love, friendship, birthdays, anniversaries, and the moments people never want to forget.
            </p>
            <p className="brand-column-slogan">
              Crafted slowly. <br />
              Gifted forever.
            </p>
          </div>

          {/* Mapped link categories */}
          {footerNavigation.map((col) => (
            <div className="footer-column" key={col.heading}>
              <div className="column-header">
                <h3>{col.heading}</h3>
              </div>
              <ul className="footer-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.to} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.to}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ==========================================
           3. BASE COPYRIGHT & LEGAL BAR
        ========================================== */}
        <div className="footer-bottom">
          <div className="bottom-left">
            <span className="copyright-text">© {currentYear} ELNOR. All rights reserved.</span>
            <span className="origin-text">Handmade with love in Jammu & Kashmir, India. 🤎</span>
          </div>

          <div className="bottom-right">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;