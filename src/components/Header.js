import React from 'react';
import './Header.css';

const Header = ({ isMenuOpen, setIsMenuOpen, currentPage, setCurrentPage }) => {
  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => handleNavClick('home')}>
            <h1>MY SUPER GREENS</h1>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <a 
                  href="#home" 
                  className={currentPage === 'home' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('home');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#microgreens" 
                  className={currentPage === 'microgreens' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('microgreens');
                  }}
                >
                  Our Microgreens
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={currentPage === 'about' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('about');
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#media" 
                  className={currentPage === 'media' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('media');
                  }}
                >
                  Media
                </a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 