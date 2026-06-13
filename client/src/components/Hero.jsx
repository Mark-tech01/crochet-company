// function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <p className="hero-tagline">
//           Handmade With Love
//         </p>

//         <h1>
//           Gifts That Stay
//           <br />
//           Forever
//         </h1>

//         <p className="hero-description">
//             Every piece is handcrafted stitch by stitch,
//             creating timeless crochet creations that bring
//             warmth, comfort, and character to everyday life.
//         </p>

//         <div className="hero-buttons">
//           <button className="primary-btn">
//             Shop Collection
//           </button>

//           <button className="secondary-btn">
//             Custom Order
//           </button>
//         </div>
//       </div>

//       <div className="hero-image">
//         <img
//           src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800"
//           alt="Crochet Gift"
//         />
//       </div>
//     </section>
//   );
// }

// export default Hero;


import { motion } from "framer-motion";
import { Button } from "../layout/shared";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial py-12 sm:py-16 lg:py-20">
      <div className="container-premium grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">
            Handcrafted gifts for real connection
          </p>

          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-[1] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
            Flowers Fade. Memories Don't.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Handcrafted crochet flowers, bouquets,
            and keepsakes designed to celebrate the
            people you love and the memories you
            never want to lose.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/shop">
              Explore Collection
            </Button>

            <Button
              href="/about"
              variant="secondary"
            >
              Our Story
            </Button>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-espresso/10 pt-8">
            {[
              "500+ Orders Delivered",
              "Premium Packaging",
              "Handmade in India",
            ].map((item) => (
              <div key={item}>
                <p className="font-heading text-2xl font-bold text-espresso">
                  01
                </p>

                <p className="mt-1 text-sm font-semibold text-muted">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[3rem] bg-accent/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/40 p-4 shadow-premium backdrop-blur">
            <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-sand via-[#f4eee6] to-[#d8c5ad]">

              <div className="absolute left-10 top-10 rounded-full border border-white/70 bg-white/50 px-5 py-3 text-sm font-bold text-espresso backdrop-blur">
                Crafted with care
              </div>

              <div className="absolute bottom-0 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-linen/70 shadow-inner" />

              <div className="absolute bottom-16 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full border-[18px] border-white/55 bg-accent/30 shadow-2xl" />

              <div className="absolute bottom-10 left-10 right-10 rounded-[1.5rem] border border-white/70 bg-white/55 p-6 backdrop-blur-xl">
                <p className="eyebrow">
                  Signature kovv
                </p>

                <p className="mt-2 font-heading text-3xl font-bold text-ink">
                  KOVV Signature Bouquet
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;    