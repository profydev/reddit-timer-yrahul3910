import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" />
    </Switch>
  );
}

export default Main;
