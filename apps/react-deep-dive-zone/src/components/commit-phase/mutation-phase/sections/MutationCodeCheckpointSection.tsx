import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { MutationPhaseContent } from '../content';
import {
  CodeIcon,
  FileCodeIcon,
  FlagIcon,
  HelpCircleIcon,
  PackageOpenIcon,
  SparklesIcon,
} from '../icons';

type Props = { content: MutationPhaseContent['checkpoint'] };

export const MutationCodeCheckpointSection = ({ content }: Props) => (
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

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.65fr)_minmax(0,_1.7fr)] gap-3">
      <InfoCard info={content.info} />
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,_1.55fr)_minmax(0,_0.55fr)] gap-3 min-w-0">
        <CodeCard code={content.code} />
        <MaskCallout callout={content.maskCallout} />
      </div>
    </div>

    <CorePointsCard title={content.corePointsTitle} points={content.corePoints} />
  </section>
);

const InfoCard = ({ info }: { info: MutationPhaseContent['checkpoint']['info'] }) => (
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
      mono
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

const CodeCard = ({ code }: { code: MutationPhaseContent['checkpoint']['code'] }) => (
  <article className="flex flex-col gap-2 min-w-0">
    <header className="flex items-center justify-between gap-2 px-1">
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] font-mono break-keep">
        {code.title}
      </h3>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        ts
      </span>
    </header>
    <div className="min-w-0">
      <CodePreviewPanel code={code.code} language="ts" />
    </div>
  </article>
);

const MaskCallout = ({
  callout,
}: {
  callout: MutationPhaseContent['checkpoint']['maskCallout'];
}) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
      'border-teal-200/80 bg-teal-50/60',
      'dark:border-teal-800/70 dark:bg-teal-950/30',
      'shadow-[0_1px_0_var(--term-border)]',
      'transition-colors hover:border-teal-400/70 dark:hover:border-teal-500/60',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
          'bg-teal-100 text-teal-700 border-teal-200/80',
          'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
        )}
      >
        <FlagIcon className="h-4 w-4" />
      </span>
      <h3 className="text-xsm sm:text-sm font-bold text-teal-900 dark:text-teal-100 break-keep">
        {callout.title}
      </h3>
    </header>
    <ul className="flex flex-col gap-1.5">
      {callout.items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-[11px] sm:text-xsm leading-snug text-teal-900 dark:text-teal-100 break-keep"
        >
          <span
            aria-hidden="true"
            className="mt-1.5 inline-block h-1 w-1 rounded-full bg-teal-500 dark:bg-teal-400 shrink-0"
          />
          <code className="font-mono">{item}</code>
        </li>
      ))}
    </ul>
  </article>
);

const CorePointsCard = ({ title, points }: { title: string; points: string[] }) => (
  <article
    className={cn(
      'rounded-2xl border-2 p-md sm:p-lg',
      'border-sky-200/80 bg-sky-50/70',
      'dark:border-sky-800/70 dark:bg-sky-950/30',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="mb-sm flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
          'bg-sky-100 text-sky-700 border-sky-200/80',
          'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
        )}
      >
        <SparklesIcon className="h-4 w-4" />
      </span>
      <h3 className="text-sm sm:text-md font-bold text-sky-900 dark:text-sky-100">{title}</h3>
    </header>
    <ul className="flex flex-col gap-1.5">
      {points.map((p) => (
        <li
          key={p}
          className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-sky-900 dark:text-sky-100 break-keep"
        >
          <span
            aria-hidden="true"
            className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0"
          />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </article>
);
