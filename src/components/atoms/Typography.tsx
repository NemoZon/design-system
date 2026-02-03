import * as React from 'react'
import { typography } from './typographyStyles'

const mergeClassName = (base: string, className?: string) =>
  className ? `${base} ${className}` : base

export function H1({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h1'>) {
  return (
    <h1
      className={mergeClassName(
        typography.h1,
        className,
      )}
      {...props}
    />
  )
}

export function H2({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2
      className={mergeClassName(
        typography.h2,
        className,
      )}
      {...props}
    />
  )
}

export function H3({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3
      className={mergeClassName(
        typography.h3,
        className,
      )}
      {...props}
    />
  )
}

export function H4({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h4'>) {
  return (
    <h4
      className={mergeClassName(
        typography.h4,
        className,
      )}
      {...props}
    />
  )
}

export function BodyLarge({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={mergeClassName(typography.bodyLarge, className)}
      {...props}
    />
  )
}

export function BodyMedium({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={mergeClassName(typography.bodyMedium, className)}
      {...props}
    />
  )
}

export function BodySmall({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={mergeClassName(typography.bodySmall, className)}
      {...props}
    />
  )
}

export function BodyExtraSmall({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={mergeClassName(typography.bodyExtraSmall, className)}
      {...props}
    />
  )
}
