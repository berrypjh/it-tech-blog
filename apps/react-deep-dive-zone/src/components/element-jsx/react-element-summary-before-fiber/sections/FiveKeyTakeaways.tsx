import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { ReactElementSummaryBeforeFiberContent, SummaryCard } from '../content';
import { BoxIcon, CodeIcon, FileTextIcon, LayersIcon, ListChecksIcon, NetworkIcon } from '../icons';
import { neutralBorderHover, toneChip, toneText } from '../localTone';

type Props = { content: ReactElementSummaryBeforeFiberContent['summary'] };

const iconMap = {
  code: CodeIcon,
  cube: BoxIcon,
  document: FileTextIcon,
  layers: LayersIcon,
  tree: NetworkIcon,
} as const;

export const FiveKeyTakeaways = ({ content }: Props) => (
  <section aria-labelledby="heading-summary" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="summary"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: SummaryCard }) => {
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        neutralBorderHover,
      )}
    >
      <header className="flex items-center justify-between">
        <span
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full border font-mono text-xsm font-bold tabular-nums',
            toneChip(card.tone),
          )}
        >
          {card.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl border',
            toneChip(card.tone),
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
      </header>
      <h3 className={cn('text-sm font-bold tracking-tight break-keep', toneText(card.tone))}>
        {card.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
    </article>
  );
};
