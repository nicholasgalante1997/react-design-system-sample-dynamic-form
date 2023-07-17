import { type SectionConfiguration } from './section.config';

interface IDynamicForm {
  height?: string | number;
  width?: string | number;
  heading: string;
  collapsible?: boolean;
  pages: SectionConfiguration[][];
  className?: string;
  id?: string;
}

const defaultFormState = {
  heading: 'Mobile Plans',
  headingAccentText: '$39.99',
  pages: [],
};

export class DynamicForm implements IDynamicForm {
  height?: string | number | undefined;
  width?: string | number | undefined;
  heading: string;
  collapsible?: boolean | undefined;
  pages: SectionConfiguration[][];
  className?: string | undefined;
  id?: string | undefined;
  constructor(options: IDynamicForm = defaultFormState) {
    this.height = options.height;
    this.heading = options.heading;
    this.collapsible = options.collapsible;
    this.pages = options.pages;
    this.width = options.width;
    this.className = options.className;
    this.id = options.id;
  }
  update(key: string, value: any) {
    this[key as keyof typeof this] = value;
  }
  toString() {
    /** format instance fields to json string to persist to db */
  }
  asJsonObject() {}
  commit() {
    /** write dynamic form value to db */
  }
}
