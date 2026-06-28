import React from 'react';
import '../CustomerStories/CustomerStories.css';

function CustomerStories() {
  const stories = [
    {
      id: 1,
      timeframe: '9 Months Later',
      title: 'The Desk Companion',
      quote:
        "I commissioned a crochet version of my dog before moving away for work. Nine months later, it still sits beside my monitor and somehow makes every day feel a little closer to home.",
      author: 'Aditi R.',
      location: 'Bengaluru',
      relation: 'Custom Pet Replica',
    },

    {
      id: 2,
      timeframe: '1 Year Later',
      title: 'The Anniversary Bouquet',
      quote:
        "My parents still display their crochet bouquet exactly where they placed it on their anniversary. It became more than a gift—it became part of their home.",
      author: 'Meera K.',
      location: 'Mumbai',
      relation: 'Custom Bouquet Recreation',
    },

    {
      id: 3,
      timeframe: '18 Months Later',
      title: 'A Gift For No Reason',
      quote:
        "There was no birthday, no holiday, and no occasion. Just a handmade crochet keepsake gifted on an ordinary day that still brings a smile every time we see it.",
      author: 'Rohan S.',
      location: 'New Delhi',
      relation: 'Keepsake Companion',
    },
  ];

  return (
    <section className="cust-stories-section">
      <div className="cust-stories-container">

        <div className="cust-stories-header">

          <span className="cust-stories-subtitle">
            Customer Stories
          </span>

          <h2 className="cust-stories-title">
            Handmade pieces that become part of everyday life.
          </h2>

          <p className="cust-stories-lead">
            The most meaningful feedback arrives months and years later.
            These stories come from customers who continue to live with
            their KOVV creations long after they first arrived.
          </p>

        </div>

        <div className="cust-stories-grid">

          {stories.map((story) => (
            <div key={story.id} className="cust-story-card">

              <div className="cust-story-meta-header">

                <span className="story-timeframe">
                  {story.timeframe}
                </span>

                <span className="story-category">
                  {story.relation}
                </span>

              </div>

              <h3 className="cust-story-card-title">
                {story.title}
              </h3>

              <p className="cust-story-card-quote">
                “{story.quote}”
              </p>

              <div className="cust-story-author-details">

                <span className="author-name">
                  {story.author}
                </span>

                <span className="author-location">
                  — {story.location}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CustomerStories;