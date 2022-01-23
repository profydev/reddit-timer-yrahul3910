import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import setup from '../../testUtils';

it('renders correctly', () => {
  setup('/search/javascript');
  expect(screen.getByText(/find the best time/i)).toBeInTheDocument();
  expect(screen.getByText('r /')).toBeInTheDocument();
});

it('links to search page when button is clicked', () => {
  const { history } = setup('/search/javascript');
  const input = screen.getByPlaceholderText('javascript');
  userEvent.type(input, 'taylorswift');
  const button = screen.getAllByText('Search')[1];
  userEvent.click(button);
  expect(history.location.pathname).toEqual('/search/taylorswift');
});
