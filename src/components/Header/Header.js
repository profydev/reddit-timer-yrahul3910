import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';

function Header() {
  return (
    <S.Header>
      <Link to="/"><img alt="Logo" src="assets/logo.svg" /></Link>
      <S.LinksList>
        <Link to="/search/javascript">Search</Link>
        <Link to="/#how-it-works">How it works</Link>
        <Link to="/#about">About</Link>
      </S.LinksList>
    </S.Header>
  );
}

export default Header;
