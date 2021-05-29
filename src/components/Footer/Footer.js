import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footer.style';

function Footer() {
  return (
    <S.Footer>
      <S.Anchor href="https://profy.dev/employers">profy.dev</S.Anchor>
      <Link to="/"><S.Image alt="Footer-Icon" src="assets/sign.svg" /></Link>
      <Link to="/terms">Terms &amp; Privacy</Link>
    </S.Footer>
  );
}

export default Footer;
