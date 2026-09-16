import { cx } from '@berrypjh/react-ui';
import { ArrowDown, Clock, Target } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { PassiveEffectsContent, PositionStep } from '../content';

type Props = { content: PassiveEffectsContent['position'] };

export const PassiveEffectsPositionSection = ({ content }: Props) => (
  <section
    id="passive-position"
    aria-labelledby="heading-passive-position"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="passive-position"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Target className="h-5 w-5" aria-hidden="true" />}
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

      {/* Right: callout */}
      <Callout callout={content.callout} />
    </div>
  </section>
);

const Callout = ({ callout }: { callout: PassiveEffectsContent['position']['callout'] }) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cx(
        'flex h-full flex-col items-center justify-center gap-2 rounded-lg border-2 p-md sm:p-lg text-center',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-14 w-14 items-center justify-center rounded-lg border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <Clock className="h-7 w-7" aria-hidden="true" />
      </span>
      <p className={cx('text-md sm:text-lg font-bold leading-tight break-keep', t.fill.text)}>
        <span className="block">{callout.line1}</span>
        <span className="block">{callout.line2}</span>
      </p>
    </article>
  );
};

const StepCard = ({ step, index }: { step: PositionStep; index: number }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-md rounded-lg border p-md',
        step.active
          ? cx('border-2', t.fill.border, t.fill.bg)
          : cx(t.border, 'bg-[var(--term-bg)]'),
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-11 w-11 items-center justify-center rounded-lg border text-xsm font-mono font-bold',
          step.active ? cx(t.fill.bg, t.fill.border, t.fill.text) : t.chip,
        )}
      >
        {index}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <h3 className={cx('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
          {step.title}
        </h3>
        <p className="text-xsm leading-snug text-[var(--term-muted)] break-keep">{step.body}</p>
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
