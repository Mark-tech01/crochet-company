import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-column footer-brand-column">
          <div className="footer-logo">KOVV</div>

          <p className="footer-statement">
            Handcrafted keepsakes created to preserve the moments that deserve
            to stay forever.
          </p>
        </div>

        {/* Collections */}
        <div className="footer-column">
          <h4 className="footer-group-title">Collections</h4>

          <ul className="footer-group-links">
            <li>
              <Link to="/shop">Collection</Link>
            </li>
            <li>
              <Link to="/custom-order">Custom Creation</Link>
            </li>
            <li>
              <Link to="/about">Our Story</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="footer-column">
          <h4 className="footer-group-title">Customer Care</h4>

          <ul className="footer-group-links">
            <li>
              <Link to="/shipping">Shipping</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/care-guide">Care Guide</Link>
            </li>
            <li>
              <Link to="/returns">Returns</Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className="footer-column">
          <h4 className="footer-group-title">Connect</h4>

          <ul className="footer-group-links">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
            </li>

            <li>
              <a href="mailto:contact@kovv.in">
                Email
              </a>
            </li>

            <li>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <span className="footer-copyright">
            © {new Date().getFullYear()} KOVV
          </span>

          <span className="footer-origin">
            Made with care in India.
          </span>

        </div>
      </div>

    </footer>
  );
}

export default Footer;