import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { groupBorder, groupFieldChip, groupIconBg, groupTitle } from '../components/groupStyles';
import type { FiberCentralContent, FieldGroup } from '../content';
import {
  DatabaseIcon,
  FingerprintIcon,
  FlagIcon,
  LayersIcon,
  ListIcon,
  NetworkIcon,
  ZapIcon,
} from '../icons';

type Props = { content: FiberCentralContent['summary'] };

const iconMap = {
  fingerprint: FingerprintIcon,
  network: NetworkIcon,
  database: DatabaseIcon,
  list: ListIcon,
  flag: FlagIcon,
  zap: ZapIcon,
} as const;

export const FiberStructureFinalSummary = ({ content }: Props) => (
  <section id="summary" aria-labelledby="heading-summary" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="summary"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <SummaryCard card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const SummaryCard = ({ card }: { card: FieldGroup }) => {
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        groupBorder[card.tone],
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl',
            groupIconBg[card.tone],
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        <h3 className={cn('text-md font-bold tracking-tight break-keep', groupTitle[card.tone])}>
          {card.title}
        </h3>
      </header>
      <ul className="flex flex-wrap gap-1.5">
        {card.fields.map((f) => (
          <li key={f}>
            <code
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
                groupFieldChip[card.tone],
              )}
            >
              {f}
            </code>
          </li>
        ))}
      </ul>
      <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
