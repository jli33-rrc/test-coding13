import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImage = styled.img<{
  width?: string;
  height?: string;
  disabled?: boolean;
}>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  object-fit: cover;
  max-width: 100%;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;

const Img: React.FC<ImgProps> = ({ src, alt = '', width, height, disabled }) => (
  <StyledImage src={src} alt={alt} width={width} height={height} disabled={disabled} />
);

export { Img };
