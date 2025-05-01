// Header.test.js or Header.test.jsx
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header', () => {
    render(<Header />);
    expect(screen.getByText(/hello from header/i)).toBeInTheDocument();
});
