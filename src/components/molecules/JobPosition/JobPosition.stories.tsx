import type { Meta, StoryObj } from '@storybook/react';

import { jobPositions } from '@/database/experience/jobPositions';

import { JobPosition } from './JobPosition';

const meta = {
  component: JobPosition,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof JobPosition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Job: Story = {
  args: jobPositions,
};
