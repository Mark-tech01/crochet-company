// function FeaturedProducts() {
//   const products = [
//     {
//       id: 1,
//       name: "Rose Bouquet",
//       price: "₹999",
//       image:
//         "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600",
//     },
//     {
//       id: 2,
//       name: "Tulip Bouquet",
//       price: "₹899",
//       image:
//         "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600",
//     },
//     {
//       id: 3,
//       name: "Crochet Bear",
//       price: "₹1499",
//       image:
//         "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
//     },
//   ];

//   return (
//     <section className="featured">
//       <h2>Featured Collection</h2>

//       <div className="product-grid">
//         {products.map((product) => (
//           <div className="product-card" key={product.id}>
//             <img src={product.image} alt={product.name} />

//             <div className="product-info">
//               <h3>{product.name}</h3>
//               <p>{product.price}</p>

//               <button>View Product</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;


import { motion } from "framer-motion";
import {
  Section,
  Button,
  PlaceholderArtwork,
} from "../layout/shared";

const products = [
  {
    title: "Rose Bouquet",
    description:
      "Timeless roses handcrafted to preserve a meaningful moment forever.",
    price: "₹799",
    tone: "from-[#b77b72]/30 to-[#f5d7ce]/80",
  },

  {
    title: "Sunflower Bouquet",
    description:
      "Bright, elegant blooms designed to bring lasting joy.",
    price: "₹999",
    tone: "from-[#d9ad54]/35 to-[#f7e8ba]/80",
  },

  {
    title: "Couple Doll",
    description:
      "A personal kovv for celebrating love, memories, and milestones.",
    price: "₹1999",
    tone: "from-[#9a8374]/35 to-[#eadbd0]/80",
  },

  {
    title: "Pet Replica",
    description:
      "A handcrafted tribute to the companion who means everything.",
    price: "₹2999",
    tone: "from-[#8d8b78]/35 to-[#dfded0]/80",
  },
];

function FeaturedProducts() {
  return (
    <Section className="bg-sand/45 py-20 lg:py-28">
      <div className="container-premium">

        <div className="text-center">
          <p className="eyebrow">
            Best sellers
          </p>

          <h2 className="section-title mx-auto mt-4 max-w-3xl">
            KOVV Signature Pieces.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {products.map((product) => (
            <motion.article
              key={product.title}
              whileHover={{ y: -8 }}
              className="premium-card overflow-hidden p-4"
            >
              <PlaceholderArtwork
                label={product.title}
                tone={product.tone}
              />

              <div className="p-4">
                <div className="flex items-start justify-between gap-4">

                  <h3 className="font-heading text-2xl font-bold text-ink">
                    {product.title}
                  </h3>

                  <p className="rounded-full bg-sand px-3 py-1 text-sm font-bold text-espresso">
                    {product.price}
                  </p>

                </div>

                <p className="mt-3 min-h-20 leading-7 text-muted">
                  {product.description}
                </p>

                <Button
                  href="/custom-orders"
                  className="mt-5 w-full"
                >
                  Order Now
                </Button>
              </div>
            </motion.article>
          ))}

        </div>
      </div>
    </Section>
  );
}

export default FeaturedProducts;