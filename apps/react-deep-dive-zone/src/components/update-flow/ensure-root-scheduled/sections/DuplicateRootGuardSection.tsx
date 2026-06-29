import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EnsureRootScheduledContent } from '../content';
import {
  ArrowDownIcon,
  BadgeCheckIcon,
  CopyXIcon,
  ListChecksIcon,
  NetworkIcon,
  SparklesIcon,
} from '../icons';

type Props = { content: EnsureRootScheduledContent['duplicate'] };

const emerald = toneTokens.emerald;
const amber = toneTokens.amber;
const sky = toneTokens.sky;

export const DuplicateRootGuardSection = ({ content }: Props) => (
  <section id="section-duplicate" aria-labelledby="heading-duplicate" className="space-y-md">
    <SectionHeader
      id="duplicate"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CopyXIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.35fr)] gap-md lg:gap-lg items-stretch">
      {/* 좌: 설명 */}
      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="amber" size="sm">
            <BadgeCheckIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            de-dupe guarantee
          </span>
        </header>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep whitespace-pre-line">
          {content.description}
        </p>

        <div
          className={cn(
            'mt-auto flex items-start gap-sm rounded-lg border p-md',
            emerald.border,
            emerald.fill.bg,
          )}
        >
          <SparklesIcon
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
      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <header className="flex items-center justify-between gap-sm">
          <h3 className="text-sm sm:text-md font-bold leading-tight text-[var(--term-fg)]">
            {content.diagramTitle}
          </h3>
          <span
            className={cn(
              'text-[10px] font-mono uppercase tracking-wider rounded-md border px-2 py-0.5',
              emerald.chip,
            )}
          >
            3 → 1
          </span>
        </header>

        <ul className="flex flex-col gap-2">
          {content.updates.map((upd) => (
            <li
              key={upd}
              className={cn(
                'flex items-center gap-2 rounded-md border bg-[var(--term-bg)] px-3 py-2 shadow-[0_2px_0_var(--term-border)]',
                emerald.border,
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                  emerald.chip,
                )}
              >
                <NetworkIcon className="h-4 w-4" />
              </span>
              <span className={cn('text-xsm sm:text-sm font-mono font-bold', emerald.text)}>
                {upd}
              </span>
            </li>
          ))}
        </ul>

        <DownArrow />

        {/* 중복 방지 박스 */}
        <div
          className={cn(
            'flex items-center gap-sm rounded-lg border p-md',
            amber.border,
            amber.fill.bg,
          )}
        >
          <ToneIconBox tone="amber" size="md">
            <CopyXIcon className="h-5 w-5" />
          </ToneIconBox>
          <div className="flex flex-col min-w-0">
            <code
              className={cn(
                'inline-flex w-fit items-center rounded-md border bg-[var(--term-surface)] px-2 py-0.5 font-mono text-[11px] font-bold',
                amber.border,
                amber.text,
              )}
            >
              {content.middleLabel}
            </code>
            <span className={cn('text-[10px] leading-snug break-keep mt-1', amber.fill.text)}>
              {content.middleSub}
            </span>
          </div>
        </div>

        <DownArrow />

        {/* 결과 */}
        <div
          className={cn('flex items-center gap-sm rounded-lg border p-md', sky.border, sky.fill.bg)}
        >
          <ToneIconBox tone="sky" size="md">
            <ListChecksIcon className="h-5 w-5" />
          </ToneIconBox>
          <div className="flex flex-col min-w-0 flex-1">
            <span className={cn('text-[10px] uppercase tracking-wider font-mono', sky.text)}>
              {content.resultTitle}
            </span>
            <code
              className={cn(
                'inline-flex w-fit items-center rounded-md border bg-[var(--term-surface)] px-3 py-1 font-mono text-md font-bold',
                sky.border,
                sky.fill.text,
              )}
            >
              {content.resultValue}
            </code>
          </div>
          <span
            className={cn(
              'text-[10px] font-mono uppercase tracking-wider text-right break-keep',
              sky.text,
            )}
          >
            {content.resultBody}
          </span>
        </div>
      </article>
    </div>
  </section>
);

const DownArrow = () => (
  <span aria-hidden="true" className="flex justify-center text-[var(--term-dim)]">
    <ArrowDownIcon className="h-4 w-4" />
  </span>
);
