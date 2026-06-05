import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { ScheduleUpdateOnFiberContent } from '../content';
import { ArrowRightIcon, LightbulbIcon, NetworkIcon, ZapIcon } from '../icons';

type Props = { content: ScheduleUpdateOnFiberContent['hero'] };

export const ScheduleUpdateHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="grep -n"
    promptPath="scheduleUpdateOnFiber"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' '}
        packages/react-reconciler/src/ReactFiberWorkLoop.js
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">{content.title.line2}</span>
        <span className="block">{content.title.line3}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line4}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>

      {/* callout */}
      <aside
        className={cn(
          'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-amber-100 text-amber-700 border border-amber-200/80',
            'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
          )}
        >
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.callout}
        </p>
      </aside>
    </HeroTextColumn>

    <HeroVisualColumn className="min-w-0">
      <RootStateDiagram diagram={content.diagram} />
    </HeroVisualColumn>
  </HeroSection>
);

const RootStateDiagram = ({
  diagram,
}: {
  diagram: ScheduleUpdateOnFiberContent['hero']['diagram'];
}) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-emerald-50/30',
      'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <h2 className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-tight">
        {diagram.title}
      </h2>
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
        before → after
      </span>
    </header>

    {/* Compare grid */}
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md sm:gap-sm items-stretch">
      {/* Before */}
      <RootStateCard
        variant="before"
        label={diagram.beforeLabel}
        title={diagram.beforeTitle}
        state={diagram.beforeState}
        body={diagram.beforeBody}
      />

      {/* Connector arrow */}
      <div className="flex sm:flex-col items-center justify-center gap-2 px-1">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center rounded-full border-2',
            'h-11 w-11',
            'border-sky-300/80 bg-white text-sky-600',
            'dark:border-sky-700/70 dark:bg-slate-950/60 dark:text-sky-300',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <ArrowRightIcon className="h-5 w-5 rotate-90 sm:rotate-0" />
        </span>
      </div>

      {/* After */}
      <RootStateCard
        variant="after"
        label={diagram.afterLabel}
        title={diagram.afterTitle}
        badge={diagram.afterBadge}
        state={diagram.afterState}
        body={diagram.afterBody}
      />
    </div>

    {/* Function label */}
    <div
      className={cn(
        'mt-md rounded-2xl border-2 px-md py-3 text-center',
        'border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-slate-100',
        'shadow-[0_12px_28px_-12px_rgba(2,6,23,0.6)]',
      )}
    >
      <code className="font-mono text-xsm sm:text-sm font-bold">
        <span className="text-amber-300">scheduleUpdateOnFiber</span>
        <span className="text-slate-400">(</span>
        <span className="text-sky-200">root</span>
        <span className="text-slate-400">, </span>
        <span className="text-emerald-200">fiber</span>
        <span className="text-slate-400">, </span>
        <span className="text-violet-200">lane</span>
        <span className="text-slate-400">)</span>
      </code>
    </div>
  </div>
);

type RootStateCardProps = {
  variant: 'before' | 'after';
  label: string;
  title: string;
  badge?: string;
  state: string;
  body: string;
};

const variantClass = {
  before: {
    card: 'border-[var(--term-border)] bg-slate-50/50 dark:bg-slate-900/30',
    label: 'text-[var(--term-muted)]',
    title: 'text-[var(--term-fg)]',
    iconBox:
      'bg-slate-100 text-slate-600 border border-[var(--term-border)] dark:bg-slate-900/60 dark:text-slate-300',
    stateBox: 'border-[var(--term-border)] bg-white text-[var(--term-fg)] dark:bg-slate-950/40',
    body: 'text-[var(--term-muted)]',
  },
  after: {
    card: 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/70 dark:bg-sky-950/30',
    label: 'text-sky-700/80 dark:text-sky-300/80',
    title: 'text-sky-900 dark:text-sky-100',
    iconBox:
      'bg-sky-100 text-sky-700 border border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    stateBox:
      'border-emerald-300/80 bg-emerald-50/70 text-emerald-900 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-100',
    body: 'text-sky-900/85 dark:text-sky-100/85',
  },
} as const;

const RootStateCard = ({ variant, label, title, badge, state, body }: RootStateCardProps) => {
  const v = variantClass[variant];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border-2 p-md',
        v.card,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span className={cn('text-[10px] font-mono uppercase tracking-wider font-bold', v.label)}>
          {label}
        </span>
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

      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn('inline-flex h-10 w-10 items-center justify-center rounded-xl', v.iconBox)}
        >
          <NetworkIcon className="h-4 w-4" />
        </span>
        <span className={cn('text-sm sm:text-md font-bold font-mono', v.title)}>{title}</span>
      </div>

      <code
        className={cn(
          'inline-flex w-fit items-center rounded-md border px-2 py-1 font-mono text-[11px] font-bold',
          variant === 'after' ? v.stateBox : 'border-slate-800 bg-slate-950 text-slate-100',
        )}
      >
        {variant === 'after' ? (
          <span>{state}</span>
        ) : (
          <span className="text-amber-300">{state}</span>
        )}
      </code>

      <p className={cn('text-xxsm leading-snug break-keep', v.body)}>{body}</p>
    </article>
  );
};
