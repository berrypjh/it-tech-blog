import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { BranchyCard, StripFlagCommentNoiseContent } from '../content';
import { BugIcon, FlagIcon, GitBranchIcon, MonitorIcon, SplitIcon, TargetIcon } from '../icons';
import { getLabelClasses, LabelChip } from '../LabelChip';

type Props = { content: StripFlagCommentNoiseContent['whyBranchy'] };

const cardIcon = {
  bug: BugIcon,
  flag: FlagIcon,
  monitor: MonitorIcon,
  gitBranch: GitBranchIcon,
} as const;

export const WhyBranchySection = ({ content }: Props) => {
  return (
    <section id="section-why-branchy" aria-labelledby="heading-why-branchy" className="space-y-lg">
      <SectionHeader
        id="why-branchy"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<SplitIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.cards.map((card) => (
          <li key={card.id}>
            <BranchyCardItem card={card} />
          </li>
        ))}
      </ul>

      <aside
        className={cn(
          'flex items-center gap-3 rounded-xl border-2 p-md sm:p-lg',
          'border-slate-800 bg-slate-900 text-slate-50',
          'dark:border-slate-700 dark:bg-slate-950',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
        aria-label="emphasis"
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
            'border border-blue-400/60 bg-blue-500/15 text-blue-200',
          )}
        >
          <TargetIcon className="h-5 w-5" />
        </span>
        <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug break-keep">
          <span className="block text-slate-300">{content.bannerLines[0]}</span>
          <span className="block text-white">
            <span className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
              {content.bannerLines[1]}
            </span>
          </span>
        </p>
      </aside>
    </section>
  );
};

const BranchyCardItem = ({ card }: { card: BranchyCard }) => {
  const t = getLabelClasses(card.label);
  const Icon = cardIcon[card.iconKey];
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-sm rounded-2xl border-2 p-md',
        'bg-white dark:bg-[var(--term-bg)]',
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5',
        t.borderHover,
        'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <LabelChip label={card.label} size="md" strong />
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
            t.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
      </header>

      <h3 className={cn('text-md font-bold leading-snug break-keep', t.text)}>{card.title}</h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
    </article>
  );
};
