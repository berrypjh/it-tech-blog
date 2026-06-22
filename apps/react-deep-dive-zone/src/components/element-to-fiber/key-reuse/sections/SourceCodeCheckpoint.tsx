import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { KeyFiberReuseContent } from '../content';
import {
  Code2Icon,
  FileCodeIcon,
  HelpCircleIcon,
  InfoIcon,
  LightbulbIcon,
  Settings2Icon,
} from '../icons';

type Props = { content: KeyFiberReuseContent['checkpoint'] };

export const SourceCodeCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Code2Icon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.45fr)] gap-md items-stretch">
      {/* Left info card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <InfoItem icon={<FileCodeIcon className="h-4 w-4" />} label={content.fileLabel}>
          <code className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
            {content.filePath}
          </code>
        </InfoItem>

        <InfoItem icon={<Settings2Icon className="h-4 w-4" />} label={content.functionLabel}>
          <code
            className={cn(
              'inline-flex w-fit items-center rounded-md border px-2 py-0.5',
              'font-mono text-xsm font-bold',
              'border-sky-300/80 bg-sky-50 text-sky-700',
              'dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
            )}
          >
            {content.functionName}()
          </code>
        </InfoItem>

        <InfoItem icon={<HelpCircleIcon className="h-4 w-4" />} label={content.questionLabel}>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.question}
          </p>
        </InfoItem>

        <details className="group rounded-xl border border-amber-200/80 bg-amber-50/60 dark:border-amber-800/60 dark:bg-amber-950/30">
          <summary
            className={cn(
              'flex items-center justify-between gap-sm cursor-pointer select-none list-none',
              'px-md py-3 rounded-xl',
              'font-mono text-xsm font-bold text-amber-800 dark:text-amber-200',
              'hover:bg-amber-100/60 dark:hover:bg-amber-950/50',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400',
            )}
          >
            <span className="inline-flex items-center gap-2">
              <LightbulbIcon className="h-4 w-4" aria-hidden="true" />
              {content.hintCta}
            </span>
            <span
              aria-hidden="true"
              className="text-amber-700/80 dark:text-amber-300/80 transition-transform group-open:rotate-90"
            >
              ›
            </span>
          </summary>
          <p className="px-md pb-md pt-1 text-xsm leading-relaxed text-amber-900/90 dark:text-amber-100/90 break-keep">
            {content.hint}
          </p>
        </details>
      </article>

      {/* Right: code panel + note */}
      <div className="flex flex-col gap-sm min-w-0">
        <HighlightedCodePanel caption={content.codeTitle} lines={content.codeLines} />
        <div
          className={cn(
            'flex items-start gap-sm rounded-xl border-2 p-md',
            'border-sky-200/80 bg-sky-50/70',
            'dark:border-sky-800/60 dark:bg-sky-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
          >
            <InfoIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm leading-relaxed text-sky-900 dark:text-sky-100 break-keep">
            {content.bottomNote}
          </p>
        </div>
      </div>
    </div>
  </section>
);

const InfoItem = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-7 h-7 rounded-md',
          'bg-sky-100 text-sky-700',
          'dark:bg-sky-950/60 dark:text-sky-200',
        )}
      >
        {icon}
      </span>
      <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] font-bold">
        {label}
      </span>
    </div>
    <div className="pl-9">{children}</div>
  </div>
);

const HighlightedCodePanel = ({
  caption,
  lines,
}: {
  caption: string;
  lines: { line: string; emphasis?: boolean }[];
}) => (
  <div
    className={cn(
      'overflow-hidden rounded-lg border border-slate-800 bg-slate-950 text-slate-100',
      'shadow-[0_12px_30px_-12px_rgba(15,23,42,0.65)]',
    )}
  >
    <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/60 px-md py-2">
      <div className="flex items-center gap-1.5">
        <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
        {caption}
      </span>
    </div>

    <pre className="overflow-x-auto px-md py-md font-mono leading-[1.7] text-[13px] sm:text-[14px]">
      <code className="text-slate-100">
        {lines.map((row, i) => (
          <div
            key={i}
            className={cn(
              'flex',
              row.emphasis && '-mx-md px-md bg-sky-500/15 border-l-2 border-sky-400/80',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'select-none w-7 shrink-0 pr-3 text-right tabular-nums',
                row.emphasis ? 'text-sky-300' : 'text-slate-600',
              )}
            >
              {i + 1}
            </span>
            <span className={cn('whitespace-pre', row.emphasis && 'text-sky-100 font-bold')}>
              {row.line || ' '}
            </span>
          </div>
        ))}
      </code>
    </pre>
  </div>
);
