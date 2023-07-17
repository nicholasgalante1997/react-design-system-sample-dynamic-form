import { type Meta, type StoryObj } from '@storybook/react';
import { Select } from './SelectInput';
import { type SelectProps } from './types';

const meta: Meta<typeof Select> = {
  title: 'components/base-kit/select',
  component: Select,
  args: {},
  decorators: [],
  parameters: {},
};

export default meta;

type SelectStory = StoryObj<typeof Select>;

export const Main: SelectStory = {
  args: {
    label: 'Select Manufacturer',
    items: [
      {
        key: 'Apple',
        text: 'Apple',
        value: 'Apple',
      },
      {
        key: 'Google',
        text: 'Google',
        value: 'Google',
      },
      {
        key: 'Android',
        text: 'Android',
        value: 'Android',
      },
    ],
  },
  render: (args) => <Select {...args} />,
};
