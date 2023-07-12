import { type SectionConfiguration } from './section'

interface IDynamicForm {
  height?: string | number
  width?: string | number
  heading: string
  headingAccentText?: string
  sections: SectionConfiguration[]
}

const defaultFormState = {
  heading: 'Mobile Plans',
  headingAccentText: '$39.99'
}

export class DynamicForm implements IDynamicForm {
  height?: string | number | undefined
  width?: string | number | undefined
  heading: string
  headingAccentText?: string | undefined
  sections: SectionConfiguration[]
  constructor (options: IDynamicForm) {
    this.height = options.height
    this.heading = options.heading
    this.headingAccentText = options.headingAccentText
    this.sections = options.sections
    this.width = options.width
  }
}
