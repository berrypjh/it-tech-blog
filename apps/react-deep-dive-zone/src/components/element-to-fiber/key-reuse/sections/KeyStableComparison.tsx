import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { KeyFiberReuseContent } from '../content';
import { CheckCircleIcon, GitBranchIcon, XIcon } from '../icons';

type Props = { content: KeyFiberReuseContent['stableVsChanged'] };

export const KeyStableComparison = ({ content }: Props) => (
  <section
    id="stable-vs-changed"
    aria-labelledby="heading-stable-vs-changed"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="stable-vs-changed"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'grid items-stretch min-w-0',
        'grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)]',
        'gap-md',
      )}
    >
      <CompareCard
        tone="emerald"
        icon={<CheckCircleIcon className="h-6 w-6" />}
        title={content.stableTitle}
        main={content.stableMain}
        items={content.stableItems}
      />

      {/* VS badge */}
      <div className="flex items-center justify-center" aria-hidden="true">
        <span
          className={cn(
            'inline-flex items-center justify-center w-14 h-14 rounded-full',
            'bg-slate-900 text-white border-4 border-[var(--term-bg)]',
            'shadow-[0_10px_28px_-12px_rgba(15,23,42,0.6)]',
            'font-mono text-sm font-extrabold tracking-widest',
          )}
        >
          {content.vsLabel}
        </span>
      </div>

      <CompareCard
        tone="violet"
        icon={<XIcon className="h-6 w-6" />}
        title={content.changedTitle}
        main={content.changedMain}
        items={content.changedItems}
      />
    </div>
  </section>
);

const toneTokens = {
  emerald: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    surface:
      'bg-emerald-50/60 border-emerald-300/80 dark:bg-emerald-950/30 dark:border-emerald-700/70',
    text: 'text-emerald-700 dark:text-emerald-300',
    mainText: 'text-emerald-900 dark:text-emerald-100',
    icon: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
    chip: 'border-emerald-300/80 bg-emerald-100 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/60 dark:text-emerald-200',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    surface: 'bg-violet-50/60 border-violet-300/80 dark:bg-violet-950/30 dark:border-violet-700/70',
    text: 'text-violet-700 dark:text-violet-300',
    mainText: 'text-violet-900 dark:text-violet-100',
    icon: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
    chip: 'border-violet-300/80 bg-violet-100 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/60 dark:text-violet-200',
    dot: 'bg-violet-500 dark:bg-violet-400',
  },
} as const;

const CompareCard = ({
  tone,
  icon,
  title,
  main,
  items,
}: {
  tone: 'emerald' | 'violet';
  icon: React.ReactNode;
  title: string;
  main: string;
  items: string[];
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'group flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
            t.icon,
          )}
        >
          {icon}
        </span>
        <code className={cn('font-mono text-md sm:text-lg font-extrabold tracking-tight', t.text)}>
          {title}
        </code>
      </header>

      <div className={cn('rounded-xl border-2 p-md', t.surface)}>
        <p className={cn('text-sm sm:text-md font-bold leading-snug break-keep', t.mainText)}>
          → {main}
        </p>
      </div>

      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className={cn('inline-block w-1.5 h-1.5 rounded-full shrink-0 mt-2', t.dot)}
            />
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{item}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};
