import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it('renders the home page by default', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    // Check if the navigation bar is present
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders 404 page for unknown routes', () => {
    window.history.pushState({}, '', '/unknown-route');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    // Check if the 404 page is rendered
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
}); 