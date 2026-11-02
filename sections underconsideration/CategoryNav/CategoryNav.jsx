import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categoriesData } from './categoryNavData'; // Changed from '../data'
import './CategoryNav.css';

function CategoryNav() {
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
        rootMargin: '0px 0px -40px 0px' 
      }
    );

    const revealElements = document.querySelectorAll(
      '.categories-header, .category-portal-card'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="categories-sec">
      <div className="categories-container">

        {/* Section Header */}
        <div className="categories-header">
          <span className="categories-subtitle">
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M2,6 C8,6 10,2 12,6 C10,10 8,6 2,6 Z M22,6 C16,6 14,2 12,6 C14,10 16,6 22,6 Z" />
            </svg>
            EXPLORE CATEGORIES
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M2,6 C8,6 10,2 12,6 C10,10 8,6 2,6 Z M22,6 C16,6 14,2 12,6 C14,10 16,6 22,6 Z" />
            </svg>
          </span>
          <h2 className="categories-title">Curated Portals of Craftsmanship</h2>
          
          <div className="categories-title-divider">
            <svg width="60" height="16" viewBox="0 0 80 16" fill="none" stroke="#B89A6A" strokeWidth="1">
              <path d="M40,4 L44,8 L40,12 L36,8 Z" fill="#B59363" opacity="0.15" />
              <path d="M40,4 L44,8 L40,12 L36,8 Z" />
              <path d="M36,8 C30,8 26,11 20,8" />
              <path d="M44,8 C50,8 54,11 60,8" />
            </svg>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {categoriesData.map((category) => (
            <div key={category.id} className="category-portal-card">
              
              {/* Museum Double Bevel-Cut Photo Frame */}
              <div className="portal-image-passpartout">
                {/* Large, whisper-soft classic Roman serif index */}
                <span className="portal-roman-index" aria-hidden="true">{category.romanNum}</span>
                
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="portal-img" 
                  loading="lazy" 
                />
              </div>

              {/* Text Meta Content */}
              <div className="portal-content">
                <span className="portal-num">{category.num}</span>
                <h3 className="portal-card-title">{category.title}</h3>
                <p className="portal-desc">{category.description}</p>
                
                <Link to={category.linkTo} className="portal-link">
                  Explore Pieces <span className="link-arrow">→</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategoryNav;