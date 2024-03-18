import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import Banner from './index';

describe('Banner', () => {
  it('renders the hero component correctly', () => {
    render(<Banner UrlImg="https://via.placeholder.com/1440x400" />);
    const heroElement = screen.getByTestId('hero');
    expect(heroElement).toBeInTheDocument();
  });

  it('Snapshot ', () => {
   const snapshot = render(<Banner UrlImg="https://via.placeholder.com/1440x400" />);
    expect(snapshot).toMatchSnapshot();
  });

});