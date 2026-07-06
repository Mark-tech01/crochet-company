import React, { useEffect } from 'react';
import { customHeroData, customStepsData } from './customerOrderData';
import './CustomerOrders.css'; // Matches your stylesheet filename exactly

function CustomerOrderCTA() {
  // Built-in Luxury Scroll Observer
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
      '.order-hero-card, .process-header, .process-card, .customer-order-footer'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="customer-order-sec">
      <div className="customer-order-container">

        {/* ==========================================
           PART 1: HERO CUSTOM ORDER SPREAD
        ========================================== */}
        <div className="order-hero-card">
          <div className="order-hero-content">
            
            {/* Crown Geometric Emblem */}
            <div className="order-emblem">
              <span className="emblem-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B89A6A" strokeWidth="1">
                  <path d="M12,4 L16,9 L20,6 L18,15 L12,20 L6,15 L4,6 L8,9 Z" />
                  <circle cx="12" cy="12" r="2.5" fill="#B89A6A" opacity="0.15" />
                </svg>
              </span>
              <span className="order-subtitle">{customHeroData.subtitle}</span>
              <span className="emblem-heart">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B89A6A" strokeWidth="1.2">
                  <path d="M12,21 L10.55,19.7 C5.4,15 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,12 18.6,15 13.45,19.7 L12,21 Z" />
                </svg>
              </span>
            </div>

            <h2 className="order-hero-title">
              Your Story. <br /> Handcrafted Into Something <span className="serif-italic">You'll Keep Forever.</span>
            </h2>

            <p className="order-hero-desc">{customHeroData.description}</p>

            <div className="order-cta-group">
              <a href="/custom-order" className="order-shop-btn">
                {customHeroData.ctaText}
                <span className="btn-heart">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12,21 L10.55,19.7 C5.4,15 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,12 18.6,15 13.45,19.7 L12,21 Z" />
                  </svg>
                </span>
                <span className="btn-arrow">→</span>
              </a>
            </div>

          </div>

          <div className="order-hero-image-frame">
            <img 
              src={customHeroData.image} 
              alt="Crafted dog keepsake presentation box with tag" 
              className="order-hero-img" 
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

        <div className="process-grid">
          {customStepsData.map((step, index) => (
            <div key={step.num} className="process-card">
              
              <div className="process-image-passpartout">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="process-img" 
                  loading="lazy" 
                />

                {/* Micro-arrow overlay on the image boundaries */}
                {index < customStepsData.length - 1 && (
                  <div className="process-arrow-indicator" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
        <div className="customer-order-footer">
          <p className="footer-line-upper">From our hands to their heart.</p>
          <p className="footer-line-cursive">Made to be remembered.</p>
          <span className="footer-heart-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B89A6A" strokeWidth="1.2">
              <path d="M12,21 L10.55,19.7 C5.4,15 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,12 18.6,15 13.45,19.7 L12,21 Z" />
            </svg>
          </span>
        </div>

      </div>
    </section>
  );
}

export default CustomerOrderCTA;