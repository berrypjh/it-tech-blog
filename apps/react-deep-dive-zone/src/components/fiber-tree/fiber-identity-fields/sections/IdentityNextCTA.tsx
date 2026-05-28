import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { FiberIdentityFieldsContent } from '../content';
import { ArrowRightIcon, RocketIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['next'] };

export const IdentityNextCTA = ({ content }: Props) => (
  <section id="next" aria-labelledby="heading-next" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="next"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RocketIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg',
        'border-sky-300/70 dark:border-sky-700/70',
        'bg-gradient-to-br from-sky-50/80 via-white to-cyan-50/60',
        'dark:from-sky-950/40 dark:via-[var(--term-bg)] dark:to-cyan-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-[auto_minmax(0,_1fr)_auto] gap-md sm:gap-lg items-center">
        <div className="flex items-center justify-center">
          <div
            className={cn(
              'inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl',
              'bg-sky-100 text-sky-700 border border-sky-200/80',
              'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
              'shadow-[0_8px_24px_-12px_rgba(2,132,199,0.45)]',
            )}
            aria-hidden="true"
          >
            <RocketIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>
        </div>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch]">
          {content.description}
        </p>

        <Link
          href={content.buttonHref}
          className={cn(
            'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
            'bg-sky-600 text-white text-xsm font-bold tracking-tight whitespace-nowrap',
            'transition-colors hover:bg-sky-700',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
          )}
        >
          {content.buttonLabel}
          <ArrowRightIcon
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  </section>
);
