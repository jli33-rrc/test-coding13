import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

describe('Text Component', () => {
  test('renders the text and checks visibility', () => {
    render(<Text text="Test Text" />);
    const textElement = screen.getByText('Test Text');
    expect(textElement).toBeVisible();
  });

  test('applies custom text styles', () => {
    render(<Text text="Custom Text Styles" textColour=" #5B5BFA" size="2rem" weight="bold" />);
    const textElement = screen.getByText('Custom Text Styles');
    expect(textElement).toHaveStyle('color: #5B5BFA');
    expect(textElement).toHaveStyle('font-size: 2rem');
    expect(textElement).toHaveStyle('font-weight: bold');
  });
});
