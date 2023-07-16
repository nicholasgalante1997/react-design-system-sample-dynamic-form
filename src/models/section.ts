import { Interactable } from './interactable';

interface SubGroup {
  interactables: Interactable[];
  height?: string;
  maxWidth?: string;
}

export interface SectionConfiguration {
  id: string;
  subheading: string;
  subtext?: string;
  dir: 'row' | 'column';
  subgroups: SubGroup[];
}
