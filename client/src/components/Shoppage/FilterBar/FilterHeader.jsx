import React from 'react';

function FilterHeader() {
  return (
    <div className="filter-bar-editorial-header">
      <div className="header-left-pane">
        <span className="discover-pill-label">DISCOVER COLLECTIONS</span>
        <h2 className="heading-title-main">
          Find handcrafted pieces<br />for every meaningful moment.
        </h2>
        <p className="subtitle-caption">
          Thoughtfully handmade. Designed to be cherished.
        </p>
      </div>

      {/* Subtle brand badge on the right */}
      <div className="header-right-pane">
        <div className="editorial-badge-box">
          <svg className="badge-flower-svg" width="54" height="54" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" stroke="#C9A46A" strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="41" stroke="#C9A46A" strokeWidth="0.5" />
            <g transform="translate(35, 30) scale(0.6)" stroke="#8B6A52" strokeWidth="1.5" fill="none">
              <path d="M25,60 C25,44 25,25 25,15" />
              <path d="M25,42 C16,33 16,24 25,24" />
              <path d="M25,32 C34,23 34,14 25,14" />
            </g>
          </svg>
          <div className="badge-details-text">
            <span className="yarn-type-text">Premium Cotton Yarn</span>
            <span className="slow-craft-text">Made slowly. Cherished forever.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterHeader;