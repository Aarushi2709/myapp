import { render, screen } from '@testing-library/react';
import App from './App';

test('renders some valid text from App', () => {
  render(<App />);
  expect(screen.getByText(/edit/i)).toBeInTheDocument(); // Match text like: "Edit src/App.js and save to reload."
});
