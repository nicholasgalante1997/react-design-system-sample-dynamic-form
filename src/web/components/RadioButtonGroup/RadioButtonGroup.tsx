import React, { memo, useMemo, useState } from 'react';
import classNames from 'classnames';
import { RadioButtonGroupProps } from './types';
import { withRenderMetrics } from '../RenderMetric';

function RadioButtonGroupComponent(props: RadioButtonGroupProps) {
  const { items, label, active, asRow = false, rowBackground, width = '100%' } = props;
  const [checkedValue, setCheckedValue] = useState(items.find((item) => item.value === active));
  const joinedClassNames = useMemo(
    () => ({
      parentContainer: classNames({
        ['radio-button-group-container-as-row']: asRow,
        ['radio-button-group-container']: !asRow,
        'mb-200': !asRow,
      }),
      label: classNames({
        ['body-normal-100']: true,
        ['mb-200']: !asRow,
        ['ml-200']: asRow,
      }),
      radioButton: classNames('mr-200', 'radio-button'),
      radioLabel: 'radio-label',
      row: classNames({
        row: !asRow,
        'row-reverse': asRow,
      }),
    }),
    []
  );
  const inlineContainerStyle = useMemo(() => {
    if (!asRow) return {};
    return {
      background: rowBackground,
      width,
    };
  }, [asRow, rowBackground, width]);
  return (
    <div
      role="radiogroup"
      style={inlineContainerStyle}
      className={joinedClassNames.parentContainer}
    >
      <label className={joinedClassNames.label}>{label}</label>
      <div className={joinedClassNames.row}>
        {items.map((item) => (
          <div className="mr-100">
            <input
              name={label}
              key={item.key}
              id={item.key}
              checked={item.value === checkedValue?.value}
              type="radio"
              role="radio"
              value={item.value}
              onChange={() => setCheckedValue(item)}
            />
            <label
              className={classNames({
                [joinedClassNames.radioLabel]: true,
                'body-normal-200': true,
                ['radio-label-active']: checkedValue?.value === item.value,
              })}
              htmlFor={item.key}
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export const RadioButtonGroup = withRenderMetrics(
  memo(RadioButtonGroupComponent),
  'radio-button-group'
);
