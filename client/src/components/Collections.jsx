// function Collections() {
//   const collections = [
//     {
//       title: "Crochet Flowers",
//       image:
//         "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800"
//     },
//     {
//       title: "Bouquets",
//       image:
//         "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800"
//     },
//     {
//       title: "Cute Animals",
//       image:
//         "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800"
//     },
//     {
//       title: "Custom Gifts",
//       image:
//         "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800"
//     }
//   ];

//   return (
//     <section className="collections">
//       <div className="section-heading">
//         <p>COLLECTIONS</p>
//         <h2>Find The Perfect Gift</h2>
//       </div>

//       <div className="collection-grid">
//         {collections.map((item, index) => (
//           <div className="collection-card" key={index}>
//             <img src={item.image} alt={item.title} />
//             <div className="collection-overlay">
//               <h3>{item.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Collections;



import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Section } from "../layout/shared";

const collectionsData = [
  {
    title: "Crochet Flowers",
    copy: "Forever-blooming flowers handcrafted to preserve meaningful moments.",
    href: "/collections/flowers",
  },
  {
    title: "Bouquets",
    copy: "Statement bouquets designed for life's most memorable celebrations.",
    href: "/collections/bouquets",
  },
  {
    title: "Amigurumi",
    copy: "Playful handcrafted companions created with exceptional detail.",
    href: "/collections/amigurumi",
  },
  {
    title: "Custom Gifts",
    copy: "Bespoke crochet creations inspired by the people and memories you cherish.",
    href: "/collections/custom",
  },
];

function Collections() {
  return (
    <Section className="py-20 lg:py-28">
      <div className="container-premium">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Featured collections</p>

            <h2 className="section-title mt-4 max-w-3xl">
              Discover Our Signature Collections.
            </h2>
          </div>

          <p className="section-copy max-w-xl">
            From everlasting flowers to custom keepsakes,
            explore handcrafted creations designed to make
            every gift unforgettable.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {collectionsData.map((collection, index) => (
            <motion.div
              key={collection.title}
              whileHover={{ y: -8 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
            >
              <Link
                to={collection.href}
              className="
              premium-card
              block
              h-full
              rounded-[28px]
              border
              border-[#e7dbce]
              bg-white
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.05)]
              transition-all
              duration-300
              hover:-translate-y-2
              "
              >
                <span className="text-sm font-bold text-accent">
                  Collection {index + 1}
                </span>

                <h3 className="mt-8 font-heading text-[2rem] font-bold text-ink">
                  {collection.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {collection.copy}
                </p>

                <p className="mt-8 text-sm font-bold text-espresso">
                  Discover More →
                </p>
              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </Section>
  );
}

export default Collections;