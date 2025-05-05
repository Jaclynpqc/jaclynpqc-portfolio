import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

vi.mock('@splinetool/react-spline', () => ({
  __esModule: true,
  default: () => <div data-testid="spline-mock" />,
}));

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
    expect(screen.getByTestId('spline-mock')).toBeInTheDocument();
  });
}); 