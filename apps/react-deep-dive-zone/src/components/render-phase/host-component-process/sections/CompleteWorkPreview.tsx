import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ArrowUp, ChevronDown, Lightbulb, Sparkles, Workflow } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CompleteWorkFlowNode, HostComponentContent } from '../content';

type Props = { content: HostComponentContent['completeWork'] };

const directionIcon = {
  down: ArrowDown,
  sideways: ChevronDown,
  up: ArrowUp,
} as const;

export const CompleteWorkPreview = ({ content }: Props) => (
  <section
    id="complete-work-preview"
    aria-labelledby="heading-complete-work-preview"
    className="space-y-md"
  >
    <SectionHeader
      id="complete-work-preview"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-md lg:gap-lg items-stretch">
      {/* Left: explanation card */}
      <article
        className={cx(
          'flex items-start gap-md rounded-lg border p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)]',
          toneTokens.amber.border,
        )}
      >
        <ToneIconBox tone="amber" size="md">
          <Lightbulb className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <p
          className={cx(
            'text-xsm sm:text-sm leading-relaxed font-bold break-keep',
            toneTokens.amber.text,
          )}
        >
          {content.description}
        </p>
      </article>

      {/* Center: flow */}
      <article className="flex flex-col gap-2 rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <header className="flex items-center justify-between gap-2">
          <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {'// down → ... → up'}
          </span>
          <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)] rounded-md border border-[var(--term-border)] px-2 py-0.5">
            two-way work
          </span>
        </header>
        <ol className="flex flex-col gap-1.5">
          {content.flow.map((node, idx) => (
            <li key={node.title} className="flex flex-col items-stretch">
              <FlowNode node={node} />
              {idx < content.flow.length - 1 && (
                <ChevronDown
                  aria-hidden="true"
                  className="mx-auto my-1 h-4 w-4 text-[var(--term-accent)]"
                />
              )}
            </li>
          ))}
        </ol>
      </article>

      {/* Right: work items */}
      <article
        aria-labelledby="completework-card-title"
        className={cx(
          'flex h-full flex-col gap-md rounded-lg border p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
          toneTokens.violet.border,
        )}
      >
        <header className="flex items-center gap-2">
          <ToneIconBox tone="violet" size="md">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </ToneIconBox>
          <h3
            id="completework-card-title"
            className={cx('text-sm sm:text-md font-bold break-keep', toneTokens.violet.text)}
          >
            {content.workCardTitle}
          </h3>
        </header>
        <ul className="flex flex-col gap-1.5">
          {content.workItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
            >
              <span
                aria-hidden="true"
                className={cx(
                  'mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full',
                  toneTokens.violet.dot,
                )}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);

const FlowNode = ({ node }: { node: CompleteWorkFlowNode }) => {
  const t = toneTokens[node.tone];
  const Arrow = directionIcon[node.direction];
  return (
    <article
      className={cx(
        'grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-2 rounded-lg border p-sm sm:p-md shadow-[0_1px_0_var(--term-border)]',
        t.fill.bg,
        t.fill.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cx('inline-flex h-9 w-9 items-center justify-center rounded-md border', t.chip)}
      >
        <Arrow className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className={cx('text-xsm sm:text-sm font-bold leading-tight break-keep', t.fill.text)}>
          {node.title}
        </span>
        <span className="text-xxsm leading-snug text-[var(--term-muted)] break-keep">
          {node.description}
        </span>
      </div>
    </article>
  );
};
