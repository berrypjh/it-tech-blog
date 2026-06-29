import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CommitPhaseIntroContent, PreviousLeftover, PreviousLeftoverIcon } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BoxIcon,
  GitMergeIcon,
  HelpCircleIcon,
  MinusIcon,
  RefreshIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: CommitPhaseIntroContent['previous'] };

const iconMap: Record<PreviousLeftoverIcon, typeof BoxIcon> = {
  cube: BoxIcon,
  refresh: RefreshIcon,
  minus: MinusIcon,
  gitMerge: GitMergeIcon,
};

export const PreviousChapterConnection = ({ content }: Props) => (
  <section
    id="previous-chapter"
    aria-labelledby="heading-previous-chapter"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="previous-chapter"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1.2fr)_auto_minmax(0,_0.9fr)] items-stretch gap-3 md:gap-2">
      <LeftCard card={content.leftCard} />

      <div className="flex items-center justify-center py-2 md:py-0" aria-hidden="true">
        <span
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed',
            toneTokens.sky.fill.border,
            toneTokens.sky.text,
            'bg-[var(--term-bg)] shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <ArrowRightIcon className="hidden md:inline-block h-4 w-4" />
          <ArrowDownIcon className="md:hidden h-4 w-4" />
        </span>
      </div>

      <RightCard card={content.rightCard} />
    </div>
  </section>
);

const LeftCard = ({ card }: { card: CommitPhaseIntroContent['previous']['leftCard'] }) => (
  <article className="flex h-full flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
    <header className="flex items-center justify-between gap-2">
      <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
        {card.title}
      </h3>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] rounded-md border border-[var(--term-border)] px-2 py-0.5">
        render output
      </span>
    </header>

    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {card.items.map((item) => (
        <li key={item.label}>
          <LeftoverItem item={item} />
        </li>
      ))}
    </ul>

    <footer className="border-t border-dashed border-[var(--term-border)] pt-sm text-xsm text-[var(--term-muted)] break-keep">
      {card.footer}
    </footer>
  </article>
);

const LeftoverItem = ({ item }: { item: PreviousLeftover }) => {
  const Icon = iconMap[item.iconName];
  const t = toneTokens[item.tone];
  return (
    <div
      className={cn(
        'flex items-center gap-sm rounded-lg border p-sm',
        t.border,
        'bg-[var(--term-surface)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <ToneIconBox tone={item.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex flex-col min-w-0">
        <span className={cn('text-xsm font-bold leading-tight font-mono break-keep', t.text)}>
          {item.label}
        </span>
        <span className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
          {item.description}
        </span>
      </div>
    </div>
  );
};

const RightCard = ({ card }: { card: CommitPhaseIntroContent['previous']['rightCard'] }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center justify-center gap-sm rounded-lg border-2 border-dashed p-md sm:p-lg text-center',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-12 w-12 items-center justify-center rounded-lg border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <HelpCircleIcon className="h-6 w-6" />
      </span>
      <p className={cn('text-sm sm:text-md font-bold leading-snug break-keep', t.fill.text)}>
        {card.question}
      </p>
      <p className={cn('text-xsm sm:text-sm leading-relaxed break-keep', t.text)}>{card.answer}</p>
    </article>
  );
};
