import React, { memo, useMemo } from 'react';
import classNames from 'classnames';
import { withRenderMetrics } from '@/web/components/RenderMetric';
import { type BadgeProps } from './types';

function BadgeComponent(props: BadgeProps) {
  const { active = false, onChange, scale, withIcon, children, className, ...rest } = props;
  const joinedClassnames = useMemo(() => ({
    container: classNames({
      'badge-container-border-normal': !active,
      'badge-container-border-active': active,
      'br-300': true,
      'badge-container': true,
      'background-badge-active-100': active,
      'background-badge-normal-100': !active,
      'p-200': true,
      [className ?? '']: !!className,
    }),
    span: classNames({
      'color-shade-900': !active,
      'color-shade-100': active,
      [`body-normal-${scale}`]: !active,
      [`body-bold-${scale}`]: active,
    })
  }), [active]);

  const checkJsx = useMemo(() => withIcon && active && (
    <img
      className="badge-check-svg"
      height="16px"
      width="16px"
      src="/check.svg"
      alt="a check mark"
    />
  ), [withIcon, active]);

  return (
    <div className={joinedClassnames.container} onClick={onChange} {...rest}>
      <span className={joinedClassnames.span}>
        {checkJsx}
        {children}
      </span>
    </div>
  );
}

export const Badge = withRenderMetrics(memo(BadgeComponent), 'Badge');
