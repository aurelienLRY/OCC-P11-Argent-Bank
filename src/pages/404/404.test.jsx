import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from "react-router-dom";
import NotFoundPage from './index';

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

describe('NotFoundPage', () => {
  it('renders the 404 page correctly', () => {
    render(<NotFoundPage />);
    const mainElement = screen.getByTestId('not found');
    const headingElement = screen.getByText('404 - Page Not Found');
    const paragraphElement = screen.getByText('The page you are looking for does not exist.');
    const buttonElement = screen.getByRole('button', { name: 'Go Back' });

    expect(mainElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('navigates back when the "Go Back" button is clicked', () => {
    const navigateMock = vi.fn();
    useNavigate.mockReturnValue(navigateMock);

    render(<NotFoundPage />);
    const buttonElement = screen.getByRole('button', { name: 'Go Back' });

    fireEvent.click(buttonElement);

    expect(navigateMock).toHaveBeenCalledWith(-1);
  });
});