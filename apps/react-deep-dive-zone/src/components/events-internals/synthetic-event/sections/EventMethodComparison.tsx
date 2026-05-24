import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { SyntheticEventContent } from '../content';
import { BanIcon, OctagonIcon, ShieldIcon, ShieldOffIcon } from '../icons';

type Props = { content: SyntheticEventContent['methods'] };

export const EventMethodComparison = ({ content }: Props) => (
  <section aria-labelledby="heading-methods">
    <NumberedSectionHeader
      id="methods"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ShieldIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* preventDefault — teal */}
      <article
        className={cn(
          'group flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg transition-all',
          'border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-cyan-50/40',
          'dark:border-teal-700/60 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
          'shadow-[0_2px_0_var(--term-border)] hover:border-teal-300',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white shadow-[0_3px_0_rgba(13,148,136,0.3)] dark:bg-teal-400 dark:text-slate-900"
          >
            <ShieldIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
              method
            </span>
            <code className="font-mono text-md sm:text-lg font-bold text-teal-700 dark:text-teal-200 break-all">
              {content.preventDefault.title}
            </code>
          </div>
        </header>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.preventDefault.body}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2">
          <code
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
              'font-mono text-[11px] sm:text-xsm font-bold',
              'border-teal-300/80 bg-white text-teal-700 dark:border-teal-700/70 dark:bg-slate-950/40 dark:text-teal-200',
            )}
          >
            <BanIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {content.preventDefault.chip}
          </code>
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {content.preventDefault.example}
          </span>
        </div>
      </article>

      {/* stopPropagation — rose */}
      <article
        className={cn(
          'group flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg transition-all',
          'border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/30',
          'dark:border-rose-700/60 dark:from-rose-950/30 dark:via-[var(--term-bg)] dark:to-amber-950/10',
          'shadow-[0_2px_0_var(--term-border)] hover:border-rose-300',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white shadow-[0_3px_0_rgba(225,29,72,0.3)] dark:bg-rose-500/90"
          >
            <ShieldOffIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
              method
            </span>
            <code className="font-mono text-md sm:text-lg font-bold text-rose-700 dark:text-rose-200 break-all">
              {content.stopPropagation.title}
            </code>
          </div>
        </header>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.stopPropagation.body}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2">
          <code
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
              'font-mono text-[11px] sm:text-xsm font-bold',
              'border-rose-300/80 bg-white text-rose-700 dark:border-rose-700/70 dark:bg-slate-950/40 dark:text-rose-200',
            )}
          >
            <OctagonIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {content.stopPropagation.chip}
          </code>
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {content.stopPropagation.example}
          </span>
        </div>
      </article>
    </div>
  </section>
);
