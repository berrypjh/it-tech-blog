import { cn } from '@it-tech-blog/utils';

import type { UseEffectEventContent } from '../content';
import { ShieldAlertIcon } from '../icons';
import { effectTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: UseEffectEventContent['restriction'] };

export const UsageRestrictionSection = ({ content }: Props) => (
  <section aria-labelledby="restriction-heading" className="flex flex-col">
    <SectionHeader
      id="restriction-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    {/* Warning banner */}
    <div
      className={cn(
        'mb-md flex items-start gap-2 rounded-xl border-2 px-3 py-3',
        'border-rose-300/80 bg-rose-50/40 dark:border-rose-700/70 dark:bg-rose-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/60 dark:text-rose-200"
      >
        <ShieldAlertIcon className="h-3.5 w-3.5" />
      </span>
      <p className="text-xsm leading-relaxed text-rose-700 dark:text-rose-200 break-keep font-bold">
        Effect Event는 호출 위치 규칙을 지켜야 의도된 효과를 줍니다.
      </p>
    </div>

    <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3 items-stretch">
      {content.cards.map((card) => {
        const tone = effectTone[card.tone];
        const Icon = iconRegistry[card.iconKey];
        return (
          <li key={card.title} className="h-full">
            <article
              className={cn(
                'flex h-full flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
                tone.borderStrong,
                tone.bg,
                'shadow-[0_2px_0_var(--term-border)]',
              )}
            >
              <header className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                    tone.iconChip,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className={cn('text-sm sm:text-md font-bold break-keep', tone.text)}>
                  {card.title}
                </h3>
              </header>

              <ul className="flex flex-col gap-1.5">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      'flex items-start gap-2 rounded-lg border px-3 py-2',
                      'bg-white dark:bg-[var(--term-bg)]',
                      tone.border,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('mt-1.5 block h-1.5 w-1.5 rounded-full', tone.dot)}
                    />
                    <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
