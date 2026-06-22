import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
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
import { commitToneTokens } from '../palette';

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
    <SectionBadgeHeader
      id="previous-chapter"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1.2fr)_auto_minmax(0,_0.9fr)] items-stretch gap-3 md:gap-2">
      <LeftCard card={content.leftCard} />

      {/* Arrow connector */}
      <div className="flex items-center justify-center py-2 md:py-0">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed',
            'border-sky-300/80 bg-white text-sky-600',
            'dark:border-sky-700/60 dark:bg-slate-950/40 dark:text-sky-300',
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <span className="hidden md:inline-block">
            <ArrowRightIcon className="h-4 w-4" />
          </span>
          <span className="md:hidden">
            <ArrowDownIcon className="h-4 w-4" />
          </span>
        </span>
      </div>

      <RightCard card={content.rightCard} />
    </div>
  </section>
);

const LeftCard = ({ card }: { card: CommitPhaseIntroContent['previous']['leftCard'] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-[var(--term-bg)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
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
  const t = commitToneTokens[item.tone];
  return (
    <div
      className={cn(
        'flex items-center gap-sm rounded-2xl border p-sm',
        t.border,
        t.bgSoft,
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
          t.chipSolid,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
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

const RightCard = ({ card }: { card: CommitPhaseIntroContent['previous']['rightCard'] }) => (
  <article
    className={cn(
      'flex h-full flex-col items-center justify-center gap-sm rounded-3xl border-2 border-dashed p-md sm:p-lg text-center',
      'border-sky-300/80 bg-sky-50/50',
      'dark:border-sky-700/60 dark:bg-sky-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2',
        'bg-sky-100 text-sky-700 border-sky-200/80',
        'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
      )}
    >
      <HelpCircleIcon className="h-6 w-6" />
    </span>
    <p className="text-sm sm:text-md font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
      {card.question}
    </p>
    <p className="text-xsm sm:text-sm leading-relaxed text-sky-800 dark:text-sky-200 break-keep">
      {card.answer}
    </p>
  </article>
);
