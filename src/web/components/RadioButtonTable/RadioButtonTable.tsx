import React, { memo, useMemo } from 'react';
import { RadioButtonTableProps } from './types';
import classNames from 'classnames';
import { RadioButtonGroup } from '../RadioButtonGroup/RadioButtonGroup';
import { withRenderMetrics } from '../RenderMetric';

function RadioButtonTableComponent(props: RadioButtonTableProps) {
  const { items, title } = props;
  const joinedClassNames = useMemo(
    () => ({
      container: 'rbt-container',
      label: classNames('heading-200', 'color-shade-900', 'rbt-label', 'mb-200'),
      itemContainer: 'rbt-item-col',
    }),
    []
  );
  return (
    <div tabIndex={1} className={joinedClassNames.container}>
      <label className={joinedClassNames.label}>{title}</label>
      <div tabIndex={1} className={joinedClassNames.itemContainer}>
        {items.map((item, index) => (
          <RadioButtonGroup
            asRow
            rowBackground={index % 2 === 0 ? 'var(--shade-400)' : 'white'}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export const RadioButtonTable = withRenderMetrics(memo(RadioButtonTableComponent), 'radio-table');
