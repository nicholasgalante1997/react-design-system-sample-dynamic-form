import { SubGroup } from './subgroup';

export interface SectionConfiguration {
  id: string;
  subheading: string;
  subtext?: string;
  dir: 'row' | 'column';
  subgroups: SubGroup[];
}
