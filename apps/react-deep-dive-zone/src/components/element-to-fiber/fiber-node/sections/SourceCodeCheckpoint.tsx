import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { CodeLineGroup, FiberStoredInformationContent } from '../content';
import { Code2Icon, FileCodeIcon, HelpCircleIcon, LightbulbIcon, Settings2Icon } from '../icons';

type Props = { content: FiberStoredInformationContent['checkpoint'] };

const toneTextHighlight = {
  sky: 'text-sky-200',
  emerald: 'text-emerald-200',
  violet: 'text-violet-200',
  amber: 'text-amber-200',
} as const;

const toneSideBar = {
  sky: 'bg-sky-400/80',
  emerald: 'bg-emerald-400/80',
  violet: 'bg-violet-400/80',
  amber: 'bg-amber-400/80',
} as const;

const toneLabelChip = {
  sky: 'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
  emerald:
    'border-emerald-300/80 bg-emerald-50 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
  violet:
    'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
  amber:
    'border-amber-300/80 bg-amber-50 text-amber-700 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
} as const;

const toneGroupBg = {
  sky: 'bg-sky-500/5 border-l-sky-400/80',
  emerald: 'bg-emerald-500/5 border-l-emerald-400/80',
  violet: 'bg-violet-500/5 border-l-violet-400/80',
  amber: 'bg-amber-500/5 border-l-amber-400/80',
} as const;

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

        <InfoItem icon={<Settings2Icon className="h-4 w-4" />} label={content.focusLabel}>
          <code
            className={cn(
              'inline-flex w-fit items-center rounded-md border px-2 py-0.5',
              'font-mono text-xsm font-bold',
              'border-sky-300/80 bg-sky-50 text-sky-700',
              'dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
            )}
          >
            {content.focus}
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

        <div className="flex flex-wrap gap-2 pt-2 border-t border-dashed border-[var(--term-border)]">
          {content.groups.map((g) => (
            <span
              key={g.id}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-md border px-2 py-1',
                'font-mono text-[11px] font-bold tracking-tight',
                toneLabelChip[g.tone],
              )}
            >
              <span
                aria-hidden="true"
                className={cn('inline-block w-1 h-3 rounded-sm', toneSideBar[g.tone])}
              />
              {g.label}
            </span>
          ))}
        </div>
      </article>

      {/* Right: grouped code panel */}
      <div className="min-w-0">
        <GroupedCodePanel caption={content.codeTitle} groups={content.groups} />
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

const GroupedCodePanel = ({ caption, groups }: { caption: string; groups: CodeLineGroup[] }) => {
  let lineNumber = 0;
  return (
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
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
            {caption}
          </span>
          <span
            className={cn(
              'inline-flex items-center rounded-md px-1.5 py-0.5',
              'font-mono text-[10px] font-bold tracking-wider',
              'bg-amber-400/20 text-amber-200 border border-amber-400/40',
            )}
          >
            JS
          </span>
        </div>
      </div>

      <pre className="overflow-x-auto px-md py-md font-mono leading-[1.7] text-[13px] sm:text-[14px]">
        <code className="text-slate-100 block">
          {groups.map((group, gi) => (
            <div key={group.id}>
              {gi > 0 && <Spacer />}
              <GroupHeader label={group.label} tone={group.tone} />
              <div className={cn('-mx-md px-md py-1 border-l-2', toneGroupBg[group.tone])}>
                {group.lines.map((line) => {
                  lineNumber += 1;
                  return (
                    <div key={line + lineNumber} className="flex">
                      <span
                        aria-hidden="true"
                        className="select-none w-7 shrink-0 pr-3 text-right tabular-nums text-slate-600"
                      >
                        {lineNumber}
                      </span>
                      <span
                        className={cn('whitespace-pre font-bold', toneTextHighlight[group.tone])}
                      >
                        {line}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

const Spacer = () => (
  <div className="flex" aria-hidden="true">
    <span className="select-none w-7 shrink-0 pr-3 text-right tabular-nums text-slate-700"> </span>
    <span className="whitespace-pre"> </span>
  </div>
);

const GroupHeader = ({
  label,
  tone,
}: {
  label: string;
  tone: 'sky' | 'emerald' | 'violet' | 'amber';
}) => (
  <div className="flex items-center gap-2 -mx-md px-md py-1" aria-hidden="true">
    <span className="select-none w-7 shrink-0 text-right text-slate-700">·</span>
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5',
        'font-mono text-[10px] font-bold tracking-wider',
        toneLabelChip[tone],
      )}
    >
      <span
        aria-hidden="true"
        className={cn('inline-block w-1 h-2.5 rounded-sm', toneSideBar[tone])}
      />
      {label}
    </span>
  </div>
);
