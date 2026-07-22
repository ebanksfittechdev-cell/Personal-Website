import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Resume', href: '#resume' },
  { label: 'About Me', href: '#about' },
];

function Navbar({ onContactClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <motion.nav
        className="navbar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      >
        <div className="navbar-inner">
          <div className="nav-links desktop-nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-button">
                {link.label}
              </a>
            ))}
            <button className="nav-button" onClick={onContactClick}>
              Contact
            </button>
          </div>

          <button
            className="hamburger-button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="side-panel-overlay"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            <motion.div
              className="side-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <button
                className="side-panel-close"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>

              <div className="side-panel-links">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    className="side-nav-button"
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  className="side-nav-button"
                  onClick={() => {
                    onContactClick();
                    setIsOpen(false);
                  }}
                >
                  Contact
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;

