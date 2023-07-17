import { type Meta, type StoryObj } from '@storybook/react';
import { BadgeSelection } from './BadgeSelection';

const meta: Meta<typeof BadgeSelection> = {
  title: 'components/composite/badge-selection',
  component: BadgeSelection,
  args: {},
  parameters: {},
  decorators: [],
};

export default meta;

type BadgeSelectionStory = StoryObj<typeof BadgeSelection>;

export const Main: BadgeSelectionStory = {
  args: {
    heading: 'Plan Options',
    headingClassNames: ['body-bold-300'],
    active: 'iPhone',
    items: [
      {
        children: 'iPhone',
        key: 'iPhone',
        scale: 100,
        withIcon: true,
      },
      {
        children: 'Samsung',
        key: 'Samsung',
        scale: 100,
        withIcon: true,
      },
    ],
  },
  render: (args) => <BadgeSelection {...args} />,
};
