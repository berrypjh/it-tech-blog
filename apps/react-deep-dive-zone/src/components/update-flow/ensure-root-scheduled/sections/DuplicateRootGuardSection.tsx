import { cx } from '@berrypjh/react-ui';
import { ArrowDown, BadgeCheck, CopyX, ListChecks, Network, Sparkles } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EnsureRootScheduledContent } from '../content';

type Props = { content: EnsureRootScheduledContent['duplicate'] };

const emerald = toneTokens.emerald;
const amber = toneTokens.amber;
const sky = toneTokens.sky;

export const DuplicateRootGuardSection = ({ content }: Props) => (
  <section id="duplicate" aria-labelledby="heading-duplicate" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="duplicate"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CopyX className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.35fr)] gap-md lg:gap-lg items-stretch">
      {/* 좌: 설명 */}
      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ToneIconBox tone="amber" size="sm">
          <BadgeCheck className="h-[18px] w-[18px]" aria-hidden="true" />
        </ToneIconBox>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep whitespace-pre-line">
          {content.description}
        </p>

        <div
          className={cx(
            'mt-auto flex items-start gap-sm rounded-lg border p-md',
            emerald.border,
            emerald.fill.bg,
          )}
        >
          <Sparkles aria-hidden="true" className={cx('mt-0.5 h-4 w-4 shrink-0', emerald.text)} />
          <p
            className={cx(
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
            className={cx(
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
              className={cx(
                'flex items-center gap-2 rounded-md border bg-[var(--term-bg)] px-3 py-2 shadow-[0_2px_0_var(--term-border)]',
                emerald.border,
              )}
            >
              <span
                aria-hidden="true"
                className={cx(
                  'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                  emerald.chip,
                )}
              >
                <Network className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className={cx('text-xsm sm:text-sm font-mono font-bold', emerald.text)}>
                {upd}
              </span>
            </li>
          ))}
        </ul>

        <DownArrow />

        {/* 중복 방지 박스 */}
        <div
          className={cx(
            'flex items-center gap-sm rounded-lg border p-md',
            amber.border,
            amber.fill.bg,
          )}
        >
          <ToneIconBox tone="amber" size="md">
            <CopyX className="h-5 w-5" aria-hidden="true" />
          </ToneIconBox>
          <div className="flex flex-col min-w-0">
            <code
              className={cx(
                'inline-flex w-fit items-center rounded-md border bg-[var(--term-surface)] px-2 py-0.5 font-mono text-[11px] font-bold',
                amber.border,
                amber.text,
              )}
            >
              {content.middleLabel}
            </code>
            <span className={cx('text-[10px] leading-snug break-keep mt-1', amber.fill.text)}>
              {content.middleSub}
            </span>
          </div>
        </div>

        <DownArrow />

        {/* 결과 */}
        <div
          className={cx('flex items-center gap-sm rounded-lg border p-md', sky.border, sky.fill.bg)}
        >
          <ToneIconBox tone="sky" size="md">
            <ListChecks className="h-5 w-5" aria-hidden="true" />
          </ToneIconBox>
          <div className="flex flex-col min-w-0 flex-1">
            <span className={cx('text-[10px] uppercase tracking-wider font-mono', sky.text)}>
              {content.resultTitle}
            </span>
            <code
              className={cx(
                'inline-flex w-fit items-center rounded-md border bg-[var(--term-surface)] px-3 py-1 font-mono text-md font-bold',
                sky.border,
                sky.fill.text,
              )}
            >
              {content.resultValue}
            </code>
          </div>
          <span
            className={cx(
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
    <ArrowDown className="h-4 w-4" aria-hidden="true" />
  </span>
);
