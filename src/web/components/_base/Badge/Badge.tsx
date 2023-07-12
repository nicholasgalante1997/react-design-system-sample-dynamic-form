import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { withRenderMetrics } from '@/web/components/RenderMetric';
import { type BadgeProps } from './types';


function BadgeComponent(props: BadgeProps) {
  const { active = false, onChange, scale, withIcon, children } = props;
  const [lActive, setLActive] = useState(active);
  const onClick = () => {
    setLActive((p) => !p);
  };
  const containerClassName = classNames({
    'badge-container-border': true,
    'br-300': true,
    'badge-container-width': true,
    'background-badge-active-100': lActive,
    'background-badge-normal-100': !lActive,
    'p-200': true,
  });
  const spanClassName = classNames({
    'color-shade-900': !lActive,
    'color-shade-100': lActive,
    [`body-normal-${scale}`]: !lActive,
    [`body-bold-${scale}`]: lActive,
  });

  const checkJsx = withIcon && lActive && (
    <img
      className="badge-check-svg"
      height="16px"
      width="16px"
      src="/check.svg"
      alt="a check mark"
    />
  );

  useEffect(() => {
    onChange != null && onChange(active);
  }, [active]);

  return (
    <div className={containerClassName} onClick={onClick}>
      <span className={spanClassName}>
        {checkJsx}
        {children}
      </span>
    </div>
  );
}

export const Badge = withRenderMetrics(
  memo(BadgeComponent),
  'Badge'
);
