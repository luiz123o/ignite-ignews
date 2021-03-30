import Link, { LinkProps } from 'next/link'

import { useRouter } from 'next/router'
import { ReactElement, cloneElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  isActive: boolean
}

export function ActiveLink({ isActive, children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const activeStats = asPath === rest.href ? isActive : false

  return (
    <Link {...rest}>
      {cloneElement(children, {
        activeStats
      })}
    </Link>
  )
}
