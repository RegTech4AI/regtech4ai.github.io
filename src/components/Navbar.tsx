import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="nav-logo">
          RegTech4AI
        </Link>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {isHomePage ? (
            <>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
              <a href="#news" onClick={() => setIsOpen(false)}>News</a>
              <a href="#team" onClick={() => setIsOpen(false)}>Team</a>
            </>
          ) : (
            <>
              <Link to="/#about" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/#news" onClick={() => setIsOpen(false)}>News</Link>
              <Link to="/#team" onClick={() => setIsOpen(false)}>Team</Link>
            </>
          )}
          <Link to="/publications" onClick={() => setIsOpen(false)}>Papers</Link>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        
        <button 
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
