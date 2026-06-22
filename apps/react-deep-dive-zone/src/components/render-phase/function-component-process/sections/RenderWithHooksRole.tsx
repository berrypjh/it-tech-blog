import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { FunctionComponentContent } from '../content';
import { FunctionSquareIcon, LightbulbIcon, SettingsIcon } from '../icons';

type Props = { content: FunctionComponentContent['renderWithHooks'] };

export const RenderWithHooksRole = ({ content }: Props) => (
  <section
    id="render-with-hooks"
    aria-labelledby="heading-render-with-hooks"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="render-with-hooks"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SettingsIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-md lg:gap-lg">
      {/* Left: explanation + note */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep">
          {content.description}
        </p>

        <aside
          className={cn(
            'flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-amber-200/80 bg-amber-50/70',
            'dark:border-amber-800/70 dark:bg-amber-950/40',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
              'bg-amber-100 text-amber-700 border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <LightbulbIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm sm:text-sm leading-relaxed text-amber-900 dark:text-amber-100 font-bold break-keep">
            {content.noteCard}
          </p>
        </aside>
      </article>

      {/* Right: FunctionComponent Fiber card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-teal-50/40',
          'dark:border-teal-700/70 dark:bg-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
          'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
        )}
        aria-labelledby="fiber-card-title"
      >
        <header className="flex items-center justify-between gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
              'bg-teal-100 text-teal-700 border-teal-200/80',
              'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
            )}
          >
            <FunctionSquareIcon className="h-5 w-5" />
          </span>
          <span
            className={cn(
              'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
              'border-teal-300/70 bg-teal-100/70 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-700/60 font-bold',
            )}
          >
            {content.fiberCard.badge}
          </span>
        </header>

        <h3
          id="fiber-card-title"
          className="text-md sm:text-lg font-bold leading-tight text-teal-800 dark:text-teal-100 break-keep"
        >
          {content.fiberCard.title}
        </h3>

        <div className="flex items-baseline gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300">
            {content.fiberCard.tagLabel}
          </span>
          <code
            className={cn(
              'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
              'border-slate-800 bg-slate-950 text-amber-300',
            )}
          >
            {content.fiberCard.tagValue}
          </code>
        </div>

        <div
          className={cn(
            'flex items-center justify-center rounded-2xl border-2 border-dashed p-lg',
            'border-teal-300/70 bg-white/70',
            'dark:border-teal-700/60 dark:bg-slate-950/40',
          )}
        >
          <code className="font-mono text-3xl sm:text-4xl font-bold text-teal-700 dark:text-teal-200">
            {'f()'}
          </code>
        </div>

        <p className="text-xsm sm:text-sm leading-relaxed text-teal-900 dark:text-teal-100 break-keep">
          {content.fiberCard.footer}
        </p>
      </article>
    </div>
  </section>
);
