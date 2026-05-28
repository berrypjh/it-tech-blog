import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { PassiveEffectsContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, CodeIcon } from '../icons';

type Props = { content: PassiveEffectsContent['example'] };

export const PassiveEffectExampleSection = ({ content }: Props) => (
  <section
    id="passive-example"
    aria-labelledby="heading-passive-example"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="passive-example"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <article className="flex flex-col gap-3 min-w-0">
      <CodeArea code={content.code} />
      <ExecutionFlow steps={content.flowSteps} />
    </article>
  </section>
);

const CodeArea = ({ code }: { code: string }) => (
  <div className="flex flex-col gap-2 min-w-0">
    <header className="flex items-center justify-between gap-2 px-1">
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] font-mono break-keep">
        useEffect example
      </h3>
      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
        tsx
      </span>
    </header>
    <div className="min-w-0">
      <CodePreviewPanel code={code} language="tsx" />
    </div>
  </div>
);

const ExecutionFlow = ({ steps }: { steps: PassiveEffectsContent['example']['flowSteps'] }) => (
  <article
    className={cn(
      'rounded-2xl border p-md',
      'border-[var(--term-border)] bg-gradient-to-r from-sky-50/40 via-white to-teal-50/40',
      'dark:from-sky-950/15 dark:via-[var(--term-bg)] dark:to-teal-950/15',
    )}
  >
    <header className="mb-sm flex items-center justify-between">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
        execution flow
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
        commit → paint → flush
      </span>
    </header>
    <ol className="flex flex-col md:flex-row md:items-stretch gap-2">
      {steps.map((step, idx) => (
        <Fragment key={step.label}>
          <li className="flex-1 min-w-0">
            <FlowPill label={step.label} tone={step.tone} />
          </li>
          {idx < steps.length - 1 && (
            <li
              aria-hidden="true"
              className="flex md:items-center justify-center text-[var(--term-dim)]"
            >
              <ArrowRightIcon className="h-4 w-4 hidden md:inline-block" />
              <ArrowDownIcon className="h-4 w-4 md:hidden my-1" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  </article>
);

const FlowPill = ({
  label,
  tone,
}: {
  label: string;
  tone: PassiveEffectsContent['example']['flowSteps'][number]['tone'];
}) => {
  const t = commitToneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center justify-center gap-1 rounded-2xl border-2 p-sm sm:p-md text-center',
        t.borderStrong,
        t.bg,
      )}
    >
      <code className={cn('text-xsm sm:text-sm font-mono font-bold break-keep', t.textStrong)}>
        {label}
      </code>
    </article>
  );
};
