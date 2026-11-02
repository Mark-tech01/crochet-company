import React, { useRef, useState, useEffect } from 'react';
import { categories } from './filterData';

function CategoryTabs({ activeCategory, onCategorySelect }) {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Monitor scroll position to show/hide navigation arrows dynamically
  const checkScrollStatus = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollStatus);
      checkScrollStatus();
      window.addEventListener('resize', checkScrollStatus);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScrollStatus);
      window.removeEventListener('resize', checkScrollStatus);
    };
  }, []);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 240;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="filter-bar-categories-wrapper">
      {canScrollLeft && (
        <button 
          className="scroll-navigation-btn nav-arrow-left" 
          onClick={() => handleScroll('left')}
          aria-label="Scroll Categories Left"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M7 1L2 7l5 6" />
          </svg>
        </button>
      )}

      <div 
        className="pills-scroll-viewport" 
        ref={containerRef}
        style={{
          maskImage: `linear-gradient(to right, ${canScrollLeft ? 'transparent' : 'black'} 0%, black 10%, black 90%, ${canScrollRight ? 'transparent' : 'black'} 100%)`,
          WebkitMaskImage: `linear-gradient(to right, ${canScrollLeft ? 'transparent' : 'black'} 0%, black 10%, black 90%, ${canScrollRight ? 'transparent' : 'black'} 100%)`
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-item-pill ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onCategorySelect(cat.id)}
          >
            <span className="pill-icon-frame">{cat.icon}</span>
            <span className="pill-text-label">{cat.label}</span>
          </button>
        ))}
      </div>

      {canScrollRight && (
        <button 
          className="scroll-navigation-btn nav-arrow-right" 
          onClick={() => handleScroll('right')}
          aria-label="Scroll Categories Right"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M1 1l5 6-5 6" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default CategoryTabs;