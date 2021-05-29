import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import setup from '../../testUtils';

it('renders correctly', () => {
  setup('/');
  expect(screen.getByText(/no reactions to your/i)).toBeInTheDocument();
  expect(screen.getByText(/great timing,/i)).toBeInTheDocument();
});

it('links to search page when button is clicked', () => {
  const { history } = setup('/');
  const button = screen.getByText(/show me the/i);
  userEvent.click(button);
  expect(history.location.pathname).toEqual('/search');
  expect(history.location.search).toEqual('?q=javascript');
});

it('links to search page when table is clicked', () => {
  const { history } = setup('/');
  const table = screen.getByRole('img', { name: 'table' });
  userEvent.click(table);
  expect(history.location.pathname).toEqual('/search');
  expect(history.location.search).toEqual('?q=javascript');
});
