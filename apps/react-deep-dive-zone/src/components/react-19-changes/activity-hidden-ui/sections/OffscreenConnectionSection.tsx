import { cn } from '@it-tech-blog/utils';

import type { ActivityHiddenUiContent } from '../content';
import { LayersIcon, ShieldCheckIcon } from '../icons';
import { activityTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ActivityHiddenUiContent['offscreen'] };

export const OffscreenConnectionSection = ({ content }: Props) => (
  <section aria-labelledby="offscreen-heading" className="flex flex-col">
    <SectionHeader
      id="offscreen-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-2 lg:gap-lg items-stretch">
      {/* LEFT: diagram */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-purple-200 bg-purple-100 text-purple-700 dark:border-purple-800/60 dark:bg-purple-950/60 dark:text-purple-200"
          >
            <LayersIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.diagramTitle}
          </h3>
        </header>

        <pre
          role="img"
          aria-label={content.diagramTitle}
          className={cn(
            'overflow-x-auto rounded-xl border-2 px-3 py-3',
            'border-slate-200 bg-slate-50/50 dark:border-slate-700 dark:bg-slate-900/40',
            'font-mono text-[12px] leading-relaxed sm:text-[13px]',
          )}
        >
          <code className="block whitespace-pre">
            {content.diagramLines.map((line, idx) => {
              const tone = activityTone[line.activity];
              const indent = '  '.repeat(line.indent);
              return (
                <span key={idx} className="block">
                  <span className="text-slate-400 dark:text-slate-600">{indent}</span>
                  <span className={cn('font-bold', tone.text)}>{line.label}</span>
                </span>
              );
            })}
          </code>
        </pre>

        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.diagramDescription}
        </p>
      </article>

      {/* RIGHT: management points */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-purple-300/80 bg-purple-50/30 dark:border-purple-700/70 dark:bg-purple-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-purple-200 bg-purple-100 text-purple-700 dark:border-purple-800/60 dark:bg-purple-950/60 dark:text-purple-200"
          >
            <ShieldCheckIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-purple-700 dark:text-purple-200 break-keep">
            {content.managementTitle}
          </h3>
        </header>

        <ul className="flex flex-col gap-2">
          {content.managementItems.map((item) => {
            const Icon = iconRegistry[item.iconKey];
            return (
              <li
                key={item.body}
                className={cn(
                  'flex items-start gap-2 rounded-lg border px-3 py-2',
                  'border-purple-200 bg-white dark:border-purple-800/60 dark:bg-[var(--term-bg)]',
                )}
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-purple-200 bg-purple-100 text-purple-700 dark:border-purple-800/60 dark:bg-purple-950/60 dark:text-purple-200"
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">
                  {item.body}
                </span>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  </section>
);
