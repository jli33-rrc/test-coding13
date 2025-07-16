import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders the button and checks visibility', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeVisible();
  });

  test('applies disabled styles when the button is disabled', () => {
    render(<Button label="Disabled Button" disabled={true} />);
    const buttonElement = screen.getByText('Disabled Button');
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveStyle('background-color: #D4D0CC');
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
  });
});
