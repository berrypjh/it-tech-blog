import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { WhyEventSystemContent } from '../content';
import { AtomIcon, CodeIcon, PlayCircleIcon } from '../icons';

type DiagramColumn = WhyEventSystemContent['hero']['diagram']['columns'][number];

type Props = { content: WhyEventSystemContent['hero']; className?: string };

const columnIcon = [CodeIcon, AtomIcon, PlayCircleIcon] as const;

/**
 * Hero 핵심 비주얼.
 * JSX onClick → React 이벤트 시스템(중간 처리 계층) → handleClick 실행으로
 * 이어지는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const EventSystemHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.columns.map((c) => c.title).join(' → ')}`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        {diagram.columns.map((col, i) => {
          const Icon = columnIcon[i] ?? CodeIcon;
          return (
            <li key={col.title} className="flex flex-col gap-sm">
              <StepCard col={col} icon={<Icon className="h-[18px] w-[18px]" />} step={i + 1} />
              {i < diagram.columns.length - 1 && <DownArrow />}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const StepCard = ({
  col,
  icon,
  step,
}: {
  col: DiagramColumn;
  icon: React.ReactNode;
  step: number;
}) => {
  const tone = col.tone as ToneKey;
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <div className="flex min-w-0 flex-col">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            step {step}
          </span>
          <h3 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{col.title}</h3>
        </div>
        <span
          aria-hidden="true"
          className="ml-auto flex-1 border-t border-dashed border-[var(--term-border)]"
        />
      </header>

      {col.kind === 'code' && col.code && (
        <CodePreviewPanel code={col.code} showWindowDots={false} size="sm" />
      )}

      {col.kind === 'bullet' && col.bullets && (
        <ul className="flex flex-col gap-1">
          {col.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-1.5 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
            >
              <span
                aria-hidden="true"
                className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', t.dot)}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {col.subtitle}
      </p>
    </article>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
