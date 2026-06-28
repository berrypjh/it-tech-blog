import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FunctionClassComponentFiberContent, WorkTagCard } from '../content';
import { ComponentIcon, InfoIcon, SquareFunctionIcon, TagIcon } from '../icons';

type Props = { content: FunctionClassComponentFiberContent['workTags'] };

const toneByVariant: Record<WorkTagCard['variant'], ToneKey> = {
  function: 'emerald',
  class: 'violet',
  info: 'sky',
};

export const WorkTagCards = ({ content }: Props) => (
  <section id="work-tags" aria-labelledby="heading-work-tags" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="work-tags"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<TagIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: WorkTagCard }) => {
  if (card.variant === 'info') return <InfoCard card={card} />;
  return <ValueCard card={card} />;
};

const ValueCard = ({ card }: { card: WorkTagCard }) => {
  const isFunction = card.variant === 'function';
  const t = toneTokens[toneByVariant[card.variant]];
  const Icon = isFunction ? SquareFunctionIcon : ComponentIcon;
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.fill.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={toneByVariant[card.variant]} size="md">
          <Icon className="h-5 w-5" />
        </ToneIconBox>
        <code className={cn('font-mono text-sm sm:text-md font-extrabold tracking-tight', t.text)}>
          {card.title}
        </code>
      </header>

      <div
        className={cn(
          'flex items-center justify-between gap-sm rounded-xl border-2 p-md',
          t.fill.bg,
          t.fill.border,
        )}
      >
        <span className={cn('text-[10px] uppercase tracking-wider font-mono font-bold', t.text)}>
          {card.label}
        </span>
        <code className={cn('font-mono text-3xl sm:text-4xl font-extrabold tabular-nums', t.text)}>
          {card.value}
        </code>
      </div>
    </article>
  );
};

const InfoCard = ({ card }: { card: WorkTagCard }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        'border-[var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone="sky" size="md">
          <InfoIcon className="h-5 w-5" />
        </ToneIconBox>
        <h3 className={cn('font-mono text-sm sm:text-md font-extrabold tracking-tight', t.text)}>
          {card.title}
        </h3>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
