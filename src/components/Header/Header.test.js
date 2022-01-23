import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import setup from '../../testUtils';

test('navigates to home page when logo is clicked', () => {
  const { history } = setup('/search/javascript');
  const logoLink = screen.getByRole('img', { name: /logo/i });
  userEvent.click(logoLink);
  expect(history.location.pathname).toEqual('/');
});

test('navigates to search page when search link is clicked', () => {
  const { history } = setup();
  const searchLink = screen.getByRole('link', { name: /search/i });
  userEvent.click(searchLink);
  expect(screen.getByText(/find the best time/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/');
});

test.each`
 link | hash
 ${'About'} | ${'#about'}
 ${'How it works'} | ${'#how-it-works'}
`('navigates to "$link" section when "$link" link is clicked', ({ link }) => {
  const { history } = setup('/search/javascript');
  const hashLink = screen.getByRole('link', { name: link });
  userEvent.click(hashLink);
  expect(history.location.pathname).toEqual('/search/javascript');
});
