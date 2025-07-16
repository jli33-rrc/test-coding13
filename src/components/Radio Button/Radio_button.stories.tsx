import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './Radio_button';
import { RadioButtonProps } from './Radio_button.types';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    textColour: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<RadioButtonProps>;

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedValue);

    return <RadioButton {...args} selectedValue={selected} onChange={(e) => setSelected(e.target.value)} />;
  },
  args: {
    name: 'radioGroup',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    selectedValue: 'option1',
    textColour: '#353433',
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedValue);

    return <RadioButton {...args} selectedValue={selected} onChange={(e) => setSelected(e.target.value)} />;
  },
  args: {
    name: 'radioGroupDisabled',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    selectedValue: '',
    textColour: '#918E8B',
    disabled: true,
  },
};
