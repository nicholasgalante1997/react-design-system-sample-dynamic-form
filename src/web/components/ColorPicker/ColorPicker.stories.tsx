import { type Meta, type StoryObj } from '@storybook/react';
import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'components/base-kit/color-picker',
  component: ColorPicker,
  args: {},
  parameters: {},
  decorators: [],
};

export default meta;

type ColorPickerStory = StoryObj<typeof ColorPicker>;

export const Main: ColorPickerStory = {
  args: {
    label: 'Color',
    items: [
      {
        color: {
          hex: '#8ECAE6',
          name: 'Sky Blue',
        },
        key: 'sky-blue',
      },
      {
        color: {
          hex: '#219EBC',
          name: 'Sea Foam',
        },
        key: 'sea-foam',
      },
      {
        color: {
          hex: '#FB8500',
          name: 'Orange',
        },
        key: 'orange',
      },
    ],
  },
  render: (args) => <ColorPicker {...args} />,
};
