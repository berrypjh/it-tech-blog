import { cn } from '@it-tech-blog/utils';

import type { ActivityHiddenUiContent } from '../content';
import { CheckCircleIcon, XCircleIcon } from '../icons';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ActivityHiddenUiContent['comparison'] };

export const ConditionalVsActivityCompare = ({ content }: Props) => (
  <section aria-labelledby="comparison-heading" className="flex flex-col">
    <SectionHeader
      id="comparison-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_5fr)_auto_minmax(0,_5fr)] lg:gap-md items-stretch">
      {/* Before */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-rose-200/80 bg-rose-50/40 dark:border-rose-800/70 dark:bg-rose-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/60 dark:text-rose-200"
          >
            <XCircleIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-rose-700 dark:text-rose-200 break-keep">
            {content.beforeTitle}
          </h3>
        </header>
        <CodePanel
          code={content.beforeCode.code}
          langBadge={content.beforeCode.langBadge}
          toneBorder="border-rose-700/70"
        />
        <ul className="flex flex-col gap-1.5">
          {content.beforeProblems.map((p) => (
            <li
              key={p.text}
              className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
            >
              <XCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-600 dark:text-rose-300"
              />
              <span>{p.text}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* VS */}
      <div className="flex lg:flex-col items-center justify-center">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
            'border-blue-300 bg-blue-50 text-blue-700',
            'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
            'shadow-[0_2px_0_var(--term-border)]',
            'font-mono text-xsm font-bold',
          )}
        >
          {content.versus}
        </span>
      </div>

      {/* After */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
          >
            <CheckCircleIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-teal-700 dark:text-teal-200 break-keep">
            {content.afterTitle}
          </h3>
        </header>
        <CodePanel
          code={content.afterCode.code}
          langBadge={content.afterCode.langBadge}
          toneBorder="border-teal-700/70"
        />
        <ul className="flex flex-col gap-1.5">
          {content.afterBenefits.map((b) => (
            <li
              key={b.text}
              className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-300"
              />
              <span>{b.text}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
