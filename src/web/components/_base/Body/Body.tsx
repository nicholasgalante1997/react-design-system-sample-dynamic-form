import React, { memo } from 'react'
import classNames from 'classnames'
import { type BodyProps } from './types'

function BodyComponent ({
  className,
  scale,
  children,
  style = 'normal',
  shade = 900,
  ...rest
}: BodyProps) {
  const joinedClassName = classNames(`color-shade-${shade}`, `body-${style}-${scale}`)
  return (
    <p className={joinedClassName} {...rest}>
      {children}
    </p>
  )
}

export const Body = memo(BodyComponent)
