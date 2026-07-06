import React from "react";
import { Section } from "../layout/shared";

// Components
import Hero from "../components/CollectionsPage/Hero/Hero";
import CollectionsGrid from "../components/CollectionsPage/CollectionsGrid/CollectionsGrid";
import CustomCTA from "../components/CollectionsPage/CustomCTA/CustomCTA";

function Collections() {
  return (
    <div className="collections-page">

      {/* 1. Collections Hero */}
      <Hero />

      {/* 3. Collections Grid */}
      <Section>
        <CollectionsGrid />
      </Section>

      {/* 4. Custom Order CTA */}
      <Section>
        <CustomCTA />
      </Section>

    </div>
  );
}

export default Collections;