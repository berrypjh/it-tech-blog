import { cn } from '@it-tech-blog/utils';

import type { CaseCard, MismatchDetectRecoverContent } from '../content';
import { BracketsIcon, ClockIcon, DicesIcon } from '../icons';
import { roleAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: MismatchDetectRecoverContent['cases'] };

const caseIcon: Record<CaseCard['icon'], React.ComponentType<{ className?: string }>> = {
  clock: ClockIcon,
  dice: DicesIcon,
  brackets: BracketsIcon,
};

export const MismatchCasesSection = ({ content }: Props) => (
  <section aria-labelledby="cases-heading" className="flex flex-col gap-md">
    <SectionHeader id="cases-heading" number={content.number} title={content.title} />

    <ul className="grid grid-cols-1 gap-md md:grid-cols-3">
      {content.cards.map((card) => {
        const accent = roleAccent[card.role];
        const Icon = caseIcon[card.icon];
        return (
          <li key={card.title}>
            <article
              className={cn(
                'flex flex-col gap-3 h-full rounded-2xl border-2 p-md sm:p-lg',
                accent.border,
                accent.bg,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-transform motion-safe:hover:-translate-y-0.5',
              )}
            >
              <header className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                    accent.iconChip,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <h3 className={cn('text-md font-bold break-keep', accent.text)}>{card.title}</h3>
                  <span className="text-[11px] text-[var(--term-muted)] break-keep">
                    {card.subtitle}
                  </span>
                </div>
              </header>

              <div className="grid grid-cols-1 gap-2 mt-auto">
                <div
                  className={cn(
                    'rounded-lg border bg-white px-3 py-2',
                    'dark:bg-[var(--term-bg)]',
                    accent.border,
                  )}
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                    {card.serverLabel}
                  </span>
                  <pre className="mt-1 overflow-x-auto text-xsm font-mono font-bold text-[var(--term-fg)] break-keep">
                    <code>{card.serverValue}</code>
                  </pre>
                </div>
                <div
                  className={cn(
                    'rounded-lg border bg-white px-3 py-2',
                    'dark:bg-[var(--term-bg)]',
                    'border-violet-200 dark:border-violet-800/60',
                  )}
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                    {card.clientLabel}
                  </span>
                  <pre className="mt-1 overflow-x-auto text-xsm font-mono font-bold text-[var(--term-fg)] break-keep">
                    <code>{card.clientValue}</code>
                  </pre>
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
