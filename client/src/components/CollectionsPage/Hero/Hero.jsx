// components/CollectionsPage/Hero/Hero.jsx

import React, { useEffect, useRef } from "react";
import { heroData } from "./heroData";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return undefined;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotionQuery.matches) return undefined;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = heroElement.clientWidth / 2;
    let cursorY = heroElement.clientHeight / 2;

    let currentMouseX = 0;
    let currentMouseY = 0;
    let currentCursorX = cursorX;
    let currentCursorY = cursorY;
    let animationId;

    const handlePointerMove = (event) => {
      const rect = heroElement.getBoundingClientRect();

      mouseX = (((event.clientX - rect.left) / rect.width) * 2 - 1) * 0.4;
      mouseY = (((event.clientY - rect.top) / rect.height) * 2 - 1) * 0.4;
      cursorX = event.clientX - rect.left;
      cursorY = event.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouseX = 0;
      mouseY = 0;
      cursorX = heroElement.clientWidth / 2;
      cursorY = heroElement.clientHeight / 2;
    };

    const updateProperties = () => {
      currentMouseX += (mouseX - currentMouseX) * 0.05;
      currentMouseY += (mouseY - currentMouseY) * 0.05;
      currentCursorX += (cursorX - currentCursorX) * 0.05;
      currentCursorY += (cursorY - currentCursorY) * 0.05;

      heroElement.style.setProperty("--elnor-mouse-x", currentMouseX.toFixed(4));
      heroElement.style.setProperty("--elnor-mouse-y", currentMouseY.toFixed(4));
      heroElement.style.setProperty("--elnor-cursor-x", `${currentCursorX.toFixed(2)}px`);
      heroElement.style.setProperty("--elnor-cursor-y", `${currentCursorY.toFixed(2)}px`);

      animationId = requestAnimationFrame(updateProperties);
    };

    heroElement.addEventListener("pointermove", handlePointerMove);
    heroElement.addEventListener("pointerleave", handlePointerLeave);
    animationId = requestAnimationFrame(updateProperties);

    return () => {
      heroElement.removeEventListener("pointermove", handlePointerMove);
      heroElement.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="elnor-collections-hero" ref={heroRef} aria-labelledby="elnor-hero-title">
      {/* Dynamic light layers, grain, and glow overlay */}
      <div className="elnor-cursor-glow" aria-hidden="true" />
      <div className="elnor-grain" aria-hidden="true" />
      <div className="elnor-studio-lighting" aria-hidden="true" />

      {/* Parallax background flat-lay workspace */}
      <div className="elnor-bg-image-container" aria-hidden="true">
        <img src={heroData.image} alt={heroData.imageAlt} className="elnor-bg-image" draggable="false" />
      </div>

      <div className="elnor-container">
        <div className="elnor-content">
          
          {/* 1. Botanical Eyebrow elements */}
          <div className="elnor-eyebrow-wrapper">
            <svg className="elnor-botanical-stem" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <line x1="12" y1="21" x2="12" y2="7" strokeLinecap="round" />
              <path d="M12 7C10.5 5 10.5 3 12 1.5C13.5 3 13.5 5 12 7Z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 13C10 11.5 9 9.5 10 8.5C11 7.5 12 9 12 11" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 13C14 11.5 15 9.5 14 8.5C13 7.5 12 9 12 11" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="elnor-eyebrow-row">
              <span className="elnor-eyebrow-line"></span>
              <span className="elnor-eyebrow-text">{heroData.label}</span>
              <span className="elnor-eyebrow-line"></span>
            </div>
          </div>

          {/* 2. Headline: Broad display text */}
          <h1 className="elnor-title" id="elnor-hero-title">
            {heroData.title.split("\n").map((line, index) => (
              <span className="elnor-title-line" key={index}>
                {line}
              </span>
            ))}
          </h1>

          {/* 3. Understated Heart Line Divider */}
          <div className="elnor-heart-divider">
            <span className="elnor-line"></span>
            <svg className="elnor-heart-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="elnor-line"></span>
          </div>

          {/* 4. Supporting Description */}
          <div className="elnor-description-wrapper">
            {heroData.description.split("\n").map((paragraph, index) => (
              <p className="elnor-description" key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* 5. Minimal Scroll Indicator */}
          <div className="elnor-scroll-indicator">
            <a href="#collections-grid" className="elnor-scroll-link">
              <div className="elnor-scroll-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <line x1="12" y1="4" x2="12" y2="20" strokeLinecap="round" />
                  <path d="M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="elnor-scroll-text">{heroData.scrollText}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;