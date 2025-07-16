export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  defaultLabel?: string;
  options: DropdownOption[];
  disabled?: boolean;
  backgroundColour?: string;
  textColour?: string;
  onSelect?: (value: string) => void;
}
