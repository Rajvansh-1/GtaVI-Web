import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="gta-navbar">
      <img src="/images/nav-logo.svg" alt="Logo" className="gta-logo" />

      <button
        className={`gta-menu-btn ${menuOpen ? "open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`gta-navbar-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#characters">Characters</a></li>
          <li><a href="#fanart">Fan Art</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
