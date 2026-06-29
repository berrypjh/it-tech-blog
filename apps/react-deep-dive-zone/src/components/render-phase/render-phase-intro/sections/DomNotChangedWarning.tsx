import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { RenderPhaseIntroContent, WarningStep } from '../content';
import { ArrowRightIcon, BellRingIcon, warningIconByName } from '../icons';

type Props = { content: RenderPhaseIntroContent['warning'] };

export const DomNotChangedWarning = ({ content }: Props) => (
  <section id="dom-not-changed" aria-labelledby="heading-dom-not-changed">
    <div
      className={cn(
        'rounded-lg border p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
        toneTokens.amber.fill.bg,
        toneTokens.amber.fill.border,
      )}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)] gap-md lg:gap-lg items-start">
        {/* Left: warning header */}
        <div className="flex items-start gap-md min-w-0">
          <span
            aria-hidden="true"
            className={cn(
              'mt-0.5 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border',
              toneTokens.amber.chip,
            )}
          >
            <BellRingIcon className="h-7 w-7" />
          </span>
          <div className="flex flex-col gap-2 min-w-0">
            <span
              className={cn('text-xxsm font-mono uppercase tracking-wider', toneTokens.amber.text)}
            >
              {`// ${content.eyebrow}`}
            </span>
            <h2
              id="heading-dom-not-changed"
              className={cn(
                'text-lg sm:text-xl lg:text-xxl font-bold tracking-tight break-keep leading-tight',
                toneTokens.amber.fill.text,
              )}
            >
              <span className="block">{content.title.line1}</span>
              <span className="block">{content.title.line2}</span>
            </h2>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.description}
            </p>
          </div>
        </div>

        {/* Right: 3-step mini flow */}
        <div
          className={cn(
            'w-full rounded-lg border bg-[var(--term-bg)] p-md',
            toneTokens.amber.border,
          )}
        >
          {/* Desktop: row */}
          <div className="hidden sm:flex items-stretch gap-2">
            {content.steps.map((step, idx) => (
              <Fragment key={step.title}>
                <div className="flex-1 min-w-0">
                  <MiniStep step={step} />
                </div>
                {idx < content.steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="flex shrink-0 items-center justify-center text-[var(--term-accent)] px-0.5"
                  >
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                )}
              </Fragment>
            ))}
          </div>

          {/* Mobile: column */}
          <ol className="sm:hidden flex flex-col gap-2">
            {content.steps.map((step) => (
              <li key={step.title}>
                <MiniStep step={step} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

const MiniStep = ({ step }: { step: WarningStep }) => {
  const Icon = warningIconByName[step.icon];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center gap-1.5 rounded-lg border bg-[var(--term-bg)] p-sm shadow-[0_1px_0_var(--term-border)]',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn('inline-flex h-9 w-9 items-center justify-center rounded-md border', t.chip)}
      >
        <Icon className="h-4 w-4" />
      </span>
      <h3 className={cn('text-xsm font-bold leading-tight text-center break-keep', t.text)}>
        {step.title}
      </h3>
      <p className="text-xxsm leading-snug text-center text-[var(--term-muted)] break-keep">
        {step.subtitle}
      </p>
    </article>
  );
};
