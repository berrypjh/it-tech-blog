import { cn } from '@it-tech-blog/utils';

import type { SeparationCard, UseEffectEventContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, SplitIcon } from '../icons';
import { effectTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: UseEffectEventContent['separation'] };

export const EffectEventSeparationSection = ({ content }: Props) => (
  <section aria-labelledby="separation-heading" className="flex flex-col">
    <SectionHeader
      id="separation-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_5fr)_auto_minmax(0,_5fr)] lg:gap-md items-stretch">
      {/* Left: Effect */}
      <SeparationItem card={content.left} />

      {/* Center: 분리 node */}
      <div className="flex lg:flex-col items-center justify-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed',
            'border-blue-400 bg-blue-50 text-blue-700',
            'dark:border-blue-600 dark:bg-blue-950/40 dark:text-blue-200',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <SplitIcon className="h-5 w-5" />
        </span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">
          {content.center}
        </span>
        <span
          aria-hidden="true"
          className="hidden lg:flex items-center justify-center text-blue-500 dark:text-blue-300"
        >
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </span>
        <span
          aria-hidden="true"
          className="inline-flex lg:hidden items-center justify-center text-blue-500 dark:text-blue-300"
        >
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>
      </div>

      {/* Right: Effect Event */}
      <SeparationItem card={content.right} />
    </div>
  </section>
);

const SeparationItem = ({ card }: { card: SeparationCard }) => {
  const tone = effectTone[card.tone];
  const Icon = iconRegistry[card.iconKey];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
        tone.borderStrong,
        tone.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-xl border',
            tone.iconChip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className={cn('text-md sm:text-lg font-bold break-keep', tone.text)}>{card.title}</h3>
      </header>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <ul className="flex flex-col gap-1.5 mt-1">
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
            <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
