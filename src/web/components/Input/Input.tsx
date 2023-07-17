import React, { ChangeEvent, memo, useMemo, useState } from 'react';
import classNames from 'classnames';
import { InputProps } from './types';

function InputComponent({ label, className, required, value, ...rest }: InputProps) {
  const [localInputValue, setLocalInputValue] = useState(value);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setLocalInputValue(e.target.value);
  const joinedClassNames = useMemo(
    () => ({
      containerClassName: classNames('input-container', 'p-200'),
      labelClassName: classNames('input-label', 'body-normal-100', 'mt-200'),
      input: classNames('input', 'mt-200'),
    }),
    []
  );
  return (
    <div className={joinedClassNames.containerClassName}>
      <label className={joinedClassNames.labelClassName}>
        {label}
        {required && ' *'}
      </label>
      <input
        onChange={onChange}
        value={localInputValue}
        className={joinedClassNames.input}
        {...rest}
      />
    </div>
  );
}

export const Input = memo(InputComponent);
