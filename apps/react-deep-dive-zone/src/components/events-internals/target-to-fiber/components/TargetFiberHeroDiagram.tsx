import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { TargetFiberContent } from '../content';
import { BoxIcon, GlobeIcon } from '../icons';

type Props = { content: TargetFiberContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 브라우저가 주는 event.target(DOM 노드) → ↓ → React가 원하는 Fiber 노드로
 * 이어지는 DOM→Fiber 매핑을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const TargetFiberHeroDiagram = ({ content, className }: Props) => {
  const { domCard, fiberCard } = content;
  const a11y = `DOM → Fiber : ${domCard.title} → ${fiberCard.title}`;

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

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <StepHeader
          tone="blue"
          eyebrow="browser"
          label={domCard.title}
          icon={<GlobeIcon className="h-[18px] w-[18px]" />}
          tag={domCard.tag}
        />
        <CodePreviewPanel code={domCard.code} showWindowDots language="HTML" size="md" />
        <StepNote text={domCard.caption} />

        <DownArrow />

        <StepHeader
          tone="teal"
          eyebrow="react"
          label={fiberCard.title}
          icon={<BoxIcon className="h-[18px] w-[18px]" />}
          tag={fiberCard.tag}
        />
        <dl
          className={cn(
            'grid grid-cols-[auto_minmax(0,1fr)] overflow-hidden rounded-lg border',
            'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          {fiberCard.rows.map((row, i) => (
            <div key={row.key} className="contents">
              <dt
                className={cn(
                  'px-md py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-300',
                  i > 0 && 'border-t border-[var(--term-border)]',
                )}
              >
                {row.key}
              </dt>
              <dd
                className={cn(
                  'break-all px-md py-2 font-mono text-[11px] text-[var(--term-fg)]',
                  i > 0 && 'border-t border-[var(--term-border)]',
                )}
              >
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
        <StepNote text={fiberCard.caption} />
      </div>
    </div>
  );
};

const StepHeader = ({
  tone,
  eyebrow,
  label,
  icon,
  tag,
}: {
  tone: ToneKey;
  eyebrow: string;
  label: string;
  icon: React.ReactNode;
  tag: string;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
          {eyebrow}
        </span>
        <span className={cn('truncate text-sm font-bold tracking-tight break-keep', t.text)}>
          {label}
        </span>
      </div>
      <span
        className={cn(
          'ml-auto shrink-0 rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold',
          t.chip,
        )}
      >
        {tag}
      </span>
    </div>
  );
};

const StepNote = ({ text }: { text: string }) => (
  <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{text}</p>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
