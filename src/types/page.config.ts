import { LinkConfiguration } from '@/web/components/Link';
import { SectionConfiguration } from './section.config';

export type PageConfiguration = {
  title: string;
  order: number;
  parentFormId: string;
  collapsibleHeading: string;
  collapsibleSideHeading: string;
  sections: SectionConfiguration[];
  footer: {
    duplicateFormText: string;
    links?: LinkConfiguration[];
  };
};
