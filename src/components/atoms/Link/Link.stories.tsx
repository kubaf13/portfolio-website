import type { LinkProps } from '@atoms/Link/Link.types';
import centered from '@storybook/addon-centered';
import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

const meta = {
  component: Link,
  decorators: [centered],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

const linkMocks: LinkProps = {
  url: '/',
  label: 'about me',
  ariaLabel: 'about me',
  openInNewTab: false,
};

export const Primary: Story = {
  args: linkMocks,
};
