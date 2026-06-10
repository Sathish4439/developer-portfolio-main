import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from './navbar';

describe('Navbar Component', () => {
  it('renders the branding name', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText('Sathish')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('EXPERIENCE')).toBeInTheDocument();
    expect(screen.getByText('SKILLS')).toBeInTheDocument();
    expect(screen.getByText('PROJECTS')).toBeInTheDocument();
    expect(screen.getByText('EDUCATION')).toBeInTheDocument();
  });

  it('links have correct href attributes', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText('ABOUT').closest('a')).toHaveAttribute('href', '/#about');
    expect(screen.getByText('PROJECTS').closest('a')).toHaveAttribute('href', '/#projects');
  });
});
