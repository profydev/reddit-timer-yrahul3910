import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://profy.dev/employers">profy.dev</a>
      <Link to="/"><img alt="Footer-Icon" src="assets/sign.svg" /></Link>
      <Link to="/terms">Terms &amp; Privacy</Link>
    </footer>
  );
}

export default Footer;
