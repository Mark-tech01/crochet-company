import { Section } from "../layout/shared";

function BrandStory() {
  return (
    <Section className="py-20 lg:py-28">
      <div className="container-premium grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

        <div className="premium-card p-4">
          <div className="min-h-[420px] rounded-[1.7rem] bg-gradient-to-br from-[#efe4d8] via-white/60 to-[#cbb596] p-8">

            <div className="h-full rounded-[1.4rem] border border-white/70 bg-linen/45 p-7 backdrop-blur">
              <p className="eyebrow">
                A quieter kind of luxury
              </p>

              <p className="mt-48 font-heading text-4xl font-bold text-ink">
                Handmade details that hold emotion.
              </p>
            </div>

          </div>
        </div>

        <div>
          <p className="eyebrow">Brand story</p>

          <h2 className="section-title mt-4">
            More Than a Gift
          </h2>

          <div className="mt-7 space-y-5 section-copy">
            <p>
              We believe relationships deserve more
              than ordinary gifts.
            </p>

            <p>
              Every piece is handcrafted with care
              to help people express appreciation,
              celebrate connection, and create
              memories that last.
            </p>

            <p>
              What began as a passion for handmade
              creations has grown into a mission
              to help people invest in the
              relationships that matter most.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
}

export default BrandStory;