import React, { useEffect } from 'react';
import { craftStoryData } from '../components/CollectionsPage/data'; // Relative import up one level
import './Craftsmanship.css';

function Craftsmanship() {
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
      '.craft-text-col, .craft-image-col'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="craft-sec">
      <div className="craft-container">
        <div className="craft-grid">
          
          {/* Left Column: Portrait Bevel-Cut Photo Frame */}
          <div className="craft-image-col">
            <div className="craft-image-passpartout">
              <img 
                src={craftStoryData.image} 
                alt="Close-up of wooden crochet hook looping organic cotton threads" 
                className="craft-spread-img" 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Right Column: Poetic Craft Narrative */}
          <div className="craft-text-col">
            
            {/* Foliage Watermark behind text block */}
            <div className="craft-watermark" aria-hidden="true">
              <svg viewBox="0 0 100 150" fill="none" stroke="#B89A6A" strokeWidth="0.6" opacity="0.04">
                <path d="M50,130 C48,100 42,75 35,50 C32,40 28,30 38,20 C42,10 52,15 48,25 C45,35 38,45 50,60" />
                <path d="M42,95 C30,90 25,75 35,68 C42,62 48,70 45,80" />
              </svg>
            </div>

            <span className="craft-subtitle">
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M2,6 C8,6 10,2 12,6 C10,10 8,6 2,6 Z M22,6 C16,6 14,2 12,6 C14,10 16,6 22,6 Z" />
              </svg>
              {craftStoryData.subtitle}
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M2,6 C8,6 10,2 12,6 C10,10 8,6 2,6 Z M22,6 C16,6 14,2 12,6 C14,10 16,6 22,6 Z" />
              </svg>
            </span>
            
            <h2 className="craft-title">{craftStoryData.title}</h2>
            
            {/* Fine gold diamond divider */}
            <div className="craft-title-divider">
              <svg width="60" height="16" viewBox="0 0 80 16" fill="none" stroke="#B89A6A" strokeWidth="1">
                <path d="M40,4 L44,8 L40,12 L36,8 Z" fill="#B59363" opacity="0.15" />
                <path d="M40,4 L44,8 L40,12 L36,8 Z" />
                <path d="M36,8 C30,8 26,11 20,8" />
                <path d="M44,8 C50,8 54,11 60,8" />
              </svg>
            </div>

            <blockquote className="craft-quote">{craftStoryData.quote}</blockquote>
            <p className="craft-desc">{craftStoryData.description}</p>
            
            {/* Fine gold outline heart stamp */}
            <span className="craft-heart-stamp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B89A6A" strokeWidth="1.2">
                <path d="M12,21 L10.55,19.7 C5.4,15 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,12 18.6,15 13.45,19.7 L12,21 Z" />
              </svg>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Craftsmanship;