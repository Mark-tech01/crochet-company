// import Navbar from "./layout/Navbar";
// import Hero from "./components/Hero";
// import FeaturedProducts from "./components/FeaturedProducts";
// import WhyKovv from "./components/WhyKovv";
// import Collections from "./components/Collections";
// import CustomerStories from "./components/CustomerStories";
// import CustomOrderCTA from "./components/CustomOrderCTA";
// import InstagramShowcase from "./components/InstagramShowcase";
// import Footer from "./layout/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <FeaturedProducts />
//       <WhyKovv />
//       <Collections />
//       <CustomerStories />
//       <CustomOrderCTA />
//       <InstagramShowcase />
//       <Footer />
//     </>
//   );
// }

// export default App;


import Navbar from "./layout/Navbar";
import Footer from "../src/layout/Footer";
import AppRoutes from "../src/routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;