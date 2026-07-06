import React, { useEffect } from 'react';
import { stepsData } from './howItWorksData';
import './HowItWorks.css';

// Pure JSX SVG vector icon map (keeps howItWorksData.js error-free)
const stepIcons = {
  idea: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12,22 C12,22 12,18 10,14 C8,12 6,10 6,7 C6,4.5 7.5,3 10,3 C12.5,3 13.5,4.5 13.5,7 C13.5,10 11.5,12 11.5,14" />
      <path d="M10,14 C12,14 15,12 17,9 C18.5,7 18.5,5.5 17,4.5 C15.5,3.5 14,4.5 13.5,7" />
      <path d="M11.5,14 C13,14 16,16 18,18 Q19,19 18,20" />
    </svg>
  ),
  crafting: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="8" />
      <path d="M12,4 C12,4 9,8 9,12 C9,16 12,20 12,21" />
      <path d="M12,3 C12,3 15,7 15,12 C15,17 12,21 12,21" />
      <path d="M4.5,9 C4.5,9 8.5,9 12,12 C15.5,15 19.5,15 19.5,15" />
      <line x1="2" y1="2" x2="10" y2="10" />
    </svg>
  ),
  wrapping: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M12,9 V4 M8,4 H16" />
      <path d="M4,9 H20" />
    </svg>
  ),
  delivery: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
};

function HowItWorks() {
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
        threshold: 0.1, // Triggers when 10% of the element is visible
        rootMargin: '0px 0px -40px 0px' // Slightly offsets trigger point for better feel
      }
    );

    // Target all timeline rows
    const rows = document.querySelectorAll('.how-step-row');
    rows.forEach((row) => observer.observe(row));

    // Cleanup observer on component unmount
    return () => {
      rows.forEach((row) => observer.unobserve(row));
    };
  }, []);

  return (
    <section className="how-it-works-sec">
      <div className="how-it-works-container">

        {/* Section Header */}
        <div className="how-it-works-header">
          <span className="how-it-works-subtitle">
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M2,6 C8,6 10,2 12,6 C10,10 8,6 2,6 Z M22,6 C16,6 14,2 12,6 C14,10 16,6 22,6 Z" />
            </svg>
            HOW IT WORKS
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M2,6 C8,6 10,2 12,6 C10,10 8,6 2,6 Z M22,6 C16,6 14,2 12,6 C14,10 16,6 22,6 Z" />
            </svg>
          </span>
          <h2 className="how-it-works-title">The Journey of Thoughtful Gifting</h2>
          
          <div className="how-it-works-divider">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="#B89A6A" strokeWidth="1">
              <path d="M0,10 H15 M40,10 H25 M20,5 L23,10 L20,15 L17,10 Z" />
            </svg>
          </div>

          <p className="how-it-works-lead">
            Every piece you gift is more than just handmade. <br /> It's a journey of love, care and craftsmanship.
          </p>
        </div>

        {/* Alternating Row Stack */}
        <div className="how-it-works-grid">
          {stepsData.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={step.num} 
                className={`how-step-row ${isEven ? 'layout-text-left' : 'layout-image-left'}`}
              >
                {/* 1. TEXT COLUMN */}
                <div className="how-step-text-col">
                  
                  {/* Vertical Timeline Thread */}
                  <div className="timeline-indicator">
                    <span className="timeline-dot"></span>
                    <span className="timeline-line"></span>
                  </div>

                  <div className="how-step-content">
                    <span className="how-step-number">{step.num}</span>
                    <span className="how-step-icon">{stepIcons[step.iconKey]}</span>
                    <h3 className="how-step-title">{step.title}</h3>
                    <p className="how-step-description">{step.description}</p>
                  </div>
                </div>

                {/* 2. IMAGE COLUMN */}
                <div className="how-step-image-col">
                  <div className="image-passpartout">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="how-step-img" 
                      loading="lazy" 
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Section Footer */}
        <div className="how-it-works-footer">
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

export default HowItWorks;