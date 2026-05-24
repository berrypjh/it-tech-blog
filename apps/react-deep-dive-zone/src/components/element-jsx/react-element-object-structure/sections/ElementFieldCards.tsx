import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { FieldCard, ReactElementObjectStructureContent } from '../content';
import { BoxIcon, FingerprintIcon, KeyIcon, ListChecksIcon, PanelIcon, UserIcon } from '../icons';

type Props = { content: ReactElementObjectStructureContent['fields'] };

const iconMap = {
  fingerprint: FingerprintIcon,
  box: BoxIcon,
  key: KeyIcon,
  panel: PanelIcon,
  user: UserIcon,
} as const;

export const ElementFieldCards = ({ content }: Props) => (
  <section id="fields" aria-labelledby="heading-fields" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="fields"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <FieldCardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const FieldCardView = ({ card }: { card: FieldCard }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
          t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <code className={cn('font-mono text-md font-bold tracking-tight break-all', t.text)}>
        {card.field}
      </code>
      <h3 className="text-xsm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {card.title}
      </h3>
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
          t.chip,
        )}
      >
        {card.short}
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
    </article>
  );
};
