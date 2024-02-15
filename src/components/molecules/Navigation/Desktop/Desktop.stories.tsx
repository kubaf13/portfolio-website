import type { Meta, StoryObj } from '@storybook/react';

import { Desktop } from './Desktop';

const meta = {
  component: Desktop,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Desktop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      {
        url: '/',
        label: 'about me',
        ariaLabel: 'about me',
        openInNewTab: false,
      },
      {
        url: '/',
        label: 'about me',
        ariaLabel: 'about me',
        openInNewTab: false,
      },
      {
        url: '/',
        label: 'about me',
        ariaLabel: 'about me',
        openInNewTab: false,
      },
    ],
  },
};
