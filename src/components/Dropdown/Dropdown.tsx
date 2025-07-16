import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledDropdown = styled.select<{
  disabled?: boolean;
  backgroundColour?: string;
  textColour?: string;
}>`
  background-color: ${({ disabled, backgroundColour }) => (disabled ? '#D4D0CC' : backgroundColour || '#FFFAF5')};
  border: 1px solid #353433;
  color: ${({ disabled, textColour }) => (disabled ? '#918E8B' : textColour || '#353433')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-family: sans-serif;
  font-size: 1rem;
  padding: 10px;
  transition: background-color 0.2s ease;
  width: 100%;
`;

const StyledOption = styled.option``;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  disabled = false,
  defaultLabel = 'Please select...',
  backgroundColour,
  textColour,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (onSelect) {
      onSelect(selectedValue);
    }
  };

  return (
    <StyledDropdown
      onChange={handleChange}
      disabled={disabled}
      defaultValue=""
      backgroundColour={backgroundColour}
      textColour={textColour}
    >
      <StyledOption value="" disabled>
        {defaultLabel}
      </StyledOption>
      {options.map((option) => (
        <StyledOption key={option.value} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledDropdown>
  );
};

export { Dropdown };
