import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { ActivityHiddenUiContent } from '../content';
import { ArrowDownIcon, ArrowUpIcon, EyeIcon, EyeOffIcon, RefreshCcwIcon } from '../icons';

import { CodePanel } from './_CodePanel';

type Props = { content: ActivityHiddenUiContent['hero'] };

export const ActivityHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-19-changes/activity-hidden-ui.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // Activity: hide UI, keep state, lower priority'}
        </span>
      }
    />

    <div className="mt-md flex flex-col gap-md">
      {/* Top: badges + title + subtitle */}
      <div className="flex flex-col gap-md">
        <ul className="flex flex-wrap items-center gap-2">
          {content.badges.map((badge) => (
            <li
              key={badge.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                badge.tone === 'solid'
                  ? 'bg-blue-600 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-blue-500'
                  : 'border border-blue-300/80 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/50 dark:text-blue-200',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'block h-1.5 w-1.5 rounded-full',
                  badge.tone === 'solid' ? 'bg-white/90' : 'bg-blue-500 dark:bg-blue-400',
                )}
              />
              {badge.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.3rem] xl:text-[2.5rem]',
            'font-bold leading-[1.16] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[2]}</span>
        </h1>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[60ch]">
          {content.subtitleLines.join(' ')}
        </p>
      </div>

      {/* 3-area: conditional code / mode switch / Activity code */}
      <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_7fr)_minmax(0,_4fr)_minmax(0,_7fr)] lg:gap-md items-stretch">
        {/* Conditional code */}
        <article className="flex flex-col gap-sm">
          <header className="flex items-center justify-between gap-2">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                'border-rose-200 bg-rose-50 text-rose-700',
                'dark:border-rose-800/70 dark:bg-rose-950/40 dark:text-rose-200',
                'font-mono text-[10px] font-bold uppercase tracking-wider',
              )}
            >
              <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-rose-500" />
              {content.conditionalCode.title}
            </span>
          </header>
          <CodePanel
            code={content.conditionalCode.code}
            langBadge={content.conditionalCode.langBadge}
            toneBorder="border-rose-700/70"
          />
        </article>

        {/* Mode switch */}
        <article
          className={cn(
            'flex flex-col items-stretch gap-sm rounded-2xl border-2 p-md sm:p-lg',
            'border-slate-200 bg-gradient-to-br from-white via-blue-50/30 to-white',
            'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-blue-950/20 dark:to-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
            >
              <RefreshCcwIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.modeSwitch.title}
            </h3>
          </header>

          {/* visible card */}
          <div
            className={cn(
              'flex items-center gap-2 rounded-xl border-2 px-3 py-2',
              'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
            >
              <EyeIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col">
              <code className="font-mono text-xsm font-bold text-teal-700 dark:text-teal-200">
                {content.modeSwitch.visibleLabel}
              </code>
              <span className="text-[10px] text-[var(--term-muted)] break-keep">
                {content.modeSwitch.visibleCaption}
              </span>
            </div>
          </div>

          {/* arrow up/down */}
          <div className="flex items-center justify-center gap-1" aria-hidden="true">
            <ArrowUpIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-300" />
            <ArrowDownIcon className="h-3.5 w-3.5 text-blue-500 dark:text-blue-300" />
          </div>

          {/* hidden card */}
          <div
            className={cn(
              'flex items-center gap-2 rounded-xl border-2 px-3 py-2',
              'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/70 dark:bg-rose-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/60 dark:text-rose-200"
            >
              <EyeOffIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col">
              <code className="font-mono text-xsm font-bold text-rose-700 dark:text-rose-200">
                {content.modeSwitch.hiddenLabel}
              </code>
              <span className="text-[10px] text-[var(--term-muted)] break-keep">
                {content.modeSwitch.hiddenCaption}
              </span>
            </div>
          </div>

          {/* footer */}
          <p className="mt-auto text-center font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200 break-keep">
            {content.modeSwitch.footer}
          </p>
        </article>

        {/* Activity code */}
        <article className="flex flex-col gap-sm">
          <header className="flex items-center justify-between gap-2">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                'border-teal-200 bg-teal-50 text-teal-700',
                'dark:border-teal-800/70 dark:bg-teal-950/40 dark:text-teal-200',
                'font-mono text-[10px] font-bold uppercase tracking-wider',
              )}
            >
              <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-teal-500" />
              {content.activityCode.title}
            </span>
          </header>
          <CodePanel
            code={content.activityCode.code}
            langBadge={content.activityCode.langBadge}
            toneBorder="border-teal-700/70"
          />
        </article>
      </div>
    </div>
  </section>
);
