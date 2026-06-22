import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberToRootContent } from '../content';
import { ArrowLeftRightIcon, NetworkIcon, RefreshIcon } from '../icons';

type Props = { content: FiberToRootContent['alternate'] };

export const AlternateUpdateReasonSection = ({ content }: Props) => (
  <section id="alternate" aria-labelledby="heading-alternate" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="alternate"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RefreshIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] gap-md lg:gap-lg items-stretch">
      {/* Left description */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-sky-200/80 dark:border-sky-800/70',
          'bg-gradient-to-br from-white via-sky-50/40 to-violet-50/25',
          'dark:from-[var(--term-bg)] dark:via-sky-950/25 dark:to-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-2xl border',
              'bg-sky-100 text-sky-700 border-sky-200/80',
              'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
            )}
          >
            <RefreshIcon className="h-5 w-5" />
          </span>
          <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
            mirror across alternate
          </span>
        </header>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep whitespace-pre-line">
          {content.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5">
          <li className="rounded-md border border-sky-300/70 bg-white/70 px-2 py-0.5 text-[10px] font-mono text-sky-700 dark:border-sky-700/60 dark:bg-slate-950/40 dark:text-sky-200">
            current
          </li>
          <li className="rounded-md border border-violet-300/70 bg-white/70 px-2 py-0.5 text-[10px] font-mono text-violet-700 dark:border-violet-700/60 dark:bg-slate-950/40 dark:text-violet-200">
            work-in-progress
          </li>
          <li className="rounded-md border border-emerald-300/70 bg-white/70 px-2 py-0.5 text-[10px] font-mono text-emerald-700 dark:border-emerald-700/60 dark:bg-slate-950/40 dark:text-emerald-200">
            alternate ↔
          </li>
        </ul>
      </article>

      {/* Right diagram */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-gradient-to-br from-white via-violet-50/15 to-sky-50/15',
          'dark:from-[var(--term-bg)] dark:via-violet-950/10 dark:to-sky-950/10',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
          <TreeCard
            tone="sky"
            title={content.currentTitle}
            body={content.currentBody}
            badge="current"
          />

          <MiddleConnector label={content.middleLabel} />

          <TreeCard tone="violet" title={content.wipTitle} body={content.wipBody} badge="WIP" />
        </div>
      </article>
    </div>
  </section>
);

const treeToneClass = {
  sky: {
    border: 'border-sky-300/70 dark:border-sky-700/70',
    bg: 'bg-gradient-to-br from-sky-50/70 via-white to-cyan-50/30 dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
    iconBox:
      'bg-sky-100 text-sky-700 border border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    title: 'text-sky-800 dark:text-sky-100',
    pill: 'border-sky-300/70 bg-white text-sky-700 dark:border-sky-700/60 dark:bg-slate-950/40 dark:text-sky-200',
  },
  violet: {
    border: 'border-violet-300/70 dark:border-violet-700/70',
    bg: 'bg-gradient-to-br from-violet-50/70 via-white to-fuchsia-50/30 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-fuchsia-950/20',
    iconBox:
      'bg-violet-100 text-violet-700 border border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    title: 'text-violet-800 dark:text-violet-100',
    pill: 'border-violet-300/70 bg-white text-violet-700 dark:border-violet-700/60 dark:bg-slate-950/40 dark:text-violet-200',
  },
} as const;

type TreeCardProps = {
  tone: 'sky' | 'violet';
  title: string;
  body: string;
  badge: string;
};

const TreeCard = ({ tone, title, body, badge }: TreeCardProps) => {
  const t = treeToneClass[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border-2 p-md',
        t.border,
        t.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn('inline-flex h-11 w-11 items-center justify-center rounded-2xl', t.iconBox)}
        >
          <NetworkIcon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.pill,
          )}
        >
          {badge}
        </span>
      </header>
      <h3
        className={cn('text-sm sm:text-md font-bold font-mono leading-tight break-keep', t.title)}
      >
        {title}
      </h3>
      <code
        className={cn(
          'inline-flex w-fit items-center rounded-md border px-2 py-1 font-mono text-[11px] font-bold',
          'border-slate-800 bg-slate-950 text-slate-100',
        )}
      >
        <span className="text-amber-300">{body}</span>
      </code>
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
      <ArrowLeftRightIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
    </span>
    <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-200 text-center break-keep">
      {label}
    </span>
  </div>
);
