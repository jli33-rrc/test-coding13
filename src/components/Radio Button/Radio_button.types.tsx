export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioButtonProps {
  name: string;
  options: RadioOption[];
  selectedValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  textColour?: string;
  disabled?: boolean;
}
