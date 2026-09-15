import { cx } from '@berrypjh/react-ui';
import { Boxes, Code2, Key, ListTree, Target } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberIdentityFieldsContent, QuickSummaryCard } from '../content';

type Props = { content: FiberIdentityFieldsContent['summary'] };

const iconMap = {
  cube: Boxes,
  key: Key,
  code: Code2,
  target: Target,
} as const;

export const FieldQuickSummary = ({ content }: Props) => (
  <section id="summary" aria-labelledby="heading-summary" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="summary"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListTree className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm lg:gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <QuickCard card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const QuickCard = ({ card }: { card: QuickSummaryCard }) => {
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        toneTokens[card.tone].border,
      )}
    >
      <ToneIconBox tone={card.tone}>
        <Icon className="h-5 w-5" />
      </ToneIconBox>
      <code
        className={cx('font-mono text-md font-bold tracking-tight', toneTokens[card.tone].text)}
      >
        {card.field}
      </code>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {card.question}
      </p>
      <p className="mt-auto text-[12px] leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
