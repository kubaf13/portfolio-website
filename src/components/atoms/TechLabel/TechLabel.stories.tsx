import type { Meta, StoryObj } from '@storybook/react';

import { TechLabel } from './TechLabel';

const meta = {
  component: TechLabel,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TechLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WhiteLabel: Story = {
  args: {
    label: 'typescript',
    isYellow: false,
  },
};
