import React from 'react';
import '../InstagramShowcase/InstagramShowcase.css';

function InstagramShowcase() {
  const posts = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
      alt: 'Crochet bouquet close up',
      link: 'https://instagram.com',
    },

    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600',
      alt: 'Luxury packaging presentation',
      link: 'https://instagram.com',
    },

    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=600',
      alt: 'Handmade crochet detail',
      link: 'https://instagram.com',
    },

    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600',
      alt: 'Studio work in progress',
      link: 'https://instagram.com',
    },
  ];

  return (
    <section className="insta-showcase-section">
      <div className="insta-showcase-container">

        <div className="insta-showcase-header">

          <span className="insta-showcase-subtitle">
            Follow The Journey
          </span>

          <h2 className="insta-showcase-title">
            A glimpse inside the KOVV studio.
          </h2>

          <p className="insta-showcase-lead">
            From handmade details and custom creations to packaging,
            behind-the-scenes moments, and customer stories, follow
            along as every piece comes to life.
          </p>

        </div>

        <div className="insta-grid">

          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="insta-grid-item"
            >
              <div className="insta-image-wrapper">

                <img
                  src={post.image}
                  alt={post.alt}
                  className="insta-image"
                />

                <div className="insta-hover-overlay">
                  <span className="insta-hover-text">
                    View Post
                  </span>
                </div>

              </div>
            </a>
          ))}

        </div>

        <div className="insta-footer-callout">

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-handle-link"
          >
            Follow @kovv
          </a>

        </div>

      </div>
    </section>
  );
}

export default InstagramShowcase;