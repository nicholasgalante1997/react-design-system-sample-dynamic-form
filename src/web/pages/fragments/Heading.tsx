import React, { memo } from 'react';
import classNames from 'classnames';
import { withRenderMetrics } from '@/web/components/RenderMetric';

function HeadingComponent() {
  const containerClassName = classNames('p-100', 'heading-container');
  return (
    <nav className={containerClassName}>
      <span className="heading-300">Spectrum Dynamic Form</span>
    </nav>
  );
}

export const Heading = withRenderMetrics(memo(HeadingComponent), 'PageHeading');
