import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            Salon du Terroir
            <span className="subtitle">Télécom Paris - Grande École d'Ingénieurs</span>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exhibitors"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                Exposants
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                Services & Activités
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                FAQ
              </NavLink>
            </li>
            <li><a href="/#access" className="nav-link" onClick={closeMenu}>Infos Pratiques</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
