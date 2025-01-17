import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <span className="navbar-logo">⬢</span>
        <span className="navbar-title"><Link to="/">VPN</Link></span>
      </div>

      {/* Center Section */}
      <div className="navbar-center">
        <a href="/police" className="navbar-link">Police Department</a>
        <a href="/fire" className="navbar-link">Fire Department</a>
        <a href="/health" className="navbar-link">Public Health</a>
        <a href="/311" className="navbar-link">311</a>
        <a href="/news" className="navbar-link">News</a>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <button className="navbar-icon">
          <i className="fas fa-search"></i> {/* Search Icon */}
        </button>
        <button className="navbar-icon">
          <i className="fas fa-question-circle"></i> {/* Help Icon */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
