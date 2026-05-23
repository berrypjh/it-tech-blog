import { cn } from '@it-tech-blog/utils';

import type { PropsKind } from '../content';
import { ClockIcon, ZapIcon } from '../icons';

type Props = {
  kind: PropsKind;
  title: string;
  subtitle: string;
  badge: string;
  exampleLabel: string;
  example: string;
};

const toneClasses = {
  pendingProps: {
    border:
      'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
    iconWrap:
      'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 shadow-[0_4px_16px_-6px_rgba(2,132,199,0.45)]',
    titleColor: 'text-sky-900 dark:text-sky-100',
    subtitleColor: 'text-sky-700/80 dark:text-sky-200/80',
    badge:
      'bg-sky-100 text-sky-800 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    exampleBg: 'bg-sky-50/80 border-sky-200/80 dark:bg-sky-950/30 dark:border-sky-800/60',
    exampleCode: 'text-sky-900 dark:text-sky-100',
  },
  memoizedProps: {
    border:
      'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
    iconWrap:
      'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 shadow-[0_4px_16px_-6px_rgba(16,185,129,0.45)]',
    titleColor: 'text-emerald-900 dark:text-emerald-100',
    subtitleColor: 'text-emerald-700/80 dark:text-emerald-200/80',
    badge:
      'bg-emerald-100 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    exampleBg:
      'bg-emerald-50/80 border-emerald-200/80 dark:bg-emerald-950/30 dark:border-emerald-800/60',
    exampleCode: 'text-emerald-900 dark:text-emerald-100',
  },
} as const;

export const PropsCompareCard = ({
  kind,
  title,
  subtitle,
  badge,
  exampleLabel,
  example,
}: Props) => {
  const tone = toneClasses[kind];
  const Icon = kind === 'pendingProps' ? ZapIcon : ClockIcon;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        tone.border,
      )}
    >
      <header className="flex items-start gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl',
            tone.iconWrap,
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div className="flex flex-col gap-0.5 min-w-0">
          <h3
            className={cn('font-mono text-sm font-bold tracking-tight break-keep', tone.titleColor)}
          >
            {title}
          </h3>
          <p className={cn('text-xsm leading-snug break-keep', tone.subtitleColor)}>{subtitle}</p>
        </div>
      </header>

      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
          tone.badge,
        )}
      >
        {badge}
      </span>

      <div className={cn('mt-auto rounded-xl border p-sm', tone.exampleBg)}>
        <span className="block text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] mb-1">
          {`// ${exampleLabel}`}
        </span>
        <code
          className={cn(
            'block font-mono text-xsm sm:text-sm font-bold break-all',
            tone.exampleCode,
          )}
        >
          {example}
        </code>
      </div>
    </article>
  );
};
