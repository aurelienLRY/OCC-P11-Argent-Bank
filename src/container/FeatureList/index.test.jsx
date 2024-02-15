import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import FeatureList from './index';

describe('FeatureList', () => {
 it('renders feature items correctly', () => {
    render(<FeatureList />);
    const featureItems = screen.getAllByTestId('feature-item');

    expect(featureItems.length).toBe(3); // Replace 3 with the actual number of feature items
  });

  it('renders correct feature item titles', async () => {
    

    render(<FeatureList />);
     const featureItemTitles = screen.getAllByTestId('feature-item-title');
  
    expect(featureItemTitles[0]).toHaveTextContent('You are our #1 priority');
    expect(featureItemTitles[1]).toHaveTextContent('More savings means higher rates');
  });

  it('renders correct feature item descriptions', () => {
    render(<FeatureList />);
    const featureItemDescriptions = screen.getAllByTestId('feature-item-description');

    expect(featureItemDescriptions[0]).toHaveTextContent('Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.');
  });

  // Add more tests as needed for other features of the FeatureList component
});