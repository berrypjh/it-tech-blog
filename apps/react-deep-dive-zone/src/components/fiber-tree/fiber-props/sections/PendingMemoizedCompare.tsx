import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey } from '../../../shared/tones';
import type { FiberPropsContent, PropsKind } from '../content';
import { ClockIcon, GitCompareIcon, ZapIcon } from '../icons';

type Props = { content: FiberPropsContent['comparison'] };

const kindTone: Record<PropsKind, ToneKey> = {
  pendingProps: 'sky',
  memoizedProps: 'emerald',
};

const kindIcon = {
  pendingProps: ZapIcon,
  memoizedProps: ClockIcon,
} as const;

export const PendingMemoizedCompare = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitCompareIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg items-stretch">
      {content.cards.map((card) => (
        <li key={card.kind} className="flex">
          <ToneDetailCard
            className="flex-1"
            tone={kindTone[card.kind]}
            icon={kindIcon[card.kind]}
            title={card.title}
            description={card.subtitle}
            bullets={card.items}
          />
        </li>
      ))}
    </ul>
  </section>
);
