import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ChildExampleCard, HostComponentContent } from '../content';
import { ArrowDownIcon, LayersIcon } from '../icons';

type Props = { content: HostComponentContent['childCompare'] };

export const TextVsNestedChildren = ({ content }: Props) => (
  <section
    id="text-vs-nested"
    aria-labelledby="heading-text-vs-nested"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="text-vs-nested"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
      <Card card={content.cards.left} />
      <Card card={content.cards.right} />
    </div>
  </section>
);

const palette = {
  text: {
    border: 'border-teal-300/80 dark:border-teal-700/70',
    bg: 'bg-teal-50/40 dark:bg-teal-950/20',
    chip: 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    text: 'text-teal-800 dark:text-teal-100',
    resultBg: 'bg-teal-100/70 dark:bg-teal-950/40',
    arrow: 'text-teal-500/80 dark:text-teal-300/80',
  },
  nested: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    bg: 'bg-violet-50/40 dark:bg-violet-950/20',
    chip: 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    text: 'text-violet-800 dark:text-violet-100',
    resultBg: 'bg-violet-100/70 dark:bg-violet-950/40',
    arrow: 'text-violet-500/80 dark:text-violet-300/80',
  },
} as const;

const Card = ({ card }: { card: ChildExampleCard }) => {
  const p = palette[card.kind];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
        p.border,
        p.bg,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', p.text)}>
          {card.cardTitle}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            p.chip,
          )}
        >
          {card.kind === 'text' ? 'text' : 'nested'}
        </span>
      </header>

      {/* Code */}
      <article
        className={cn(
          'overflow-hidden rounded-2xl border bg-white dark:bg-slate-950',
          'border-[var(--term-border)]',
        )}
      >
        <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.7] font-mono text-slate-800 dark:text-slate-100">
          <code className="whitespace-pre">{card.code}</code>
        </pre>
      </article>

      {/* Down arrow */}
      <ArrowDownIcon aria-hidden="true" className={cn('mx-auto h-5 w-5', p.arrow)} />

      {/* Result */}
      <article
        className={cn(
          'flex flex-col items-center justify-center gap-1 rounded-2xl border-2 p-md',
          p.border,
          p.resultBg,
        )}
      >
        <span className={cn('text-sm sm:text-md font-bold leading-tight break-keep', p.text)}>
          {card.resultTitle}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {card.resultDetail}
        </span>
      </article>

      <p
        className={cn(
          'mt-auto text-xsm sm:text-sm leading-relaxed break-keep',
          card.kind === 'text'
            ? 'text-teal-900 dark:text-teal-100'
            : 'text-violet-900 dark:text-violet-100',
        )}
      >
        {card.explanation}
      </p>
    </article>
  );
};
