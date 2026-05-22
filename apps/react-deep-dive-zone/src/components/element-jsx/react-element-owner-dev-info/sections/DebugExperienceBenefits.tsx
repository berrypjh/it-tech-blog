import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../start/_shared/tones';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { DebugBenefit, ReactElementOwnerDevInfoContent } from '../content';
import { MessageIcon, PanelIcon, SearchIcon, SparklesIcon } from '../icons';

type Props = { content: ReactElementOwnerDevInfoContent['benefits'] };

const iconMap = {
  message: MessageIcon,
  search: SearchIcon,
  panel: PanelIcon,
} as const;

export const DebugExperienceBenefits = ({ content }: Props) => (
  <section id="benefits" aria-labelledby="heading-benefits" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="benefits"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: DebugBenefit }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-14 h-14 rounded-full border',
          t.chip,
        )}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
    </article>
  );
};
