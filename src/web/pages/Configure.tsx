import React, { memo } from 'react';
import { withRenderMetrics } from '../components/RenderMetric';
import { Button } from '../components/Button/Button';

type ConfigureDisplayProps = {
  set: React.Dispatch<React.SetStateAction<'default' | 'beta' | 'gamma'>>;
  formKey: 'default' | 'beta' | 'gamma';
};

function ConfigureDisplay({ formKey, set }: ConfigureDisplayProps) {
  return (
    <div className="configure-column">
      <Button onClick={() => set('default')} text="Standard" fill={formKey === 'default'} />
      <Button onClick={() => set('beta')} text="Beta" fill={formKey === 'beta'} />
    </div>
  );
}

export const ConfigureView = withRenderMetrics(memo(ConfigureDisplay), 'ConfigureView');
