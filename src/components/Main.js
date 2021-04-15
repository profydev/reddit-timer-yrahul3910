import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

function Main() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search">Search page</Route>
      </Switch>
    </>
  );
}

export default Main;
