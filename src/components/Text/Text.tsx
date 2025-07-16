import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{
  color?: string;
  size?: string;
  weight?: string;
}>`
  color: ${({ color }) => color || '#353433'};
  font-family: sans-serif;
  font-size: ${({ size }) => size || '1rem'};
  font-weight: ${({ weight }) => weight || 'normal'};
  line-height: auto;
`;

const Text: React.FC<TextProps> = ({ text, textColour, size, weight }) => (
  <StyledText color={textColour} size={size} weight={weight}>
    {text}
  </StyledText>
);

export { Text };
