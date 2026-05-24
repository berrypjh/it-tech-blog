import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RenderYieldingContent, YieldAccent } from '../content';
import { CpuIcon, GaugeIcon, KeyboardIcon, LoaderIcon, ZapIcon } from '../icons';
import { yldCardBorder, yldIconBox, yldTextStrong } from '../yieldAccent';

type Props = { content: RenderYieldingContent['problem'] };

const cardIcon: Record<YieldAccent, typeof CpuIcon> = {
  blue: CpuIcon,
  teal: GaugeIcon,
  violet: LoaderIcon,
  emerald: ZapIcon,
  rose: KeyboardIcon,
};

export const LongRenderProblem = ({ content }: Props) => (
  <section aria-labelledby="heading-problem">
    <NumberedSectionHeader
      id="problem"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      description={content.mainCopy}
      icon={<LoaderIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* timeline */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-rose-200/80 bg-gradient-to-br from-rose-50/60 via-white to-amber-50/30',
          'dark:border-rose-800/60 dark:from-rose-950/20 dark:via-[var(--term-bg)] dark:to-amber-950/10',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
            {content.timelineTitle}
          </h3>
          <span className="inline-flex items-center gap-1 rounded-full border border-rose-300/80 bg-rose-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-rose-800 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200">
            <LoaderIcon className="h-3 w-3 motion-safe:animate-spin motion-reduce:animate-none" />
            {content.busyLabel}
          </span>
        </header>

        {/* long busy bar */}
        <div aria-hidden="true" className="flex flex-col gap-2">
          <div className="relative h-9 rounded-lg border border-blue-300/80 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 overflow-hidden">
            <span className="absolute inset-y-0 left-0 px-3 flex items-center font-mono text-[10px] uppercase tracking-wider text-white/90">
              Fiber A
            </span>
            <span className="absolute inset-y-0 left-1/4 px-3 flex items-center font-mono text-[10px] uppercase tracking-wider text-white/90 border-l border-white/30">
              Fiber B
            </span>
            <span className="absolute inset-y-0 left-1/2 px-3 flex items-center font-mono text-[10px] uppercase tracking-wider text-white/90 border-l border-white/30">
              Fiber C
            </span>
            <span className="absolute inset-y-0 right-0 px-3 flex items-center font-mono text-[10px] uppercase tracking-wider text-white/90 bg-rose-600 border-l border-white/30">
              paint 지연
            </span>
          </div>

          {/* input marker */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-rose-700 dark:text-rose-300 inline-flex items-center gap-1">
              <KeyboardIcon className="h-3 w-3" />
              {content.badInputLabel}
            </span>
            <span className="flex-1 h-px border-t border-dashed border-rose-300 dark:border-rose-700/60" />
          </div>

          {/* timeline labels row */}
          <ol className="flex flex-wrap items-center gap-x-2 font-mono text-[10px] text-[var(--term-muted)]">
            {content.timelineLabels.map((label, i) => (
              <li key={label} className="flex items-center gap-2">
                <span>{label}</span>
                {i < content.timelineLabels.length - 1 && (
                  <span aria-hidden="true" className="text-[var(--term-dim)]">
                    │
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </article>

      {/* problem cards */}
      <ul className="flex flex-col gap-3">
        {content.cards.map((card) => {
          const Icon = cardIcon[card.accent];
          return (
            <li key={card.title}>
              <article
                className={cn(
                  'flex items-start gap-3 rounded-2xl border-2 p-md transition-colors',
                  'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                  yldCardBorder[card.accent],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                    yldIconBox[card.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                  <h4
                    className={cn(
                      'text-xsm sm:text-sm font-bold leading-tight break-keep',
                      yldTextStrong[card.accent],
                    )}
                  >
                    {card.title}
                  </h4>
                  <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {card.description}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
