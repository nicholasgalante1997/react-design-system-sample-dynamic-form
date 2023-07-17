import { type SectionConfiguration } from './section.config';

interface DynamicFormShape {
  heading: string;
  collapsible?: boolean;
  pages: SectionConfiguration[][];
  className?: string;
  id?: string;
  actionEndpoint: string;
  configEndpoint: string;
}

const defaultFormState = {
  heading: 'Mobile Plans',
  headingAccentText: '$39.99',
  collapsible: true,
  pages: [],
  configEndpoint: 'http://localhost:3000/load-form',
  actionEndpoint: 'http://localhost:3000/submit',
};

export class DynamicForm implements DynamicFormShape {
  heading: string;
  actionEndpoint: string;
  configEndpoint: string;
  collapsible?: boolean | undefined;
  pages: SectionConfiguration[][];
  className?: string | undefined;
  id?: string | undefined;
  constructor(options: DynamicFormShape = defaultFormState) {
    this.heading = options.heading;
    this.collapsible = options.collapsible;
    this.pages = options.pages;
    this.className = options.className;
    this.id = options.id;
    this.actionEndpoint = options.actionEndpoint;
    this.configEndpoint = options.configEndpoint;
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
