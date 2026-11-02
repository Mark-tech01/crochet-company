import React, { useState, useEffect } from 'react';
import FilterHeader from './FilterHeader';
import CategoryTabs from './CategoryTabs';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import Divider from './Divider';
import './FilterBar.css';

function FilterBar({ onSelectionUpdate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [selectedSort, setSelectedSort] = useState('featured');

  // Propagate all sub-component states to parent observer
  useEffect(() => {
    if (onSelectionUpdate) {
      onSelectionUpdate({
        category: activeCategory,
        search: searchText,
        sort: selectedSort
      });
    }
  }, [activeCategory, searchText, selectedSort, onSelectionUpdate]);

  return (
    <section className="filter-bar-section">
      {/* Decorative boutique ambient lighting */}
      <div className="filter-bar-ambient" aria-hidden="true"></div>
      
      <div className="filter-bar-container">
        {/* 1. Header Captions and Badges */}
        <FilterHeader />

        {/* 2. Horizontal Categories Navigation */}
        <CategoryTabs 
          activeCategory={activeCategory} 
          onCategorySelect={setActiveCategory} 
        />

        {/* 3. Controls Row (Search and Sort) */}
        <div className="filter-bar-controls-grid">
          <SearchBar 
            value={searchText} 
            onChange={setSearchText} 
          />
          <SortDropdown 
            selectedSort={selectedSort} 
            onSortSelect={setSelectedSort} 
          />
        </div>

        {/* 4. Bottom Separator Divider */}
        <Divider />
      </div>
    </section>
  );
}

export default FilterBar;