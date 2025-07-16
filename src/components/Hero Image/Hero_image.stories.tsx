import { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './Hero_image';
import { HeroImageProps } from './Hero_image.types';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    title: { control: 'text' },
    size: { control: 'text' },
    textColour: { control: 'color' },
    overlay: { control: 'boolean' },
    height: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<HeroImageProps>;

export const Default: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Cat_%28Felis_catus%29_-_Oslo%2C_Norway_2021-05-20.jpg',
    alt: 'A black cat walking',
    title: 'Hero Image',
    size: '3rem',
    textColour: '#FFFAF5',
    overlay: true,
    height: 'auto',
  },
};

export const WithoutOverlay: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Cat_%28Felis_catus%29_-_Oslo%2C_Norway_2021-05-20.jpg',
    alt: 'A black cat walking',
    title: 'Hero Image',
    size: '3rem',
    textColour: '#FFFAF5',
    overlay: false,
    height: 'auto',
  },
};
