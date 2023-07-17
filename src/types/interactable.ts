import { BadgeSelectionInteractableProps } from '@/web/components/BadgeSelection/types';
import { SelectProps } from '@/web/components/SelectInput/types';
import { RadioButtonGroupProps } from '@/web/components/RadioButtonGroup/types';
import { ColorPickerProps } from '@/web/components/ColorPicker/types';
import { InputProps } from '@/web/components/Input/types';
import { RadioButtonTableProps } from '@/web/components/RadioButtonTable/types';

interface BadgeSelectionInteractable {
  kind: 'badge-selection';
  props: BadgeSelectionInteractableProps;
}

interface SelectInteractable {
  kind: 'select-interactable';
  props: SelectProps;
}

interface RadioButtonGroupInteractable {
  kind: 'radio-button-group-interactable';
  props: RadioButtonGroupProps;
}

interface ColorPickerInteractable {
  kind: 'color-picker-interactable';
  props: ColorPickerProps;
}

interface InputInteractable {
  kind: 'input-interactable';
  props: InputProps;
}

interface RadioButtonTableInteractable {
  kind: 'radio-table';
  props: RadioButtonTableProps;
}

export type Interactable =
  | BadgeSelectionInteractable
  | SelectInteractable
  | RadioButtonGroupInteractable
  | ColorPickerInteractable
  | InputInteractable
  | RadioButtonTableInteractable;
