import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberStateNodeContent } from '../content';
import { AlertTriangleIcon, CheckCircleIcon, XCircleIcon } from '../icons';

type Props = { content: FiberStateNodeContent['misconception'] };

export const StateNodeMisconception = ({ content }: Props) => (
  <section
    id="misconception"
    aria-labelledby="heading-misconception"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="misconception"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<AlertTriangleIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      <article
        className={cn(
          'flex flex-col gap-sm rounded-3xl border-2 p-md sm:p-lg',
          'border-rose-300/80 bg-rose-50/60',
          'dark:border-rose-800/60 dark:bg-rose-950/30',
          'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-10 h-10 rounded-xl',
              'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200',
            )}
          >
            <XCircleIcon className="h-5 w-5" />
          </span>
          <span className="inline-flex items-center rounded-full border border-rose-300/80 bg-rose-100/80 dark:bg-rose-950/60 dark:border-rose-800/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-800 dark:text-rose-200">
            {content.misLabel}
          </span>
        </header>
        <h3 className="text-md sm:text-lg font-bold leading-snug text-rose-900 dark:text-rose-100 break-keep">
          {content.misText.lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-auto text-xsm leading-relaxed text-rose-800/90 dark:text-rose-200/90 break-keep">
          {content.misDescription}
        </p>
      </article>

      <div className="flex lg:flex-col items-center justify-center gap-sm lg:px-2">
        <span
          aria-hidden="true"
          className={cn(
            'flex-1 lg:flex-none lg:h-12 h-px lg:w-px w-12 border-t-2 lg:border-t-0 lg:border-l-2 border-dashed',
            'border-amber-400/70 dark:border-amber-500/70',
          )}
        />
        <div className="flex flex-col items-center gap-1">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-12 h-12 rounded-full',
              'bg-amber-100 text-amber-700 border-2 border-amber-300/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-700/70',
            )}
          >
            <AlertTriangleIcon className="h-6 w-6" />
          </span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 break-keep text-center">
            {content.centerText}
          </span>
        </div>
        <span
          aria-hidden="true"
          className={cn(
            'flex-1 lg:flex-none lg:h-12 h-px lg:w-px w-12 border-t-2 lg:border-t-0 lg:border-l-2 border-dashed',
            'border-emerald-400/70 dark:border-emerald-500/70',
          )}
        />
      </div>

      <article
        className={cn(
          'flex flex-col gap-sm rounded-3xl border-2 p-md sm:p-lg',
          'border-emerald-300/80 bg-emerald-50/60',
          'dark:border-emerald-800/60 dark:bg-emerald-950/30',
          'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-10 h-10 rounded-xl',
              'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
            )}
          >
            <CheckCircleIcon className="h-5 w-5" />
          </span>
          <span className="inline-flex items-center rounded-full border border-emerald-300/80 bg-emerald-100/80 dark:bg-emerald-950/60 dark:border-emerald-800/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-200">
            {content.correctLabel}
          </span>
        </header>
        <h3 className="text-md sm:text-lg font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
          {content.correctText.lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-auto text-xsm leading-relaxed text-emerald-800/90 dark:text-emerald-200/90 break-keep">
          {content.correctDescription}
        </p>
      </article>
    </div>
  </section>
);
