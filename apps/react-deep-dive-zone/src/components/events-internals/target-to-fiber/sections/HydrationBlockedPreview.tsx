import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { TargetFiberContent } from '../content';
import { ArrowRightIcon, DropletIcon, ShieldIcon } from '../icons';

type Props = { content: TargetFiberContent['hydration'] };

export const HydrationBlockedPreview = ({ content }: Props) => (
  <section aria-labelledby="heading-hydration">
    <NumberedSectionHeader
      id="hydration"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<DropletIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
        'border-violet-200/80 bg-gradient-to-br from-violet-50/80 via-white to-blue-50/40',
        'dark:border-violet-700/70 dark:from-violet-950/40 dark:via-[var(--term-bg)] dark:to-blue-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,auto)] items-center gap-md lg:gap-lg">
        {/* Left description */}
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.description}
        </p>

        {/* Center hydration card */}
        <div
          aria-hidden="true"
          className={cn(
            'flex flex-col items-center gap-2 rounded-2xl border-2 px-md py-3 sm:py-md text-center',
            'border-violet-300/80 bg-white dark:border-violet-700/60 dark:bg-slate-950/40',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <span
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full',
              'bg-violet-500 text-white shadow-[0_3px_0_rgba(124,58,237,0.35)] dark:bg-violet-400 dark:text-slate-900',
            )}
          >
            <ShieldIcon className="h-5 w-5" />
          </span>
          <code className="font-mono text-xsm sm:text-sm font-bold text-violet-700 dark:text-violet-200">
            {content.centerLabel}
          </code>
          <span className="text-[10px] font-mono uppercase tracking-wider text-violet-600/80 dark:text-violet-300/70">
            {content.centerHint}
          </span>
        </div>

        {/* Right CTA */}
        <Link
          href={content.button.href}
          className={cn(
            'group inline-flex items-center justify-center gap-2 rounded-2xl border-2 px-4 py-2.5',
            'border-violet-300/80 bg-white text-violet-700 font-bold text-xsm sm:text-sm whitespace-nowrap',
            'transition-all motion-safe:hover:-translate-y-0.5 hover:border-violet-500',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            'dark:border-violet-700/70 dark:bg-slate-950/40 dark:text-violet-200',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <span className="break-keep">{content.button.label}</span>
          <ArrowRightIcon
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
          />
        </Link>
      </div>
    </article>
  </section>
);
