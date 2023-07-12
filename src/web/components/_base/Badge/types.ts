export interface BadgeProps {
  active?: boolean;
  onChange?: (b: boolean) => void;
  scale: 100 | 200 | 300 | 400;
  withIcon?: boolean;
  children: React.ReactNode;
}
