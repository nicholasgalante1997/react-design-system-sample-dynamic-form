export type SelectProps = {
  active?: string;
  className?: string;
  items: { value: string; key: string; text: string }[];
  label: string;
  required?: boolean;
};
