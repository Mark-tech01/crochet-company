import React from "react";

import Container from "../components/Shared/Container/container";

import ShopHero from "../components/Shoppage/Hero/ShopHero";
import FilterBar from "../components/Shoppage/FilterBar/FilterBar";
import ProductGallery from "../components/Shoppage/ProductGallery/ProductGallery";
import StoryBanner from "../components/Shoppage/StoryBanner/StoryBanner";
import CustomOrder from "../components/Shoppage/CustomOrder/CustomOrder";

const Shop = () => {
  return (
    <main className="shop-page">
      <ShopHero />

      <Container>
        <FilterBar />
        <ProductGallery />
      </Container>

      <StoryBanner />

      <CustomOrder />
    </main>
  );
};

export default Shop;