import { useEffect, useRef } from "react";
import "./Philosophy.css";
import { philosophyData } from "./philosophyData";

function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const elements = currentRef.querySelectorAll(".philosophy-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="philosophy" ref={sectionRef}>
      <div className="philosophy-container">

        {/* Editorial Intro */}
        <div className="philosophy-intro philosophy-reveal">
          <span className="philosophy-label">
            Our Philosophy
          </span>

          <h2 className="philosophy-title">
            Made slowly.
            <br />
            Meant to stay.
          </h2>

          <p className="philosophy-description">
            In a world filled with things that are quickly made and quickly forgotten,
            we create keepsakes that are meant to be gifted, cherished and remembered.
            Every KOVV creation carries patience, craftsmanship and emotion.
          </p>
        </div>

        {/* Torn Paper Deckle-Edge Divider */}
        <div className="philosophy-deckle-divider" aria-hidden="true"></div>

        {/* Alternating Value Cards */}
        <div className="philosophy-values">
          {philosophyData.map((item, index) => (
            <div
              key={item.id}
              className={`philosophy-value philosophy-reveal ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
            >
              <div className="value-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="value-image"
                />
              </div>

              <div className="value-content-wrapper">
                <div className="value-number">
                  {item.number}
                </div>

                <div className="value-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Philosophy;