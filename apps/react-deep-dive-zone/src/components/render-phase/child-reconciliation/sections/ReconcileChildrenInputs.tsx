import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { InputCard, ReconcileChildrenContent } from '../content';
import { BoxIcon, FileTextIcon, ListChecksIcon, NetworkIcon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: ReconcileChildrenContent['inputs'] };

const iconMap = {
  tree: NetworkIcon,
  cube: BoxIcon,
  fileText: FileTextIcon,
} as const;

export const ReconcileChildrenInputs = ({ content }: Props) => (
  <section id="inputs" aria-labelledby="heading-inputs" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="inputs"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {content.cards.map((card, idx) => (
        <li key={card.title} className="flex h-full">
          <Card card={card} index={idx + 1} />
        </li>
      ))}
    </ol>
  </section>
);

const Card = ({ card, index }: { card: InputCard; index: number }) => {
  const palette = tonePalette[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
        palette.border,
        palette.bg,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
            palette.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 min-w-[2rem] items-center justify-center rounded-md border px-2 text-xsm font-mono font-bold tabular-nums',
            palette.chip,
          )}
        >
          {String(index).padStart(2, '0')}
        </span>
      </header>
      <code
        className={cn(
          'self-start inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-sm font-bold',
          'border-slate-800 bg-slate-950',
          card.tone === 'sky'
            ? 'text-sky-300'
            : card.tone === 'teal'
              ? 'text-teal-300'
              : 'text-violet-300',
        )}
      >
        {card.title}
      </code>
      <p className={cn('text-xsm sm:text-sm leading-relaxed font-bold break-keep', palette.text)}>
        {card.description}
      </p>
      <p className="mt-auto text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {card.detail}
      </p>
    </article>
  );
};
