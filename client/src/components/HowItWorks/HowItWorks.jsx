import React from 'react';
import '../HowItWorks/HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Share Your Idea',
      description:
        'Choose from our collection or tell us about your custom vision. Whether it is a bouquet, pet replica, character, or keepsake, every project begins with your story.',
    },

    {
      num: '02',
      title: 'Design & Planning',
      description:
        'We review your references, discuss important details, and create a plan to ensure the final piece captures exactly what makes it meaningful.',
    },

    {
      num: '03',
      title: 'Handcrafted Stitch by Stitch',
      description:
        'Using premium materials and careful craftsmanship, each creation is handmade with patience and attention to detail. No mass production, no shortcuts.',
    },

    {
      num: '04',
      title: 'Delivered With Care',
      description:
        'Your finished piece is carefully packaged and shipped securely, ready to become a lasting part of your home or a memorable gift for someone special.',
    },
  ];

  return (
    <section className="how-it-works-sec">
      <div className="how-it-works-container">

        <div className="how-it-works-header">

          <span className="how-it-works-subtitle">
            The KOVV Process
          </span>

          <h2 className="how-it-works-title">
            From idea to handmade keepsake.
          </h2>

          <p className="how-it-works-lead">
            Every KOVV creation follows a thoughtful process designed
            to turn meaningful ideas into handcrafted crochet pieces
            made to last.
          </p>

        </div>

        <div className="how-it-works-grid">

          {steps.map((step, index) => (
            <div key={step.num} className="how-step-card">

              <div className="how-step-meta">

                <span className="how-step-number">
                  {step.num}
                </span>

                {index < steps.length - 1 && (
                  <span className="how-step-divider"></span>
                )}

              </div>

              <h3 className="how-step-title">
                {step.title}
              </h3>

              <p className="how-step-description">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;