import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { CompareCard, ReconcilerEntryContent } from '../content';
import { CheckCircleIcon, iconByName, SparklesIcon } from '../icons';

type Props = { content: ReconcilerEntryContent['compare'] };

export const ReconcilerVsRenderer = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-compare" className="space-y-md">
      <SectionHeader
        id="compare"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <CompareCardItem card={content.left} />
        <Center copy={content.centerCopy} />
        <CompareCardItem card={content.right} />
      </div>
    </section>
  );
};

type ItemProps = { card: CompareCard };

const CompareCardItem = ({ card }: ItemProps) => {
  const tone = toneTokens[card.tone];
  const Icon = iconByName[card.icon];
  const tintClass =
    card.tone === 'violet'
      ? 'bg-violet-50/70 dark:bg-violet-950/30'
      : 'bg-emerald-50/70 dark:bg-emerald-950/30';

  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        tintClass,
        tone.border,
        tone.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-md border',
            tone.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className={cn('text-lg font-bold font-mono tracking-tight', tone.text)}>
          {card.title}
        </h3>
      </header>

      <ul className="flex flex-col gap-2">
        {card.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
          >
            <CheckCircleIcon
              className={cn('mt-0.5 h-4 w-4 shrink-0', tone.text)}
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-bold uppercase tracking-wider',
            tone.chip,
          )}
        >
          <span aria-hidden="true" className={cn('inline-block w-1 h-1 rounded-full', tone.dot)} />
          {card.tag}
        </span>
      </div>
    </article>
  );
};

type CenterProps = { copy: string };

const Center = ({ copy }: CenterProps) => (
  <div className="flex flex-col items-center justify-center gap-sm text-center lg:max-w-[180px]">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-14 h-14 rounded-full',
        'border-2 border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_3px_0_var(--term-border)]',
        'text-[var(--term-fg)] text-sm font-bold tracking-wider',
      )}
    >
      VS
    </span>
    <p className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep whitespace-pre-line">
      {copy}
    </p>
  </div>
);
