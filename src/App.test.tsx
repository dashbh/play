import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to Play/i);
    expect(linkElement).toBeInTheDocument();
  });
});
