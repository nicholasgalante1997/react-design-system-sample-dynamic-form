import { BadgeSelectionInteractableProps } from '@/web/components/BadgeSelection/types';

interface BadgeSelectionInteractable {
  kind: 'badge-selection';
  props: BadgeSelectionInteractableProps;
}

interface SelectInteractable {
  kind: 'select-interactable';
  props: {};
}

export type Interactable = BadgeSelectionInteractable;
