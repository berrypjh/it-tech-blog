import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { FiberToRootContent } from '../content';
import { ArrowUpIcon, DatabaseIcon, GitBranchIcon, NetworkIcon } from '../icons';

type Props = { content: FiberToRootContent['laneRoles'] };

const cardIconMap = {
  database: DatabaseIcon,
  network: NetworkIcon,
} as const;

export const LaneRoleCompareSection = ({ content }: Props) => (
  <section id="lane-roles" aria-labelledby="heading-lane-roles" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="lane-roles"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
      <Card card={content.leftCard} variant="source" />
      <MiddleConnector label={content.middleLabel} />
      <Card card={content.rightCard} variant="parent" />
    </div>
  </section>
);

type CardProps = {
  card: FiberToRootContent['laneRoles']['leftCard'];
  variant: 'source' | 'parent';
};

const Card = ({ card, variant }: CardProps) => {
  const Icon = cardIconMap[card.iconName];
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-2xl border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {variant === 'source' ? 'self' : 'subtree'}
        </span>
      </header>

      <h3
        className={cn(
          'inline-flex w-fit items-center rounded-lg border px-2.5 py-1 font-mono text-sm sm:text-md font-bold',
          'border-slate-800 bg-slate-950 text-slate-100',
        )}
      >
        <span className="text-amber-300">{card.title}</span>
      </h3>

      <p className={cn('text-xsm sm:text-sm font-bold leading-snug break-keep', t.text)}>
        {card.body}
      </p>

      <div
        className={cn(
          'mt-auto rounded-xl border px-3 py-2 text-xxsm sm:text-xsm leading-snug break-keep',
          t.chip,
        )}
      >
        {card.bullet}
      </div>
    </article>
  );
};

const MiddleConnector = ({ label }: { label: string }) => (
  <div className="flex lg:flex-col items-center justify-center gap-2 px-1">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center rounded-full border-2 border-dashed',
        'h-12 w-12',
        'border-sky-300/80 bg-white text-sky-600',
        'dark:border-sky-700/70 dark:bg-slate-950/60 dark:text-sky-300',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ArrowUpIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
    </span>
    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-200 text-center break-keep max-w-[12ch]">
      {label}
    </span>
  </div>
);
