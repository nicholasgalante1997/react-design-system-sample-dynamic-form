import { type Meta, type StoryObj } from '@storybook/react'
import { Link } from './Link'
import { type LinkProps } from './types'

const meta: Meta<typeof Link> = {
  title: 'components/base-kit/link',
  component: Link,
  args: {
    scale: {
      type: 'select',
      options: [100, 200, 300, 400]
    }
  },
  decorators: [],
  parameters: {}
}

export default meta

type LinkStory = StoryObj<typeof Link>

export const Main: LinkStory = {
  args: {
    scale: 200
  },
  render: (args: LinkProps) => <Link {...args}>Humpback Whales In Washington</Link>
}
