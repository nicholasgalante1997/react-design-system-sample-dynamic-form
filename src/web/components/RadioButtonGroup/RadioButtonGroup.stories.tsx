import { Meta, StoryObj } from '@storybook/react';
import { RadioButtonGroup } from './RadioButtonGroup';

const meta: Meta<typeof RadioButtonGroup> = {
  title: 'components/base-kit/radio-buttons',
  component: RadioButtonGroup,
  args: {},
  parameters: {},
  decorators: [],
};

export default meta;

type RadioButtonStory = StoryObj<typeof RadioButtonGroup>;

export const Main: RadioButtonStory = {
  args: {
    label: 'Phone Selection',
    items: [
      {
        key: 'iPhone',
        label: 'iPhone',
        value: 'iPhone',
      },
      {
        key: 'Android',
        label: 'Android',
        value: 'Android',
      },
    ],
  },
  render: (args) => <RadioButtonGroup {...args} />,
};

export const AsRow: RadioButtonStory = {
    args: {
      label: 'Phone Selection',
      asRow: true,
      width: '800px',
      rowBackground: 'lightblue',
      items: [
        {
          key: 'iPhone',
          label: 'iPhone',
          value: 'iPhone',
        },
        {
          key: 'Android',
          label: 'Android',
          value: 'Android',
        },
      ],
    },
    render: (args) => <RadioButtonGroup {...args} />,
  };
  