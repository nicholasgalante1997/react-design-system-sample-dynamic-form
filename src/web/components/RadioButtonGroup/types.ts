export type RadioButtonGroupProps = {
  label: string;
  items: {
    value: string;
    key: string;
    label: string;
  }[];
  active?: string;
  asRow?: boolean;
  rowBackground?: string;
  width?: string;
};
