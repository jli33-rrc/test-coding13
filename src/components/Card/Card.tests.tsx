import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card Component', () => {
  const testCard = {
    title: 'Card Title',
    body: 'This is the body of the card.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Cat%2C_Standard_Orange_Tabby.jpg',
    alt: 'A orange tabby cat laying on the wooden floor',
    footer: 'Card Footer',
  };

  test('renders the card and checks visibility', () => {
    render(<Card {...testCard} />);
    expect(screen.getByText('Card Title')).toBeVisible();
    expect(screen.getByText('This is the body of the card.')).toBeVisible();
    expect(screen.getByAltText('A orange tabby cat laying on the wooden floor')).toBeVisible();
    expect(screen.getByText('Card Footer')).toBeVisible();
  });

  test('applies custom width', () => {
    render(<Card {...testCard} width="250px" />);
    const cardElement = screen.getByText('Card Title').parentElement;
    expect(cardElement).toHaveStyle({ width: '250px' });
  });

  test('renders the card as disabled', () => {
    render(<Card {...testCard} disabled />);
    const cardElement = screen.getByText('Card Title').parentElement;
    expect(cardElement).toHaveStyle({
      opacity: '0.5',
      pointerEvents: 'not-allowed',
      cursor: 'not-allowed',
    });
  });
});
