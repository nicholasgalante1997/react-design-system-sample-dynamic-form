import { SectionConfiguration } from './section.config';

export type PageConfiguration = {
  title: string;
  order: number;
  parentFormId: string;
  sections: SectionConfiguration[];
  collapsible?: boolean;
};
