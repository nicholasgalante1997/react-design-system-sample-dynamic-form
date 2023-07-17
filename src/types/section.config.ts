import { SubGroup } from './subgroup';

export interface SectionConfiguration {
  id: string;
  subheading?: string;
  subtext?: string;
  subgroups: SubGroup[];
}
