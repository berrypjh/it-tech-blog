import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../react-elements/_shared/SectionBadgeHeader';
import type { ElementVsFiberContent } from '../content';
import { ArrowRightIcon, MapIcon, RotateIcon } from '../icons';

type Props = { content: ElementVsFiberContent['next'] };

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
        'rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'border-sky-300/70 dark:border-sky-700/70',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex flex-col gap-md">
        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[68ch]">
          {content.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-sm">
          <Link
            href={content.primaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
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
          <Link
            href={content.secondaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'border border-sky-300/80 bg-[var(--term-bg)] text-sky-700 text-xsm font-bold',
              'transition-colors hover:bg-sky-50',
              'dark:border-sky-700/70 dark:text-sky-200 dark:hover:bg-sky-950/30',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
            )}
          >
            <RotateIcon
              className="h-4 w-4 transition-transform group-hover:-rotate-90"
              aria-hidden="true"
            />
            {content.secondaryCta}
          </Link>
        </div>
      </div>
    </div>
  </section>
);
