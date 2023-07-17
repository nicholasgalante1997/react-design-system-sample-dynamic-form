import React, { memo } from 'react';
import { ButtonProps } from './types';
import classNames from 'classnames';
import { withRenderMetrics } from '../RenderMetric';

function ButtonComponent(props: ButtonProps) {
  const joinedClassName = classNames({
    'button-normal': !props.fill,
    'button-fill': props.fill,
  });
  return (
    <button onClick={props.onClick} className={joinedClassName}>
      {props.text}
    </button>
  );
}

export const Button = withRenderMetrics(memo(ButtonComponent), 'button');
