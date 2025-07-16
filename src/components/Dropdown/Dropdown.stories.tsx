import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { DropdownProps } from './Dropdown.types';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    defaultLabel: { control: 'text' },
    options: { control: { type: 'object' } },
    disabled: { control: 'boolean' },
    backgroundColour: { control: 'color' },
    textColour: { control: 'color' },
    onSelect: { action: 'selected' },
  },
};

export default meta;

type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
    defaultLabel: 'Select an option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    disabled: false,
    backgroundColour: '#FFFAF5',
    textColour: '#353433',
  },
};

export const Disabled: Story = {
  args: {
    defaultLabel: 'Select an option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    disabled: true,
    backgroundColour: '#D4D0CC',
    textColour: '#918E8B',
  },
};
