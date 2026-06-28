import React from 'react';
import '../BrandStories/BrandStories.css';

function BrandStories() {
  return (
    <section className="stories-section">
      <div className="stories-container">

        <div className="stories-header">
          <span className="stories-subtitle">
            The KOVV Journal
          </span>

          <h2 className="stories-title">
            Stories woven into every stitch.
          </h2>

          <p className="stories-intro">
            Behind every handmade creation is a memory, a relationship,
            or a moment worth holding onto. These stories remind us why
            meaningful gifts never go out of style.
          </p>
        </div>

        <article className="story-vignette">

          <div className="story-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=1000"
              alt="Handmade keepsake displayed on a wooden table"
              className="story-image"
              loading="lazy"
            />
          </div>

          <div className="story-text-wrapper">

            <span className="story-meta">
              Chapter I — A Gift That Stayed
            </span>

            <blockquote className="story-quote">
              "Years later, it still sits exactly where I placed it."
            </blockquote>

            <p className="story-body">
              Some gifts are enjoyed for a moment and forgotten.
              Others quietly become part of everyday life. What began
              as a thoughtful handmade surprise became a daily reminder
              of a cherished memory and the person behind it.
            </p>

          </div>

        </article>

        <article className="story-vignette reverse">

          <div className="story-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
              alt="Cozy desk with meaningful keepsake"
              className="story-image"
              loading="lazy"
            />
          </div>

          <div className="story-text-wrapper">

            <span className="story-meta">
              Chapter II — A Piece Of Home
            </span>

            <blockquote className="story-quote">
              "No matter where I go, it reminds me where I belong."
            </blockquote>

            <p className="story-body">
              Handmade keepsakes have a unique ability to travel with us.
              Whether placed on a desk, a bedside table, or a bookshelf,
              they become small anchors connecting us to people, places,
              and memories that matter most.
            </p>

          </div>

        </article>

      </div>
    </section>
  );
}

export default BrandStories;