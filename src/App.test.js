// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DraftLock title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DraftLock/i);
    expect(titleElement).toBeInTheDocument();
});
