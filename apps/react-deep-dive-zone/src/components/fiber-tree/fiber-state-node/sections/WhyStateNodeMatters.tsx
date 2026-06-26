import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberStateNodeContent, ReasonCard } from '../content';
import { AlertTriangleIcon, LinkIcon, SparklesIcon, WorkflowIcon } from '../icons';

type Props = { content: FiberStateNodeContent['reasons'] };

const iconMap = {
  alert: AlertTriangleIcon,
  workflow: WorkflowIcon,
  link: LinkIcon,
} as const;

export const WhyStateNodeMatters = ({ content }: Props) => (
  <section id="reasons" aria-labelledby="heading-reasons" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="reasons"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
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
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        toneTokens[card.tone].border,
      )}
    >
      <ToneIconBox tone={card.tone}>
        <Icon className="h-6 w-6" />
      </ToneIconBox>
      <h3
        className={cn(
          'text-xsm sm:text-sm font-bold tracking-tight leading-snug break-keep',
          toneTokens[card.tone].text,
        )}
      >
        {card.title}
      </h3>
      <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.body}
      </p>
    </article>
  );
};
