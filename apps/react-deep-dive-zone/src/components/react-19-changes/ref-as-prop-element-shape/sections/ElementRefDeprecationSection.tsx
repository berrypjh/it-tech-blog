import { cn } from '@it-tech-blog/utils';

import type { RefAsPropElementShapeContent } from '../content';
import { ArrowRightIcon, ShieldAlertIcon, SparklesIcon, TriangleAlertIcon } from '../icons';
import { pathTone } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: RefAsPropElementShapeContent['elementRefDeprecation'] };

export const ElementRefDeprecationSection = ({ content }: Props) => {
  const oldTone = pathTone.deprecated;
  const newTone = pathTone.propsRef;
  const warnTone = pathTone.deprecated;

  return (
    <section aria-labelledby="element-ref-deprecation-heading" className="flex flex-col">
      <SectionHeader
        id="element-ref-deprecation-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_minmax(0,_1fr)] lg:gap-md items-stretch">
        {/* LEFT: 이전 감각 (React 18) */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            oldTone.border,
            oldTone.bg,
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                oldTone.iconChip,
              )}
            >
              <TriangleAlertIcon className="h-4 w-4" />
            </span>
            <h3 className={cn('text-sm font-bold break-keep', oldTone.text)}>
              {content.left.title}
            </h3>
          </header>
          <div
            className={cn(
              'rounded-xl border-2 bg-slate-950 px-3 py-3',
              'border-rose-700/60 dark:border-rose-700/70',
            )}
          >
            <code className="font-mono text-sm font-bold text-rose-300 break-all">
              {content.left.codeLine}
            </code>
          </div>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.left.body}
          </p>
        </article>

        {/* ARROW */}
        <div className="flex lg:flex-col items-center justify-center">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-500 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:text-slate-400"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </div>

        {/* MIDDLE: React 19 방향 */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            newTone.border,
            newTone.bg,
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                newTone.iconChip,
              )}
            >
              <SparklesIcon className="h-4 w-4" />
            </span>
            <h3 className={cn('text-sm font-bold break-keep', newTone.text)}>
              {content.middle.title}
            </h3>
          </header>
          <div
            className={cn(
              'rounded-xl border-2 bg-slate-950 px-3 py-3',
              'border-teal-700/60 dark:border-teal-700/70',
            )}
          >
            <code className="font-mono text-sm font-bold text-teal-300 break-all">
              {content.middle.codeLine}
            </code>
          </div>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.middle.body}
          </p>
        </article>

        {/* WARNING: deprecation */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            warnTone.borderStrong,
            warnTone.bg,
            'shadow-[0_2px_0_var(--term-border)]',
            'relative overflow-hidden',
          )}
        >
          <header className="flex items-start justify-between gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                warnTone.iconChip,
              )}
            >
              <ShieldAlertIcon className="h-5 w-5" />
            </span>
            <span
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5',
                'border-rose-300 bg-rose-100 text-rose-700',
                'dark:border-rose-700/70 dark:bg-rose-950/60 dark:text-rose-200',
                'font-mono text-[10px] font-bold uppercase tracking-wider',
              )}
            >
              {content.warning.badge}
            </span>
          </header>
          <h3 className={cn('text-sm sm:text-md font-mono font-bold break-keep', warnTone.text)}>
            {content.warning.title}
          </h3>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.warning.body}
          </p>
        </article>
      </div>
    </section>
  );
};
