import { cx } from '@berrypjh/react-ui';
import { Cuboid, FunctionSquare, Layers, Sparkles } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { DispatchSetStateContent } from '../content';

type HeroContent = DispatchSetStateContent['hero'];

type Props = { content: HeroContent };

/**
 * Hero 핵심 비주얼.
 * mountState 시점에 setCount(dispatch)가 현재 Fiber와 Hook queue를
 * bind로 함께 기억하는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const SetStateMemoryHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.title.line1} ${content.title.line2} ${content.description} ${content.bottomCallout}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        {/* 두 출처: Fiber + Hook Queue */}
        <div className="grid grid-cols-1 gap-sm @md:grid-cols-2">
          <SourceCard
            tone="emerald"
            title={content.leftCard.title}
            subtitle={content.leftCard.subtitle}
            fields={content.leftCard.fields}
            icon={<Cuboid className="h-4 w-4" />}
          />
          <SourceCard
            tone="violet"
            title={content.rightCard.title}
            subtitle={content.rightCard.subtitle}
            fields={content.rightCard.fields}
            icon={<Layers className="h-4 w-4" />}
          />
        </div>

        <DownArrow label={content.arrowLeftLabel} />

        {/* dispatch 함수: setCount */}
        <DispatchCard content={content.centerCard} />

        <DownArrow />

        {/* 결론 */}
        <p className="flex items-center gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2.5 text-xsm font-bold leading-relaxed text-[var(--term-fg)] shadow-[0_2px_0_var(--term-border)] break-keep">
          <Sparkles className="h-4 w-4 shrink-0 text-[var(--term-accent)]" />
          {content.bottomCallout}
        </p>
      </div>
    </HeroDiagramShell>
  );
};

const SourceCard = ({
  tone,
  title,
  subtitle,
  fields,
  icon,
}: {
  tone: ToneKey;
  title: string;
  subtitle: string;
  fields: string[];
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex min-w-0 flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <span className="flex min-w-0 flex-col">
          <span className={cx('truncate font-mono text-sm font-bold tracking-tight', t.text)}>
            {title}
          </span>
          <span className="truncate text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {subtitle}
          </span>
        </span>
      </div>
      <ul className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2.5 py-2 font-mono text-[10px] leading-[1.7] text-[var(--term-fg)]">
        {fields.map((f, i) => (
          <li key={`${i}-${f}`} className="truncate">
            <span className="text-[var(--term-dim)]">·</span>{' '}
            <span className={f === '…' || f === '...' ? 'text-[var(--term-dim)]' : ''}>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const DispatchCard = ({ content }: { content: HeroContent['centerCard'] }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cx(
        'flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md',
        t.chip,
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex items-center gap-sm">
        <ToneIconBox tone="sky" size="sm">
          <FunctionSquare className="h-4 w-4" />
        </ToneIconBox>
        <span className="flex min-w-0 flex-col">
          <span className={cx('truncate font-mono text-sm font-bold tracking-tight', t.text)}>
            {content.title}
          </span>
          <span className="truncate text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {content.subtitle}
          </span>
        </span>
      </div>

      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
        {content.bodyTitle}
      </span>

      <ul className="flex flex-col gap-1.5">
        {content.items.map((item) => (
          <li
            key={item.marker}
            className="flex items-center gap-2 rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-sm py-2"
          >
            <span
              className={cx(
                'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-[11px] font-bold tabular-nums',
                'bg-[var(--term-accent)] text-[var(--term-bg)]',
              )}
            >
              {item.marker}
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="truncate font-mono text-xsm font-bold text-[var(--term-fg)]">
                {item.label}
              </span>
              <span className="truncate text-[10px] text-[var(--term-muted)]">{item.sub}</span>
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const DownArrow = ({ label }: { label?: string }) => (
  <span className="flex items-center justify-center gap-2">
    <span className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none">
      ↓
    </span>
    {label ? (
      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
        {label}
      </span>
    ) : null}
  </span>
);
