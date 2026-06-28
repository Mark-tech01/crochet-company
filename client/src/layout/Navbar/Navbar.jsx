


import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

const navItems = [
  {
    label: "Shop",
    path: "/shop",
  },
  {
    label: "Collections",
    path: "/collections",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <Container size="xl">
        <div className="navbar-inner">
          {/* Logo */}
          <NavLink to="/" className="navbar-logo">
            KOVV
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="navbar-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA */}
          <Button
            to="/custom-order"
            variant="text"
            className="navbar-cta"
          >
            Custom Order <span className="cta-arrow">→</span>
          </Button>

          {/* Mobile Toggle */}
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Button
            to="/custom-order"
            onClick={() => setMenuOpen(false)}
            className="mobile-button"
          >
            Custom Order
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;