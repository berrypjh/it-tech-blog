import { cx } from '@berrypjh/react-ui';
import { ArrowRight, Box, Hourglass, PauseCircle, Zap } from 'lucide-react';

import type { SuspenseFallbackRetryContent } from '../content';
import { phaseAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseFallbackRetryContent['pending'] };

const stepIcons = [Box, Zap, Hourglass, PauseCircle];

export const PendingFlowSection = ({ content }: Props) => (
  <section aria-labelledby="pending-heading" className="flex flex-col gap-md">
    <SectionHeader id="pending-heading" number={content.number} title={content.title} />

    <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_minmax(0,0)] lg:gap-0 lg:flex lg:flex-row items-stretch">
      {content.steps.map((step, i) => {
        const accent = phaseAccent[step.phase];
        const Icon = stepIcons[i] ?? Box;
        const isLast = i === content.steps.length - 1;
        return (
          <li key={step.title} className="flex flex-col lg:flex-row items-stretch gap-2 lg:flex-1">
            <article
              className={cx(
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
                  className={cx(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[11px] font-bold tabular-nums text-white',
                    accent.solidBg,
                  )}
                >
                  {i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className={cx(
                    'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
                    accent.iconChip,
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
              </div>
              <h3 className={cx('text-sm font-bold break-keep', accent.text)}>{step.title}</h3>
              <p className="text-xsm text-[var(--term-muted)] break-keep">{step.subtitle}</p>
              <div
                className={cx(
                  'mt-auto rounded-lg border px-2 py-1.5',
                  step.innerKind === 'code'
                    ? 'border-slate-800 bg-slate-950 font-mono text-[11px] text-slate-100'
                    : cx(accent.border, accent.bg, 'font-mono text-[11px]', accent.text),
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
                <ArrowRight className="hidden lg:block h-4 w-4" aria-hidden="true" />
                <ArrowRight className="lg:hidden h-4 w-4 rotate-90" aria-hidden="true" />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
