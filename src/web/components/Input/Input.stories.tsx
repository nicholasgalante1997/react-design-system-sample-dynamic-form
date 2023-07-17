import { type Meta, type StoryObj } from '@storybook/react';
import { Input } from './Input';
import { type InputProps } from './types';

const meta: Meta<typeof Input> = {
  title: 'components/base-kit/input',
  component: Input,
  args: {},
  decorators: [],
  parameters: {},
};

export default meta;

type SelectStory = StoryObj<typeof Input>;

export const Main: SelectStory = {
  args: {
    label: 'Select Manufacturer',
    placeholder: 'A text input...',
  },
  render: (args) => <Input {...args} />,
};
