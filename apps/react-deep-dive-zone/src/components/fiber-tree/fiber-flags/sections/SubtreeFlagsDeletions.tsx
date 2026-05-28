import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { effectBadge } from '../components/effectStyles';
import type { FiberFlagsContent } from '../content';
import { FlagIcon, TrashIcon } from '../icons';

type Props = { content: FiberFlagsContent['subtree'] };

export const SubtreeFlagsDeletions = ({ content }: Props) => (
  <section id="subtree" aria-labelledby="heading-subtree" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="subtree"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FlagIcon className="h-5 w-5" />}
    />

    {/* Top: comparison cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      <ConceptCard
        title={content.subtreeCard.title}
        description={content.subtreeCard.description}
        body={content.subtreeCard.body}
        tone="violet"
        icon={<FlagIcon className="h-6 w-6" />}
      />
      <ConceptCard
        title={content.deletionsCard.title}
        description={content.deletionsCard.description}
        body={content.deletionsCard.body}
        tone="rose"
        icon={<TrashIcon className="h-6 w-6" />}
      />
    </div>

    {/* Bottom: visuals */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
      {/* Parent Fiber visual */}
      <article
        className={cn(
          'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-violet-200/80 dark:border-violet-800/60 shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300">
          {`// ${content.parentLabel}`}
        </span>
        <div className="mt-sm flex flex-col gap-2 rounded-2xl border-2 border-violet-200/80 dark:border-violet-800/60 bg-violet-50/40 dark:bg-violet-950/20 p-md">
          <span className="text-xsm font-bold text-violet-900 dark:text-violet-100">
            Parent Fiber
          </span>
          <div className="flex items-center gap-2 rounded-md border border-violet-300/80 dark:border-violet-700/70 bg-violet-100/60 dark:bg-violet-900/40 px-2 py-1.5">
            <code className="font-mono text-xsm font-bold text-violet-800 dark:text-violet-100">
              {content.parentFieldLabel}
            </code>
            <span
              className={cn(
                'ml-auto inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-tight',
                'bg-violet-50 text-violet-800 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
              )}
            >
              {content.parentBadge}
            </span>
          </div>
        </div>
      </article>

      {/* Child subtree visual */}
      <article
        className={cn(
          'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {`// ${content.childTreeLabel}`}
        </span>
        <div className="mt-sm flex flex-col items-center gap-2">
          <ChildNode label="Parent" tone="muted" />
          <span
            aria-hidden="true"
            className="block h-3 w-px border-l-2 border-slate-300/80 dark:border-slate-700/70"
          />
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center gap-1">
              <ChildNode label="Child A" effect="update" />
              <Badge effect={content.childLabels[0]} />
            </div>
            <div className="flex flex-col items-center gap-1">
              <ChildNode label="Child B" effect="childDeletion" />
              <Badge effect={content.childLabels[1]} />
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
);

const ConceptCard = ({
  title,
  description,
  body,
  tone,
  icon,
}: {
  title: string;
  description: string;
  body: string;
  tone: 'violet' | 'rose';
  icon: React.ReactNode;
}) => {
  const cls = {
    violet: {
      border:
        'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
      iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
      title: 'text-violet-900 dark:text-violet-100',
      desc: 'text-violet-700/90 dark:text-violet-200',
    },
    rose: {
      border:
        'border-rose-200/80 dark:border-rose-800/60 hover:border-rose-400/70 dark:hover:border-rose-500/60',
      iconWrap: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200',
      title: 'text-rose-900 dark:text-rose-100',
      desc: 'text-rose-700/90 dark:text-rose-200',
    },
  }[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        cls.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl',
            cls.iconWrap,
          )}
        >
          {icon}
        </span>
        <div className="flex flex-col min-w-0">
          <code className={cn('font-mono text-md font-bold tracking-tight', cls.title)}>
            {title}
          </code>
          <p className={cn('text-xsm font-bold break-keep', cls.desc)}>{description}</p>
        </div>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
    </article>
  );
};

const ChildNode = ({
  label,
  effect,
  tone,
}: {
  label: string;
  effect?: 'update' | 'childDeletion';
  tone?: 'muted';
}) => {
  const cls = effect
    ? effect === 'update'
      ? 'border-sky-300/80 bg-sky-50/60 text-sky-900 dark:border-sky-700/70 dark:bg-sky-950/30 dark:text-sky-100'
      : 'border-rose-300/80 border-dashed bg-rose-50/60 text-rose-900 dark:border-rose-700/70 dark:bg-rose-950/30 dark:text-rose-100'
    : tone === 'muted'
      ? 'border-slate-200/80 bg-white dark:border-slate-700/70 dark:bg-slate-900/60 text-[var(--term-fg)]'
      : '';
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg border-2 px-2.5 py-1 font-mono text-xsm font-bold',
        cls,
      )}
    >
      {label}
    </span>
  );
};

const Badge = ({
  effect,
}: {
  effect: { kind: 'placement' | 'update' | 'childDeletion'; text: string };
}) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold whitespace-nowrap',
      effectBadge[effect.kind],
    )}
  >
    {effect.text}
  </span>
);
