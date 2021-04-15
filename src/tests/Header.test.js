import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from '../components/Main';

const setup = (initialPath = '/') => {
  // access history as described in the docs
  // https://reactrouter.com/web/guides/testing/checking-location-in-tests
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Main />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
};

test('navigates to home page when logo is clicked', () => {
  setup('/search/javascript');
  const logoLink = screen.getByRole('img', { name: /logo/i });
  userEvent.click(logoLink);
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

test('navigates to search page when search link is clicked', () => {
  const { history } = setup();
  const searchLink = screen.getByRole('link', { name: /search/i });
  userEvent.click(searchLink);
  expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});

test.each`
 link | hash
 ${'About'} | ${'#about'}
 ${'How it works'} | ${'#how-it-works'}
`('navigates to "$link" section when "$link" link is clicked', ({ link, hash }) => {
  const { history } = setup('/search/javascript');
  const hashLink = screen.getByRole('link', { name: link });
  userEvent.click(hashLink);
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
  expect(history.location.hash).toEqual(hash);
});
