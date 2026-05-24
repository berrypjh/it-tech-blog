import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { StateUpdateStartContent } from '../content';
import {
  ArrowRightIcon,
  DatabaseIcon,
  LightbulbIcon,
  MonitorCheckIcon,
  MousePointerIcon,
} from '../icons';

type Props = { content: StateUpdateStartContent['snapshot'] };

export const StateSnapshotSection = ({ content }: Props) => (
  <section id="snapshot" aria-labelledby="heading-snapshot" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="snapshot"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<DatabaseIcon className="h-5 w-5" />}
    />

    {/* Top note */}
    <div
      className={cn(
        'flex items-center justify-center gap-sm rounded-2xl border px-md py-3',
        'border-sky-200/80 bg-sky-50/70 text-sky-800',
        'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-100',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700 border border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60"
      >
        <LightbulbIcon className="h-3.5 w-3.5" />
      </span>
      <p className="text-xsm sm:text-sm font-bold text-center break-keep">{content.topNote}</p>
    </div>

    {/* Diagram */}
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
      {/* Left card - Current render */}
      <SnapshotCard
        tone="sky"
        title={content.leftCard.title}
        subtitle={content.leftCard.subtitle}
        pill={content.leftCard.pill}
        action={content.leftCard.action}
        codeLine={content.leftCard.callLine}
        callout={content.leftCard.callout}
        footnote={content.leftCard.footnote}
        icon={<MousePointerIcon className="h-5 w-5" />}
      />

      {/* Middle arrow */}
      <div className="flex lg:flex-col items-center justify-center gap-1">
        <div
          className={cn(
            'flex flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed px-md py-3',
            'border-cyan-300/80 bg-white/70',
            'dark:border-cyan-700/70 dark:bg-cyan-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-full',
              'bg-cyan-100 text-cyan-700 border border-cyan-200/80',
              'dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
            )}
          >
            <ArrowRightIcon className="h-4 w-4 rotate-90 lg:rotate-0" />
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-cyan-800 dark:text-cyan-100 text-center leading-snug">
            {content.middle.label}
          </span>
          <span className="text-[10px] text-cyan-700/80 dark:text-cyan-300/80 text-center">
            {content.middle.sub}
          </span>
        </div>
      </div>

      {/* Right card - Next render */}
      <SnapshotCard
        tone="emerald"
        title={content.rightCard.title}
        subtitle={content.rightCard.subtitle}
        pill={content.rightCard.pill}
        action={content.rightCard.action}
        callout={content.rightCard.callout}
        footnote={content.rightCard.footnote}
        icon={<MonitorCheckIcon className="h-5 w-5" />}
      />
    </div>
  </section>
);

type CardProps = {
  tone: 'sky' | 'emerald';
  title: string;
  subtitle: string;
  pill: string;
  action: string;
  codeLine?: string;
  callout: string;
  footnote: string;
  icon: React.ReactNode;
};

const toneClass = {
  sky: {
    border: 'border-sky-200/80 dark:border-sky-800/70',
    bg: 'bg-gradient-to-br from-sky-50/70 via-white to-white dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-[var(--term-bg)]',
    iconBox:
      'bg-sky-100 text-sky-700 border border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    pill: 'bg-sky-100 text-sky-800 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-100 dark:border-sky-800/60',
    title: 'text-sky-800 dark:text-sky-100',
    callout:
      'border-sky-300/70 bg-white text-sky-900 dark:border-sky-700/70 dark:bg-slate-950/50 dark:text-sky-100',
  },
  emerald: {
    border: 'border-emerald-200/80 dark:border-emerald-800/70',
    bg: 'bg-gradient-to-br from-emerald-50/70 via-white to-white dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-[var(--term-bg)]',
    iconBox:
      'bg-emerald-100 text-emerald-700 border border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    pill: 'bg-emerald-100 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-100 dark:border-emerald-800/60',
    title: 'text-emerald-800 dark:text-emerald-100',
    callout:
      'border-emerald-300/70 bg-white text-emerald-900 dark:border-emerald-700/70 dark:bg-slate-950/50 dark:text-emerald-100',
  },
} as const;

const SnapshotCard = ({
  tone,
  title,
  subtitle,
  pill,
  action,
  codeLine,
  callout,
  footnote,
  icon,
}: CardProps) => {
  const t = toneClass[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-3xl border-2 p-md sm:p-lg',
        t.border,
        t.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-start gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-2xl shrink-0',
            t.iconBox,
          )}
        >
          {icon}
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', t.title)}>
            {title}
          </h3>
          <span className="text-xxsm text-[var(--term-muted)] mt-0.5">{subtitle}</span>
        </div>
      </header>

      <span
        className={cn(
          'inline-flex w-fit items-center gap-2 rounded-lg border px-3 py-1.5',
          'text-xxsm font-mono font-bold',
          t.pill,
        )}
      >
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
        {pill}
      </span>

      <p className="text-xsm sm:text-sm text-[var(--term-fg)] leading-relaxed break-keep whitespace-pre-line">
        {action}
      </p>

      {codeLine && (
        <pre
          className={cn(
            'overflow-x-auto rounded-lg border px-3 py-2 font-mono text-xxsm',
            'border-slate-800 bg-slate-950 text-slate-100',
          )}
        >
          <code>{codeLine}</code>
        </pre>
      )}

      <div className={cn('mt-auto flex flex-col gap-1 rounded-xl border-2 px-md py-2', t.callout)}>
        <span className="text-xsm sm:text-sm font-bold leading-snug break-keep">{callout}</span>
        <span className="text-xxsm text-[var(--term-muted)] break-keep">{footnote}</span>
      </div>
    </article>
  );
};
