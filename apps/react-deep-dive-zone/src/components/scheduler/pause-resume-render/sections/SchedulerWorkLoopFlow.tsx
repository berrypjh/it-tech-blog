import { cn } from '@it-tech-blog/utils';

import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Cog,
  Gauge,
  PauseCircle,
  PlayCircle,
  Target,
  Workflow,
  Zap,
} from 'lucide-react';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RenderYieldingContent, YieldAccent } from '../content';
import { yldCardBorder, yldIconBox, yldNumberBadge, yldTextStrong } from '../yieldAccent';

type Props = { content: RenderYieldingContent['workLoop'] };

const stepIcon: Record<YieldAccent, typeof Zap> = {
  blue: Target,
  teal: Gauge,
  violet: PauseCircle,
  emerald: PlayCircle,
  rose: Cog,
};

export const SchedulerWorkLoopFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-workloop">
    <NumberedSectionHeader
      id="workloop"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      description={content.supportingCopy}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 items-stretch gap-3 sm:gap-4 relative">
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcon[step.accent];
        return (
          <li
            key={step.title}
            className={cn(
              'relative flex flex-col gap-3 rounded-2xl border-2 p-md transition-colors',
              'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
              yldCardBorder[step.accent],
              step.emphasis === 'yield' && 'shadow-[0_3px_0_rgba(124,58,237,0.25)]',
              step.emphasis === 'check' && 'shadow-[0_3px_0_rgba(20,184,166,0.2)]',
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-full text-white text-[11px] font-mono font-bold tabular-nums',
                  yldNumberBadge[step.accent],
                )}
              >
                {i + 1}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                  yldIconBox[step.accent],
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
            </header>
            <h3
              className={cn(
                'text-xsm sm:text-sm font-bold leading-tight break-keep',
                yldTextStrong[step.accent],
              )}
            >
              {step.title}
            </h3>
            <p className="mt-auto text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
              {step.description}
            </p>

            {step.emphasis === 'check' && (
              <span className="inline-flex items-center self-start gap-1 rounded-full border border-teal-300/80 bg-teal-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200">
                <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                check
              </span>
            )}
            {step.emphasis === 'continue' && (
              <span className="inline-flex items-center self-start gap-1 rounded-full border border-emerald-300/80 bg-emerald-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200">
                <PlayCircle className="h-3 w-3" aria-hidden="true" />
                continue
              </span>
            )}
            {step.emphasis === 'yield' && (
              <span className="inline-flex items-center self-start gap-1 rounded-full border border-violet-300/80 bg-violet-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200">
                <PauseCircle className="h-3 w-3" aria-hidden="true" />
                break
              </span>
            )}

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden xl:inline-flex absolute -right-3 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
                >
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className="xl:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
                >
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
