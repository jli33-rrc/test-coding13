import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

describe('Img Component', () => {
  const testSrc = 'https://upload.wikimedia.org/wikipedia/commons/3/34/Cat%2C_Standard_Orange_Tabby.jpg';
  const testAlt = 'A orange tabby cat laying on the wooden floor';

  test('renders the image with the correct src and alt attributes', () => {
    render(<Img src={testSrc} alt={testAlt} />);
    const imgElement = screen.getByAltText(testAlt);
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveAttribute('src', testSrc);
  });

  test('applies custom width and height', () => {
    render(<Img src={testSrc} alt={testAlt} width="200px" height="200px" />);
    const imgElement = screen.getByAltText(testAlt);
    expect(imgElement).toHaveStyle({ width: '200px', height: '200px' });
  });

  test('renders the image as disabled', () => {
    render(<Img src={testSrc} alt={testAlt} width="200px" height="200px" disabled />);
    const imgElement = screen.getByAltText(testAlt);
    expect(imgElement).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
  });
});
