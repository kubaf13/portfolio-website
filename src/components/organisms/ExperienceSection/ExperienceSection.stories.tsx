import type { Meta, StoryObj } from '@storybook/react';

import { jobPosition } from '@/database/experience/jobPositions';

import { ExperienceSection } from './ExperienceSection';

const meta = {
  component: ExperienceSection,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ExperienceSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sectionTitle: 'experience',
    companies: [
      {
        companyName: 'performance media',
        jobs: [jobPosition, jobPosition, jobPosition],
      },
    ],
  },
};
