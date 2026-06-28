import React from 'react';
import { Section } from '../layout/shared';


// Import Homepage Components
import Hero from '../components/Hero/Hero';
import Philosophy from '../components/Philosophy/Philosophy';
import Collections from '../components/Collections/Collections';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import BrandStory from '../components/BrandStories/BrandStories';
import CustomerStories from '../components/CustomerStories/CustomerStories';
import CustomOrderCTA from '../components/CustomerOrders/CustomerOrderCTA';
import InstagramShowcase from '../components/InstagramShowcase/InstagramShowcase';

function Home() {
  return (
    <div className="homepage-wrapper">
      
      {/* 1. Viewport Landing (Loads immediately to prevent layout flickers) */}
      <Hero />

      {/* 2. Philosophy & Context (Why We Exist) */}
      <Section>
        <Philosophy />
      </Section>

      {/* 3. Catalog Entrance (Category Collection Pillars) */}
      <Section>
        <Collections />
      </Section>

      {/* 4. Highlight Gallery (Individual Signature Pieces) */}
      <Section>
        <FeaturedProducts />
      </Section>

      {/* 5. Process Transparency (Reducing Uncertainty) */}
      <Section>
        <HowItWorks />
      </Section>

      {/* 6. Narrative Vignettes (Editorial Brand Stories) */}
      <Section>
        <BrandStory />
      </Section>

      {/* 7. Social Proof (Collector Timelines & Verification) */}
      <Section>
        <CustomerStories />
      </Section>

      {/* 8. Conversion Point (Bespoke Studio Invitation) */}
      <Section>
        <CustomOrderCTA />
      </Section>

      {/* 9. Visual Trust Grid */}
      <Section>
        <InstagramShowcase />
      </Section>

    </div>
  );
}

export default Home;