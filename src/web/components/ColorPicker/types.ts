export type ColorPickerProps = {
  items: ColorPickerItemProps[];
  label: string;
  active?: string;
  required?: boolean;
};

export type ColorPickerItemProps = {
  key: string;
  color: {
    name: string;
    hex: string;
  };
};
