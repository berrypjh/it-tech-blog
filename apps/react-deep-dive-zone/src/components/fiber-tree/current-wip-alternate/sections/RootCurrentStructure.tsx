import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { CurrentWipAlternateContent } from '../content';
import { ArrowDownIcon, LightbulbIcon, NetworkIcon } from '../icons';

type Props = { content: CurrentWipAlternateContent['rootCurrent'] };

const tone = {
  slate: {
    border: 'border-slate-200/80 dark:border-slate-700/60',
    bg: 'bg-slate-50/60 dark:bg-slate-900/40',
    text: 'text-[var(--term-fg)]',
    sub: 'text-[var(--term-muted)]',
  },
  sky: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    bg: 'bg-sky-50/70 dark:bg-sky-950/40',
    text: 'text-sky-900 dark:text-sky-100',
    sub: 'text-sky-700/80 dark:text-sky-300/80',
  },
  emerald: {
    border: 'border-emerald-200/80 dark:border-emerald-800/60',
    bg: 'bg-emerald-50/60 dark:bg-emerald-950/30',
    text: 'text-emerald-900 dark:text-emerald-100',
    sub: 'text-emerald-700/80 dark:text-emerald-300/80',
  },
} as const;

export const RootCurrentStructure = ({ content }: Props) => (
  <section
    id="root-current"
    aria-labelledby="heading-root-current"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="root-current"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="flex flex-col items-center gap-1">
        {content.steps.map((step, idx) => {
          const t = tone[step.tone];
          return (
            <li key={step.id} className="flex flex-col items-center">
              <article
                className={cn(
                  'rounded-xl border-2 px-4 py-2 min-w-[180px] text-center',
                  t.border,
                  t.bg,
                )}
              >
                <code className={cn('font-mono text-xsm font-bold', t.text)}>{step.label}</code>
                {step.subtitle && (
                  <span className={cn('block text-[10px] font-mono mt-0.5', t.sub)}>
                    {step.subtitle}
                  </span>
                )}
              </article>
              {idx < content.steps.length - 1 && (
                <span aria-hidden="true" className="flex items-center justify-center w-7 h-7 my-1">
                  <ArrowDownIcon className="h-4 w-4 text-sky-600 dark:text-sky-300" />
                </span>
              )}
            </li>
          );
        })}
      </ol>

      <div
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-sky-300/80 bg-sky-50/70',
          'dark:border-sky-800/60 dark:bg-sky-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
        >
          <LightbulbIcon className="h-5 w-5" />
        </span>
        <p className="text-xsm sm:text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
          {content.emphasis}
        </p>
      </div>
    </article>
  </section>
);
