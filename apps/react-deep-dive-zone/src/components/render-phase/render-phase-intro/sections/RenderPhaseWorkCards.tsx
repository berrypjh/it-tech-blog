import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { RenderPhaseIntroContent, WorkCard, WorkCardIcon } from '../content';
import { FlagIcon, GitBranchIcon, LayersIcon, RefreshCcwIcon, SparklesIcon } from '../icons';

type Props = { content: RenderPhaseIntroContent['work'] };

const workIconMap: Record<WorkCardIcon, typeof RefreshCcwIcon> = {
  refresh: RefreshCcwIcon,
  layers: LayersIcon,
  gitBranch: GitBranchIcon,
  flag: FlagIcon,
};

export const RenderPhaseWorkCards = ({ content }: Props) => (
  <section id="work-cards" aria-labelledby="heading-work-cards" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="work-cards"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {content.cards.map((card, idx) => (
        <li key={card.title} className="flex h-full">
          <Card card={card} index={idx + 1} />
        </li>
      ))}
    </ol>
  </section>
);

const Card = ({ card, index }: { card: WorkCard; index: number }) => {
  const Icon = workIconMap[card.iconName];
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'text-[10px] font-mono uppercase tracking-wider tabular-nums',
            'rounded-md border px-1.5 py-0.5',
            t.chip,
          )}
        >
          {String(index).padStart(2, '0')}
        </span>
      </header>
      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.text)}>
        {card.title}
      </h3>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
