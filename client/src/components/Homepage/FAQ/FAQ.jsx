import React, { useState, useEffect } from 'react';
import { faqIntroData, faqAccordionData } from './faqData';
import './FAQ.css';

// Pure JSX SVG vector icon map (keeps howItWorksData.js error-free)
const accordionIcons = {
  heart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12,21 L10.55,19.7 C5.4,15 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,11.5 20.5,13.5 18.5,15.5 C13.5,19.5 12,21 12,21 Z" />
    </svg>
  ),
  yarn: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="8" />
      <path d="M12,4 C12,4 9,8 9,12 C9,17 12,21 12,21" />
      <path d="M12,3 C12,3 15,7 15,12 C15,17 12,21 12,21" />
      <path d="M4.5,9 C4.5,9 8.5,9 12,12 C15.5,15 19.5,15 19.5,15" />
    </svg>
  ),
  palette: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 C6.5,2 2,6.5 2,12 C2,13.5 3,14.5 4,14.5 C4.5,14.5 5,14 5,13.5 C5,13 4.5,12.5 4.5,12 C4.5,7.9 7.9,4.5 12,4.5 C16.1,4.5 19.5,7.9 19.5,12 C19.5,16.1 16.1,19.5 12,19.5 C10.5,19.5 9.5,18.5 9.5,17.5 C9.5,17 10,16.5 10,16 C10,15.5 9.5,15 9,15 C4.5,15 2,18.5 2,22" />
      <circle cx="7.5" cy="9.5" r="1.5" fill="currentColor" />
      <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="9.5" r="1.5" fill="currentColor" />
    </svg>
  ),
  gift: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M12,9 V4 M8,4 H16" />
      <path d="M4,9 H20" />
    </svg>
  ),
  shipping: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  leaf: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12,22 C12,22 12,18 10,14 C8,12 6,10 6,7 C6,4.5 7.5,3 10,3 C12.5,3 13.5,4.5 13.5,7 C13.5,10 11.5,12 11.5,14" />
      <path d="M10,14 C12,14 15,12 17,9 C18.5,7 18.5,5.5 17,4.5 C15.5,3.5 14,4.5 13.5,7" />
    </svg>
  ),
  'heart-outline': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12,21 L10.55,19.7 C5.4,15 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,11.5 20.5,13.5 18.5,15.5 C13.5,19.5 12,21 12,21 Z" />
    </svg>
  )
};

function FAQ() {
  const [expandedId, setExpandedId] = useState('recreate-pet');

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Scroll revealing animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -45px 0px' }
    );

    const revealElements = document.querySelectorAll(
      '.faq-intro-col, .faq-accordion-container, .faq-bottom-banner'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        {/* ==========================================
           PART 1: THE TWO-COLUMN SPREAD GRID
        ========================================== */}
        <div className="faq-grid-split">
          
          {/* Left Column: Intro & Collage */}
          <div className="faq-intro-col">
            <span className="faq-subtitle">
              FAQ
              <span className="subtitle-heart">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12,21 L10.55,19.7 C5.4,15 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,12 18.6,15 13.45,19.7 L12,21 Z" />
                </svg>
              </span>
            </span>
            <h2 className="faq-title">
              We're Here <br /> <span className="title-serif-italic">to Help</span>
            </h2>

            {/* Small floral branch under title */}
            <div className="faq-title-divider">
              <svg width="60" height="16" viewBox="0 0 80 16" fill="none" stroke="#B59363" strokeWidth="1">
                <path d="M40,4 L44,8 L40,12 L36,8 Z" fill="#B59363" opacity="0.15" />
                <path d="M40,4 L44,8 L40,12 L36,8 Z" />
                <path d="M36,8 C30,8 26,11 20,8" />
                <path d="M44,8 C50,8 54,11 60,8" />
              </svg>
            </div>

            <p className="faq-lead">{faqIntroData.description}</p>

            {/* Polaroid/Notepad Overlapping Collage */}
            <div className="faq-collage-frame">
              <img 
                src={faqIntroData.collageImage} 
                alt="Luggage tags, knitted yarn, and crochet dog mockups" 
                className="faq-collage-img" 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Right Column: Accordion System */}
          <div className="faq-accordion-container">
            {faqAccordionData.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`faq-accordion-item ${isExpanded ? 'is-expanded' : ''}`}
                >
                  {/* Accordion Trigger Header */}
                  <button 
                    className="accordion-trigger" 
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={isExpanded}
                  >
                    <span className="accordion-icon-bullet">
                      {accordionIcons[item.iconKey]}
                    </span>
                    <span className="accordion-question">{item.question}</span>
                    <span className="accordion-toggle-circle">
                      <span className="toggle-symbol"></span>
                    </span>
                  </button>

                  {/* Pure CSS grid height expanding answer area */}
                  <div className="accordion-content-panel">
                    <div className="panel-inner-wrapper">
                      {item.expandedImage ? (
                        /* First Item Custom Photo & Quote Layout */
                        <div className="custom-expanded-layout">
                          <div className="expanded-image-passpartout">
                            <img 
                              src={item.expandedImage} 
                              alt="Custom miniature dog in box" 
                              className="expanded-profile-img" 
                            />
                          </div>
                          <div className="expanded-text-block">
                            <p className="expanded-answer-text">{item.answer}</p>
                            
                            {/* Fine absolute gold outline heart */}
                            <span className="expanded-heart-stamp">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B59363" strokeWidth="1.2">
                                <path d="M12,21 L10.55,19.7 C5.4,15 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,12 18.6,15 13.45,19.7 L12,21 Z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      ) : (
                        /* Standard Accordion Text Layout */
                        <p className="standard-answer-text">{item.answer}</p>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ==========================================
           PART 2: BOTTOM DECKLE-EDGE CONNECTIVE BANNER (9-COLUMN FLOW)
        ========================================== */}
        <div className="faq-bottom-banner">
          
          {/* 1. Left Column Content Block */}
          <div className="banner-left-content">
            <h3 className="banner-title">Still have questions?</h3>
            <p className="banner-cursive-tagline">We'd love to hear from you.</p>
            <span className="banner-heart-stamp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B89A6A" strokeWidth="1.2">
                <path d="M12,21 L10.55,19.7 C5.4,15 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,12 18.6,15 13.45,19.7 L12,21 Z" />
              </svg>
            </span>
          </div>

          {/* Divider Line 1 */}
          <div className="banner-divider-line" aria-hidden="true"></div>

          {/* 2. Contact Card: WhatsApp */}
          <a href="https://wa.me/yourphone" className="contact-card" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.38 0 0 1 8 8v.5z" />
              </svg>
            </span>
            <div className="contact-text">
              <h5>Chat with us</h5>
              <p>on WhatsApp</p>
            </div>
          </a>

          {/* Divider Line 2 */}
          <div className="banner-divider-line" aria-hidden="true"></div>

          {/* 3. Contact Card: Email */}
          <a href="mailto:contact@kovv.com" className="contact-card">
            <span className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </span>
            <div className="contact-text">
              <h5>Email us</h5>
              <p>anytime</p>
            </div>
          </a>

          {/* Divider Line 3 */}
          <div className="banner-divider-line" aria-hidden="true"></div>

          {/* 4. Contact Card: Clock */}
          <div className="contact-card borderless">
            <span className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </span>
            <div className="contact-text">
              <h5>Mon - Sat</h5>
              <p>10AM - 7PM</p>
            </div>
          </div>

          {/* Divider Line 4 */}
          <div className="banner-divider-line" aria-hidden="true"></div>

          {/* 5. Right CTA Block */}
          <div className="banner-creations-cta">
            <p className="cta-cursive-lead">Let's create something meaningful together.</p>
            <a href="/custom-order" className="banner-shop-btn">
              START YOUR CUSTOM ORDER
              <span className="btn-heart-stamp">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12,21 L10.55,19.7 C5.4(15) 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,12 18.6,15 13.45,19.7 L12,21 Z" />
                </svg>
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;