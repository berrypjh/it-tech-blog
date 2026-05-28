import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { ElementVsFiberContent, ProblemCard } from '../content';
import { AlertTriangleIcon, HelpCircleIcon, LayersIcon, PauseIcon, TargetIcon } from '../icons';

type Props = { content: ElementVsFiberContent['problems'] };

const iconMap = {
  help: HelpCircleIcon,
  pause: PauseIcon,
  target: TargetIcon,
  layers: LayersIcon,
} as const;

export const WithoutFiberProblems = ({ content }: Props) => (
  <section id="problems" aria-labelledby="heading-problems" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="problems"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<AlertTriangleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: ProblemCard }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col items-center text-center gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-full border',
          t.chip,
        )}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className={cn('text-xsm sm:text-sm font-bold tracking-tight break-keep', t.text)}>
        {card.title}
      </h3>
      <p className="text-[12px] leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
    </article>
  );
};
