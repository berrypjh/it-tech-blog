import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { DispatchQueueOrderContent } from '../content';
import { ArrowDownIcon, ArrowUpFromLineIcon, PlayCircleIcon, RotateCwIcon } from '../icons';

type Props = { content: DispatchQueueOrderContent['phases'] };

type PhaseCardProps = {
  tone: 'violet' | 'teal';
  title: string;
  body: string;
  pathTitle: string;
  path: string[];
  exampleTitle: string;
  example: string[];
  icon: React.ReactNode;
};

const PhaseCard = ({
  tone,
  title,
  body,
  pathTitle,
  path,
  exampleTitle,
  example,
  icon,
}: PhaseCardProps) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
      tone === 'violet'
        ? 'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/30 dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/20'
        : 'border-teal-300/80 bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/30 dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
          tone === 'violet'
            ? 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900'
            : 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
        )}
      >
        {icon}
      </span>
      <h3
        className={cn(
          'text-sm sm:text-md font-bold leading-tight break-keep',
          tone === 'violet'
            ? 'text-violet-700 dark:text-violet-200'
            : 'text-teal-700 dark:text-teal-200',
        )}
      >
        {title}
      </h3>
    </header>
    <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">{body}</p>

    <div
      className={cn(
        'rounded-2xl border bg-white p-md',
        tone === 'violet'
          ? 'border-violet-200/70 dark:border-violet-800/60 dark:bg-slate-950/40'
          : 'border-teal-200/70 dark:border-teal-800/60 dark:bg-slate-950/40',
      )}
    >
      <span
        className={cn(
          'text-[10px] font-mono font-bold uppercase tracking-wider',
          tone === 'violet'
            ? 'text-violet-700 dark:text-violet-300'
            : 'text-teal-700 dark:text-teal-300',
        )}
      >
        {pathTitle}
      </span>
      <ol className="mt-2 flex flex-col gap-1">
        {path.map((step, i) => {
          const isLast = i === path.length - 1;
          return (
            <li key={step} className="flex flex-col">
              <div
                className={cn(
                  'flex items-center gap-2 rounded-md border px-3 py-1.5',
                  tone === 'violet'
                    ? 'border-violet-200/70 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/30'
                    : 'border-teal-200/70 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/30',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold',
                    tone === 'violet'
                      ? 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900'
                      : 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
                  )}
                >
                  {i + 1}
                </span>
                <code className="font-mono text-[11px] sm:text-xsm font-bold break-keep">
                  {step}
                </code>
              </div>
              {!isLast && (
                <span
                  aria-hidden="true"
                  className={cn(
                    'self-center my-0.5',
                    tone === 'violet'
                      ? 'text-violet-400 dark:text-violet-500'
                      : 'text-teal-400 dark:text-teal-500',
                  )}
                >
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>

    <div
      className={cn(
        'mt-auto rounded-2xl border p-md',
        tone === 'violet'
          ? 'border-violet-200/80 bg-violet-50/30 dark:border-violet-800/60 dark:bg-violet-950/20'
          : 'border-teal-200/80 bg-teal-50/30 dark:border-teal-800/60 dark:bg-teal-950/20',
      )}
    >
      <span
        className={cn(
          'text-[10px] font-mono font-bold uppercase tracking-wider',
          tone === 'violet'
            ? 'text-violet-700 dark:text-violet-300'
            : 'text-teal-700 dark:text-teal-300',
        )}
      >
        {exampleTitle}
      </span>
      <ol className="mt-2 flex flex-col gap-1">
        {example.map((ex) => (
          <li
            key={ex}
            className={cn(
              'flex items-center gap-2 rounded-md border bg-white px-3 py-1.5 font-mono text-[11px] sm:text-xsm font-bold',
              tone === 'violet'
                ? 'border-violet-200/70 text-violet-700 dark:border-violet-800/60 dark:bg-slate-950/40 dark:text-violet-200'
                : 'border-teal-200/70 text-teal-700 dark:border-teal-800/60 dark:bg-slate-950/40 dark:text-teal-200',
            )}
          >
            <PlayCircleIcon aria-hidden="true" className="h-3.5 w-3.5" />
            <span>{ex}</span>
          </li>
        ))}
      </ol>
    </div>
  </article>
);

export const PhaseExecutionOrder = ({ content }: Props) => (
  <section aria-labelledby="heading-phases">
    <NumberedSectionHeader
      id="phases"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RotateCwIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      <PhaseCard
        tone="violet"
        title={content.capture.title}
        body={content.capture.body}
        pathTitle={content.capture.pathTitle}
        path={content.capture.path}
        exampleTitle={content.capture.exampleTitle}
        example={content.capture.example}
        icon={<RotateCwIcon className="h-5 w-5" />}
      />
      <PhaseCard
        tone="teal"
        title={content.bubble.title}
        body={content.bubble.body}
        pathTitle={content.bubble.pathTitle}
        path={content.bubble.path}
        exampleTitle={content.bubble.exampleTitle}
        example={content.bubble.example}
        icon={<ArrowUpFromLineIcon className="h-5 w-5" />}
      />
    </div>
  </section>
);
