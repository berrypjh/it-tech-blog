import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../react-elements/_shared/SectionBadgeHeader';
import type { FunctionClassComponentFiberContent } from '../content';
import { ArrowRightIcon, MapIcon, RocketIcon } from '../icons';

type Props = { content: FunctionClassComponentFiberContent['next'] };

export const NextStepCTA = ({ content }: Props) => (
  <section id="next" aria-labelledby="heading-next" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="next"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border-2',
        'border-sky-300/70 dark:border-sky-700/70',
        'bg-gradient-to-br from-sky-50 via-white to-violet-50',
        'dark:from-sky-950/40 dark:via-[var(--term-bg)] dark:to-violet-950/20',
        'p-md sm:p-lg lg:p-xl',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -right-6 w-32 h-32 rounded-full bg-violet-300/20 blur-2xl"
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)_auto] gap-md sm:gap-lg items-center">
        <div className="flex justify-center lg:justify-start">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-20 h-20 rounded-2xl',
              'bg-gradient-to-br from-sky-500 to-violet-500 text-white',
              'shadow-[0_12px_30px_-12px_rgba(2,132,199,0.55)]',
              'rotate-[-12deg]',
            )}
          >
            <RocketIcon className="h-10 w-10" />
          </span>
        </div>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch] text-center lg:text-left">
          {content.description}
        </p>

        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <Link
            href={content.primaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 rounded-md px-lg py-3',
              'bg-sky-600 text-white text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-sky-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
            )}
          >
            {content.primaryCta}
            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
