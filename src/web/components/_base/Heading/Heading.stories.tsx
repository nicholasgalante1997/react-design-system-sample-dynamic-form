import { type Meta, type StoryObj } from '@storybook/react'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'components/base-kit/font/heading',
  component: Heading,
  args: {
    scale: {
      type: 'select',
      options: [100, 200, 300, 400, 500, 600]
    },
    shade: {
      type: 'select',
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
  parameters: {},
  decorators: []
}

export default meta

type BodyStory = StoryObj<typeof Heading>

export const Main: BodyStory = {
  args: {
    scale: 200,
    shade: 900
  },
  render: (args) => (
    <Heading {...args}>The Call of Cthulhu</Heading>
  )
}
