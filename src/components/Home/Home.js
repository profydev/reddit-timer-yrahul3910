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
      <Link to="/search?q=javascript"><S.Image alt="table" src="assets/table.svg" /></Link>
      <S.Heading id="how-it-works">How it works</S.Heading>
      <S.List>
        <li>We find the 500 top posts from the past year for a subreddit. </li>
        <li>The data is visualized in a heatmap grouped by weekday and hour of the day.</li>
        <li>See immediately when to submit your reddit post.</li>
      </S.List>
      <S.Heading id="about" style={{ marginTop: '92px' }}>About</S.Heading>
      <S.Paragraph>
        This app was created during a course on
        <Link to="profy.dev"> profy.dev </Link>
        with the goal to implement a pixel&#8209;perfect real-world application with
        professional workflows and tools like Kanban, ClickUp, Figma,
        GitHub, pull requests and code reviews.
        <Link to="https://profy.dev/employers"> Click here for more information.</Link>
      </S.Paragraph>
    </S.Main>
  );
}

export default Home;
