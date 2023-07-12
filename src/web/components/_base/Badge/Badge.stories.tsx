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

type BodyStory = StoryObj<typeof Badge>;

export const Main: BodyStory = {
  args: {
    scale: 200,
  },
  render: (args) => <Badge {...args}>The Call of Cthulhu</Badge>,
};
