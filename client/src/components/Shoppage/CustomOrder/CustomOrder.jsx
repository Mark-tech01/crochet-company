import React, { useEffect } from 'react';
import { customOrderData } from './customOrderData';
import './CustomOrder.css';

function CustomOrder() {
  // Quiet luxury sequential scroll reveal observer
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
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const revealElements = document.querySelectorAll(
      '.custom-order-visual, .co-label, .co-title, .co-paragraph-1, .co-paragraph-2, .co-cta-btn, .co-trust-list'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="custom-order-sec">
      {/* Tactile plaster wall texture mask */}
      <div className="custom-order-plaster" aria-hidden="true"></div>

      <div className="custom-order-container">
        
        {/* ==========================================
           LEFT COLUMN: EDITORIAL PACKAGING SCENE (58%)
        ========================================== */}
        <div className="custom-order-visual">
          <div className="visual-canvas">
            {customOrderData.image ? (
              <img 
                src={customOrderData.image} 
                alt="Luxury packaging station showing SOPHIA & DANIEL Anniversary custom order card, wax seal, yarn and couple doll" 
                className="custom-order-photography" 
                loading="lazy"
              />
            ) : (
              /* Premium physical collage backup if image is missing */
              <div className="visual-artistic-collage">
                <div className="collage-oak-surface"></div>
                <div className="collage-linen-runner"></div>
                
                {/* Physical Order Card replica */}
                <div className="collage-physical-order-card">
                  <div className="card-texture-grain"></div>
                  <div className="card-hanging-thread"></div>
                  
                  <h5 className="card-header-atelier">elnor ATELIER</h5>
                  <div className="card-divider-line"></div>
                  
                  <div className="card-metadata-grid">
                    <div className="meta-row">
                      <span className="meta-label">Customer</span>
                      <span className="meta-value">{customOrderData.orderCard.customer}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Occasion</span>
                      <span className="meta-value">{customOrderData.orderCard.occasion}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Piece</span>
                      <span className="meta-value">{customOrderData.orderCard.requestedPiece}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Status</span>
                      <span className="meta-value italic-status">{customOrderData.orderCard.status}</span>
                    </div>
                  </div>

                  <div className="card-wax-seal-emblem">
                    <svg viewBox="0 0 100 100" width="28" height="28">
                      <circle cx="50" cy="50" r="46" fill="#8B6A52" opacity="0.85" />
                      <g fill="none" stroke="#FAF8F4" strokeWidth="1.2">
                        <path d="M50,25 Q45,35 50,45 Q55,35 50,25" />
                        <line x1="50" y1="45" x2="50" y2="70" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Micro atmospheric details scattered naturally */}
                <div className="collage-eucalyptus-leaf" aria-hidden="true"></div>
                <div className="collage-loose-yarn-skein" aria-hidden="true"></div>
              </div>
            )}
            
            {/* Elegant window branch shadow casting across the scene */}
            <div className="window-shadow-cast-overlay" aria-hidden="true"></div>
          </div>
        </div>

        {/* ==========================================
           RIGHT COLUMN: TYPOGRAPHY & TRUST BADGES (42%)
        ========================================== */}
        <div className="custom-order-details">
          <div className="co-details-wrapper">
            
            <span className="co-label">{customOrderData.label}</span>
            
            <h2 className="co-title">
              {customOrderData.titleLines.map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < customOrderData.titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>

            <p className="co-paragraph-1">{customOrderData.paragraphs[0]}</p>
            <p className="co-paragraph-2">{customOrderData.paragraphs[1]}</p>

            <div className="co-cta-btn-wrapper">
              <a href="/custom-order" className="co-cta-btn">
                {customOrderData.ctaText}
              </a>
            </div>

            {/* Minimal under-button trust indicators */}
            <ul className="co-trust-list">
              {customOrderData.trustIndicators.map((ind, i) => (
                <li key={i} className="co-trust-item">
                  <svg className="trust-check-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{ind}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CustomOrder;