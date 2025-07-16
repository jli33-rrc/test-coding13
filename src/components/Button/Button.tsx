import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{
  disabled?: boolean;
  backgroundColour?: string;
  textColour?: string;
}>`
  background-color: ${({ disabled, backgroundColour }) => (disabled ? '#D4D0CC' : backgroundColour || '#5B5BFA')};
  border: none;
  border-radius: 25px;
  color: ${({ textColour }) => textColour || '#FFFAF5'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-family: sans-serif;
  font-size: 1rem;
  padding: 15px 25px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ disabled, backgroundColour }) =>
      disabled ? '#D4D0CC' : backgroundColour ? '#918E8B' : '#918E8B'};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, backgroundColour, textColour }) => (
  <StyledButton disabled={disabled} backgroundColour={backgroundColour} textColour={textColour} onClick={onClick}>
    {label}
  </StyledButton>
);

export { Button };
