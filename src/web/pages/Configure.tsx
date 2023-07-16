import React, { memo } from 'react';
import { withRenderMetrics } from '../components/RenderMetric';

function ConfigureDisplay() {
  return <React.Fragment></React.Fragment>;
}

export const ConfigureView = withRenderMetrics(memo(ConfigureDisplay), 'ConfigureView');
