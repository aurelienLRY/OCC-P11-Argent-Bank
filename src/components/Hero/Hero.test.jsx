import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import Hero from './index';

describe('Hero', () => {
  it('renders the hero component correctly', () => {
    render(<Hero UrlImg="https://via.placeholder.com/1440x400" />);
    const heroElement = screen.getByTestId('hero');
    expect(heroElement).toBeInTheDocument();
  });

  it('Snapshot ', () => {
   const snapshot = render(<Hero UrlImg="https://via.placeholder.com/1440x400" />);
    expect(snapshot).toMatchSnapshot();
  });

});