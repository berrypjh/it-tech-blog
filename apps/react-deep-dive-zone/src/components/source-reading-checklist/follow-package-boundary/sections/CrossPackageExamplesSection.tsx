import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { CrossPackageStep, FollowPackageBoundaryContent } from '../content';
import { ArrowDownIcon, NetworkIcon, ScanSearchIcon } from '../icons';
import { getPackageClasses, PackageBadge } from '../PackageBadge';

type Props = { content: FollowPackageBoundaryContent['crossPackage'] };

export const CrossPackageExamplesSection = ({ content }: Props) => {
  return (
    <section
      id="section-cross-package"
      aria-labelledby="heading-cross-package"
      className="space-y-lg"
    >
      <SectionHeader
        id="cross-package"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<NetworkIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        {content.examples.map((example) => {
          const accent = toneTokens[example.accent];
          return (
            <li key={example.id}>
              <article
                className={cn(
                  'group flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
                  'bg-white dark:bg-[var(--term-bg)]',
                  'shadow-[0_3px_0_var(--term-border)]',
                  accent.border,
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  accent.borderHover,
                )}
              >
                {/* Header */}
                <header className="flex flex-col gap-2">
                  <h3
                    className={cn(
                      'text-md sm:text-lg font-bold tracking-tight break-keep',
                      accent.text,
                    )}
                  >
                    {example.title}
                  </h3>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                      {content.startLabel}
                    </span>
                    <pre
                      className={cn(
                        'overflow-x-auto rounded-md border px-2.5 py-1.5',
                        accent.border,
                        accent.chip,
                        'font-mono text-xsm font-bold',
                      )}
                    >
                      <code>{example.startCode}</code>
                    </pre>
                  </div>
                </header>

                {/* Flow */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {content.flowLabel}
                  </span>
                  <ol className="flex flex-col gap-0">
                    {example.steps.map((step, i) => (
                      <Fragment key={`${example.id}-${i}`}>
                        <li>
                          <FlowStepRow step={step} />
                        </li>
                        {i < example.steps.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="flex items-center justify-center py-0.5"
                          >
                            <ArrowDownIcon className="h-3.5 w-3.5 text-cyan-500" />
                          </span>
                        )}
                      </Fragment>
                    ))}
                  </ol>
                </div>

                {/* Body */}
                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {example.body}
                </p>

                {/* Reading point */}
                <div
                  className={cn(
                    'mt-auto flex items-start gap-2 rounded-md border-2 p-3',
                    'border-amber-300 bg-amber-50 text-amber-900',
                    'dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-100',
                  )}
                >
                  <ScanSearchIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-300">
                      {content.readingPointLabel}
                    </span>
                    <p className="text-xsm font-bold leading-snug break-keep">
                      {example.readingPoint}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const FlowStepRow = ({ step }: { step: CrossPackageStep }) => {
  // jsx 가상 단계는 amber로 처리(사용자 JSX 입력).
  if (step.packageKey === 'jsx') {
    return (
      <div
        className={cn(
          'flex items-center gap-2 rounded-md border-2 px-2.5 py-2',
          'border-amber-300 bg-amber-50 dark:border-amber-700/70 dark:bg-amber-950/30',
        )}
      >
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5',
            'border-amber-300 bg-white text-amber-800',
            'dark:border-amber-700/70 dark:bg-[var(--term-bg)] dark:text-amber-200',
            'font-mono text-[10px] font-bold',
          )}
        >
          user
        </span>
        <code className="font-mono text-xsm text-[var(--term-fg)] break-all">{step.label}</code>
      </div>
    );
  }

  const t = getPackageClasses(step.packageKey);
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2 rounded-md border-2 px-2.5 py-2',
        t.border,
        t.chip,
      )}
    >
      <PackageBadge packageKey={step.packageKey} size="sm">
        {step.packageKey}
      </PackageBadge>
      <code className={cn('font-mono text-xsm font-bold', t.text)}>{step.label}</code>
      {step.hint && (
        <span className="text-[10px] font-mono text-[var(--term-muted)] ml-auto">{step.hint}</span>
      )}
    </div>
  );
};
