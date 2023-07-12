import React, { Profiler, ProfilerOnRenderCallback, useCallback } from 'react';
import { logger, post } from '@/utils';

const onRender: ProfilerOnRenderCallback = function (...args) {
    post('/metrics/render', { ...args }, {})
        .then(res => {
            if (res.ok) {
                logger.info('Posted metric for ' + args[0]);
            } else {
                logger.warn(res.error);
            }
        })
        .catch(e => logger.error(e));
}

export function withRenderMetrics<P = {} & JSX.IntrinsicAttributes>(Component: React.FC<P>, id: string) {
    const memoizedOnRender = useCallback(onRender, []);
    return function (props: P) {
        return (
            <Profiler onRender={memoizedOnRender} id={id}>
                <Component {...props as P & JSX.IntrinsicAttributes} />
            </Profiler>
        );
    }
}