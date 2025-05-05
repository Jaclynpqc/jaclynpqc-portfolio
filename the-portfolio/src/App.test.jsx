import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

vi.mock('@splinetool/react-spline', () => ({
  __esModule: true,
  default: () => <div data-testid="spline-mock" />,
}));

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />, {
      wrapper: MemoryRouter
    });
  });

  it('renders the home page by default', () => {
    render(<App />, {
      wrapper: MemoryRouter
    });
    
    // Check if the navigation bar is present
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders 404 page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>
    );
    
    // Check if the 404 page is rendered
    expect(screen.getByTestId('spline-mock')).toBeInTheDocument();
  });
}); 