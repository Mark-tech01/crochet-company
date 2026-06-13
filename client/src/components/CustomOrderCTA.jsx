// function CustomOrderCTA() {
//   return (
//     <section className="custom-order">
//       <div className="custom-order-content">
//         <p className="custom-label">
//           PERSONALIZED GIFTS
//         </p>

//         <h2>
//           Create Something
//           <br />
//           Truly Unique
//         </h2>

//         <p className="custom-description">
//           Have a special idea in mind? We create custom crochet
//           gifts designed around your memories, occasions,
//           and loved ones.
//         </p>

//         <button className="custom-btn">
//           Start Custom Order
//         </button>
//       </div>
//     </section>
//   );
// }

// export default CustomOrderCTA;


import { Section, Button } from "../layout/shared";

function CustomOrderCTA() {
  return (
    <Section className="px-5 py-20 lg:py-28">
      <div className="container-premium overflow-hidden rounded-[2.5rem] bg-espresso px-6 py-16 text-center text-white shadow-premium sm:px-12 lg:py-20">

        <p className="eyebrow text-[#d7c4a8]">
          Make it memorable
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-6xl">
          Ready to Make Someone Smile?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Explore thoughtful handmade gifts designed to celebrate
          the people who matter most.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

          <Button
            href="/shop"
            className="bg-white text-espresso hover:bg-sand"
          >
            Shop Collection
          </Button>

          <Button
            href="/whatsapp"
            variant="secondary"
            className="border-white/20 bg-white/10 text-white hover:bg-white/15"
          >
            Order on WhatsApp
          </Button>

        </div>
      </div>
    </Section>
  );
}

export default CustomOrderCTA;