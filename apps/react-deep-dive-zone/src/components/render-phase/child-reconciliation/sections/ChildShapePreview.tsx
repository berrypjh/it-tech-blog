import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ChildShapeCard, ReconcileChildrenContent } from '../content';
import { BoxesIcon, ExternalLinkIcon, LayersIcon, SparklesIcon, SquareIcon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: ReconcileChildrenContent['childShape'] };

const iconMap = {
  element: SquareIcon,
  array: BoxesIcon,
  portal: ExternalLinkIcon,
  sparkle: SparklesIcon,
} as const;

export const ChildShapePreview = ({ content }: Props) => (
  <section
    id="child-shape"
    aria-labelledby="heading-child-shape"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="child-shape"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.subtitle}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {content.cards.map((card) => (
        <li key={card.title} className="flex h-full">
          <Card card={card} />
        </li>
      ))}
    </ol>
  </section>
);

const Card = ({ card }: { card: ChildShapeCard }) => {
  const palette = tonePalette[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
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
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            palette.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            palette.chip,
          )}
        >
          shape
        </span>
      </header>
      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', palette.text)}>
        {card.title}
      </h3>
      <code
        className={cn(
          'self-start inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
          'border-slate-800 bg-slate-950 text-amber-300',
          'break-all',
        )}
      >
        {card.example}
      </code>
      <p className="mt-auto text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
