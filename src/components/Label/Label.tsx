import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{
  color?: string;
}>`
  color: ${({ color }) => color || '#353433'};
  display: inline-block;
  font-family: sans-serif;
  font-size: 1rem;
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, textColour }) => (
  <StyledLabel htmlFor={htmlFor} color={textColour}>
    {text}
  </StyledLabel>
);

export { Label };
