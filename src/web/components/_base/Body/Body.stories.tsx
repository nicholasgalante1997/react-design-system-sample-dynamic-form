import { Meta, StoryObj } from '@storybook/react';
import { Body } from './Body';

const meta: Meta<typeof Body> = {
    title: 'components/base-kit/font/body',
    component: Body,
    args: {
        scale: {
            type: 'select',
            options: [100, 200, 300, 400]
        },
        shade: {
            type: 'select',
            options: [100, 200, 300, 400, 500, 600, 700, 800, 900]
        },
        style: {
            type: 'select',
            options: ['normal', 'italic', 'bold']
        }
    },
    parameters: {},
    decorators: []
};

export default meta;

type BodyStory = StoryObj<typeof Body>;

export const Main: BodyStory = {
    args: {
        scale: 200,
        shade: 900,
        style: 'normal'
    },
    render: (args) => <Body {...args}>The two beautiful dogs played in the park by the mountain.</Body>
};