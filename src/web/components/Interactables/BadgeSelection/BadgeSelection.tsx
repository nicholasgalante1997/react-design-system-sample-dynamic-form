import React, { memo, useMemo, useState } from 'react';
import classNames from 'classnames';
import { Badge } from '@/web/components/_base/Badge';
import { withRenderMetrics } from '@/web/components/RenderMetric';
import { BadgeSelectionInteractableProps } from './types';

function BadgeSelectionComponent(props: BadgeSelectionInteractableProps) {
    const { items, heading, headingClassNames, className, active: propActive, ...rest} = props;
    const [active, setActive] = useState(propActive);
    const joinedClassnames = useMemo(() => ({
        heading: classNames(headingClassNames),
        parentContainer: classNames("badge-selection-container", 'mt-200', 'mb-200', 'p-200'),
        itemsContainer: classNames("badge-selection-container-items")
    }), [headingClassNames]);
    return (
        <div className={joinedClassnames.parentContainer}>
            {heading && <h1 className={joinedClassnames.heading}>{heading}</h1>}
            <div className={joinedClassnames.itemsContainer}>
                {items.map(item => <Badge {...item} className='mr-200' onChange={() => setActive(item.key)} active={active === item.key}>{item.children}</Badge>)}
            </div>
        </div>
    );
}

export const BadgeSelection = withRenderMetrics(
    memo(BadgeSelectionComponent),
    'badge-selection'
);
