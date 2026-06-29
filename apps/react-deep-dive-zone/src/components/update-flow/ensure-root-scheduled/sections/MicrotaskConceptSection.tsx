import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EnsureRootScheduledContent } from '../content';
import { ClockIcon, LightbulbIcon, SparklesIcon, TimerResetIcon } from '../icons';

type Props = { content: EnsureRootScheduledContent['microtask'] };

const emerald = toneTokens.emerald;

export const MicrotaskConceptSection = ({ content }: Props) => (
  <section id="section-microtask" aria-labelledby="heading-microtask" className="space-y-md">
    <SectionHeader
      id="microtask"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ClockIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] gap-md lg:gap-lg items-stretch">
      {/* 좌: 설명 */}
      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="amber" size="sm">
            <TimerResetIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            schedule later, not now
          </span>
        </header>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep">
          {content.description}
        </p>

        <div
          className={cn(
            'mt-auto flex items-start gap-sm rounded-lg border p-md',
            emerald.border,
            emerald.fill.bg,
          )}
        >
          <LightbulbIcon
            aria-hidden="true"
            className={cn('mt-0.5 h-4 w-4 shrink-0', emerald.text)}
          />
          <p
            className={cn(
              'text-xsm sm:text-sm font-bold leading-snug break-keep',
              emerald.fill.text,
            )}
          >
            {content.highlight}
          </p>
        </div>
      </article>

      {/* 우: 다이어그램 */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
          emerald.border,
        )}
      >
        <header className="flex items-center justify-between gap-sm">
          <h3 className={cn('text-sm sm:text-md font-bold leading-tight', emerald.text)}>
            {content.diagramTitle}
          </h3>
          <span
            className={cn(
              'text-[10px] font-mono uppercase tracking-wider rounded-md border px-2 py-0.5',
              emerald.chip,
            )}
          >
            microtask
          </span>
        </header>

        <div className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-md py-4">
          <div className="flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap">
            <span aria-hidden="true" className={cn('font-mono', emerald.text)}>
              ...
            </span>
            <span aria-hidden="true" className={emerald.text}>
              →
            </span>
            <span
              className={cn(
                'inline-flex flex-col items-center gap-1 rounded-lg border px-4 py-3',
                emerald.border,
                emerald.fill.bg,
              )}
            >
              <ToneIconBox tone="emerald" size="sm">
                <ClockIcon className="h-4 w-4" />
              </ToneIconBox>
              <code
                className={cn(
                  'inline-flex items-center rounded-md border bg-[var(--term-surface)] px-2 py-0.5 font-mono text-[11px] font-bold',
                  emerald.border,
                  emerald.text,
                )}
              >
                {content.diagramMain}
              </code>
              <span className={cn('text-[10px] text-center break-keep', emerald.fill.text)}>
                {content.diagramSub}
              </span>
            </span>
            <span aria-hidden="true" className={emerald.text}>
              →
            </span>
            <span aria-hidden="true" className={cn('font-mono', emerald.text)}>
              ...
            </span>
          </div>
        </div>

        <div className="mt-auto flex items-start gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-3 py-2">
          <SparklesIcon
            aria-hidden="true"
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]"
          />
          <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
            {content.diagramSide}
          </p>
        </div>
      </article>
    </div>
  </section>
);
