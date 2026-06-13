// function CustomerStories() {
//   const stories = [
//     {
//       quote:
//         "I wanted flowers that would never fade. She still keeps them on her desk every day.",
//       name: "Anniversary Gift"
//     },
//     {
//       quote:
//         "The crochet bouquet looked even better than the photos. The packaging felt incredibly premium.",
//       name: "Birthday Surprise"
//     },
//     {
//       quote:
//         "A custom crochet gift that captured a memory perfectly. Worth every rupee.",
//       name: "Custom Order"
//     }
//   ];

//   return (
//     <section className="stories">
//       <div className="section-heading">
//         <p>MEMORIES THAT LAST</p>
//         <h2>Customer Stories</h2>
//       </div>

//       <div className="stories-grid">
//         {stories.map((story, index) => (
//           <div key={index} className="story-card">
//             <p className="story-text">"{story.quote}"</p>
//             <span>{story.name}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default CustomerStories;

import { Section, Button } from "../layout/shared";

const stories = [
  {
    quote:
      "The bouquet felt so personal. It was elegant, thoughtful, and something my partner could keep forever.",
    name: "Aarohi M.",
    detail: "Anniversary gift",
  },
  {
    quote:
      "I ordered a custom pet replica for my sister. The emotion in her reaction said everything.",
    name: "Nikhil R.",
    detail: "Memory kovv",
  },
  {
    quote:
      "Beautiful packaging, premium finish, and the handmade detail made it feel truly special.",
    name: "Meera S.",
    detail: "Birthday surprise",
  },
];

function CustomerStories() {
  return (
    <Section className="py-20 lg:py-28">
      <div className="container-premium">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Customer stories</p>

            <h2 className="section-title mt-4">
              Moments they still talk about.
            </h2>
          </div>

          <Button
            href="/customer-stories"
            variant="secondary"
          >
            Read more stories
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.name}
              className="premium-card p-8"
            >
              <p className="font-heading text-4xl text-accent">
                "
              </p>

              <p className="mt-3 text-lg leading-8 text-ink">
                {story.quote}
              </p>

              <div className="mt-8 border-t border-espresso/10 pt-5">
                <p className="font-bold text-ink">
                  {story.name}
                </p>

                <p className="mt-1 text-sm text-muted">
                  {story.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default CustomerStories;