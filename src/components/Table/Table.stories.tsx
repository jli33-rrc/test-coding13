import { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { TableProps } from './Table.types';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    hoverable: { control: 'boolean' },
    striped: { control: 'boolean' },
    backgroundColour: { control: 'color' },
    textColour: { control: 'color' },
    headerBackgroundColour: { control: 'color' },
    footerBackgroundColour: { control: 'color' },
    hoverColour: { control: 'color' },
    stripeColour: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<TableProps>;

export const Default: Story = {
  args: {
    headers: ['HEADER', 'HEADER', 'HEADER'],
    rows: [
      ['Row 1', '1', '1'],
      ['Row 2', '2', '2'],
      ['Row 3', '3', '3'],
    ],
    footer: ['FOOTER', 'FOOTER', 'FOOTER'],
    hoverable: false,
    striped: false,
    backgroundColour: '#FFFAF5',
    textColour: '#353433',
    headerBackgroundColour: '#D4D0CC',
    footerBackgroundColour: '#D4D0CC',
  },
};

export const HoverAndStriped: Story = {
  args: {
    headers: ['HEADER', 'HEADER', 'HEADER'],
    rows: [
      ['Row 1', '1', '1'],
      ['Row 2', '2', '2'],
      ['Row 3', '3', '3'],
    ],
    footer: ['FOOTER', 'FOOTER', 'FOOTER'],
    hoverable: true,
    striped: true,
    backgroundColour: '#FFFAF5',
    textColour: '#353433',
    headerBackgroundColour: '#D4D0CC',
    footerBackgroundColour: '#D4D0CC',
    hoverColour: '#918E8B',
    stripeColour: '#D4D0CC',
  },
};
