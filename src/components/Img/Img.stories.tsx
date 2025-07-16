import { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';
import { ImgProps } from './Img.types';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<ImgProps>;

export const Default: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Cat%2C_Standard_Orange_Tabby.jpg',
    alt: 'A orange tabby cat laying on the wooden floor',
    width: 'auto',
    height: 'auto',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Cat%2C_Standard_Orange_Tabby.jpg',
    alt: 'A orange tabby cat laying on the wooden floor',
    width: 'auto',
    height: 'auto',
    disabled: true,
  },
};
