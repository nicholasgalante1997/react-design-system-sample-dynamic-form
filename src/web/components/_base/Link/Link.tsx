import React, { memo } from 'react'
import { type LinkProps } from './types'

function LinkComponent ({ children, className, ...rest }: LinkProps) {
  return (
        <a {...rest}>
            {children}
        </a>
  )
}
