import React from 'react';
import { Link } from 'react-router-dom';
import { featuredProducts } from './featuredProductsData';
import './FeaturedProducts.css';

function FeaturedProducts() {
  const topProducts = featuredProducts.filter((p) => p.row === 'top');
  const bottomProducts = featuredProducts.filter((p) => p.row === 'bottom');

  return (
    <section className="featured-sec">
      <div className="featured-container">
        
        {/* Editorial Header Section */}
        <div className="featured-header">
          <span className="featured-subtitle">
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M2,6 C8,6 10,2 12,6 C10,10 8,6 2,6 Z M22,6 C16,6 14,2 12,6 C14,10 16,6 22,6 Z" />
            </svg>
            HANDPICKED FOR YOU
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M2,6 C8,6 10,2 12,6 C10,10 8,6 2,6 Z M22,6 C16,6 14,2 12,6 C14,10 16,6 22,6 Z" />
            </svg>
          </span>
          <h2 className="featured-title">Crafted With Heart</h2>
          <p className="featured-lead">
            Every piece is handmade with patience, care, and thousands of tiny stitches.
          </p>
          <div className="featured-view-all">
            <Link to="/shop" className="view-all-link">
              VIEW ALL COLLECTION
            </Link>
          </div>
        </div>

        {/* Top Row Grid (Hero Spanning 2 Columns + 2 Standard Vertical Cards) */}
        <div className="featured-top-row">
          {topProducts.map((product) => {
           if (product.layout === 'hero') {
  return (
    <div key={product.id} className="product-card card-hero">
      
      {/* 1. Full-bleed background image */}
      <img src={product.image} alt={product.title} className="hero-img-background" loading="lazy" />
      
      {/* 2. Soft horizontal blend gradient (fades to transparent on the right) */}
      <div className="hero-content-gradient"></div>
      
      {/* 3. Subtle ambient lighting overlay */}
      <div className="hero-lighting-overlay"></div>

      {/* 4. Translucent Text Overlay */}
      <div className="hero-content">
        
        {/* Header Group */}
        <div className="hero-header-group">
          <span className="product-tag">✦ {product.tag}</span>
          <h3 className="hero-title">
            Forever <br /> Rose Bouquet
          </h3>
          
          {/* Classic diamond and leaf divider */}
          <div className="title-divider">
            <svg width="80" height="16" viewBox="0 0 80 16" fill="none" stroke="#B59363" strokeWidth="1">
              <path d="M40,4 L44,8 L40,12 L36,8 Z" fill="#B59363" opacity="0.15" />
              <path d="M40,4 L44,8 L40,12 L36,8 Z" />
              <path d="M36,8 C30,8 26,11 20,8" />
              <path d="M44,8 C50,8 54,11 60,8" />
              <circle cx="16" cy="8" r="1.5" fill="#B59363" />
              <circle cx="64" cy="8" r="1.5" fill="#B59363" />
            </svg>
          </div>
        </div>

        {/* Narrative description */}
        <p className="hero-desc">{product.description}</p>
        
        {/* Pricing & Trust Badges Group */}
        <div className="hero-pricing-group">
          <span className="hero-price">{product.price}</span>
          
          <div className="hero-trust-row">
            <div className="trust-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M12,21 C12,21 10.5,19.5 5.5,15.5 C3.5,13.5 2,11.5 2,8.5 C2,5.4 4.4,3 7.5,3 C9.2,3 10.9,3.8 12,5.1 C13.1,3.8 14.8,3 16.5,3 C19.6,3 22,5.4 22,8.5 C22,11.5 20.5,13.5 18.5,15.5 C13.5,19.5 12,21 12,21 Z" />
              </svg>
              <span>100% Handmade</span>
            </div>
            <div className="trust-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <circle cx="12" cy="12" r="9" />
                <path d="M12,3 C12,3 9,7 9,12 C9,17 12,21 12,21" />
                <path d="M12,3 C12,3 15,7 15,12 C15,17 12,21 12,21" />
                <path d="M3,12 H21" />
              </svg>
              <span>Premium Yarn</span>
            </div>
            <div className="trust-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <rect x="4" y="9" width="16" height="11" rx="1.5" />
                <path d="M12,9 V4 M8,4 H16" />
                <path d="M4,9 H20" />
              </svg>
              <span>Gift Ready</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="hero-cta-group">
          <Link to={`/shop/${product.id}`} className="hero-shop-btn">
            SHOP NOW →
          </Link>
        </div>

      </div>
    </div>
  );
}
            return (
              <div key={product.id} className="product-card card-vertical">
                <div className="image-frame">
                  <span className="product-tag">{product.tag}</span>
                  <img src={product.image} alt={product.title} className="product-img" loading="lazy" />
                </div>
                <div className="product-meta">
                  <h3 className="product-title">{product.title}</h3>
                  <span className="product-price">{product.price}</span>
                  
                  {/* Rating Stars Section */}
                  <div className="rating-row">
                    <div className="stars">
                      {[...Array(product.rating)].map((_, i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#B89A6A">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="reviews-count">({product.reviewsCount})</span>
                  </div>

                  {/* Absolute buy button trigger */}
                  <button className="add-to-cart-trigger" aria-label="Add to cart">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Row Grid (5 even vertical cards) */}
        <div className="featured-bottom-row">
          {bottomProducts.map((product) => (
            <div key={product.id} className="product-card card-vertical">
              <div className="image-frame">
                <span className="product-tag">{product.tag}</span>
                <img src={product.image} alt={product.title} className="product-img" loading="lazy" />
              </div>
              <div className="product-meta">
                <h3 className="product-title">{product.title}</h3>
                <span className="product-price">{product.price}</span>
                
                {/* Rating Stars Section */}
                <div className="rating-row">
                  <div className="stars">
                    {[...Array(product.rating)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#B89A6A">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="reviews-count">({product.reviewsCount})</span>
                </div>

                {/* Absolute buy button trigger */}
                <button className="add-to-cart-trigger" aria-label="Add to cart">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Value Propositions Row */}
        <div className="brand-trust-badges">
          <div className="badge-card">
            <span className="badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>
            <div className="badge-text">
              <h4>100% HANDMADE</h4>
              <p>Made with love and care</p>
            </div>
          </div>
          <div className="badge-card">
            <span className="badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 3v18M3 12h18M12 3a9 9 0 0 1 9 9m-9-9a9 9 0 0 0-9 9m9 9a9 9 0 0 0 9-9m-9 9a9 9 0 0 1-9-9" />
              </svg>
            </span>
            <div className="badge-text">
              <h4>PREMIUM QUALITY</h4>
              <p>Soft, durable & long lasting</p>
            </div>
          </div>
          <div className="badge-card">
            <span className="badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="8" width="18" height="13" rx="2" />
                <path d="M12 8V3M12 8H3m9 0h9M7.5 3a2.5 2.5 0 0 1 5 0v5h-5V3z" />
              </svg>
            </span>
            <div className="badge-text">
              <h4>GIFT READY</h4>
              <p>Beautifully packed for you</p>
            </div>
          </div>
          <div className="badge-card">
            <span className="badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </span>
            <div className="badge-text">
              <h4>WORLDWIDE SHIPPING</h4>
              <p>Delivering happiness everywhere</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;