export type InputProps = React.HTMLProps<HTMLInputElement> & {
  label: string;
  validations?: ((value: string) => boolean)[];
};
