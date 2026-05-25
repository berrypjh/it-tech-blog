import { cn } from '@it-tech-blog/utils';

import type { PromiseVsErrorSplitContent } from '../content';
import { CheckCircleIcon, HourglassIcon, TriangleAlertIcon } from '../icons';
import { pathAccent } from '../tone';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: PromiseVsErrorSplitContent['twoFaces'] };

export const TwoFacesSection = ({ content }: Props) => {
  const a = pathAccent.thenable;
  const b = pathAccent.error;
  return (
    <section aria-labelledby="twofaces-heading" className="flex flex-col gap-md">
      <SectionHeader id="twofaces-heading" number={content.number} title={content.title} />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch">
        {/* LEFT promise card */}
        <article
          className={cn(
            'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            a.border,
            a.bg,
            'shadow-[0_2px_0_var(--term-border)]',
            'transition-transform motion-safe:hover:-translate-y-0.5',
          )}
        >
          <CodeBlock code={content.promise.code} withLineNumbers={false} />
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-xl border',
                a.iconChip,
              )}
            >
              <HourglassIcon className="h-4 w-4" />
            </span>
            <h3 className={cn('text-md font-bold break-keep', a.text)}>{content.promise.label}</h3>
          </header>
          <ul className="flex flex-col gap-1.5">
            {content.promise.checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
              >
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-400"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* VS */}
        <div className="flex items-center justify-center">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full',
              'border-2 border-blue-200 bg-white text-blue-600 font-mono font-bold',
              'dark:border-blue-700 dark:bg-slate-900 dark:text-blue-300',
              'shadow-[0_2px_0_rgba(59,130,246,0.15)]',
            )}
          >
            {content.vs}
          </span>
        </div>

        {/* RIGHT error card */}
        <article
          className={cn(
            'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            b.border,
            b.bg,
            'shadow-[0_2px_0_var(--term-border)]',
            'transition-transform motion-safe:hover:-translate-y-0.5',
          )}
        >
          <CodeBlock code={content.error.code} withLineNumbers={false} />
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-xl border',
                b.iconChip,
              )}
            >
              <TriangleAlertIcon className="h-4 w-4" />
            </span>
            <h3 className={cn('text-md font-bold break-keep', b.text)}>{content.error.label}</h3>
          </header>
          <ul className="flex flex-col gap-1.5">
            {content.error.checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
              >
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-rose-500 dark:text-rose-400"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
