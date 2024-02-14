import React from 'react';
import { render } from '@testing-library/react';
import FeatureItem from './index';

describe('FeatureItem', () => {
    it('renders with default props', () => {
        const { getByAltText, getByText } = render(<FeatureItem />);
        
        expect(getByAltText('Feature Icon')).toBeInTheDocument();
        expect(getByText('Feature Title')).toBeInTheDocument();
        expect(getByText('Feature Description')).toBeInTheDocument();
    });

    it('renders with custom props', () => {
        const iconSrc = 'https://example.com/icon.png';
        const title = 'Custom Title';
        const description = 'Custom Description';
        const { getByAltText, getByText } = render(
            <FeatureItem iconSrc={iconSrc} title={title} description={description} />
        );
        
        expect(getByAltText('Feature Icon')).toBeInTheDocument();
        expect(getByText('Custom Title')).toBeInTheDocument();
        expect(getByText('Custom Description')).toBeInTheDocument();
    });
});