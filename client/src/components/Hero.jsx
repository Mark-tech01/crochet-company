import { motion } from "framer-motion";
import { Button } from "../layout/shared";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial py-12 sm:py-16 lg:py-20">
      <div className="container-premium grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">
            Handcrafted gifts for real connection
          </p>

          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-[1] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
            Flowers Fade.
            <br />
            Memories Don't.
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

          {/* STATS */}

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-espresso/10 pt-8">

            <div>
              <p className="font-heading text-3xl font-bold text-espresso">
                500+
              </p>

              <p className="mt-1 text-sm font-semibold text-muted">
                Orders Delivered
              </p>
            </div>

            <div>
              <p className="font-heading text-3xl font-bold text-espresso">
                100%
              </p>

              <p className="mt-1 text-sm font-semibold text-muted">
                Handmade
              </p>
            </div>

            <div>
              <p className="font-heading text-3xl font-bold text-espresso">
                5★
              </p>

              <p className="mt-1 text-sm font-semibold text-muted">
                Customer Love
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative"
        >

          <div className="absolute -inset-5 rounded-[3rem] bg-accent/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/40 p-4 shadow-premium backdrop-blur">

            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-sand via-[#f4eee6] to-[#d8c5ad]">

              <div className="absolute left-10 top-10 rounded-full border border-white/70 bg-white/50 px-5 py-3 text-sm font-bold text-espresso backdrop-blur">
                Crafted with care
              </div>

              <div className="absolute bottom-0 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-linen/70 shadow-inner" />

              <div className="absolute bottom-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full border-[18px] border-white/55 bg-accent/30 shadow-2xl" />

              <div className="absolute bottom-10 left-10 right-10 rounded-[1.5rem] border border-white/70 bg-white/55 p-6 backdrop-blur-xl">

                <p className="eyebrow">
                  Signature KOVV
                </p>

                <p className="mt-2 font-heading text-3xl font-bold text-ink">
                  KOVV Signature Bouquet
                </p>

                <p className="mt-2 text-sm text-muted">
                  A timeless handmade keepsake designed
                  to celebrate life's most meaningful moments.
                </p>

              </div>

            </div>

          </div>

          {/* FLOATING CARD */}

          <div className="absolute -left-6 bottom-24 rounded-[1.5rem] border border-white/70 bg-white/90 px-6 py-5 shadow-2xl backdrop-blur">

            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Artisan Crafted
            </p>

            <p className="mt-2 font-heading text-xl font-bold text-ink">
              Handmade With Care
            </p>

            <p className="mt-1 text-sm text-muted">
              Every stitch created by hand.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;