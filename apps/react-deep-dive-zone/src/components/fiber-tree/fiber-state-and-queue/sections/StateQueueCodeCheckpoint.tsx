import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberStateAndQueueContent } from '../content';
import { ExternalLinkIcon, EyeIcon, FileCodeIcon, HelpCircleIcon } from '../icons';

type Props = { content: FiberStateAndQueueContent['checkpoint'] };

export const StateQueueCodeCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.42fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
      <article
        className={cn(
          'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {content.info.title}
        </h3>
        <dl className="mt-sm flex flex-col gap-sm">
          <InfoRow icon={<FileCodeIcon className="h-4 w-4" />} label={content.info.filesLabel}>
            <span className="font-mono text-xsm text-[var(--term-fg)] break-all">
              {content.info.file}
            </span>
          </InfoRow>
          <InfoRow icon={<EyeIcon className="h-4 w-4" />} label={content.info.lookForLabel}>
            <span className="font-mono text-xsm text-[var(--term-fg)]">{content.info.lookFor}</span>
          </InfoRow>
          <InfoRow icon={<HelpCircleIcon className="h-4 w-4" />} label={content.info.questionLabel}>
            <span className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {content.info.question}
            </span>
          </InfoRow>
        </dl>
        <a
          href={content.info.buttonHref}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            'mt-md group inline-flex items-center gap-2 rounded-md px-3 py-2',
            'bg-sky-50 text-sky-700 text-xsm font-bold border border-sky-200/80',
            'transition-colors hover:bg-sky-100',
            'dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/70 dark:hover:bg-sky-950/70',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
          )}
        >
          {content.info.buttonLabel}
          <ExternalLinkIcon
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </article>

      <div className="min-w-0">
        <StateQueueCodePanel
          code={content.code.content}
          fileName={content.code.fileName}
          language={content.code.language}
        />
      </div>
    </div>
  </section>
);

const InfoRow = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-sm">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-lg border shrink-0',
        'border-sky-200/80 bg-sky-50 text-sky-700',
        'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-200',
      )}
    >
      {icon}
    </span>
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
        {label}
      </span>
      {children}
    </div>
  </div>
);

const StateQueueCodePanel = ({
  code,
  fileName,
  language,
}: {
  code: string;
  fileName: string;
  language: string;
}) => {
  const lines = code.split('\n');
  const lineKind = (
    line: string,
  ): 'updateQueue' | 'memoizedState' | 'queueComment' | 'memoComment' | undefined => {
    if (line.includes('updateQueue:')) return 'updateQueue';
    if (line.includes('memoizedState:')) return 'memoizedState';
    if (line.includes('업데이트 큐') || line.includes('Update queue')) return 'queueComment';
    if (line.includes('확정된 state') || line.includes('state value')) return 'memoComment';
    return undefined;
  };

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-100',
        'shadow-[0_12px_32px_-16px_rgba(15,23,42,0.6),0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/70 px-md py-2">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-slate-400">
            {fileName}
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
          {language}
        </span>
      </header>

      <div className="grid grid-cols-[1fr_minmax(120px,_160px)]">
        <pre className="overflow-x-auto py-md font-mono leading-[1.75] text-[12.5px]">
          <code className="block">
            {lines.map((line, i) => {
              const kind = lineKind(line);
              const highlight =
                kind === 'updateQueue' || kind === 'queueComment'
                  ? 'bg-violet-500/15'
                  : kind === 'memoizedState' || kind === 'memoComment'
                    ? 'bg-emerald-500/15'
                    : undefined;
              return (
                <div key={i} className={cn('flex px-md', highlight)}>
                  <span
                    aria-hidden="true"
                    className="select-none w-7 shrink-0 pr-3 text-right tabular-nums text-slate-600"
                  >
                    {i + 1}
                  </span>
                  <span className="whitespace-pre">
                    {kind === 'updateQueue' ? (
                      <span>
                        <span className="text-violet-300"> updateQueue</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-amber-200">mixed</span>
                        <span className="text-slate-400">;</span>
                      </span>
                    ) : kind === 'memoizedState' ? (
                      <span>
                        <span className="text-emerald-300"> memoizedState</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-amber-200">any</span>
                        <span className="text-slate-400">;</span>
                      </span>
                    ) : kind === 'queueComment' ? (
                      <span className="text-violet-300/90">{line}</span>
                    ) : kind === 'memoComment' ? (
                      <span className="text-emerald-300/90">{line}</span>
                    ) : (
                      <span className="text-slate-300">{line}</span>
                    )}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>

        {/* Annotation rail */}
        <div className="relative border-l border-slate-800/80 py-md font-mono leading-[1.75] text-[12.5px]">
          {lines.map((line, i) => {
            const kind = lineKind(line);
            const label =
              kind === 'updateQueue'
                ? 'updateQueue'
                : kind === 'memoizedState'
                  ? 'memoizedState'
                  : null;
            const labelClasses =
              kind === 'updateQueue'
                ? 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70'
                : kind === 'memoizedState'
                  ? 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70'
                  : '';
            return (
              <div key={i} className="flex items-center px-2 invisible-text">
                <span aria-hidden="true" className="invisible whitespace-pre">
                  {line || ' '}
                </span>
                {label && (
                  <span
                    className={cn(
                      'ml-2 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-tight whitespace-nowrap',
                      labelClasses,
                    )}
                  >
                    {label}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
