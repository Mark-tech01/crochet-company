import React, { useEffect } from 'react';
import { shopHeroData } from './shopHeroData';
import './ShopHero.css';

function ShopHero() {
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
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(
      '.hero-eyebrow-row, .hero-title-serif, .hero-description-text, .hero-cta-btn'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      className="shop-hero-sec" 
      style={{ backgroundImage: `url(${shopHeroData.image})` }}
    >
      {/* Soft warm-tinted vignette overlay to guarantee text legibility */}
      <div className="hero-wash-overlay" aria-hidden="true"></div>

      <div className="shop-hero-container">
        
        {/* ==========================================
           1. TOP ROW: ORIGINAL EYEBROW LABEL
        ========================================== */}
        <div className="hero-eyebrow-row">
          <div className="eyebrow-line" aria-hidden="true"></div>
          <span className="label-collection">{shopHeroData.category}</span>
        </div>

        {/* ==========================================
           2. CENTER ROW: EDITORIAL TITLE LAYOUT
        ========================================== */}
        <div className="hero-headline-row">
          <h1 className="hero-title-serif">
            {shopHeroData.titleMain} <br />
            {shopHeroData.titleSub} <br />
            <span className="serif-italic">{shopHeroData.titleItalic}</span>
          </h1>
        </div>

        {/* ==========================================
           3. BOTTOM ROW: DESCRIPTION & CALL TO ACTION
        ========================================== */}
        <div className="hero-footer-row">
          <p className="hero-description-text">{shopHeroData.description}</p>
          
          <div className="hero-cta-btn-wrapper">
            <a href={shopHeroData.ctaLink} className="hero-cta-btn">
              <span>{shopHeroData.ctaText}</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ShopHero;