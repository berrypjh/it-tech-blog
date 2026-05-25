import { cn } from '@it-tech-blog/utils';

import type { UsePromiseSuspendContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, HourglassIcon, TriangleAlertIcon } from '../icons';
import type { PromiseState } from '../tone';
import { stateAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: UsePromiseSuspendContent['promiseStates'] };

const stateIcon: Record<PromiseState, React.ComponentType<{ className?: string }>> = {
  pending: HourglassIcon,
  fulfilled: CheckCircleIcon,
  rejected: TriangleAlertIcon,
};

export const PromiseStatesGrid = ({ content }: Props) => (
  <section aria-labelledby="states-heading" className="flex flex-col gap-md">
    <SectionHeader id="states-heading" number={content.number} title={content.title} />

    <ul className="grid grid-cols-1 gap-md md:grid-cols-3">
      {content.cards.map((card) => {
        const accent = stateAccent[card.state];
        const Icon = stateIcon[card.state];
        return (
          <li key={card.state}>
            <article
              className={cn(
                'flex flex-col gap-md h-full rounded-2xl border-2 p-md sm:p-lg',
                accent.border,
                accent.bg,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-transform motion-safe:hover:-translate-y-0.5',
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2',
                    accent.iconChip,
                  )}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div className="flex flex-col">
                  <h3 className={cn('text-lg font-bold font-mono', accent.text)}>{card.label}</h3>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                    {card.sublabel}
                  </span>
                </div>
              </div>

              <p className="text-xsm text-[var(--term-fg)] break-keep">{card.description}</p>

              <div
                className={cn(
                  'mt-auto rounded-xl border bg-white p-3 dark:bg-[var(--term-bg)]',
                  accent.border,
                )}
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                  {card.decisionLabel}
                </span>
                <p
                  className={cn(
                    'mt-1 flex items-center gap-1.5 text-xsm font-bold break-keep',
                    accent.text,
                  )}
                >
                  <ArrowRightIcon
                    aria-hidden="true"
                    className={cn('h-3.5 w-3.5 shrink-0', accent.text)}
                  />
                  {card.decisionText}
                </p>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
