import { Interactable } from "./interactable";

export interface SectionConfiguration {
  id: string;
  subheading: string;
  subtext?: string;
  dir: 'row' | 'column';
  interactables: Interactable[];
}
