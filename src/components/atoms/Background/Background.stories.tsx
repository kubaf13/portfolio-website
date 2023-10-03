import type { Meta, StoryObj } from '@storybook/react';

import { Background } from './Background';

const meta = {
  title: 'Components/atoms/Background',
  component: Background,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Background>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blueprint: Story = {};
