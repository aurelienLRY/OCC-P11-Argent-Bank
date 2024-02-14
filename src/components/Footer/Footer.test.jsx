import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

describe('Footer', () => {
  it('renders the footer text', () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText('Copyright 2020 Argent Bank');
    expect(footerText).toBeInTheDocument();
  });
});