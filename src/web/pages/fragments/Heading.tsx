import React, { memo } from 'react';
import classNames from 'classnames';
import { withRenderMetrics } from '@/web/components/RenderMetric';
import { HeadingProps } from './types';

function HeadingComponent({ current, update }: HeadingProps) {
    const containerClassName = classNames('p-300', 'heading-container');
    return (
        <nav className={containerClassName}>
            <span className="heading-300">Spectrum Dynamic Form</span>
        </nav>
    );
}

export const Heading = withRenderMetrics(
    memo(HeadingComponent),
    'PageHeading'
);
