import React, { useEffect } from 'react';
import { storyHeroData, storyStepsData, storyPromiseData } from './brandStoriesData';
import './BrandStories.css';

// SVG Vector Icon Map for the 4-column value cards
const storyIcons = {
  story: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12,22 C12,22 12,18 10,14 C8,12 6,10 6,7 C6,4.5 7.5,3 10,3 C12.5,3 13.5,4.5 13.5,7 C13.5,10 11.5,12 11.5,14" />
      <path d="M10,14 C12,14 15,12 17,9 C18.5,7 18.5,5.5 17,4.5 C15.5,3.5 14,4.5 13.5,7" />
      <path d="M11.5,14 C13,14 16,16 18,18 Q19,19 18,20" />
    </svg>
  ),
  hand: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="8" />
      <path d="M12,4 C12,4 9,8 9,12 C9,16 12,20 12,21" />
      <path d="M12,3 C12,3 15,7 15,12 C15,17 12,21 12,21" />
      <path d="M4.5,9 C4.5,9 8.5,9 12,12 C15.5,15 19.5,15 19.5,15" />
      <line x1="2" y1="2" x2="10" y2="10" />
    </svg>
  ),
  meaning: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M12,9 V4 M8,4 H16" />
      <path d="M4,9 H20" />
    </svg>
  ),
  remembered: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
};

function BrandStories() {
  // Built-in Luxury Scroll Intersection Observer
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
      '.story-hero-block, .story-matrix-col, .story-promise-block, .stories-closing-quote'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="stories-section">
      <div className="stories-container">

        {/* ==========================================
           PART 1: THE STORY HERO SPREAD
        ========================================== */}
        <div className="story-hero-block">
          <div className="story-hero-content">
            <span className="story-hero-subtitle">
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M2,6 C8,6 10,2 12,6 C10,10 8,6 2,6 Z M22,6 C16,6 14,2 12,6 C14,10 16,6 22,6 Z" />
              </svg>
              {storyHeroData.subtitle}
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M2,6 C8,6 10,2 12,6 C10,10 8,6 2,6 Z M22,6 C16,6 14,2 12,6 C14,10 16,6 22,6 Z" />
              </svg>
            </span>
            <h2 className="story-hero-title">
              We don't make gifts.<br />We create keepsakes.
            </h2>
            <p className="story-hero-desc">{storyHeroData.description}</p>
            <p className="story-hero-tagline">{storyHeroData.tagline}</p>
            
            {/* Fine gold outline heart */}
            <span className="story-hero-heart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B89A6A" strokeWidth="1.2">
                <path d="M12,21 L10.55,19.7 C5.4,15 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,12 18.6,15 13.45,19.7 L12,21 Z" />
              </svg>
            </span>
          </div>

          <div className="story-hero-image-frame">
            <img 
              src={storyHeroData.image} 
              alt="Hand-drawn rabbit illustration in notebook" 
              className="story-hero-img" 
              loading="lazy" 
            />
          </div>
        </div>

        {/* ==========================================
           PART 2: DECKLE PAPER TRANSITION & 4-COLUMN MATRIX
        ========================================== */}
        <div className="stories-deckle-divider"></div>

        <div className="story-matrix-grid">
          {storyStepsData.map((step) => (
            <div key={step.num} className="story-matrix-col">
              <div className="matrix-image-passpartout">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="matrix-img" 
                  loading="lazy" 
                />
              </div>
              <div className="matrix-content">
                <span className="matrix-num">{step.num}</span>
                <h3 className="matrix-title">{step.title}</h3>
                <p className="matrix-desc">{step.description}</p>
                <span className="matrix-icon">{storyIcons[step.iconKey]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================
           PART 3: THE PROMISE SPREAD
        ========================================== */}
        <div className="story-promise-block">
          <div className="story-promise-image-frame">
            <img 
              src={storyPromiseData.image} 
              alt="Artisanal basket filled with yarn balls" 
              className="story-promise-img" 
              loading="lazy" 
            />
          </div>

          <div className="story-promise-content">
            {/* Fine low-opacity background botanical foliage watermark */}
            <div className="promise-watermark">
              <svg viewBox="0 0 100 150" fill="none" stroke="#9E7B5C" strokeWidth="0.5" opacity="0.04">
                <path d="M50,130 C48,100 42,75 35,50 C32,40 28,30 38,20 C42,10 52,15 48,25 C45,35 38,45 50,60" />
                <path d="M42,95 C30,90 25,75 35,68 C42,62 48,70 45,80" />
                <path d="M46,75 C58,70 65,55 55,48 C48,42 42,50 45,60" />
              </svg>
            </div>

            <h3 className="promise-title">{storyPromiseData.title}</h3>
            
            {/* Fine gold diamond line divider */}
            <div className="promise-divider">
              <svg width="60" height="12" viewBox="0 0 60 12" fill="none" stroke="#B89A6A" strokeWidth="1">
                <path d="M0,6 H20 M60,6 H40 M30,2 L34,6 L30,10 L26,6 Z" />
              </svg>
            </div>

            <p className="promise-desc">{storyPromiseData.description}</p>
            
            <div className="promise-signature-block">
              <p className="promise-signature-lead">{storyPromiseData.tagline}</p>
              <p className="promise-signature-cursive">{storyPromiseData.signature}</p>
            </div>
          </div>
        </div>

        {/* ==========================================
           PART 4: UNFORGETTABLE CLOSING STAMP
        ========================================== */}
        <div className="stories-closing-quote">
          <p className="closing-quote-text">
            "Because the most beautiful gifts <br className="desktop-only" /> are the ones people never throw away."
          </p>
          <span className="closing-quote-heart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89A6A" strokeWidth="1.2">
              <path d="M12,21 L10.55,19.7 C5.4,15 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,12 18.6,15 13.45,19.7 L12,21 Z" />
            </svg>
          </span>
        </div>

      </div>
    </section>
  );
}

export default BrandStories;