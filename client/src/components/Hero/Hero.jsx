import { useEffect, useRef } from "react";
import "./Hero.css";
import HeroImage from "./assets/hero-image.jpg";
import Button from "../../components/Button/Button";
import { heroData } from "./heroData";

function Hero() {
  const heroRef = useRef(null);

  // Target mouse coordinates (-1.0 to 1.0)
  const targetX = useRef(0);
  const targetY = useRef(0);
  
  // Interpolated (lerped) coordinate states for high-inertia float
  const currentX = useRef(0);
  const currentY = useRef(0);

  // Target coordinates for cursor glow (pixels)
  const targetGlowX = useRef(0);
  const targetGlowY = useRef(0);
  
  // Interpolated coordinates for cursor glow
  const currentGlowX = useRef(0);
  const currentGlowY = useRef(0);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    // Set initial center coordinates
    const rect = heroEl.getBoundingClientRect();
    targetGlowX.current = rect.width / 2;
    targetGlowY.current = rect.height / 2;
    currentGlowX.current = rect.width / 2;
    currentGlowY.current = rect.height / 2;

    const handleMouseMoveGlobal = (e) => {
      const { clientX, clientY } = e;
      const currentRect = heroEl.getBoundingClientRect();

      // Normalize mouse coordinates globally across the entire window viewport
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      targetX.current = (clientX / screenW) * 2 - 1;
      targetY.current = (clientY / screenH) * 2 - 1;

      // Track relative pixel coordinates for the warm ambient cursor light
      targetGlowX.current = clientX - currentRect.left;
      targetGlowY.current = clientY - currentRect.top;
    };

    // Global listener ensures the movement is continuous across the page
    window.addEventListener("mousemove", handleMouseMoveGlobal);

    let rafId;
    const lerpFactor = 0.035;     // Extra slow, luxurious dampening
    const glowLerpFactor = 0.045; // Smooth lag for the ambient cursor glow

    const tick = () => {
      // Linear Interpolation (lerp) loop
      currentX.current += (targetX.current - currentX.current) * lerpFactor;
      currentY.current += (targetY.current - currentY.current) * lerpFactor;

      currentGlowX.current += (targetGlowX.current - currentGlowX.current) * glowLerpFactor;
      currentGlowY.current += (targetGlowY.current - currentGlowY.current) * glowLerpFactor;

      // Directly apply CSS variables on the container
      heroEl.style.setProperty("--mouse-x", currentX.current.toFixed(4));
      heroEl.style.setProperty("--mouse-y", currentY.current.toFixed(4));
      heroEl.style.setProperty("--cursor-x", `${currentGlowX.current.toFixed(1)}px`);
      heroEl.style.setProperty("--cursor-y", `${currentGlowY.current.toFixed(1)}px`);

      rafId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveGlobal);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero">
      {/* Soft warm radial sunlight following the cursor */}
      <div className="hero-cursor-glow" aria-hidden="true"></div>
      
      {/* Layer 1 (Lowest): Full-screen background image container */}
      <div className="hero-bg-image-container">
        <img
          src={HeroImage}
          alt="Luxury Handcrafted Crochet Bouquet"
          className="hero-bg-image"
        />
      </div>

      {/* Layer 2 (Middle): Diagonal split background with soft paper drop shadow */}
      <div className="hero-split-bg-wrap" aria-hidden="true">
        <div className="hero-split-bg"></div>
      </div>

      {/* Layer 3 (Top): Center-aligned content container */}
      <div className="hero-container">
        
        {/* Left Column */}
        <div className="hero-left">
          <span className="hero-label">
            {heroData.label}
          </span>

          <h1 className="hero-title">
            {heroData.title[0]}
            <br />
            {heroData.title[1]}
          </h1>

          <p className="hero-description">
            {heroData.description}
          </p>

          <Button
            variant="primary"
            to={heroData.primaryButton.link}
            className="hero-button"
          >
            {heroData.primaryButton.text}
          </Button>

          <p className="hero-trust">
            <span className="hero-trust-icon">✦</span> Made to order, stitched with care.
          </p>
        </div>

        {/* Right Column: Spacer */}
        <div className="hero-right-spacer" aria-hidden="true"></div>

      </div>

    </section>
  );
}

export default Hero;