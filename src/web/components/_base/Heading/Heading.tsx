import React, { memo } from 'react';
import classNames from 'classnames';
import { type HeadingProps } from './types';

const HeadingMap = {
  h1: ({ children, ...rest }: any) => <h1 {...rest}>{children}</h1>,
  h2: ({ children, ...rest }: any) => <h2 {...rest}>{children}</h2>,
  h3: ({ children, ...rest }: any) => <h3 {...rest}>{children}</h3>,
  h4: ({ children, ...rest }: any) => <h4 {...rest}>{children}</h4>,
  h5: ({ children, ...rest }: any) => <h5 {...rest}>{children}</h5>,
  h6: ({ children, ...rest }: any) => <h6 {...rest}>{children}</h6>,
};

function HeadingComponent({
  className,
  scale,
  children,
  shade = 900,
  as = 'h1',
  ...rest
}: HeadingProps) {
  const joinedClassName = classNames(`color-shade-${shade}`, `heading-${scale}`);
  const LocalHeadingComponent = HeadingMap[as];
  return (
    <LocalHeadingComponent className={joinedClassName} {...rest}>
      {children}
    </LocalHeadingComponent>
  );
}

export const Heading = memo(HeadingComponent);
