export interface SectionConfiguration {
  id: string;
  subheading: string;
  dir: 'row' | 'column';
  interactables: Interactable[];
}
