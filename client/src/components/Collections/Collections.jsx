import React from 'react';
import { Link } from 'react-router-dom';
import { collectionItems } from './collectionData'; // Import data cleanly here
import './Collections.css';

function Collections() {
  return (
    <section className="collections-section">
      {/* Decorative leaf SVGs */}
      <div className="decor-leaf leaf-top-left">
        <svg viewBox="0 0 100 100" fill="none" stroke="#C8B9A6" strokeWidth="1.2">
          <path d="M10,90 Q35,65 55,55 Q75,45 95,45 M55,55 Q45,35 40,15 M55,55 Q65,75 80,85" />
          <path d="M40,15 Q30,25 40,35 Q50,25 40,15 Z" fill="#E8DDD0" opacity="0.4"/>
          <path d="M80,85 Q90,75 80,65 Q70,75 80,85 Z" fill="#E8DDD0" opacity="0.4"/>
        </svg>
      </div>
      <div className="decor-leaf leaf-top-right">
        <svg viewBox="0 0 100 100" fill="none" stroke="#C8B9A6" strokeWidth="1.2">
          <path d="M90,90 Q65,65 45,55 Q25,45 5,45 M45,55 Q55,35 60,15 M45,55 Q35,75 20,85" />
          <path d="M60,15 Q70,25 60,35 Q50,25 60,15 Z" fill="#E8DDD0" opacity="0.4"/>
          <path d="M20,85 Q10,75 20,65 Q30,75 20,85 Z" fill="#E8DDD0" opacity="0.4"/>
        </svg>
      </div>

      <div className="collections-container">
        
        <div className="collections-header">
          <span className="collections-subtitle">Our Collections</span>
          <h2 className="collections-title">
            Crafted for <span className="serif-italic">Every Emotion</span>
          </h2>
          
          <div className="collections-divider">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" stroke="#B89A6A" strokeWidth="1">
              <path d="M0,12 L20,12 M60,12 L40,12 M30,4 L36,12 L30,20 L24,12 Z" />
              <circle cx="30" cy="12" r="2" fill="#B89A6A"/>
            </svg>
          </div>

          <p className="collections-lead">
            Handmade with love, our crochet creations are designed to celebrate life's most beautiful moments.
          </p>
        </div>

        <div className="collections-grid">
          {collectionItems.map((item) => (
            <div key={item.id} className={`collection-card card-${item.layout}`}>
              
              <div className="collection-content">
                <span className="collection-item-tag">{item.tag}</span>
                <h3 className="collection-item-title">{item.title}</h3>
                <p className="collection-item-description">{item.description}</p>
                <Link to={item.linkTo} className="collection-item-link">
                  {item.ctaText} <span className="link-arrow">→</span>
                </Link>
              </div>

              <div className="collection-image-frame">
                <div className="image-vignette">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="collection-image"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="collections-section-footer">
          <span className="footer-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89A6A" strokeWidth="1.2">
              <path d="M12,21 L10.55,19.7 C5.4,15 2,12 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,12 18.6,15 13.45,19.7 L12,21 Z" fill="#B89A6A" opacity="0.15"/>
            </svg>
          </span>
          <p className="footer-message">Handmade with love. Delivered with care. Always from the heart.</p>
        </div>

      </div>
    </section>
  );
}

export default Collections;