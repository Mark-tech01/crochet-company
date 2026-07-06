import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { footerNavigation } from './footerData';
import './Footer.css';

// Import local gold wax seal image
import waxSealImg from './assets/gold-wax-seal.png';

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
      '.footer-header, .footer-grid, .footer-newsletter-section, .footer-value-props, .footer-bottom'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // SVG Vector Icons Map
  const linkIcons = {
    instagram: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    pinterest: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22a10 10 0 1 0-1.91-14.8C5.64 8 5.14 9.17 5 10.3c-.23 1.7.35 3.12 1.35 3.32.48.1.7-.1.78-.45.06-.27.22-.92.29-1.21-.1-.13-.53-.65-.53-1.63 0-2.3 1.66-4.38 4.45-4.38 2.42 0 4.18 1.66 4.18 4.07 0 2.65-1.5 4.8-3.67 4.8-1.14 0-2-.95-1.73-2.11.33-1.4.97-2.9 1.25-3.92.21-.92.05-1.7-.58-1.7-.75 0-1.55.8-1.55 2.15 0 1.05.35 1.77.35 1.77s-1.2 5.08-1.42 6.03c-.26 1.13-.1 2.5 0 2.87Z" />
      </svg>
    ),
    email: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    whatsapp: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.38 0 0 1 8 8v.5z" />
      </svg>
    )
  };

  return (
    <footer className="footer">
      
      {/* Delicate corner botanical outlines */}
      <div className="footer-watermark watermark-top-left" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none" stroke="#4A3C31" strokeWidth="0.5" strokeLinecap="round">
          <path d="M0,120 Q40,90 90,20" opacity="0.12" />
          <path d="M40,85 C30,75 35,65 43,78" opacity="0.08" />
          <path d="M43,78 C55,68 50,58 48,70" opacity="0.08" />
          <path d="M62,60 C55,50 60,40 65,52" opacity="0.08" />
          <path d="M65,52 C75,42 70,32 68,44" opacity="0.08" />
        </svg>
      </div>
      <div className="footer-watermark watermark-top-right" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none" stroke="#4A3C31" strokeWidth="0.5" strokeLinecap="round">
          <path d="M120,120 Q80,90 30,20" opacity="0.12" />
          <path d="M80,85 C90,75 85,65 77,78" opacity="0.08" />
          <path d="M77,78 C65,68 70,58 72,70" opacity="0.08" />
          <path d="M58,60 C65,50 60,40 55,52" opacity="0.08" />
          <path d="M55,52 C45,42 50,32 52,44" opacity="0.08" />
        </svg>
      </div>

      <div className="footer-container">

        {/* ==========================================
           1. EMBLEMATIC HEADER
        ========================================== */}
        <div className="footer-header">
          <div className="footer-emblem">
            <svg width="40" height="60" viewBox="0 0 50 80" fill="none" stroke="#B89A6A" strokeWidth="1.2">
              <rect x="2" y="2" width="46" height="76" rx="23" ry="23" />
              <path d="M25,60 C25,50 25,40 25,35" />
              <path d="M25,48 C20,46 18,48 20,52 C22,50 24,49 25,48 Z" fill="#B89A6A" opacity="0.3" />
              <path d="M25,43 C30,41 32,43 30,47 C28,45 26,44 25,43 Z" fill="#B89A6A" opacity="0.3" />
              <path d="M25,35 C22,30 20,25 25,20 C30,25 28,30 25,35 Z" />
              <path d="M23,28 C25,26 27,26 27,28 C26,30 24,30 23,28 Z" />
            </svg>
          </div>

          <h2 className="footer-logo">K O V V</h2>
          
          <div className="footer-slogan">
            <p>CRAFTED SLOWLY. REMEMBERED FOREVER.</p>
          </div>

          {/* Slogan divider element */}
          <div className="footer-header-divider">
            <svg width="100" height="12" viewBox="0 0 120 12" fill="none" stroke="#B89A6A" strokeWidth="0.8">
              <line x1="0" y1="6" x2="42" y2="6" />
              <line x1="78" y1="6" x2="120" y2="6" />
              <path d="M60,6 C55,2 50,6 60,6 Z" />
              <path d="M60,6 C65,2 70,6 60,6 Z" />
              <path d="M60,6 C58,10 52,10 60,6 Z" />
              <path d="M60,6 C62,10 68,10 60,6 Z" />
            </svg>
          </div>

          <div className="footer-quote">
            <p>Some gifts become decorations.</p>
            <p>Some become memories.</p>
            <p>Thank you for trusting us with yours.</p>
          </div>
        </div>

        {/* ==========================================
           2. NAVIGATION GRID
        ========================================== */}
        <div className="footer-grid">
          {footerNavigation.map((col) => (
            <div className="footer-column" key={col.heading}>
              <div className="column-header">
                <h3>{col.heading}</h3>
                <span className="header-dot" aria-hidden="true"></span>
              </div>
              <ul className="footer-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.to} target="_blank" rel="noopener noreferrer">
                        {link.icon && linkIcons[link.icon]}
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
           3. EDITORIAL NEWSLETTER ROW
        ========================================== */}
        <div className="footer-newsletter-section">
          <div className="newsletter-message">
            <svg className="envelope-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B89A6A" strokeWidth="1.2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <p className="newsletter-lead">
              Receive thoughtful gifting inspiration, seasonal collections, and first access to new handcrafted pieces.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input type="email" placeholder="Enter your email" className="newsletter-input" required />
            <button type="submit" className="newsletter-submit-btn">
              <span>STAY INSPIRED</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        </div>

        {/* ==========================================
           4. TRUST & VALUE PROPOSITIONS BAR
        ========================================== */}
        <div className="footer-value-props">
          <div className="value-prop-item">
            <span className="value-prop-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 11h-5a4 4 0 0 0-4 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a7 7 0 0 1 7-7h1" />
                <path d="M12 4a2.5 2.5 0 0 1 4.5 1.5c0 2-2.5 4.5-4.5 5-2-.5-4.5-3-4.5-5A2.5 2.5 0 0 1 12 4z" fill="currentColor" opacity="0.15" />
              </svg>
            </span>
            <div className="value-prop-text">
              <span className="prop-title">Handmade</span>
              <span className="prop-subtitle">To Order</span>
            </div>
          </div>
          <div className="value-prop-item">
            <span className="value-prop-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="4" y="9" width="16" height="11" rx="1" />
                <line x1="12" y1="9" x2="12" y2="20" />
                <line x1="4" y1="14" x2="20" y2="14" />
                <path d="M12,9 C9,5 9,9 12,9 Z" fill="currentColor" opacity="0.15" />
                <path d="M12,9 C15,5 15,9 12,9 Z" fill="currentColor" opacity="0.15" />
              </svg>
            </span>
            <div className="value-prop-text">
              <span className="prop-title">Premium</span>
              <span className="prop-subtitle">Gift Packaging</span>
            </div>
          </div>
          <div className="value-prop-item">
            <span className="value-prop-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12,22 C12,22 20,18 20,11 V5 L12,2 L4,5 V11 C4,18 12,22 12,22 Z" fill="currentColor" opacity="0.15" />
                <rect x="10" y="11" width="4" height="4" rx="1" />
                <path d="M11,11 V9 C11,8 13,8 13,9 V11" />
              </svg>
            </span>
            <div className="value-prop-text">
              <span className="prop-title">Secure</span>
              <span className="prop-subtitle">Checkout</span>
            </div>
          </div>
          <div className="value-prop-item">
            <span className="value-prop-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.15" />
                <path d="M3.6,12 H20.4" />
                <path d="M12,3 C14.5,6 15.5,9 15.5,12 C15.5,15 14.5,18 12,21 C9.5,18 8.5,15 8.5,12 C8.5,9 9.5,6 12,3 Z" />
              </svg>
            </span>
            <div className="value-prop-text">
              <span className="prop-title">Worldwide</span>
              <span className="prop-subtitle">Shipping</span>
            </div>
          </div>
        </div>

        {/* ==========================================
           5. BASE COPYRIGHT & WAX SEAL ROW
        ========================================== */}
        <div className="footer-bottom">
          <div className="bottom-left">
            <p>© KOVV {currentYear}. All rights reserved.</p>
          </div>

          <div className="bottom-center">
            {/* Flanking leaf drawings */}
            <svg className="flank-leaf flank-left" viewBox="0 0 40 20" width="40" height="20" fill="none" stroke="currentColor" strokeWidth="0.6">
              <path d="M0,15 Q20,10 40,5" />
              <path d="M10,14 C8,11 12,10 13,12" />
              <path d="M22,11 C20,8 24,7 25,9" />
            </svg>

            <div className="wax-seal-wrapper">
              {waxSealImg ? (
                <img src={waxSealImg} alt="KOVV Gold Wax Seal" className="bottom-wax-seal" />
              ) : (
                /* Premium Fallback Vector Stamp */
                <svg viewBox="0 0 100 100" width="50" height="50">
                  <defs>
                    <radialGradient id="fallback-gold-grad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#E5C79E" />
                      <stop offset="70%" stopColor="#B29267" />
                      <stop offset="100%" stopColor="#7E6038" />
                    </radialGradient>
                  </defs>
                  <path d="M50,8 C64,6 78,11 86,23 C94,35 91,55 83,69 C75,83 58,93 42,89 C26,85 11,73 9,56 C7,39 20,18 36,11 C41,9 45,10 50,8 Z" fill="url(#fallback-gold-grad)" />
                  <path d="M50,22 C64,22 74,32 74,48 C74,64 62,74 48,74 C34,74 26,62 26,48 C26,34 36,22 50,22 Z" fill="none" stroke="#5E472A" strokeWidth="1" strokeDasharray="2,2" opacity="0.4" />
                  <g transform="translate(36, 31) scale(0.55)" stroke="#5E472A" strokeWidth="2.2" fill="none" strokeLinecap="round">
                    <path d="M25,50 C25,40 25,32 25,28" />
                    <path d="M25,38 C21,36 19,38 21,41" />
                    <path d="M25,28 C21,23 19,18 25,13 C31,18 29,23 25,28 Z" fill="#5E472A" fillOpacity="0.15" />
                  </g>
                </svg>
              )}
            </div>

            <svg className="flank-leaf flank-right" viewBox="0 0 40 20" width="40" height="20" fill="none" stroke="currentColor" strokeWidth="0.6">
              <path d="M40,15 Q20,10 0,5" />
              <path d="M30,14 C32,11 28,10 27,12" />
              <path d="M18,11 C20,8 16,7 15,9" />
            </svg>
          </div>

          <div className="bottom-right">
            <p className="handmade-origin">Handmade with care in India.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;