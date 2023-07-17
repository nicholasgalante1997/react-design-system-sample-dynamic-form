import React, { memo, useCallback, useMemo, useState } from 'react';
import { SelectProps } from './types';
import classNames from 'classnames';

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
    <div className={joinedClassNames.containerClassName}>
      <label className={joinedClassNames.labelClassName}>
        {label}
        {required && ' *'}
      </label>
      <select
        value={optionsActiveValue?.key}
        onChange={onSelect}
        className={joinedClassNames.input}
      >
        {items.map(({ key, text, value }) => (
          <option value={value} key={key}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}

export const Select = memo(SelectComponent);
