import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import isEq from 'lodash.isequal';
import { SelectProps } from './types';
import { useFormDataRelayStore } from '@/web/store';

function SelectComponent({ items, label, active, className, required }: SelectProps) {
  const [optionsActiveValue, setOptionsActiveValue] = useState(
    items.find((option) => option.value === active)
  );
  const onSelect: React.ChangeEventHandler<HTMLSelectElement> = useCallback(function (
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const { value } = event.target;
    setOptionsActiveValue(items.find((item) => item.value === value));
  }, []);
  const identifier = `select_${encodeURIComponent(JSON.stringify(items))}`;
  const { fields, updateOrAddFields } = useFormDataRelayStore();
  useEffect(() => {
    if (!isEq(fields.get(identifier), optionsActiveValue)) {
      updateOrAddFields(identifier, optionsActiveValue);
    }
  }, [optionsActiveValue, fields]);
  const joinedClassNames = useMemo(
    () => ({
      containerClassName: classNames({
        [className ?? '']: !!className,
        'br-200': true,
        'p-200': true,
        'select-input-container': true,
      }),
      labelClassName: classNames('body-normal-100', 'color-scale-500', 'select-label'),
      input: classNames('select-input', 'body-normal-100'),
    }),
    [className]
  );
  return (
    <div tabIndex={1} className={joinedClassNames.containerClassName}>
      <label className={joinedClassNames.labelClassName}>
        {label}
        {required && ' *'}
      </label>
      <select
        value={optionsActiveValue?.key}
        onChange={onSelect}
        className={joinedClassNames.input}
        tabIndex={1}
      >
        {items.map(({ key, text, value }) => (
          <option tabIndex={1} value={value} key={key}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}

export const Select = memo(SelectComponent);
