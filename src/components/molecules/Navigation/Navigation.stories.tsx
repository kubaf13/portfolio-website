import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';

const meta = {
  component: Navigation,
} satisfies Meta<typeof Navigation>;

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
