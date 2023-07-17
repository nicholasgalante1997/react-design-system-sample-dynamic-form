import React from 'react';
import { BadgeProps } from '../Badge/types';

export type BadgeSelectionInteractableProps = {
  /** Visible text above the section */
  heading?: string;
  /** Controls UI Display of visible text */
  headingClassNames?: string[];
  /** Badge Items to be rendered */
  items: Omit<BadgeProps, 'onChange' | 'active'>[];
  /** Default active tab */
  active?: string;
} & React.HTMLProps<HTMLDivElement>;
