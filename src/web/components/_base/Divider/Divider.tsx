import React, { memo } from 'react';
import { withRenderMetrics } from '../../RenderMetric';

function DividerComponent() {
    return <hr className="divider" />
}

export const Divider = withRenderMetrics(
    memo(DividerComponent),
    'Divider'
)
