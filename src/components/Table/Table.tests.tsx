import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

describe('Table Component', () => {
  const testHeaders = ['Item', 'Quantity', 'Price'];
  const testRows = [
    ['Apples', '10', '$5.00'],
    ['Oranges', '8', '$4.00'],
    ['Bananas', '5', '$3.00'],
  ];
  const testFooter = ['Total', '30', '$12.00'];

  test('renders the table and checks visibility', () => {
    render(<Table headers={testHeaders} rows={testRows} footer={testFooter} />);

    testHeaders.forEach((header) => {
      expect(screen.getByText(header)).toBeVisible();
    });

    testRows.flat().forEach((cell) => {
      expect(screen.getByText(cell)).toBeVisible();
    });

    testFooter.forEach((footerCell) => {
      if (footerCell) expect(screen.getByText(footerCell)).toBeVisible();
    });
  });
});
