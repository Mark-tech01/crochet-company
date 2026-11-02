import React, { useEffect } from 'react';
import { storyData } from './storyData';
import './StoryBanner.css';

function StoryBanner() {
  // Editorial Scroll Reveal Observer
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
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const revealElements = document.querySelectorAll(
      '.story-visual-column, .story-label, .story-heading, .story-paragraph-1, .story-paragraph-2, .story-cta-btn'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="story-banner-sec">
      {/* Soft warm plaster plaster texturing layer */}
      <div className="story-plaster-texture" aria-hidden="true"></div>

      <div className="story-banner-container">
        
        {/* ==========================================
           LEFT COLUMN: THE HANDCRAFTED WORKSPACE SCENE
        ========================================== */}
        <div className="story-visual-column">
          <div className="story-image-canvas">
            {storyData.image ? (
              <img 
                src={storyData.image} 
                alt="Slow-crafted workspace showing yarn, custom bridal doll, measuring tape and scissors bathed in natural morning light" 
                className="story-workspace-photo" 
                loading="lazy"
              />
            ) : (
              /* High-End Fallback SVG Composition depicting the occupied workspace details */
              <div className="story-vector-fallback">
                <svg viewBox="0 0 100 100" fill="none" stroke="#B38A63" strokeWidth="0.8">
                  {/* Subtle sunlit window cast */}
                  <path d="M-10,30 L110,60 M-10,50 L110,80" strokeOpacity="0.1" strokeWidth="4" />
                  {/* Skein outlines and hooks */}
                  <circle cx="35" cy="55" r="14" strokeDasharray="2 2" strokeOpacity="0.4" />
                  <circle cx="35" cy="55" r="10" strokeOpacity="0.3" />
                  <path d="M15,80 Q55,40 75,25" strokeOpacity="0.4" />
                  {/* Gift Tag detail: "For Mom" */}
                  <g transform="translate(60,65)" strokeWidth="0.6">
                    <rect x="0" y="0" width="24" height="14" rx="2" strokeOpacity="0.3" />
                    <line x1="-8" y1="7" x2="0" y2="7" strokeOpacity="0.3" />
                    <text x="4" y="9" fill="#5F544B" fontSize="4.5" fontFamily="monospace" stroke="none">For Mom ❤️</text>
                  </g>
                  {/* Crochet hook resting */}
                  <line x1="25" y1="35" x2="55" y2="65" strokeWidth="1" strokeLinecap="round" />
                  <path d="M54,64 c1,1 -1,2 -1,2" strokeWidth="1" />
                </svg>
              </div>
            )}
            
            {/* Real morning golden hour lighting simulation overlay */}
            <div className="story-golden-light-overlay" aria-hidden="true"></div>
          </div>
        </div>

        {/* ==========================================
           RIGHT COLUMN: EDITORIAL TYPOGRAPHY & COPY
        ========================================== */}
        <div className="story-content-column">
          <div className="story-content-wrapper">
            
            <span className="story-label">{storyData.label}</span>
            
            <h3 className="story-heading">
              Every Stitch<br />
              Holds a Story
            </h3>

            <p className="story-paragraph-1">{storyData.paragraphs[0]}</p>
            <p className="story-paragraph-2">{storyData.paragraphs[1]}</p>

            <div className="story-cta-wrapper">
              <a href="/craftsmanship" className="story-cta-btn">
                {storyData.ctaText}
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default StoryBanner;