import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './Radio_button.types';

const StyledRadioGroup = styled.div<{
  textColour?: string;
}>`
  color: ${({ textColour }) => textColour || '#353433'};
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 1rem;
  gap: 8px;
`;

const StyledRadioLabel = styled.label<{
  disabled?: boolean;
}>`
  align-items: center;
  display: flex;
  color: ${({ disabled }) => (disabled ? '#918E8B' : 'inherit')};
`;

const StyledRadioInput = styled.input<{
  disabled?: boolean;
}>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  name,
  selectedValue,
  onChange,
  disabled = false,
  textColour,
}) => (
  <StyledRadioGroup textColour={textColour}>
    {options.map((option, index) => (
      <StyledRadioLabel key={index} htmlFor={`${name}-${index}`} disabled={disabled}>
        <StyledRadioInput
          type="radio"
          id={`${name}-${index}`}
          name={name}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={onChange}
          disabled={disabled}
        />
        {option.label}
      </StyledRadioLabel>
    ))}
  </StyledRadioGroup>
);

export { RadioButton };
