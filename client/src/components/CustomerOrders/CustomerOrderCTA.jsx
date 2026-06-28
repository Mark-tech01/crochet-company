import React from 'react';
import { Link } from 'react-router-dom';
import '../CustomerOrders/CustomerOrders.css';

function CustomOrderCTA() {
  return (
    <section className="custom-cta-section">
      <div className="custom-cta-container">

        <div className="custom-cta-card">

          {/* Left Side */}
          <div className="custom-cta-narrative">

            <span className="custom-cta-tagline">
              Custom Crochet Creations
            </span>

            <h2 className="custom-cta-title">
              Bring your idea
              <br />
              to life.
            </h2>

            <p className="custom-cta-description">
              Whether it's a beloved pet, a meaningful bouquet,
              a favorite character, or a completely original idea,
              KOVV transforms personal stories into handcrafted crochet
              keepsakes made exclusively for you.
            </p>

            <Link
              to="/custom-order"
              className="custom-cta-btn"
            >
              Start Your Custom Order
            </Link>

          </div>

          {/* Right Side */}
          <div className="custom-cta-projects">

            <h4 className="projects-header-title">
              Popular Requests
            </h4>

            <ul className="projects-list">

              <li className="project-item">

                <span className="project-num">
                  01 /
                </span>

                <div className="project-info">

                  <h5 className="project-name">
                    Pet Replicas
                  </h5>

                  <p className="project-desc">
                    Turn your beloved companion into a detailed handmade
                    crochet keepsake you'll treasure forever.
                  </p>

                </div>

              </li>

              <li className="project-item">

                <span className="project-num">
                  02 /
                </span>

                <div className="project-info">

                  <h5 className="project-name">
                    Bouquet Recreations
                  </h5>

                  <p className="project-desc">
                    Recreate wedding bouquets, meaningful flowers,
                    or favorite blooms in everlasting crochet form.
                  </p>

                </div>

              </li>

              <li className="project-item">

                <span className="project-num">
                  03 /
                </span>

                <div className="project-info">

                  <h5 className="project-name">
                    Characters & Keepsakes
                  </h5>

                  <p className="project-desc">
                    From favorite characters to unique gift ideas,
                    we can create one-of-a-kind crochet pieces designed
                    around your vision.
                  </p>

                </div>

              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CustomOrderCTA;