import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { TextProps } from './Text.types';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    textColour: { control: 'color' },
    size: { control: 'text' },
    weight: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    text: 'The quick brown fox jumps over the lazy dog.',
    textColour: '#353433',
    size: '1rem',
    weight: 'normal',
  },
};

export const LargeText: Story = {
  args: {
    text: 'The quick brown fox jumps over the lazy dog.',
    textColour: '#353433',
    size: '3rem',
    weight: 'bold',
  },
};

export const ColouredText: Story = {
  args: {
    text: 'The quick brown fox jumps over the lazy dog.',
    textColour: '#5B5BFA',
    size: '1rem',
    weight: 'normal',
  },
};
