import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { OnClickClickContent, Tone } from '../content';
import {
  ArrowDownIcon,
  ChevronRightIcon,
  CornerDownRightIcon,
  GitBranchIcon,
  LayersIcon,
  SparklesIcon,
} from '../icons';

type Props = { content: OnClickClickContent['twoPhase'] };

const branchTone: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50 text-sky-800 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-100',
  cyan: 'border-cyan-300/80 bg-cyan-50 text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-100',
  teal: 'border-teal-300/80 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-100',
  emerald:
    'border-emerald-300/80 bg-emerald-50 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-100',
  violet:
    'border-violet-300/80 bg-violet-50 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-100',
  blue: 'border-blue-300/80 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-100',
  amber:
    'border-amber-300/80 bg-amber-50 text-amber-900 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-100',
  rose: 'border-rose-300/80 bg-rose-50 text-rose-800 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-100',
};

export const TwoPhaseRegistrationPreview = ({ content }: Props) => (
  <section aria-labelledby="heading-two-phase">
    <NumberedSectionHeader
      id="two-phase"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,4fr)] gap-md items-stretch">
      {/* LEFT: bubble preview */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/30',
          'shadow-[0_2px_0_var(--term-border)] transition-colors hover:border-teal-400',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-teal-200 bg-white text-teal-700 dark:border-teal-800/60 dark:bg-slate-950/40 dark:text-teal-200"
          >
            <LayersIcon className="h-4 w-4" />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
            bubble
          </span>
        </header>
        <code className="font-mono text-md sm:text-lg font-bold text-teal-700 dark:text-teal-200 break-all">
          {content.bubbleCard.label}
        </code>
        <p className="text-xsm sm:text-sm text-[var(--term-muted)] break-keep">
          {content.bubbleCard.description}
        </p>
      </article>

      {/* CENTER: branching diagram */}
      <article
        className={cn(
          'flex flex-col items-center gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-violet-300/90 bg-gradient-to-br from-violet-50 to-blue-50/60',
          'dark:border-violet-600/80 dark:from-violet-950/40 dark:to-blue-950/30',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        {/* Center code pill */}
        <code
          className={cn(
            'rounded-full border-2 px-4 py-2 font-mono text-[11px] sm:text-xsm font-bold text-center break-all',
            'border-violet-400/80 bg-white text-violet-700 shadow-sm',
            'dark:border-violet-600/70 dark:bg-slate-950/40 dark:text-violet-200',
          )}
        >
          {content.centerCode}
        </code>

        {/* Branch lines */}
        <div
          aria-hidden="true"
          className="flex flex-col items-center text-violet-500 dark:text-violet-300"
        >
          <ArrowDownIcon className="h-4 w-4" />
          <span className="block h-3 w-px bg-violet-300/70 dark:bg-violet-700/60" />
          <CornerDownRightIcon className="h-4 w-4 -rotate-12" />
        </div>

        {/* Two branches */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
          {content.branches.map((b) => (
            <li
              key={b.label}
              className={cn(
                'flex flex-col items-center gap-1 rounded-xl border-2 px-3 py-3 text-center',
                branchTone[b.tone],
              )}
            >
              <code className="font-mono text-xsm sm:text-sm font-bold break-all">{b.label}</code>
              <span className="text-[10px] font-mono uppercase tracking-wider opacity-75">
                {b.sub}
              </span>
            </li>
          ))}
        </ul>

        <p className="sr-only">
          {content.centerCode} → {content.branches.map((b) => `${b.label} (${b.sub})`).join(' / ')}
        </p>
      </article>

      {/* RIGHT: next-step preview */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200/80 bg-gradient-to-br from-blue-50/70 via-white to-violet-50/40',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)] transition-colors hover:border-blue-300',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-white text-blue-700 dark:border-blue-800/60 dark:bg-slate-950/40 dark:text-blue-200"
          >
            <SparklesIcon className="h-4 w-4" />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            {content.nextPreview.label}
          </span>
        </header>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.nextPreview.body}
        </p>

        <Link
          href={content.nextPreview.href}
          className={cn(
            'group mt-auto inline-flex items-center justify-between gap-2 rounded-xl border bg-blue-600 text-white px-md py-3',
            'border-blue-700 shadow-[0_3px_0_rgba(29,78,216,0.35)]',
            'transition-all motion-safe:hover:-translate-y-0.5',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            'dark:bg-blue-500 dark:border-blue-600',
          )}
        >
          <span className="text-xsm sm:text-sm font-bold break-keep">
            {content.nextPreview.cta}
          </span>
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15"
          >
            <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" />
          </span>
        </Link>
      </article>
    </div>
  </section>
);
