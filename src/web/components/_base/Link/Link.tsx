import React, { memo } from 'react'
import classNames from 'classnames'
import { type LinkProps } from './types'

function LinkComponent ({ children, scale = 200, className, ...rest }: LinkProps) {
  const joinedCN = classNames(
    className,
    `body-normal-${scale}`,
    'color-text-link-normal-100',
    'spectrum-link'
  )
  return (
    <a className={joinedCN} {...rest}>
      {children}
    </a>
  )
}

export const Link = memo(LinkComponent)
