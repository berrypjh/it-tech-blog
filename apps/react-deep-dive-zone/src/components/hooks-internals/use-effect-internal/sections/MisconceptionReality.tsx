import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { UseEffectInternalsContent } from '../content';
import { CheckCircleIcon, SplitIcon, XCircleIcon } from '../icons';

type Props = { content: UseEffectInternalsContent['misconception'] };

type CardProps = {
  variant: 'misconception' | 'reality';
  label: string;
  title: string;
  body: string[];
  caption: string;
};

const SideCard = ({ variant, label, title, body, caption }: CardProps) => {
  const isMisconception = variant === 'misconception';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all',
        'motion-safe:hover:-translate-y-0.5',
        isMisconception
          ? 'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/60 dark:bg-rose-950/30'
          : 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/60 dark:bg-teal-950/30',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full',
            isMisconception
              ? 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900'
              : 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          {isMisconception ? (
            <XCircleIcon className="h-5 w-5" />
          ) : (
            <CheckCircleIcon className="h-5 w-5" />
          )}
        </span>
        <p
          className={cn(
            'text-[10px] font-mono font-bold uppercase tracking-wider',
            isMisconception
              ? 'text-rose-700 dark:text-rose-300'
              : 'text-teal-700 dark:text-teal-300',
          )}
        >
          {label}
        </p>
      </header>

      <h3
        className={cn(
          'text-sm sm:text-md font-bold leading-snug break-keep',
          isMisconception ? 'text-rose-800 dark:text-rose-100' : 'text-teal-800 dark:text-teal-100',
        )}
      >
        {title}
      </h3>

      <ul className="flex flex-col gap-1">
        {body.map((line) => (
          <li
            key={line}
            className={cn(
              'flex items-start gap-2 rounded-lg border px-3 py-2 text-[11px] sm:text-xsm break-keep',
              isMisconception
                ? 'border-rose-200/70 bg-white text-rose-900 dark:border-rose-800/60 dark:bg-rose-950/20 dark:text-rose-100'
                : 'border-teal-200/70 bg-white text-teal-900 dark:border-teal-800/60 dark:bg-teal-950/20 dark:text-teal-100',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0',
                isMisconception ? 'bg-rose-500 dark:bg-rose-400' : 'bg-teal-500 dark:bg-teal-400',
              )}
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <p
        className={cn(
          'mt-auto text-[11px] sm:text-xsm italic leading-relaxed break-keep',
          isMisconception
            ? 'text-rose-700/85 dark:text-rose-300/85'
            : 'text-teal-700/85 dark:text-teal-300/85',
        )}
      >
        {caption}
      </p>
    </article>
  );
};

export const MisconceptionReality = ({ content }: Props) => (
  <section
    aria-labelledby="heading-misconception"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="misconception"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SplitIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md lg:gap-lg items-stretch">
      <SideCard
        variant="misconception"
        label={content.misconception.label}
        title={content.misconception.title}
        body={content.misconception.body}
        caption={content.misconception.caption}
      />

      <div aria-hidden="true" className="flex items-center justify-center">
        <span
          className={cn(
            'inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full',
            'bg-slate-900 text-white font-mono text-sm sm:text-md font-bold tracking-wider',
            'border-4 border-[var(--term-bg)] shadow-[0_3px_0_var(--term-border)]',
            'dark:bg-slate-200 dark:text-slate-900',
          )}
        >
          {content.vsBadge}
        </span>
      </div>

      <SideCard
        variant="reality"
        label={content.reality.label}
        title={content.reality.title}
        body={content.reality.body}
        caption={content.reality.caption}
      />
    </div>
  </section>
);
