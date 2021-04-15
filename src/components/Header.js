import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/"><img alt="Logo" src="assets/logo.svg" /></Link>
      <nav className="links">
        <Link to="/search/javascript">Search</Link>
        <Link to="/#how-it-works">How it works</Link>
        <Link to="/#about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
