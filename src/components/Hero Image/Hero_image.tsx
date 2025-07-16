import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './Hero_image.types';

const HeroContainer = styled.div<{
  height?: string;
}>`
  height: ${({ height }) => height || 'auto'};
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const StyledImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const TextContainer = styled.div<{
  textColour?: string;
}>`
  align-items: center;
  background-color: ${({ textColour }) => (textColour ? 'transparent' : 'rgba(0, 0, 0, 0.3)')};
  color: ${({ textColour }) => textColour || '#FFFAF5'};
  display: flex;
  font-family: sans-serif;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
`;

const HeroTitle = styled.h1<{
  size?: string;
}>`
  font-size: ${({ size }) => size || '3rem'};
  margin: 0;
  line-height: 1.2;
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, title, size, textColour, overlay = true, height }) => (
  <HeroContainer height={height}>
    <StyledImage src={src} alt={alt} />
    <TextContainer textColour={overlay ? undefined : textColour}>
      {title && <HeroTitle size={size}>{title}</HeroTitle>}
    </TextContainer>
  </HeroContainer>
);

export { HeroImage };
