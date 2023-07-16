export type SelectProps = {
  active?: string;
  className?: string;
  id?: string;
  items: { value: string; key: string; text: string }[];
  label: string;
  scale?: 100 | 200 | 300 | 400;
  multiple?: boolean;
};
