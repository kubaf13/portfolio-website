import type { Meta, StoryObj } from '@storybook/react';

import { navigation } from '@/database/navigation';

import { Navigation } from './Navigation';

const meta = {
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: navigation,
};
