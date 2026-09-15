import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  ArrowLeftRight,
  CheckCircle2,
  History,
  Rocket,
  Wand2,
  Workflow,
} from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { RootCurrentRefContent, TransitionStep } from '../content';

type Props = { content: RootCurrentRefContent['transition'] };

const iconMap: Record<TransitionStep['iconName'], typeof History> = {
  history: History,
  check: CheckCircle2,
  wand: Wand2,
  rocket: Rocket,
};

export const CurrentTreeTransitionSection = ({ content }: Props) => (
  <section
    id="current-tree-transition"
    aria-labelledby="heading-current-tree-transition"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="current-tree-transition"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_0.7fr)] gap-3">
      {/* Left: vertical flow */}
      <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ol className="flex flex-col">
          {content.steps.map((step, idx) => (
            <li key={step.title} className="flex flex-col">
              <StepCard step={step} index={idx + 1} />
              {idx < content.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="my-2 flex justify-center text-[var(--term-dim)]"
                >
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </article>

      {/* Right: formula callout */}
      <FormulaCallout formula={content.formula} note={content.formulaCallout} />
    </div>
  </section>
);

const StepCard = ({ step, index }: { step: TransitionStep; index: number }) => {
  const Icon = iconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-md rounded-lg border p-md',
        step.emphasis
          ? cx('border-2', t.fill.border, t.fill.bg)
          : cx(t.border, 'bg-[var(--term-bg)]'),
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={step.tone}>
        <Icon className="h-5 w-5" />
      </ToneIconBox>
      <div className="flex flex-col gap-0.5 min-w-0">
        <h3 className={cx('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
          {step.title}
        </h3>
        <p className="text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
      <span
        aria-hidden="true"
        className={cx(
          'hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
          t.chip,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
    </article>
  );
};

const FormulaCallout = ({ formula, note }: { formula: string; note: string }) => {
  const t = toneTokens.blue;
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="blue">
          <ArrowLeftRight className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cx('text-[10px] font-mono uppercase tracking-wider font-bold', t.fill.text)}>
          the swap
        </h3>
      </header>

      <pre
        className={cx(
          'overflow-x-auto rounded-md border bg-[var(--term-bg)] p-md text-sm leading-snug font-mono font-bold',
          t.fill.border,
          t.fill.text,
        )}
      >
        <code>{formula}</code>
      </pre>

      <p className={cx('text-xsm sm:text-sm leading-relaxed break-keep', t.fill.text)}>{note}</p>
    </article>
  );
};
