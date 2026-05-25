import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { ValueClassificationContent } from '../content';
import { AlertTriangleIcon, CableIcon, DatabaseIcon, HelpCircleIcon, InboxIcon } from '../icons';
import { getValueClasses, ValueBadge } from '../ValueBadge';

type Props = { content: ValueClassificationContent['confusedValues'] };

const cardIcon = {
  stateNode: CableIcon,
  updateQueue: InboxIcon,
  memoizedState: DatabaseIcon,
} as const;

export const ConfusedValuesSection = ({ content }: Props) => {
  return (
    <section id="section-confused" aria-labelledby="heading-confused" className="space-y-lg">
      <SectionHeader
        id="confused"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<AlertTriangleIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const t = getValueClasses(card.valueKey);
          const Icon = cardIcon[card.valueKey];
          return (
            <li key={card.valueKey}>
              <article
                className={cn(
                  'group flex h-full flex-col gap-md rounded-2xl border-2 p-md',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  t.borderHover,
                )}
              >
                <header className="flex items-center justify-between gap-2">
                  <ValueBadge valueKey={card.valueKey} size="md" strong />
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
                      t.chip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                </header>

                {/* Role */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {content.roleLabel}
                  </span>
                  <p className={cn('text-xsm font-bold leading-snug break-keep', t.text)}>
                    {card.role}
                  </p>
                </div>

                {/* Misunderstanding (small warning block) */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {content.misunderstandingLabel}
                  </span>
                  <div
                    className={cn(
                      'flex items-start gap-2 rounded-md border-2 p-2.5',
                      'border-amber-300 bg-amber-50 text-amber-900',
                      'dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-100',
                    )}
                  >
                    <AlertTriangleIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <p className="text-[11px] leading-relaxed break-keep">
                      {card.misunderstanding}
                    </p>
                  </div>
                </div>

                {/* Reading question (emphasized footer) */}
                <div
                  className={cn(
                    'mt-auto flex items-start gap-2 rounded-md border-2 p-3',
                    t.border,
                    t.chip,
                  )}
                >
                  <HelpCircleIcon
                    className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <span className={cn('text-[10px] font-mono uppercase tracking-wider', t.text)}>
                      {content.questionLabel}
                    </span>
                    <p className={cn('text-xsm font-bold leading-snug break-keep', t.text)}>
                      {card.question}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
