import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <Switch>
      <Route exact path="/" render={() => <div>Hello!</div>} />
      <Route exact path="/search" />
    </Switch>
  );
}

export default Main;
