// Header.test.js or Header.test.jsx
import '@testing-library/jest-dom'; // For better matchers like toBeInTheDocument

import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header', () => {
    render(<Header />);
    expect(screen.getByText(/hello from header/i)).toBeInTheDocument();
});
