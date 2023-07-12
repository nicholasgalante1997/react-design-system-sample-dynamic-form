import { BadgeProps } from "../../_base/Badge/types";
import { LinkConfiguration } from "../../_base/Link";

export interface BadgeSelectionInteractableProps {
  subheading: string;
  subtext?: string;
  withLink?: LinkConfiguration;
  items: BadgeProps[];
}
