import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './Radio_button';

describe('RadioButton Component', () => {
  const testOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  test('renders radio buttons and checks visibility', () => {
    render(<RadioButton name="testGroup" options={testOptions} selectedValue="" onChange={() => {}} />);

    testOptions.forEach((option) => {
      expect(screen.getByLabelText(option.label)).toBeVisible();
    });
  });

  test('renders disabled radio buttons', () => {
    render(<RadioButton name="testGroup" options={testOptions} selectedValue="" onChange={() => {}} disabled />);

    testOptions.forEach((option) => {
      const radioOption = screen.getByLabelText(option.label);
      expect(radioOption).toBeDisabled();
    });
  });
});
