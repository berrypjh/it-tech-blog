import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { FiberCentralContent } from '../content';
import { ArrowRightIcon, ClipboardIcon, RocketIcon } from '../icons';

type Props = { content: FiberCentralContent['cta'] };

export const FiberFinalCTA = ({ content }: Props) => (
  <section id="final-cta" aria-labelledby="heading-final-cta" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="final-cta"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RocketIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md">
      <li>
        <Link
          href={content.primary.href}
          className={cn(
            'group flex h-full flex-col gap-sm rounded-3xl border-2 p-md sm:p-lg',
            'bg-sky-600 text-white border-sky-700/70',
            'dark:bg-sky-500 dark:text-slate-950 dark:border-sky-400/70',
            'shadow-[0_8px_24px_-12px_rgba(2,132,199,0.6)]',
            'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-sky-700 motion-safe:dark:hover:bg-sky-400',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 dark:bg-slate-950/20"
            >
              <RocketIcon className="h-6 w-6" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider opacity-90">
              Primary
            </span>
          </header>
          <h3 className="text-md sm:text-lg font-bold tracking-tight leading-snug break-keep">
            {content.primary.title}
          </h3>
          <p className="text-xsm leading-relaxed opacity-90 break-keep">
            {content.primary.description}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 font-bold text-xsm">
            <span>continue</span>
            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </Link>
      </li>

      <li>
        <Link
          href={content.secondary.href}
          className={cn(
            'group flex h-full flex-col gap-sm rounded-3xl border-2 p-md sm:p-lg',
            'bg-[var(--term-bg)] text-[var(--term-fg)] border-sky-300/80',
            'dark:border-sky-700/70',
            'shadow-[0_2px_0_var(--term-border)]',
            'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-sky-400/80 motion-safe:hover:bg-sky-50/60 motion-safe:dark:hover:bg-sky-950/30',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-12 h-12 rounded-xl',
                'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
              )}
            >
              <ClipboardIcon className="h-6 w-6" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80">
              Secondary
            </span>
          </header>
          <h3 className="text-md sm:text-lg font-bold tracking-tight leading-snug text-sky-900 dark:text-sky-100 break-keep">
            {content.secondary.title}
          </h3>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.secondary.description}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 font-bold text-xsm text-sky-700 dark:text-sky-300">
            <span>review</span>
            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </Link>
      </li>
    </ul>
  </section>
);
