import React from 'react';

export const categories = [
  {
    id: 'all',
    label: 'All',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3" />
      </svg>
    )
  },
  {
    id: 'flowers',
    label: 'Everlasting Flowers',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12,2 C12,2 9,6 12,9 C15,6 12,2 12,2 Z" />
        <path d="M12,9 C9,10 7,12 8,15 C9,18 11,16 12,14" />
        <path d="M12,9 C15,10 17,12 16,15 C15,18 13,16 12,14" />
        <path d="M12,14 L12,22" />
        <path d="M12,17 C10,18 9,20 10,21" />
      </svg>
    )
  },
  {
    id: 'dolls',
    label: 'Signature Dolls',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M9 11v2a3 3 0 0 0 6 0v-2" />
      </svg>
    )
  },
  {
    id: 'plush',
    label: 'Plush Companions',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="4" />
        <circle cx="16" cy="8" r="4" />
        <rect x="6" y="10" width="12" height="10" rx="4" />
        <circle cx="10" cy="13" r="1" fill="currentColor" />
        <circle cx="14" cy="13" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'pets',
    label: 'Pet Replicas',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3" />
        <circle cx="7" cy="8" r="1.5" />
        <circle cx="17" cy="8" r="1.5" />
        <circle cx="9" cy="14" r="1.5" />
        <circle cx="15" cy="14" r="1.5" />
      </svg>
    )
  },
  {
    id: 'home',
    label: 'Home Living',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    id: 'wearables',
    label: 'Wearables',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    )
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    id: 'personalized',
    label: 'Personalized',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="14" rx="2" />
        <path d="M12 5V3" />
        <path d="M12 5a3 3 0 1 0-3 3h3" />
        <path d="M12 5a3 3 0 1 1 3 3h-3" />
        <line x1="12" y1="8" x2="12" y2="22" />
      </svg>
    )
  }
];

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'best-selling', label: 'Best Selling' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'alphabetical', label: 'Alphabetical' }
];