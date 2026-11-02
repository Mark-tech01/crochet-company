import React, { useState, useEffect, useRef } from 'react';
import { sortOptions } from './filterData';

function SortDropdown({ selectedSort, onSortSelect }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close sorting dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (val) => {
    onSortSelect(val);
    setDropdownOpen(false);
  };

  return (
    <div className="sort-bar-col" ref={dropdownRef}>
      <button 
        className={`sort-trigger-element ${dropdownOpen ? 'expanded' : ''}`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
      >
        <div className="sort-current-display">
          <span className="sort-prefix-lbl">Sort by:</span>
          <span className="sort-selected-lbl">
            {sortOptions.find((o) => o.value === selectedSort)?.label}
          </span>
        </div>
        <svg className="sort-dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>

      {dropdownOpen && (
        <ul className="sort-dropdown-items-list" role="listbox">
          {sortOptions.map((opt) => (
            <li 
              key={opt.value} 
              className={`sort-dropdown-item ${selectedSort === opt.value ? 'selected' : ''}`}
              onClick={() => handleSelect(opt.value)}
              role="option"
              aria-selected={selectedSort === opt.value}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortDropdown;