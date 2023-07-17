import React, { memo, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import isEq from 'lodash.isequal';
import { ColorPickerItemProps, ColorPickerProps } from './types';
import { useFormDataRelayStore } from '@/web/store';

function ColorPickerComponent({ items, label, active, required }: ColorPickerProps) {
  const [colorActiveValue, setColorActiveValue] = useState(
    items.find((option) => option.key === active)
  );
  const identifier = `color_picker_${label}_${encodeURIComponent(JSON.stringify(items))}`;
  const { fields, updateOrAddFields } = useFormDataRelayStore();
  useEffect(() => {
    if (!isEq(fields.get(identifier), colorActiveValue)) {
      updateOrAddFields(identifier, colorActiveValue);
    }
  }, [colorActiveValue, fields]);
  const joinedClassNames = useMemo(
    () => ({
      containerClassName: classNames({
        'p-200': true,
        'color-picker-container': true,
      }),
      labelClassName: classNames('body-normal-100', 'color-scale-500', 'color-picker-label'),
      itemRow: classNames('color-picker-item-row'),
      item: 'color-picker-item',
      colorLabel: classNames(
        'color-picker-color-label',
        'body-bold-100',
        'color-scale-500',
        'ml-400'
      ),
    }),
    []
  );
  const onChange = (item: ColorPickerItemProps) => setColorActiveValue(item);
  return (
    <div tabIndex={1} className={joinedClassNames.containerClassName}>
      <label tabIndex={1} className={joinedClassNames.labelClassName}>
        {label}
        {required && ' *'}
        {colorActiveValue && (
          <span className={joinedClassNames.colorLabel}>{colorActiveValue?.color.name}</span>
        )}
      </label>
      <div tabIndex={1} className={joinedClassNames.itemRow}>
        {items.map((item) => (
          <span
            role="button"
            tabIndex={1}
            onKeyDown={(e) => {
              if (e.key.toLowerCase() === 'enter' || e.key.toLowerCase() === 'return') {
                onChange(item);
              }
            }}
            onClick={() => onChange(item)}
            style={{ background: item.color.hex }}
            className={classNames({
              [joinedClassNames.item]: true,
              'color-picker-item-active': colorActiveValue?.key === item.key,
            })}
          ></span>
        ))}
      </div>
    </div>
  );
}

export const ColorPicker = memo(ColorPickerComponent);
