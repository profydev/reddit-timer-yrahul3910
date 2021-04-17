import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <Link to="https://profy.dev/employers">profy.dev</Link>
      <Link to="/"><img alt="Footer-Logo" src="assets/sign.svg" /></Link>
      <Link to="/terms">Terms &amp; Privacy</Link>
    </div>
  );
}

export default Footer;
