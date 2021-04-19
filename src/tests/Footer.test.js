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

it('navigates to profy.dev/employers when left link is clicked', () => {
  setup('/');
  const link = screen.getByText('profy.dev');
  expect(link.closest('a')).toHaveAttribute('href', 'https://profy.dev/employers');
});

it('navigates to the home page when logo is clicked', () => {
  const { history } = setup('/search/javascript');
  const logoLink = screen.getByRole('img', { name: /footer-icon/i });
  userEvent.click(logoLink);
  expect(history.location.pathname).toEqual('/');
});

it('navigates to /terms when privacy link is clicked', () => {
  const { history } = setup('/');
  const privacyLink = screen.getByText(/terms & privacy/i);
  userEvent.click(privacyLink);
  expect(history.location.pathname).toEqual('/terms');
});
