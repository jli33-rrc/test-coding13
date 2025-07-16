import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { CardProps } from './Card.types';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    body: { control: 'text' },
    src: { control: 'text' },
    alt: { control: 'text' },
    footer: { control: 'text' },
    width: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColour: { control: 'color' },
    textColour: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    body: 'This is the body of the card.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Cat%2C_Standard_Orange_Tabby.jpg',
    alt: 'A orange tabby cat laying on the wooden floor',
    footer: 'Card Footer',
    width: '300px',
    disabled: false,
    backgroundColour: '#FFFAF5',
    textColour: '#353433',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Card Title',
    body: 'This is the body of the card.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Cat%2C_Standard_Orange_Tabby.jpg',
    alt: 'A orange tabby cat laying on the wooden floor',
    footer: 'Card Footer',
    width: '300px',
    disabled: true,
    backgroundColour: '#FFFAF5',
    textColour: '#353433',
  },
};
