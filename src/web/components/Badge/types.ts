import { HTMLProps, ReactNode } from 'react';

export type BadgeProps = {
  key: string;
  active: boolean;
  onChange: (b: boolean) => void;
  scale?: 100 | 200 | 300 | 400;
  withIcon?: boolean;
  children: ReactNode;
} & Omit<HTMLProps<HTMLDivElement>, 'ref'>;
