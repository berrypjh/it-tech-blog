import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { EnqueueConcurrentHookUpdateContent } from '../content';
import { ArrowRightIcon, DatabaseIcon, NetworkIcon, SparklesIcon } from '../icons';

type Props = { content: EnqueueConcurrentHookUpdateContent['rootReason'] };

export const RootReasonSection = ({ content }: Props) => (
  <section
    id="root-reason"
    aria-labelledby="heading-root-reason"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="root-reason"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-emerald-50/20 to-sky-50/25',
        'dark:from-[var(--term-bg)] dark:via-emerald-950/15 dark:to-sky-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Description */}
      <p className="text-sm sm:text-md text-[var(--term-fg)] leading-relaxed break-keep max-w-[68ch]">
        {content.description}
      </p>

      {/* Diagram */}
      <div className="mt-md grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
        <Node
          tone="emerald"
          title={content.leftNode.title}
          body={content.leftNode.body}
          icon={<DatabaseIcon className="h-5 w-5" />}
          badge="hook scope"
        />

        <MiddleConnector label={content.middleLabel} />

        <Node
          tone="sky"
          title={content.rightNode.title}
          body={content.rightNode.body}
          icon={<NetworkIcon className="h-5 w-5" />}
          badge="tree scope"
        />
      </div>

      {/* Bottom message */}
      <div
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 px-md py-3',
          'border-sky-200/80 bg-sky-50/70',
          'dark:border-sky-800/70 dark:bg-sky-950/40',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl',
            'bg-amber-100 text-amber-700 border border-amber-200/80',
            'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
          )}
        >
          <SparklesIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.bottomMessage}
        </p>
      </div>
    </article>
  </section>
);

const nodeToneClass = {
  emerald: {
    border: 'border-emerald-300/70 dark:border-emerald-700/70',
    bg: 'bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
    iconBox:
      'bg-emerald-100 text-emerald-700 border border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    title: 'text-emerald-800 dark:text-emerald-100',
    badge:
      'border-emerald-300/70 bg-white text-emerald-700 dark:border-emerald-700/60 dark:bg-slate-950/40 dark:text-emerald-200',
  },
  sky: {
    border: 'border-sky-300/70 dark:border-sky-700/70',
    bg: 'bg-gradient-to-br from-sky-50/70 via-white to-cyan-50/40 dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
    iconBox:
      'bg-sky-100 text-sky-700 border border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    title: 'text-sky-800 dark:text-sky-100',
    badge:
      'border-sky-300/70 bg-white text-sky-700 dark:border-sky-700/60 dark:bg-slate-950/40 dark:text-sky-200',
  },
} as const;

type NodeProps = {
  tone: 'emerald' | 'sky';
  title: string;
  body: string;
  icon: React.ReactNode;
  badge: string;
};

const Node = ({ tone, title, body, icon, badge }: NodeProps) => {
  const t = nodeToneClass[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-3xl border-2 p-md sm:p-lg',
        t.border,
        t.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn('inline-flex h-12 w-12 items-center justify-center rounded-2xl', t.iconBox)}
        >
          {icon}
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.badge,
          )}
        >
          {badge}
        </span>
      </header>
      <h3
        className={cn('text-md sm:text-lg font-bold font-mono leading-tight break-keep', t.title)}
      >
        {title}
      </h3>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {body}
      </p>
    </article>
  );
};

const MiddleConnector = ({
  label,
}: {
  label: EnqueueConcurrentHookUpdateContent['rootReason']['middleLabel'];
}) => (
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
      <ArrowRightIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
    </span>
    <div className="flex flex-col items-center text-center">
      <span className="text-xxsm font-bold uppercase tracking-wider text-sky-700 dark:text-sky-200">
        {label.line1}
      </span>
      <span className="text-[10px] font-mono text-[var(--term-muted)] break-keep max-w-[18ch]">
        {label.line2}
      </span>
    </div>
  </div>
);
