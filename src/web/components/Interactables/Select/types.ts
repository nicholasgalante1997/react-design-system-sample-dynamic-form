import { BadgeProps } from '../../_base/Badge/types';
import { LinkConfiguration } from '../../_base/Link';

export interface SelectFormProps {
  subheading: string;
  subtext?: string;
  withLink?: LinkConfiguration;
  items: BadgeProps[];
}
