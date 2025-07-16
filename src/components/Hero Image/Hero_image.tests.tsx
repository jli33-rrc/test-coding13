import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './Hero_image';

describe('HeroImage Component', () => {
  const testHeroImage = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Cat_%28Felis_catus%29_-_Oslo%2C_Norway_2021-05-20.jpg',
    alt: 'A black cat walking',
    title: 'Hero Title',
  };

  test('renders the hero image and checks visibility', () => {
    render(<HeroImage {...testHeroImage} overlay />);
    const imgElement = screen.getByAltText('A black cat walking');
    const titleElement = screen.getByText('Hero Title');
    expect(imgElement).toBeVisible();
    expect(titleElement).toBeVisible();
  });

  test('renders the hero image without overlay', () => {
    render(<HeroImage {...testHeroImage} overlay={false} />);
    const imgElement = screen.getByAltText('A black cat walking');
    const titleElement = screen.getByText('Hero Title');
    expect(imgElement).toBeVisible();
    expect(titleElement).toBeVisible();
  });
});
