import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { LaneDecisionStep, LaneUpdateObjectContent } from '../content';
import { ArrowDownIcon, laneDecisionIconByName, LightbulbIcon, RouteIcon } from '../icons';

type Props = { content: LaneUpdateObjectContent['requestLane'] };

const sky = toneTokens.sky;
const amber = toneTokens.amber;

export const RequestUpdateLaneSection = ({ content }: Props) => (
  <section id="section-requestlane" aria-labelledby="heading-requestlane" className="space-y-md">
    <SectionHeader
      id="requestlane"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RouteIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* 좌: 설명 */}
      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ol className="flex flex-col">
          {content.flow.map((node, idx) => {
            const t = toneTokens[node.tone];
            return (
              <li key={node.label} className="flex flex-col">
                <div className={cn('rounded-md border px-3 py-2 text-center font-mono', t.chip)}>
                  <span className={cn('text-xsm sm:text-sm font-bold', t.text)}>{node.label}</span>
                </div>
                {idx < content.flow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="my-1 flex justify-center text-[var(--term-dim)]"
                  >
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <div className="space-y-2">
          <p className="text-sm sm:text-md text-[var(--term-fg)] leading-relaxed break-keep">
            {content.mainBody}{' '}
            <span className={cn('font-bold', sky.text)}>{content.mainBodyEmphasis}</span>
          </p>
          <div
            className={cn(
              'flex items-start gap-sm rounded-md border px-3 py-2',
              amber.border,
              amber.fill.bg,
            )}
          >
            <LightbulbIcon
              aria-hidden="true"
              className={cn('mt-0.5 h-4 w-4 shrink-0', amber.text)}
            />
            <p className="text-xxsm sm:text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {content.subBody}
            </p>
          </div>
        </div>
      </article>

      {/* 우: 결정 다이어그램 */}
      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <header className="flex items-center justify-between gap-sm">
          <div className="flex flex-col min-w-0">
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-tight">
              {content.decisionTitle}
            </h3>
            <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
              {content.decisionSubtitle}
            </span>
          </div>
          <span
            className={cn(
              'text-[10px] font-mono uppercase tracking-wider rounded-md border px-2 py-0.5',
              amber.chip,
            )}
          >
            inputs
          </span>
        </header>

        <ol className="flex flex-col">
          {content.decisionSteps.map((step, idx) => (
            <li key={step.number} className="flex flex-col">
              <DecisionStep step={step} />
              {idx < content.decisionSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="my-1 flex justify-center text-[var(--term-dim)]"
                >
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </article>
    </div>
  </section>
);

const DecisionStep = ({ step }: { step: LaneDecisionStep }) => {
  const Icon = laneDecisionIconByName[step.icon];
  const t = toneTokens[step.tone];
  return (
    <div
      className={cn(
        'flex items-center gap-sm rounded-lg border bg-[var(--term-bg)] p-sm shadow-[0_2px_0_var(--term-border)]',
        step.emphasized ? 'border-2' : 'border',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border',
          t.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full border px-1.5 text-[10px] font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {step.number}
        </span>
        <span className={cn('text-xsm sm:text-sm font-bold break-keep', t.text)}>{step.title}</span>
        {step.emphasized && (
          <span
            className={cn(
              'ml-auto inline-flex items-center rounded border px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider',
              amber.chip,
            )}
          >
            result
          </span>
        )}
      </div>
    </div>
  );
};
