import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <Link to="profy.dev/employers">profy.dev</Link>
      <Link to="/"><img alt="Footer-Icon" src="assets/sign.svg" /></Link>
      <Link to="/terms">Terms &amp; Privacy</Link>
    </footer>
  );
}

export default Footer;
