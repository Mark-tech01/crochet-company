import React, { useEffect } from 'react';
import { customHeroData, customStepsData } from './customCTAData';
import './CustomCTA.css';

function CustomCTA() {
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
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -45px 0px' 
      }
    );

    const revealElements = document.querySelectorAll(
      '.custom-hero-card, .process-header, .process-card, .custom-creations-footer'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="custom-creations-sec">
      <div className="custom-container">

        {/* ==========================================
           PART 1: HERO CUSTOM ORDER SPREAD
        ========================================== */}
        <div className="custom-hero-card">
          <div className="custom-hero-content">
            
            {/* Elegant Botanical Crest Emblem */}
            <div className="custom-emblem">
              <span className="emblem-icon">
                <svg width="34" height="34" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="25" cy="25" r="22" strokeDasharray="3 3" opacity="0.4" />
                  <path d="M25,12 C25,12 25,24 25,38" />
                  <path d="M25,24 C20,20 18,22 21,26 C23,24 24,24 25,24 Z" fill="currentColor" opacity="0.2" />
                  <path d="M25,30 C30,26 32,28 29,32 C27,30 26,30 25,30 Z" fill="currentColor" opacity="0.2" />
                  <path d="M25,18 C22,14 20,11 25,7 C30,11 28,14 25,18 Z" />
                </svg>
              </span>
              <span className="custom-subtitle">{customHeroData.subtitle}</span>
            </div>

            <h2 className="custom-hero-title">
              Your Story. <br /> Handcrafted Into Something <span className="serif-italic">You'll Keep Forever.</span>
            </h2>

            <p className="custom-hero-desc">{customHeroData.description}</p>

            <div className="custom-cta-group">
              <a href="/custom-order" className="custom-shop-btn">
                <span>{customHeroData.ctaText}</span>
                <span className="btn-heart">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12,21 L10.55,19.7 C5.4,15, 2, 12, 2, 8.5 C2, 5.4, 4.4, 3, 7.5, 3 C9.2, 3, 10.9, 3.8, 12, 5.1 C13.1, 3.8, 14.8, 3, 16.5, 3 C19.6, 3, 22, 5.4, 22, 8.5 C22, 12, 18.6, 15, 13.45, 19.7 L12, 21 Z" />
                  </svg>
                </span>
                <span className="btn-arrow">→</span>
              </a>
            </div>

          </div>

          <div className="custom-hero-image-frame">
            <img 
              src={customHeroData.image} 
              alt="Crafted dog keepsake presentation box with tag" 
              className="custom-hero-img" 
              loading="lazy" 
            />
          </div>
        </div>

        {/* ==========================================
           PART 2: THE 5-COLUMN CHRONOLOGY GRID
        ========================================== */}
        <div className="process-header">
          <span className="process-subtitle">
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M2,6 C8,6 10,2 12,6 C10,10 8,6 2,6 Z M22,6 C16,6 14,2 12,6 C14,10 16,6 22,6 Z" />
            </svg>
            THE PROCESS
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M2,6 C8,6 10,2 12,6 C10,10 8,6 2,6 Z M22,6 C16,6 14,2 12,6 C14,10 16,6 22,6 Z" />
            </svg>
          </span>
          <h2 className="process-title">Five Steps to Lifelong Keepsakes</h2>
        </div>

        <div className="custom-process-grid">
          {customStepsData.map((step, index) => (
            <div key={step.num} className="process-card">
              
              <div className="process-image-passpartout">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="process-img" 
                  loading="lazy" 
                />

                {/* Circular connection arrows sitting directly on the image boundaries */}
                {index < customStepsData.length - 1 && (
                  <div className="process-arrow-indicator" aria-hidden="true">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="process-content">
                <div className="process-num-row">
                  <span className="process-num">{step.num}</span>
                  <span className="process-line-spacer"></span>
                </div>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.description}</p>
              </div>

            </div>
          ))}
        </div>

        {/* ==========================================
           PART 3: EMBLEMATIC CORE FOOTER
        ========================================== */}
        <div className="custom-creations-footer">
          <p className="footer-line-upper">From our hands to their heart.</p>
          <p className="footer-line-cursive">Made to be remembered.</p>
          <span className="footer-heart-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M12,21 L10.55,19.7 C5.4,15, 2, 12, 2, 8.5 C2, 5.4, 4.4, 3, 7.5, 3 C9.2, 3, 10.9, 3.8, 12, 5.1 C13.1, 3.8, 14.8, 3, 16.5, 3 C19.6, 3, 22, 5.4, 22, 8.5 C22, 12, 18.6, 15, 13.45, 19.7 L12, 21 Z" />
            </svg>
          </span>
        </div>

      </div>
    </section>
  );
}

export default CustomCTA;