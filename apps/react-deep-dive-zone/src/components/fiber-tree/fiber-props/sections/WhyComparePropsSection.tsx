import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberPropsContent, ReasonCard } from '../content';
import { GaugeIcon, HelpCircleIcon, ScaleIcon, TrendingUpIcon } from '../icons';

type Props = { content: FiberPropsContent['reasons'] };

const iconMap = {
  scales: ScaleIcon,
  gauge: GaugeIcon,
  trending: TrendingUpIcon,
} as const;

export const WhyComparePropsSection = ({ content }: Props) => (
  <section id="reasons" aria-labelledby="heading-reasons" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="reasons"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
          <ReasonCardItem card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const ReasonCardItem = ({ card }: { card: ReasonCard }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
      )}
    >
      <ToneIconBox tone={card.tone}>
        <Icon className="h-6 w-6" />
      </ToneIconBox>
      <h3 className={cn('text-xsm sm:text-sm font-bold leading-snug break-keep', t.text)}>
        {card.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
      <div
        className={cn(
          'mt-auto inline-flex items-center self-start rounded-full border px-3 py-1 font-mono text-[11.5px] font-bold break-all',
          t.chip,
        )}
      >
        {card.example}
      </div>
    </article>
  );
};
