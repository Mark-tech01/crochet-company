// components/CollectionsPage/CollectionsGrid/CollectionsGrid.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { collectionsData } from "./data";
import "./CollectionsGrid.css";

function CollectionsGrid() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("elnor-revealed");
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll(
      ".elnor-grid-header, .elnor-editorial-pause, .elnor-section, .elnor-grid-ending"
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Safeguard against missing data
  if (!collectionsData) return null;

  return (
    <section className="elnor-grid-section">
      <div className="elnor-grid-grain" aria-hidden="true" />
      <div className="elnor-grid-lighting" aria-hidden="true" />

      <div className="elnor-grid-container">

        {/* ==========================================================
           EDITORIAL SECTION OPENING PRELUDE (Before any grids start)
        ========================================================== */}
        <div className="elnor-grid-header">
          <p className="elnor-pause-quote">Handcrafted for every chapter of life.</p>
          <div className="elnor-pause-divider">
            <span className="elnor-pause-line"></span>
            <svg className="elnor-pause-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
              <line x1="12" y1="21" x2="12" y2="7" strokeLinecap="round" />
              <path d="M12 7C10.5 5 10.5 3 12 1.5C13.5 3 13.5 5 12 7Z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 13C10 11.5 9 9.5 10 8.5C11 7.5 12 9 12 11" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 13C14 11.5 15 9.5 14 8.5C13 7.5 12 9 12 11" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="elnor-pause-line"></span>
          </div>
        </div>

        {/* ==========================================================
           SECTION 1: EVERLASTING FLORALS (HERO)
        ========================================================== */}
        <div className="elnor-section elnor-section-florals">
          <div className="elnor-col-left">
            <div className="elnor-image-frame-hero">
              <img 
                src={collectionsData.florals?.image} 
                alt="Everlasting Florals Hero" 
                className="elnor-img" 
                loading="lazy"
              />
            </div>
          </div>
          <div className="elnor-col-right">
            <div className="elnor-section-num">
              <span>{collectionsData.florals?.num}</span>
              <span className="num-line"></span>
            </div>
            <h2 className="elnor-section-title">{collectionsData.florals?.category}</h2>
            <p className="elnor-section-tagline">{collectionsData.florals?.tagline}</p>

            {/* Option A softly rounded rectangular thumbnails */}
            <div className="elnor-thumbnail-slider">
              <div className="elnor-thumbnails-track">
                {collectionsData.florals?.previews?.map((thumb, idx) => (
                  <div key={idx} className="elnor-thumb-card">
                    <div className="elnor-thumb-img-wrapper">
                      <img src={thumb.image} alt={thumb.name} className="elnor-thumb-img" />
                    </div>
                    <span className="elnor-thumb-name">{thumb.name}</span>
                  </div>
                ))}
              </div>
              <button className="elnor-slider-arrow" aria-label="Next slide">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                  <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ==========================================================
           SECTION 2: PERSONALIZED KEEPSAKES
        ========================================================== */}
        <div className="elnor-section elnor-section-keepsakes">
          <div className="elnor-col-left">
            <div className="elnor-section-num">
              <span>{collectionsData.keepsakes?.num}</span>
              <span className="num-line"></span>
            </div>
            <h2 className="elnor-section-title">{collectionsData.keepsakes?.category}</h2>
            <p className="elnor-section-tagline">{collectionsData.keepsakes?.tagline}</p>

            <div className="elnor-icons-grid">
              <div className="elnor-icon-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 14c2.5 0 4.5-2 4.5-4.5S14.5 5 12 5s-4.5 2-4.5 4.5S9.5 14 12 14z" />
                  <path d="M6.5 6.5C5 8 5.5 10.5 7 11.5" />
                  <path d="M17.5 6.5C19 8 18.5 10.5 17 11.5" />
                  <path d="M9.5 10.5h5" />
                </svg>
                <span>Pet Replicas</span>
              </div>
              <div className="elnor-icon-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="8" cy="8" r="2.5" />
                  <circle cx="16" cy="8" r="2.5" />
                  <path d="M3 18c0-3 2.5-5 5-5h1" />
                  <path d="M21 18c0-3-2.5-5-5-5h-1" />
                </svg>
                <span>Couple Dolls</span>
              </div>
              <div className="elnor-icon-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 4v4M12 8c-2 0-3.5 1.5-3.5 3.5s1.5 3.5 3.5 3.5 3.5-1.5 3.5-3.5S14 8 12 8z" />
                  <circle cx="12" cy="18.5" r="1.5" />
                </svg>
                <span>Baby Keepsakes</span>
              </div>
              <div className="elnor-icon-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="9" y="14" width="6" height="5" rx="1" />
                  <path d="M12 5c-1.5 2.5-2 4-2 6s1 3 2 3 2-1 2-3-0.5-3.5-2-6z" />
                </svg>
                <span>Memorial Pieces</span>
              </div>
            </div>

            <Link to={collectionsData.keepsakes?.link || "#"} className="elnor-editorial-cta">
              EXPLORE KEEPSAKES —→
            </Link>
          </div>

          <div className="elnor-col-center">
            <div className="elnor-image-frame elnor-dome-top-left">
              <img src={collectionsData.keepsakes?.image} alt="Pet Replica center piece" className="elnor-img" />
            </div>
          </div>

          <div className="elnor-col-right-stacked">
            <div className="elnor-image-frame passpartout-intimate">
              <img src={collectionsData.keepsakes?.coupleDollsImage} alt="Wedding Couple Dolls" className="elnor-img" />
            </div>
            <div className="elnor-image-frame passpartout-intimate">
              <img src={collectionsData.keepsakes?.babyKeepsakeImage} alt="Baby Keepsake Doll" className="elnor-img" />
            </div>
          </div>
        </div>

        {/* ==========================================================
           SECTION 3: HOME & LIFESTYLE
        ========================================================== */}
        <div className="elnor-section elnor-section-lifestyle">
          <div className="elnor-col-left">
            <div className="elnor-image-frame elnor-dome-top-right">
              <img src={collectionsData.lifestyle?.image} alt="Luxe crochet bag piece" className="elnor-img" />
            </div>
          </div>

          <div className="elnor-col-center">
            <div className="elnor-section-num">
              <span>{collectionsData.lifestyle?.num}</span>
              <span className="num-line"></span>
            </div>
            <h2 className="elnor-section-title">{collectionsData.lifestyle?.category}</h2>
            <p className="elnor-section-tagline">{collectionsData.lifestyle?.tagline}</p>

            <div className="elnor-thumbnail-slider mt-slider">
              <div className="elnor-thumbnails-track">
                {collectionsData.lifestyle?.previews?.map((thumb, idx) => (
                  <div key={idx} className="elnor-thumb-card">
                    <div className="elnor-thumb-img-wrapper">
                      <img src={thumb.image} alt={thumb.name} className="elnor-thumb-img" />
                    </div>
                    <span className="elnor-thumb-name">{thumb.name}</span>
                  </div>
                ))}
              </div>
              <button className="elnor-slider-arrow" aria-label="Next slide">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                  <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <Link to={collectionsData.lifestyle?.link || "#"} className="elnor-editorial-cta">
              EXPLORE LIFESTYLE —→
            </Link>
          </div>

          <div className="elnor-col-right flex-column">
            <div className="elnor-image-frame elnor-dome-craft">
              <img src={collectionsData.lifestyle?.craftsmanshipImage} alt="Craftsmanship close-up" className="elnor-img" />
            </div>
            <p className="elnor-handwritten-note">
              "Thoughtfully made with time, care and heart."
            </p>
          </div>
        </div>

        {/* ==========================================================
           SECTION 4: SEASONAL & EXCLUSIVE
        ========================================================== */}
        <div className="elnor-section elnor-section-seasonal">
          <div className="elnor-col-left">
            <div className="elnor-section-num">
              <span>{collectionsData.seasonal?.num}</span>
              <span className="num-line"></span>
            </div>
            <h2 className="elnor-section-title">{collectionsData.seasonal?.category}</h2>
            <p className="elnor-section-tagline">{collectionsData.seasonal?.tagline}</p>
            <Link to={collectionsData.seasonal?.link || "#"} className="elnor-editorial-cta">
              EXPLORE ATELIER DROPS —→
            </Link>
          </div>

          <div className="elnor-col-right-wide">
            <div className="elnor-image-frame passpartout-landscape">
              <img src={collectionsData.seasonal?.image} alt="Seasonal handcraft world collage" className="elnor-img" />
            </div>
          </div>
        </div>

        {/* ENDING STATEMENT */}
        <div className="elnor-grid-ending">
          <p className="elnor-ending-statement">Our creations begin with your story.</p>
          <div className="elnor-pause-divider">
            <span className="elnor-pause-line"></span>
            <svg className="elnor-pause-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
              <line x1="12" y1="21" x2="12" y2="7" strokeLinecap="round" />
              <path d="M12 7C10.5 5 10.5 3 12 1.5C13.5 3 13.5 5 12 7Z" strokeLinecap="round" strokeLinerun="round" />
              <path d="M12 13C10 11.5 9 9.5 10 8.5C11 7.5 12 9 12 11" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 13C14 11.5 15 9.5 14 8.5C13 7.5 12 9 12 11" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="elnor-pause-line"></span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CollectionsGrid;