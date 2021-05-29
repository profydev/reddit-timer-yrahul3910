import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Home.style';

function Home() {
  return (
    <S.Main>
      <S.Title>No reactions to your reddit posts?</S.Title>
      <S.Subtitle>
        Great timing, great results! Find the best time to post on your subreddit.
      </S.Subtitle>
      <Link to="/search?q=javascript"><S.Button>Show me the best time</S.Button></Link>
      <p id="subreddit">r/javascript</p>
      <Link to="/search?q=javascript"><img alt="table" src="assets/table.svg" /></Link>
    </S.Main>
  );
}

export default Home;
