import { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { LabelProps } from './Label.types';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    htmlFor: { control: 'text' },
    textColour: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    text: 'Label',
    htmlFor: 'label',
    textColour: '#353433',
  },
};

export const WithHTMLFor: Story = {
  args: {
    text: 'Username',
    htmlFor: 'username',
    textColour: '#353433',
  },
};
