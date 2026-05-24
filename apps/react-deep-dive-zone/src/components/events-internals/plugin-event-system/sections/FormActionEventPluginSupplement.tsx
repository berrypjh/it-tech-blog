import { cn } from '@it-tech-blog/utils';

import type { PluginEventSystemContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  LoaderIcon,
  RocketIcon,
  SendIcon,
  SparklesIcon,
  ZapIcon,
} from '../icons';
import { SectionFrame } from '../SectionFrame';
import { toneAccent, toneIconBox } from '../styles';

type Props = { content: PluginEventSystemContent['formAction'] };

const stepIcons = [SendIcon, ZapIcon, LoaderIcon, SparklesIcon];

export const FormActionEventPluginSupplement = ({ content }: Props) => (
  <SectionFrame
    id="form-action"
    sectionNumber={content.sectionNumber}
    title={content.title}
    icon={<RocketIcon className="h-5 w-5" />}
    tone="mint"
  >
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-center">
      {/* LEFT: description */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-emerald-300/80 bg-white dark:border-emerald-700/70 dark:bg-slate-950/40',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-[0_3px_0_rgba(16,185,129,0.3)] dark:bg-emerald-400 dark:text-slate-900"
          >
            <RocketIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              React 19
            </span>
            <code className="font-mono text-sm sm:text-md font-bold text-emerald-700 dark:text-emerald-200">
              FormActionEventPlugin
            </code>
          </div>
        </header>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.description}
        </p>
      </article>

      {/* RIGHT: flow */}
      <ol className={cn('grid items-stretch gap-2', 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4')}>
        {content.flow.map((step, i) => {
          const isLast = i === content.flow.length - 1;
          const Icon = stepIcons[i] ?? SendIcon;
          return (
            <li
              key={step.name}
              className={cn(
                'group relative flex flex-col items-center gap-1.5 rounded-2xl border-2 p-md text-center transition-all',
                'hover:-translate-y-0.5 motion-reduce:transform-none',
                'border-emerald-200/80 bg-white dark:border-emerald-800/60 dark:bg-slate-950/40',
                'shadow-[0_1px_0_var(--term-border)]',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border',
                  toneIconBox[step.tone],
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <code
                className={cn(
                  'font-mono text-xsm sm:text-sm font-bold break-all',
                  toneAccent[step.tone],
                )}
              >
                {step.name}
              </code>
              <p className="text-[10px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                {step.body}
              </p>

              {!isLast && (
                <>
                  <span
                    aria-hidden="true"
                    className="hidden lg:inline-flex absolute -right-3.5 top-1/2 z-10 -translate-y-1/2 h-6 w-6 items-center justify-center rounded-full border border-emerald-200 bg-[var(--term-bg)] text-emerald-600 shadow-[0_1px_0_var(--term-border)] dark:border-emerald-700/60 dark:text-emerald-300"
                  >
                    <ArrowRightIcon className="h-3 w-3" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="lg:hidden flex justify-center text-emerald-500 dark:text-emerald-300 mt-1"
                  >
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  </SectionFrame>
);
