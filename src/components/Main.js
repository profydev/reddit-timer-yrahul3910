import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import theme from '../styles/theme';

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search">Search page</Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default Main;
