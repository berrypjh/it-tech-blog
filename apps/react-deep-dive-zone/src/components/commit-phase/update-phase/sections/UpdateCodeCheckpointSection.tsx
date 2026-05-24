import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { CodePreviewPanel } from '../../../getting-started/_shared/CodePreviewPanel';
import { commitToneTokens } from '../../_shared/tones';
import type { UpdatePhaseContent } from '../content';
import { CodeIcon, FileCodeIcon, HelpCircleIcon, PackageOpenIcon } from '../icons';

type Props = { content: UpdatePhaseContent['checkpoint'] };

export const UpdateCodeCheckpointSection = ({ content }: Props) => (
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

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_0.7fr)_minmax(0,_1.2fr)] gap-3">
      <InfoCard info={content.info} />
      <FunctionsCard title={content.functionsTitle} functions={content.functions} />
      <CodeCard code={content.code} />
    </div>
  </section>
);

const InfoCard = ({ info }: { info: UpdatePhaseContent['checkpoint']['info'] }) => (
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
      values={[info.filePath]}
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

const FunctionsCard = ({
  title,
  functions,
}: {
  title: string;
  functions: UpdatePhaseContent['checkpoint']['functions'];
}) => (
  <article
    className={cn(
      'flex h-full flex-col gap-sm rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-md border',
          'bg-violet-50 text-violet-700 border-violet-200/80',
          'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
        )}
      >
        <CodeIcon className="h-4 w-4" />
      </span>
      <h3 className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
        {title}
      </h3>
    </header>

    <ul className="flex flex-col gap-2">
      {functions.map((fn) => {
        const t = commitToneTokens[fn.tone];
        return (
          <li key={fn.name}>
            <article
              className={cn(
                'flex flex-col gap-1 rounded-xl border-2 p-sm sm:p-md',
                t.borderStrong,
                t.bg,
                'transition-colors',
                t.borderHover,
              )}
            >
              <code
                className={cn('text-xsm sm:text-sm font-bold font-mono break-all', t.textStrong)}
              >
                {fn.name}
              </code>
              <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                {fn.description}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  </article>
);

const CodeCard = ({ code }: { code: UpdatePhaseContent['checkpoint']['code'] }) => (
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
