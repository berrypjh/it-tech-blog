import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { commitToneTokens } from '../../_shared/tones';
import type { CodePanel, LayoutPhaseContent, PhaseStripItem } from '../content';
import { CodeIcon, FileCodeIcon, HelpCircleIcon, LightbulbIcon, PackageOpenIcon } from '../icons';

type Props = { content: LayoutPhaseContent['checkpoint'] };

export const LayoutCodeCheckpointSection = ({ content }: Props) => (
  <section
    id="code-checkpoint"
    aria-labelledby="heading-code-checkpoint"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="code-checkpoint"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.6fr)] gap-3">
      <InfoCard info={content.info} />

      <div className="flex flex-col gap-3 min-w-0">
        <PhaseStrip items={content.phaseStrip} />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 min-w-0">
          {content.panels.map((panel) => (
            <CodeCard key={panel.title} panel={panel} />
          ))}
        </div>
        <InsightBar text={content.insight} />
      </div>
    </div>
  </section>
);

const InfoCard = ({ info }: { info: LayoutPhaseContent['checkpoint']['info'] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <InfoRow
      label={info.fileLabel}
      icon={<FileCodeIcon className="h-4 w-4" />}
      mono
      values={info.filePaths}
    />
    <InfoRow
      label={info.watchLabel}
      icon={<PackageOpenIcon className="h-4 w-4" />}
      values={info.watchItems}
    />
    <InfoRow
      label={info.questionLabel}
      icon={<HelpCircleIcon className="h-4 w-4" />}
      callout
      values={[info.question]}
    />
  </article>
);

type InfoRowProps = {
  label: string;
  values: string[];
  icon: React.ReactNode;
  mono?: boolean;
  callout?: boolean;
};

const InfoRow = ({ label, values, icon, mono, callout }: InfoRowProps) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-md border',
          'bg-sky-50 text-sky-700 border-sky-200/80',
          'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
        )}
      >
        {icon}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
        {label}
      </span>
    </div>
    {callout ? (
      <p
        className={cn(
          'rounded-xl border-2 p-sm text-xsm sm:text-sm leading-relaxed break-keep',
          'border-sky-200/80 bg-sky-50/70 text-sky-900',
          'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-100',
        )}
      >
        {values[0]}
      </p>
    ) : (
      <ul className="flex flex-col gap-1">
        {values.map((v) => (
          <li key={v}>
            <code
              className={cn(
                'block rounded-md border bg-slate-50/60 px-sm py-1 text-xsm text-[var(--term-fg)] break-all',
                'border-[var(--term-border)] dark:bg-slate-900/40',
                mono && 'font-mono font-bold',
              )}
            >
              {v}
            </code>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const PhaseStrip = ({ items }: { items: PhaseStripItem[] }) => (
  <article
    className={cn(
      'flex flex-wrap items-center gap-1.5 rounded-2xl border bg-[var(--term-bg)] p-sm',
      'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold mr-1">
      commit phase strip
    </span>
    {items.map((item, idx) => {
      const t = commitToneTokens[item.tone];
      return (
        <div key={item.label} className="flex items-center gap-1.5">
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-md border px-2 py-0.5',
              'text-[10px] font-mono uppercase tracking-wider',
              item.active
                ? cn(
                    'border-2',
                    t.borderStrong,
                    t.bg,
                    t.textStrong,
                    'font-bold',
                    'ring-2 ring-teal-300/40 dark:ring-teal-500/30',
                  )
                : 'border-[var(--term-border)] bg-slate-50/40 text-[var(--term-muted)] dark:bg-slate-900/30',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-block h-1.5 w-1.5 rounded-full',
                item.active ? t.dot : 'bg-[var(--term-dim)]',
              )}
            />
            {item.label}
          </span>
          {idx < items.length - 1 && (
            <span aria-hidden="true" className="text-[var(--term-dim)] text-[10px]">
              →
            </span>
          )}
        </div>
      );
    })}
  </article>
);

const CodeCard = ({ panel }: { panel: CodePanel }) => (
  <article className="flex flex-col gap-2 min-w-0">
    <header className="flex items-center justify-between gap-2 px-1">
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] font-mono break-keep">
        {panel.title}
      </h3>
      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
        <FileCodeIcon aria-hidden="true" className="h-3 w-3" />
        {panel.fileLabel}
      </span>
    </header>
    <div className="min-w-0">
      <CodePreviewPanel code={panel.code} language="ts" />
    </div>
  </article>
);

const InsightBar = ({ text }: { text: string }) => (
  <aside
    className={cn(
      'flex items-start gap-sm rounded-2xl border-2 p-md',
      'border-teal-200/80 bg-teal-50/70',
      'dark:border-teal-800/70 dark:bg-teal-950/30',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
        'bg-teal-100 text-teal-700 border border-teal-200/80',
        'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
      )}
    >
      <LightbulbIcon className="h-4 w-4" />
    </span>
    <p className="text-xsm sm:text-sm leading-relaxed text-teal-900 dark:text-teal-100 break-keep font-bold">
      {text}
    </p>
  </aside>
);
