import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneBadge, ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberToRootContent, LaneCard } from '../content';
import { ArrowUpIcon, GitBranchIcon, laneCardIconByName } from '../icons';

type Props = { content: FiberToRootContent['laneRoles'] };

export const LaneRoleCompareSection = ({ content }: Props) => (
  <section id="section-lane-roles" aria-labelledby="heading-lane-roles" className="space-y-md">
    <SectionHeader
      id="lane-roles"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      <Card card={content.leftCard} variant="source" />
      <MiddleConnector label={content.middleLabel} />
      <Card card={content.rightCard} variant="parent" />
    </div>
  </section>
);

const Card = ({ card, variant }: { card: LaneCard; variant: 'source' | 'parent' }) => {
  const Icon = laneCardIconByName[card.icon];
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" />
        </ToneIconBox>
        <ToneBadge tone={card.tone}>{variant === 'source' ? 'self' : 'subtree'}</ToneBadge>
      </header>

      <code
        className={cn(
          'inline-flex w-fit items-center rounded-md border bg-[var(--term-surface)] px-2.5 py-1 font-mono text-sm sm:text-md font-bold',
          t.border,
          t.text,
        )}
      >
        {card.title}
      </code>

      <p className={cn('text-xsm sm:text-sm font-bold leading-snug break-keep', t.text)}>
        {card.body}
      </p>

      <div
        className={cn(
          'mt-auto rounded-md border px-3 py-2 text-xxsm sm:text-xsm leading-snug break-keep',
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
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]"
    >
      <ArrowUpIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
    </span>
    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--term-fg)] text-center break-keep max-w-[12ch]">
      {label}
    </span>
  </div>
);
