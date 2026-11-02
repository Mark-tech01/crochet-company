import React, { useMemo } from 'react';
import { products } from './productData';
import './ProductGallery.css';

function ProductGallery({ filters = {} }) {
  const { category = 'all', search = '', sort = 'featured' } = filters;

  // Process live results dynamically
  const processedProducts = useMemo(() => {
    let list = [...products];

    // 1. Category Filter State Binding
    if (category !== 'all') {
      list = list.filter((p) => p.category === category);
    }

    // 2. Search Query Matching State Binding
    if (search.trim() !== '') {
      const query = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.categoryLabel.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // 3. Sorting Execution
    if (sort) {
      switch (sort) {
        case 'price-low':
          list.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          list.sort((a, b) => b.price - a.price);
          break;
        case 'alphabetical':
          list.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'newest':
        case 'featured':
        default:
          break;
      }
    }

    return list;
  }, [category, search, sort]);

  const formatRupees = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Helper to split the list for inserting the wide editorial banner cleanly
  const itemsBeforeBanner = processedProducts.slice(0, 8);
  const itemsAfterBanner = processedProducts.slice(8);

  const renderProductCard = (item) => {
    // Large cards are determined dynamically by data flag, only if filters are in their default state
    const isLarge = item.isFeatured && category === 'all' && search.trim() === '';

    return (
      <article 
        className={`gallery-card ${isLarge ? 'card-featured-large' : ''}`} 
        key={item.id}
      >
        <div className="card-image-wrapper">
          <img 
            src={item.image} 
            alt={item.title} 
            className="card-main-photo" 
            loading="lazy" 
          />
        </div>

        <div className="card-details-box">
          <div className="card-meta-upper">
            <span className="card-collection-label">{item.categoryLabel}</span>
            <span className="card-price">{formatRupees(item.price)}</span>
          </div>

          <h3 className="card-product-title">{item.title}</h3>
          
          <div className="card-hover-reveal">
            <p className="card-description">{item.description}</p>
            <span className="card-view-details-btn">
              View Details <span className="arrow-unicode">→</span>
            </span>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className="product-gallery-section">
      <div className="product-gallery-container">
        
        {/* ==========================================
           1. GALLERY HEADER ROW
        ========================================== */}
        <div className="gallery-section-header">
          <div className="header-left">
            <span className="header-eyebrow">SHOP COLLECTION</span>
            <h2 className="header-title-serif">Handcrafted Pieces Made to Last a Lifetime</h2>
            <p className="header-desc-para">
              Explore handcrafted crochet creations, thoughtfully made to celebrate meaningful moments.
            </p>
          </div>
          <div className="header-right">
            <span className="total-pieces-counter">92 Handmade Pieces</span>
          </div>
        </div>

        {/* ==========================================
           2. PRODUCT GRID (ROW 1 / ITEMS 1-8)
        ========================================== */
        processedProducts.length > 0 ? (
          <>
            <div className="gallery-lookbook-grid">
              {itemsBeforeBanner.map((product) => renderProductCard(product))}
            </div>

            {/* ==========================================
               3. EDITORIAL STORYTELLING BANNER
            ========================================== */}
            <div className="editorial-story-banner">
              <div className="banner-visual-background"></div>
              <div className="banner-content-scaffold">
                <div className="banner-text-scaffold">
                  <h4 className="banner-slogan">Every Stitch Holds a Story.</h4>
                  <p className="banner-subtext">Thoughtfully handcrafted, never mass produced.</p>
                </div>
                <button className="banner-cta-link-btn" aria-label="Learn more about our craftsmanship">
                  Learn More
                </button>
              </div>
            </div>

            {/* ==========================================
               4. PRODUCT GRID (ROW 2 / ITEMS 9+)
            ========================================== */}
            {itemsAfterBanner.length > 0 && (
              <div className="gallery-lookbook-grid second-tier">
                {itemsAfterBanner.map((product) => renderProductCard(product))}
              </div>
            )}
          </>
        ) : (
          /* Empty Search Screen */
          <div className="gallery-no-results-panel">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A46A" strokeWidth="1.2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
            <h4 className="empty-title">We couldn't find matches for this selection</h4>
            <p className="empty-desc">Please try resetting your search keywords or browsing our other categories.</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default ProductGallery;