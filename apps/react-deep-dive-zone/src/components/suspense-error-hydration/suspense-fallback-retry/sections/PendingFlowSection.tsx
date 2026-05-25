import { cn } from '@it-tech-blog/utils';

import type { SuspenseFallbackRetryContent } from '../content';
import { ArrowRightIcon, BoxIcon, HourglassIcon, PauseCircleIcon, ZapIcon } from '../icons';
import { phaseAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseFallbackRetryContent['pending'] };

const stepIcons = [BoxIcon, ZapIcon, HourglassIcon, PauseCircleIcon];

export const PendingFlowSection = ({ content }: Props) => (
  <section aria-labelledby="pending-heading" className="flex flex-col gap-md">
    <SectionHeader id="pending-heading" number={content.number} title={content.title} />

    <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_minmax(0,0)] lg:gap-0 lg:flex lg:flex-row items-stretch">
      {content.steps.map((step, i) => {
        const accent = phaseAccent[step.phase];
        const Icon = stepIcons[i] ?? BoxIcon;
        const isLast = i === content.steps.length - 1;
        return (
          <li key={step.title} className="flex flex-col lg:flex-row items-stretch gap-2 lg:flex-1">
            <article
              className={cn(
                'flex flex-1 flex-col gap-2 rounded-2xl border-2 p-md',
                accent.border,
                accent.bg,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-transform motion-safe:hover:-translate-y-0.5',
              )}
            >
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[11px] font-bold tabular-nums text-white',
                    accent.solidBg,
                  )}
                >
                  {i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
                    accent.iconChip,
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
              </div>
              <h3 className={cn('text-sm font-bold break-keep', accent.text)}>{step.title}</h3>
              <p className="text-xsm text-[var(--term-muted)] break-keep">{step.subtitle}</p>
              <div
                className={cn(
                  'mt-auto rounded-lg border px-2 py-1.5',
                  step.innerKind === 'code'
                    ? 'border-slate-800 bg-slate-950 font-mono text-[11px] text-slate-100'
                    : cn(accent.border, accent.bg, 'font-mono text-[11px]', accent.text),
                )}
              >
                {step.inner}
              </div>
            </article>
            {!isLast && (
              <span
                aria-hidden="true"
                className="self-center inline-flex items-center justify-center text-blue-500 dark:text-blue-300"
              >
                <ArrowRightIcon className="hidden lg:block h-4 w-4" />
                <ArrowRightIcon className="lg:hidden h-4 w-4 rotate-90" />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
