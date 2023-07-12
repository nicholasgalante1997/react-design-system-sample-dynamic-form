import React, { memo, useState } from 'react';
import { SelectProps } from './types';
import classNames from 'classnames';

function SelectComponent({ items, label, active, className, id, scale }: SelectProps) {
    const [optionsActiveValue, setOptionsActiveValue] = useState(items.find(option => option.value === active));
    const containerClassName = classNames({
        [className ?? '']: !!className,
        'br-200': true,
        'p-200': true,
        'select-input-container': true
    })
    return (
        <select className={containerClassName}>
            {items.map(({ key, text, value }) => <option value={value} key={key}>{text}</option>)}
        </select>
    );
}

export const Select = memo(SelectComponent);
