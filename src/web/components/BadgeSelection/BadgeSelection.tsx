import React, { memo, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { Badge } from '@/web/components/Badge';
import { withRenderMetrics } from '@/web/components/RenderMetric';
import { useFormDataRelayStore } from '@/web/store';
import { BadgeSelectionInteractableProps } from './types';

function BadgeSelectionComponent(props: BadgeSelectionInteractableProps) {
  const { items, heading, headingClassNames, className, active: propActive, ...rest } = props;
  const identifier = `badge_selection_component_${encodeURIComponent(JSON.stringify(items))}`;
  const { fields, updateOrAddFields } = useFormDataRelayStore();
  const [active, setActive] = useState(propActive);
  useEffect(() => {
    if (fields.get(identifier) !== active) {
      updateOrAddFields(identifier, active);
    }
  }, [active, fields]);
  const joinedClassnames = useMemo(
    () => ({
      heading: classNames(headingClassNames),
      parentContainer: classNames('badge-selection-container', 'mt-200', 'mb-200', 'p-200'),
      itemsContainer: classNames('badge-selection-container-items'),
    }),
    [headingClassNames]
  );
  return (
    <div className={joinedClassnames.parentContainer}>
      {heading && <h1 className={joinedClassnames.heading}>{heading}</h1>}
      <div className={joinedClassnames.itemsContainer}>
        {items.map((item) => (
          <Badge
            {...item}
            className="mr-200"
            onChange={() => setActive(item.key)}
            active={active === item.key}
          >
            {item.children}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export const BadgeSelection = withRenderMetrics(memo(BadgeSelectionComponent), 'badge-selection');
