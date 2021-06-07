import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import setup from '../../testUtils';

it('navigates to profy.dev/employers when left link is clicked', () => {
  setup('/');
  let link = screen.getAllByText('profy.dev');
  link = link[link.length - 1];
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
