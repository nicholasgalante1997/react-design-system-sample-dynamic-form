import React, { memo } from 'react';
import { withRenderMetrics } from '../components/RenderMetric';

function FormDisplay() {
    return <React.Fragment></React.Fragment>
}

export const FormView = withRenderMetrics(
    memo(FormDisplay),
    'FormView'
)