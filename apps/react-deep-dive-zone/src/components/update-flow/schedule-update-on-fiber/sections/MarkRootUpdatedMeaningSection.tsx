import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { RootStateField, ScheduleUpdateOnFiberContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  FlagIcon,
  NetworkIcon,
  ZapIcon,
} from '../icons';

type Props = { content: ScheduleUpdateOnFiberContent['markRoot'] };

export const MarkRootUpdatedMeaningSection = ({ content }: Props) => (
  <section id="markRoot" aria-labelledby="heading-markRoot" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="markRoot"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FlagIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.35fr)] gap-md lg:gap-lg items-stretch">
      {/* Left description */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-sky-200/80 dark:border-sky-800/70',
          'bg-gradient-to-br from-white via-sky-50/40 to-emerald-50/25',
          'dark:from-[var(--term-bg)] dark:via-sky-950/25 dark:to-emerald-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <code
          className={cn(
            'inline-flex w-fit items-center rounded-lg border px-3 py-1.5 font-mono text-sm sm:text-md font-bold',
            'border-slate-800 bg-slate-950 text-slate-100',
          )}
        >
          <span className="text-amber-300">{content.description.title}</span>
        </code>

        <span
          aria-hidden="true"
          className="self-start inline-flex items-center justify-center h-7 w-7 rounded-full border border-sky-200/80 bg-sky-50 text-sky-700 dark:border-sky-700/60 dark:bg-sky-950/40 dark:text-sky-300"
        >
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep">
          {content.description.body}
        </p>

        <span aria-hidden="true" className="block h-px w-full bg-[var(--term-border)]" />

        <ul className="flex flex-col gap-2">
          {content.description.bullets.map((b) => (
            <li
              key={b}
              className={cn(
                'flex items-start gap-2 rounded-xl border px-3 py-2',
                'border-sky-200/80 bg-sky-50/40 text-sky-900',
                'dark:border-sky-800/60 dark:bg-sky-950/20 dark:text-sky-100',
              )}
            >
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950"
              >
                <CheckCircleIcon className="h-3 w-3" />
              </span>
              <span className="text-xsm sm:text-sm leading-snug break-keep">{b}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* Right diagram */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-gradient-to-br from-white via-emerald-50/20 to-sky-50/25',
          'dark:from-[var(--term-bg)] dark:via-emerald-950/15 dark:to-sky-950/15',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-sm">
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-tight">
            {content.diagramTitle}
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700/80 dark:text-emerald-300/80 rounded-md border border-emerald-200/70 dark:border-emerald-800/60 px-2 py-0.5">
            before → after
          </span>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
          <RootCard variant="before" title={content.beforeTitle} fields={content.beforeFields} />

          <div className="flex lg:flex-col items-center justify-center gap-2 px-1">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center rounded-full border-2',
                'h-10 w-10',
                'border-sky-300/80 bg-white text-sky-600',
                'dark:border-sky-700/70 dark:bg-slate-950/60 dark:text-sky-300',
                'shadow-[0_2px_0_var(--term-border)]',
              )}
            >
              <ArrowRightIcon className="h-4 w-4 rotate-90 lg:rotate-0" />
            </span>
          </div>

          <RootCard
            variant="after"
            title={content.afterTitle}
            badge={content.afterBadge}
            fields={content.afterFields}
          />
        </div>
      </article>
    </div>
  </section>
);

type RootCardProps = {
  variant: 'before' | 'after';
  title: string;
  badge?: string;
  fields: RootStateField[];
};

const rootCardClass = {
  before: {
    border: 'border-[var(--term-border)]',
    bg: 'bg-slate-50/50 dark:bg-slate-900/30',
    title: 'text-[var(--term-fg)]',
    iconBox:
      'bg-slate-100 text-slate-600 border border-[var(--term-border)] dark:bg-slate-900/60 dark:text-slate-300',
    field: 'text-[var(--term-muted)]',
    fieldEmphasized: '',
  },
  after: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    bg: 'bg-sky-50/40 dark:bg-sky-950/25',
    title: 'text-sky-900 dark:text-sky-100',
    iconBox:
      'bg-sky-100 text-sky-700 border border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    field: 'text-sky-900/85 dark:text-sky-100/85',
    fieldEmphasized: 'text-emerald-700 dark:text-emerald-300 font-bold',
  },
} as const;

const RootCard = ({ variant, title, badge, fields }: RootCardProps) => {
  const c = rootCardClass[variant];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border-2 p-md',
        c.border,
        c.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            aria-hidden="true"
            className={cn('inline-flex h-9 w-9 items-center justify-center rounded-xl', c.iconBox)}
          >
            <NetworkIcon className="h-4 w-4" />
          </span>
          <span className={cn('text-xsm sm:text-sm font-bold font-mono', c.title)}>{title}</span>
        </div>
        {badge && (
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5',
              'border-amber-300/70 bg-amber-50 text-amber-700 text-[9px] font-mono uppercase tracking-wider',
              'dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
            )}
          >
            <ZapIcon aria-hidden="true" className="h-3 w-3" />
            {badge}
          </span>
        )}
      </header>

      <ul
        className={cn(
          'rounded-lg border px-3 py-2 font-mono text-[11px] leading-[1.85]',
          'border-[var(--term-border)] bg-white dark:bg-slate-950/40',
        )}
      >
        {fields.map((f) => (
          <li key={f.key} className="flex items-center justify-between gap-2">
            <span className={cn(c.field)}>{f.key}</span>
            <span className={cn(c.field, f.emphasized && c.fieldEmphasized)}>{f.value}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
