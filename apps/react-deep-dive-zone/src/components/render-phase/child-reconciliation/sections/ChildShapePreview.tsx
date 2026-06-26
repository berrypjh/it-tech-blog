import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ChildShapeCard, ReconcileChildrenContent } from '../content';
import { BoxesIcon, ExternalLinkIcon, LayersIcon, SparklesIcon, SquareIcon } from '../icons';

type Props = { content: ReconcileChildrenContent['childShape'] };

const iconMap = {
  element: SquareIcon,
  array: BoxesIcon,
  portal: ExternalLinkIcon,
  sparkle: SparklesIcon,
} as const;

/** rose는 의미색(특수/예외)으로 toneTokens 밖이므로 직접 색을 유지한다. */
const roseFacets = {
  text: 'text-rose-600 dark:text-rose-300',
  chip: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
  border: 'border-rose-200/70 dark:border-rose-800/60',
};

const facetsFor = (tone: ChildShapeCard['tone']) =>
  tone === 'rose' ? roseFacets : toneTokens[tone as ToneKey];

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
  const facets = facetsFor(card.tone);
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)] motion-reduce:transform-none',
      )}
    >
      <div className="flex items-start justify-between">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-md border',
            facets.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-xxsm font-bold uppercase tracking-wider text-[var(--term-muted)]">
          shape
        </span>
      </div>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', facets.text)}>
        {card.title}
      </h3>

      <code className="self-start inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-[11px] font-bold text-[var(--term-fg)] break-all">
        {card.example}
      </code>

      <p className="mt-auto text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
