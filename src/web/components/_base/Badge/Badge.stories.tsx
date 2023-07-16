import { type Meta, type StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'components/base-kit/badge',
  component: Badge,
  args: {
    scale: {
      type: 'select',
      options: [100, 200, 300, 400],
    },
    withIcon: {
      type: 'radio',
      options: [true, false],
    },
  },
  parameters: {},
  decorators: [],
};

export default meta;

type BadgeStory = StoryObj<typeof Badge>;

export const Normal: BadgeStory = {
  args: {
    scale: 200,
    key: 'story-1'
  },
  render: (args) => <Badge {...args}>The Call of Cthulhu</Badge>,
};

export const Active: BadgeStory = {
  args: {
    scale: 200,
    withIcon: true,
    active: true,
    key: 'story-2'
  },
  render: (args) => <Badge {...args}>The Call of Cthulhu</Badge>,
};

