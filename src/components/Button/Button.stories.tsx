import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColour: { control: 'color' },
    textColour: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    label: 'BUTTON',
    disabled: false,
    backgroundColour: '#5B5BFA',
    textColour: '#FFFAF5',
  },
};

export const Disabled: Story = {
  args: {
    label: 'BUTTON',
    disabled: true,
    backgroundColour: '#D4D0CC',
    textColour: '#FFFAF5',
  },
};
