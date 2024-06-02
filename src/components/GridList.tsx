import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function GridList({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3',
          className,
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function GridListItem({
  title,
  className,
  invert = false,
}: {
  title: string
  className?: string
  invert?: boolean
}) {
  return (
    <li
      className={clsx(
        'text-base',

        className,
      )}
    >
      <FadeIn>
        <Border
          position="left"
          className="pl-8 text-neutral-600 before:bg-dayforce after:bg-neutral-100"
        >
          <strong
            className={clsx(
              'font-semibold',
              invert ? 'text-white' : 'text-neutral-950',
            )}
          >
            {title}.
          </strong>{' '}
        </Border>
      </FadeIn>
    </li>
  )
}
