import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './index';

describe('Header', () => {
  it('renders without errors', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
  });

  it('renders the logo', () => {
    const { getByAltText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(getByAltText('Argent Bank Logo')).toBeInTheDocument();
  });

  it('renders the sign in link', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(getByText('Sign in')).toBeInTheDocument();
  });
});