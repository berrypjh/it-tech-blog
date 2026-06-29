import { cn } from '@it-tech-blog/utils';

import { CompareVs } from '../../../shared/compare';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { RootStateField, ScheduleUpdateOnFiberContent } from '../content';
import { ArrowDownIcon, CheckCircleIcon, FlagIcon, NetworkIcon, ZapIcon } from '../icons';

type Props = { content: ScheduleUpdateOnFiberContent['markRoot'] };

const sky = toneTokens.sky;
const emerald = toneTokens.emerald;

export const MarkRootUpdatedMeaningSection = ({ content }: Props) => (
  <section id="section-markRoot" aria-labelledby="heading-markRoot" className="space-y-md">
    <SectionHeader
      id="markRoot"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FlagIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.35fr)] gap-md lg:gap-lg items-stretch">
      {/* 좌: 설명 */}
      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <code
          className={cn(
            'inline-flex w-fit items-center rounded-md border bg-[var(--term-surface)] px-3 py-1.5 font-mono text-sm sm:text-md font-bold',
            sky.border,
            sky.text,
          )}
        >
          {content.description.title}
        </code>

        <span aria-hidden="true" className="self-start text-[var(--term-accent)]">
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep">
          {content.description.body}
        </p>

        <span aria-hidden="true" className="block h-px w-full bg-[var(--term-border)]" />

        <ul className="flex flex-col gap-2">
          {content.description.bullets.map((b) => (
            <li
              key={b}
              className={cn(
                'flex items-start gap-2 rounded-md border bg-[var(--term-surface)] px-3 py-2',
                sky.border,
              )}
            >
              <CheckCircleIcon
                aria-hidden="true"
                className={cn('mt-0.5 h-4 w-4 shrink-0', sky.text)}
              />
              <span className="text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep">
                {b}
              </span>
            </li>
          ))}
        </ul>
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
            before → after
          </span>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
          <RootCard variant="before" title={content.beforeTitle} fields={content.beforeFields} />
          <CompareVs />
          <RootCard
            variant="after"
            title={content.afterTitle}
            badge={content.afterBadge}
            fields={content.afterFields}
          />
        </div>
      </article>
    </div>
  </section>
);

type RootCardProps = {
  variant: 'before' | 'after';
  title: string;
  badge?: string;
  fields: RootStateField[];
};

const RootCard = ({ variant, title, badge, fields }: RootCardProps) => {
  const isAfter = variant === 'after';
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        isAfter ? sky.border : 'border-[var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {isAfter ? (
            <ToneIconBox tone="sky" size="sm">
              <NetworkIcon className="h-4 w-4" />
            </ToneIconBox>
          ) : (
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]"
            >
              <NetworkIcon className="h-4 w-4" />
            </span>
          )}
          <span
            className={cn(
              'text-xsm sm:text-sm font-bold font-mono',
              isAfter ? sky.text : 'text-[var(--term-fg)]',
            )}
          >
            {title}
          </span>
        </div>
        {badge && (
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider',
              emerald.chip,
            )}
          >
            <ZapIcon aria-hidden="true" className="h-3 w-3" />
            {badge}
          </span>
        )}
      </header>

      <ul className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-3 py-2 font-mono text-[11px] leading-[1.85]">
        {fields.map((f) => (
          <li key={f.key} className="flex items-center justify-between gap-2">
            <span className="text-[var(--term-muted)]">{f.key}</span>
            <span
              className={f.emphasized ? cn(emerald.text, 'font-bold') : 'text-[var(--term-muted)]'}
            >
              {f.value}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};
