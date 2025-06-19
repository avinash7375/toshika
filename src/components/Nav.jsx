import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-circle">
          <span className="logo-text">t</span>
        </div>
      </div>

      <ul className="nav-links">
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Our Collection</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About Toshika</a></li>
      </ul>

      <div className="nav-icons">
        <span className="icon">&#128269;</span> {/* magnifying glass */}
        <span className="icon">&#128100;</span> {/* user icon */}
        <span className="icon">&#128717;</span> {/* shopping bag */}
      </div>
    </nav>
  );
};

export default Navbar;
