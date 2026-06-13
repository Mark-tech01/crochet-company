import { Section } from "../layout/shared";

const steps = [
  "Choose Your Gift",
  "Handcrafted With Care",
  "Beautifully Packaged",
  "Delivered Across India",
];

function HowItWorks() {
  return (
    <Section className="py-20 lg:py-28">
      <div className="container-premium">
        <div className="text-center">
          <p className="eyebrow">How it works</p>

          <h2 className="section-title mx-auto mt-4 max-w-3xl">
            From your thought to their smile.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="relative premium-card p-7">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-espresso font-bold text-white">
                {index + 1}
              </div>

              <h3 className="font-heading text-2xl font-bold text-ink">
                {step}
              </h3>

              <p className="mt-3 leading-7 text-muted">
                A seamless, considered process built around care and
                presentation.
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default HowItWorks;