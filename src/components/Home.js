import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <p className="title">No reactions to your reddit posts?</p>
      <p className="subtitle">Great timing, great results! Find the best time to post on your subreddit.</p>
      <Link to="/search"><button type="button">Show me the best time</button></Link>
    </main>
  );
}

export default Home;
