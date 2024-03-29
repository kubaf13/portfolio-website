import type { Meta, StoryObj } from '@storybook/react';

import { SectionTitle } from './SectionTitle';

const meta = {
  component: SectionTitle,
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'experience',
  },
};
