import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { WhyFailableRenderContent } from '../content';
import { AtomIcon, HourglassIcon, RefreshCcwIcon, ShieldCheckIcon, SparklesIcon } from '../icons';

type Props = { content: WhyFailableRenderContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-reconciler/why-failable-render.md"
      suffix={
        <span className="text-[var(--term-dim)]">{' // suspend → throw → recover → retry'}</span>
      }
    />

    <div className="mt-md grid grid-cols-1 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] gap-md lg:gap-xl items-center">
      {/* LEFT: text */}
      <div className="flex flex-col gap-md">
        <span
          className={cn(
            'inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1',
            'text-[10px] font-mono font-bold uppercase tracking-wider',
            'border border-blue-300/80 bg-blue-50 text-blue-700',
            'dark:border-blue-700/70 dark:bg-blue-950/50 dark:text-blue-200',
          )}
        >
          <span
            aria-hidden="true"
            className="block h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400"
          />
          {content.badge}
        </span>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem]',
            'font-bold leading-[1.14] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[58ch]">
          {content.description}
        </p>
      </div>

      {/* RIGHT: illustration (CSS only) */}
      <div
        aria-hidden="true"
        className={cn(
          'relative aspect-[4/3] lg:aspect-[5/4] w-full',
          'rounded-3xl border-2 border-blue-200/70 bg-gradient-to-br from-blue-50 via-violet-50/60 to-emerald-50/40',
          'dark:border-blue-800/60 dark:from-blue-950/50 dark:via-violet-950/40 dark:to-emerald-950/30',
          'shadow-[0_2px_0_var(--term-border)] overflow-hidden',
        )}
      >
        {/* radial glow */}
        <div
          className="absolute -top-12 -right-12 h-48 w-48 rounded-full opacity-60 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)' }}
        />
        <div
          className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full opacity-50 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.3), transparent 70%)' }}
        />

        {/* sparkles */}
        <SparklesIcon className="absolute top-4 right-6 h-3.5 w-3.5 text-violet-400 dark:text-violet-300 opacity-80" />
        <SparklesIcon className="absolute bottom-8 right-12 h-2.5 w-2.5 text-blue-400 dark:text-blue-300 opacity-70" />
        <SparklesIcon className="absolute top-12 left-8 h-2.5 w-2.5 text-emerald-400 dark:text-emerald-300 opacity-70" />

        {/* back card */}
        <div
          className={cn(
            'absolute top-[14%] left-[14%] right-[28%] h-[55%]',
            'rounded-2xl border-2 border-slate-200 bg-white/85',
            'dark:border-slate-700 dark:bg-slate-900/70',
            'shadow-[0_8px_24px_rgba(15,23,42,0.08)]',
            'rotate-[-4deg]',
          )}
        >
          <div className="flex items-center gap-1 border-b border-slate-200 px-3 py-2 dark:border-slate-700">
            <span className="block h-2 w-2 rounded-full bg-rose-400" />
            <span className="block h-2 w-2 rounded-full bg-amber-300" />
            <span className="block h-2 w-2 rounded-full bg-emerald-400" />
            <span className="ml-2 text-[9px] font-mono text-slate-500">
              {content.illustration.backCardLabel}
            </span>
          </div>
          <div className="px-3 py-3 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-1.5 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-1.5 w-2/3 rounded bg-blue-200/80 dark:bg-blue-800/60" />
          </div>
        </div>

        {/* front card */}
        <div
          className={cn(
            'absolute bottom-[12%] right-[10%] w-[58%]',
            'rounded-2xl border-2 border-blue-200 bg-white',
            'dark:border-blue-700 dark:bg-slate-900',
            'shadow-[0_10px_30px_rgba(59,130,246,0.18)]',
            'rotate-[3deg] p-3',
          )}
        >
          <div className="flex items-center gap-2">
            <span
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-full',
                'bg-blue-600 text-white shadow-[0_2px_0_rgba(37,99,235,0.35)]',
              )}
            >
              <AtomIcon className="h-4 w-4" />
            </span>
            <span className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-200">
              {content.illustration.frontCardLabel}
            </span>
          </div>
          <div className="mt-2 space-y-1">
            <div className="h-1.5 w-full rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-1.5 w-4/5 rounded bg-slate-200 dark:bg-slate-700" />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-mono font-bold text-blue-700 dark:bg-blue-950/60 dark:text-blue-200">
              <HourglassIcon className="h-2.5 w-2.5" />
              {content.illustration.pendingBadge}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-cyan-50 px-2 py-0.5 text-[9px] font-mono font-bold text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200">
              <RefreshCcwIcon className="h-2.5 w-2.5" />
              {content.illustration.retryBadge}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-mono font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200">
              <ShieldCheckIcon className="h-2.5 w-2.5" />
              {content.illustration.recoverBadge}
            </span>
          </div>
        </div>

        {/* react logo badge */}
        <div
          className={cn(
            'absolute top-[8%] right-[10%]',
            'inline-flex flex-col items-center justify-center gap-0.5',
            'h-16 w-16 rounded-full border-2 border-blue-300 bg-white/90 shadow-[0_4px_12px_rgba(59,130,246,0.25)]',
            'dark:border-blue-700 dark:bg-slate-900/80',
          )}
        >
          <AtomIcon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
          <span className="text-[9px] font-mono font-bold text-blue-700 dark:text-blue-200">
            {content.illustration.reactBadgeLabel}
          </span>
        </div>
      </div>
    </div>
  </section>
);
