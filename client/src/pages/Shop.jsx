import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../layout/shared';

function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Archives' },
    { id: 'roses', label: 'Forever Roses' },
    { id: 'bouquets', label: 'Signature Bouquets' },
    { id: 'minimalist', label: 'Minimalist Botanicals' }
  ];

  const products = [
    {
      id: 'classic-crimson-rose',
      title: 'The Classic Crimson Rose',
      category: 'roses',
      categoryLabel: 'Forever Roses Series',
      price: '₹2,400',
      image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800',
      description: 'A single, deep red rose sculpted to hold quiet, enduring gratitude on a vanity or desk.'
    },
    {
      id: 'alabaster-orchid-stem',
      title: 'The Alabaster Orchid Stem',
      category: 'minimalist',
      categoryLabel: 'Minimalist Botanicals',
      price: '₹3,800',
      image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&q=80&w=800',
      description: 'A single minimalist orchid branch bringing delicate structural grace to any quiet space.'
    },
    {
      id: 'terracotta-harvest',
      title: 'The Terracotta Harvest',
      category: 'bouquets',
      categoryLabel: 'Signature Bouquets',
      price: '₹8,200',
      image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
      description: 'An expansive arrangement of warm terracotta, sand, and cream florals gathered to mark life’s milestones.'
    },
    {
      id: 'blush-peony-stem',
      title: 'The Blush Peony Stem',
      category: 'roses',
      categoryLabel: 'Forever Roses Series',
      price: '₹2,900',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
      description: 'A highly layered, soft peony bloom built slowly with absolute patience.'
    },
    {
      id: 'indigo-thistle',
      title: 'The Indigo Thistle Bouquet',
      category: 'bouquets',
      categoryLabel: 'Signature Bouquets',
      price: '₹7,500',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      description: 'An understated editorial floral structure presenting rich, deep indigo thistle details.'
    },
    {
      id: 'eucalyptus-branch',
      title: 'The Silver Dollar Eucalyptus',
      category: 'minimalist',
      categoryLabel: 'Minimalist Botanicals',
      price: '₹1,900',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800',
      description: 'A delicate foliage spray designed to add quiet, architectural green details to your home.'
    }
  ];

  // Filtering Logic
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-linen/30 via-white to-sand/15 pt-28 pb-24">
      <Section className="mx-auto max-w-[1300px] px-10">
        
        {/* Poetic Page Header */}
        <div className="max-w-[650px] mb-20">
          <span className="mb-4 block font-sans text-xs font-bold uppercase tracking-[0.25em] text-accent">
            The Permanent Gallery
          </span>
          <h1 className="font-heading text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl">
            The Signature Collection
          </h1>
          <p className="mt-6 font-sans text-base font-light leading-relaxed text-muted">
            We do not mass-produce. Every botanical artifact is slowly hand-sculpted in our studio 
            upon order. Browse our permanent archives below or initiate a bespoke custom commission.
          </p>
        </div>

        {/* Tactile Category Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-16 pb-6 border-b border-espresso/5">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-6 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-espresso text-white shadow-lg shadow-espresso/15' 
                  : 'border border-espresso/5 bg-white/45 text-muted hover:border-espresso/20 hover:text-ink'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Curated Gallery Grid with Framer Motion AnimatePresence Layout triggers */}
        <motion.div layout className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col"
              >
                {/* Image shadowbox container */}
                <div className="relative w-full aspect-[4/5] rounded-[1.75rem] overflow-hidden border border-espresso/5 bg-white p-3 shadow-xl shadow-espresso/5">
                  
                  {/* Decorative offset line layout */}
                  <div className="absolute -inset-1 rounded-[1.75rem] border border-espresso/5 pointer-events-none transform translate-x-1.5 translate-y-1.5 z-[-1] transition-transform duration-500 group-hover:translate-x-2.5 group-hover:translate-y-2.5" />
                  
                  <div className="w-full h-full overflow-hidden rounded-[1.35rem] bg-linen">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover sepia-[0.04] contrast-[1.01] transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm border border-espresso/5 text-[#8E7C68] font-sans text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
                    Made to Order
                  </div>
                </div>

                {/* Info block */}
                <div className="mt-8 flex flex-col px-1">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-heading text-xl font-normal text-ink leading-snug group-hover:text-accent transition-colors duration-300">
                      {product.title}
                    </h3>
                    <span className="font-heading text-lg font-light text-accent pl-4">
                      {product.price}
                    </span>
                  </div>
                  
                  <span className="mb-4 block font-sans text-xs font-semibold tracking-wider uppercase text-muted">
                    {product.categoryLabel}
                  </span>
                  
                  <p className="mb-6 font-sans text-sm font-light leading-relaxed text-muted line-clamp-2">
                    {product.description}
                  </p>
                  
                  <Link 
                    to={`/shop`} // Directs to /shop for now until detailed product layouts are configured
                    className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink group-hover:text-accent transition-colors duration-300"
                  >
                    Explore Piece
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Order Callout card */}
        <div className="mt-32 rounded-[1.75rem] border border-espresso/5 bg-gradient-to-br from-linen/30 via-white to-sand/15 p-12 lg:p-16 flex flex-col items-center text-center shadow-lg shadow-espresso/5">
          <span className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Bespoke Requests
          </span>
          <h2 className="max-w-[500px] font-heading text-3xl font-light leading-tight text-ink sm:text-4xl">
            Have a specific memory you wish to preserve?
          </h2>
          <p className="max-w-[550px] mt-6 font-sans text-sm font-light leading-relaxed text-muted">
            Our studio collaborates with individuals to recreate highly custom wedding bouquets, 
            meaningful heirloom blooms, or tailored floral sculptures. Let’s collaborate.
          </p>
          <Link 
            to="/custom-order" 
            className="mt-10 inline-block font-sans text-xs font-bold uppercase tracking-widest text-white bg-espresso px-8 py-4 rounded-full transition-transform duration-300 hover:-translate-y-0.5 shadow-lg shadow-espresso/20 hover:bg-coffee"
          >
            Initiate Commission
          </Link>
        </div>

      </Section>
    </div>
  );
}

export default Shop;