import { Interactable } from './interactable';

export interface SubGroup {
  interactables: Interactable[];
  height?: string;
  maxWidth?: string;
}
