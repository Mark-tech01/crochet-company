// function WhyKovv() {
//   const features = [
//     {
//       title: "Handcrafted",
//       description:
//         "Every piece is carefully handmade with attention to detail."
//     },
//     {
//       title: "Made To Last",
//       description:
//         "Unlike real flowers, our crochet creations stay beautiful forever."
//     },
//     {
//       title: "Custom Creations",
//       description:
//         "Personalized gifts designed specifically for your special moments."
//     },
//     {
//       title: "Premium Packaging",
//       description:
//         "Beautifully packed and ready to gift from the moment it arrives."
//     }
//   ];

//   return (
//     <section className="why-kovv">
//       <div className="section-heading">
//         <p>WHY KOVV</p>
//         <h2>More Than A Gift</h2>
//       </div>

//       <div className="feature-grid">
//         {features.map((feature, index) => (
//           <div className="feature-card" key={index}>
//             <h3>{feature.title}</h3>
//             <p>{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default WhyKovv;


import { motion } from "framer-motion";
import { Section } from "../layout/shared";

const features = [
  ["Handmade", "Every piece is carefully crafted by hand."],
  ["Meaningful", "Designed to celebrate real relationships."],
  ["Lasting", "Unlike ordinary flowers, our creations stay forever."],
  ["Reliable Delivery", "Carefully packed and delivered across India."],
];

function WhyKovv() {
  return (
    <Section className="bg-ink py-20 text-white lg:py-28">
      <div className="container-premium">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          
          <div>
            <p className="eyebrow">Why choose us</p>

            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight sm:text-5xl">
              Gifts with substance, sentiment, and staying power.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {features.map(([title, copy]) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7"
              >
                <h3 className="font-heading text-2xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  {copy}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}

export default WhyKovv;