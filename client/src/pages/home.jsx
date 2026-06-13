// import Navbar from "../layout/avbar";
// import Footer from "../layout/Footer";

import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyKovv from "../components/WhyKovv";
import Collections from "../components/Collections";
import BrandStory from "../components/BrandStory";
import HowItWorks from "../components/HowItWorks";
import CustomerStories from "../components/CustomerStories";
import InstagramShowcase from "../components/InstagramShowcase";
import CustomOrderCTA from "../components/CustomOrderCTA";

function Home() {
  return (
    <div className="min-h-screen bg-linen text-ink">
      {/* <Navbar /> */}

      <main>
        <Hero />
        <FeaturedProducts />
        <WhyKovv />
        <Collections />
        <BrandStory />
        <HowItWorks />
        <CustomerStories />
        <InstagramShowcase />
        <CustomOrderCTA />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;