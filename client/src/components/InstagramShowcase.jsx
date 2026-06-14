// function InstagramShowcase() {
//   const posts = [
//     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
//     "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600",
//     "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600",
//     "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
//   ];

//   return (
//     <section className="instagram">
//       <div className="section-heading">
//         <p>FOLLOW OUR JOURNEY</p>
//         <h2>@KOVV</h2>
//       </div>

//       <div className="instagram-grid">
//         {posts.map((post, index) => (
//           <div className="instagram-card" key={index}>
//             <img src={post} alt="Instagram Post" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default InstagramShowcase;


import { motion } from "framer-motion";
import { Section, Button } from "../layout/shared";

const instagramTiles = [
  "Love Notes",
  "Golden Hour",
  "Wrapped With Care",
  "Forever Blooms",
  "Tiny Details",
  "Made for You",
];

function InstagramShowcase() {
  return (
    <Section className="bg-sand/45 py-20 lg:py-28">
      <div className="container-premium">
        <div className="text-center">
          <p className="eyebrow">Instagram preview</p>

          <h2 className="section-title mx-auto mt-4 max-w-3xl">
            A closer look at what we make.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {instagramTiles.map((tile, index) => (
            <motion.div
              key={tile}
              whileHover={{ scale: 1.03 }}
              className={`instagram-tile flex aspect-square
                items-end rounded-[1.5rem] bg-gradient-to-br p-4 shadow-soft ${
                index % 2 === 0
                  ? "from-white to-[#d9c8af]"
                  : "from-[#eee5da] to-white"
              }`}
            >
              <p className="text-sm font-bold text-espresso">
                {tile}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            href="/instagram"
            variant="secondary"
          >
            Follow on Instagram
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default InstagramShowcase;