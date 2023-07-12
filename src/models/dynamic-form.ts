import { type SectionConfiguration } from './section';

interface IDynamicForm {
  height?: string | number;
  width?: string | number;
  heading: string;
  collapsible?: boolean;
  sections: SectionConfiguration[];
  className?: string;
  id?: string;
}

const defaultFormState = {
  heading: 'Mobile Plans',
  headingAccentText: '$39.99',
  sections: []
};

export class DynamicForm implements IDynamicForm {
  height?: string | number | undefined;
  width?: string | number | undefined;
  heading: string;
  collapsible?: boolean | undefined;
  sections: SectionConfiguration[];
  className?: string | undefined;
  id?: string | undefined;
  constructor(options: IDynamicForm = defaultFormState) {
    this.height = options.height;
    this.heading = options.heading;
    this.collapsible = options.collapsible;
    this.sections = options.sections;
    this.width = options.width;
    this.className = options.className;
    this.id = options.id;
  };
  update(key: string, value: any) {
    this[key as keyof typeof this] = value;
  }
  toString() {
    /** format instance fields to json string to persist to db */
  }
  commit() {
    /** write dynamic form value to db */
  }
}
