import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar-col">
      <div className="search-field-frame">
        <svg className="search-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F241D" strokeWidth="1.5">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search handcrafted gifts..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search Catalog"
        />
      </div>
    </div>
  );
}

export default SearchBar;