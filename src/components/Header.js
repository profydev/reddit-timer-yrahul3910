import React from 'react';

function Header() {
  return (
    <div className="header">
      <a href="/"><img alt="Logo" src="assets/logo.svg" /></a>
      <div className="links">
        <a href="/search?q=javascript">Search</a>
        <a href="#how-it-works">How it works</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Header;
