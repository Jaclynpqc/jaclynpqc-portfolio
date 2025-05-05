import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigationBar from './NavBar';

describe('NavigationBar', () => {
  it('renders navigation links', () => {
    const mockNavigate = vi.fn();
    render(<NavigationBar onNavigate={mockNavigate} />);
    
    // Check if navigation links are present
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
  });

  it('calls onNavigate when clicking a navigation link', () => {
    const mockNavigate = vi.fn();
    render(<NavigationBar onNavigate={mockNavigate} />);
    
    // Click on a navigation link
    fireEvent.click(screen.getByText(/projects/i));
    
    // Check if onNavigate was called with the correct section ID
    expect(mockNavigate).toHaveBeenCalledWith('projects');
  });
}); 