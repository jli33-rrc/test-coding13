import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

describe('Label Component', () => {
  test('renders the label and checks visibility', () => {
    render(<Label text="Test Label" htmlFor="testLabel" />);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeVisible();
  });

  test('applies the correct input field when htmlFor is provided', () => {
    render(<Label text="Username" htmlFor="username" />);
    const labelElement = screen.getByText('Username');
    expect(labelElement).toHaveAttribute('for', 'username');
  });
});
