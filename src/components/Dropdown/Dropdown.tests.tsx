import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  const testOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  test('renders the dropdown and options and checks visibility', () => {
    render(<Dropdown options={testOptions} defaultLabel="Select an option" />);
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeVisible();
    expect(screen.getByText('Select an option')).toBeVisible();

    fireEvent.change(dropdown, { target: { value: 'option1' } });
    expect((dropdown as HTMLSelectElement).value).toBe('option1');
  });

  test('renders the dropdown as disabled', () => {
    render(<Dropdown options={testOptions} disabled defaultLabel="Disabled Dropdown" />);
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeDisabled();
  });
});
