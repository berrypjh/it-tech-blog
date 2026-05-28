import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { Tone, WhyEventSystemContent } from '../content';
import { ArrowDownIcon, FileCodeIcon, FileSearchIcon, MapIcon } from '../icons';

type Props = { content: WhyEventSystemContent['sourceMap'] };

const toneBorder: Record<Tone, string> = {
  sky: 'border-sky-300/80 dark:border-sky-700/70',
  cyan: 'border-cyan-300/80 dark:border-cyan-700/70',
  teal: 'border-teal-300/80 dark:border-teal-700/70',
  emerald: 'border-emerald-300/80 dark:border-emerald-700/70',
  violet: 'border-violet-300/80 dark:border-violet-700/70',
  blue: 'border-blue-300/80 dark:border-blue-700/70',
  amber: 'border-amber-300/80 dark:border-amber-700/70',
  rose: 'border-rose-300/80 dark:border-rose-700/70',
};

const toneText: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-300',
  cyan: 'text-cyan-700 dark:text-cyan-300',
  teal: 'text-teal-700 dark:text-teal-300',
  emerald: 'text-emerald-700 dark:text-emerald-300',
  violet: 'text-violet-700 dark:text-violet-300',
  blue: 'text-blue-700 dark:text-blue-300',
  amber: 'text-amber-700 dark:text-amber-300',
  rose: 'text-rose-700 dark:text-rose-300',
};

const toneIcon: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  amber:
    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
  rose: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
};

export const SourceEntryMap = ({ content }: Props) => (
  <section aria-labelledby="heading-sourcemap">
    <SectionHeader
      id="sourcemap"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <ol className="flex flex-col gap-2">
      {content.entries.map((entry, i) => {
        const isLast = i === content.entries.length - 1;
        return (
          <li key={entry.fileName} className="flex flex-col">
            <article
              className={cn(
                'group grid grid-cols-1 sm:grid-cols-[minmax(0,260px)_1fr] gap-md',
                'rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
                'shadow-[0_2px_0_var(--term-border)] transition-colors',
                'hover:-translate-y-0.5 motion-reduce:transform-none',
                toneBorder[entry.tone],
              )}
            >
              {/* Left: file card */}
              <div
                className={cn(
                  'flex flex-col gap-1.5 rounded-xl border bg-white px-md py-3',
                  'border-[var(--term-border)] dark:bg-slate-950/30',
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
                      toneIcon[entry.tone],
                    )}
                  >
                    <FileCodeIcon className="h-3.5 w-3.5" />
                  </span>
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider border',
                      toneIcon[entry.tone],
                    )}
                  >
                    {entry.badge}
                  </span>
                </div>
                <code
                  className={cn(
                    'font-mono text-sm sm:text-md font-bold leading-tight break-all',
                    toneText[entry.tone],
                  )}
                >
                  {entry.fileName}
                </code>
                <span className="font-mono text-[10px] text-[var(--term-muted)]">
                  step {i + 1}/{content.entries.length}
                </span>
              </div>

              {/* Right: explanation */}
              <div className="flex items-start gap-3 self-center">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] mt-0.5"
                >
                  <FileSearchIcon className="h-4 w-4" />
                </span>
                <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
                  {entry.description}
                </p>
              </div>
            </article>

            {!isLast && (
              <span aria-hidden="true" className="self-center my-1 text-[var(--term-muted)]">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
