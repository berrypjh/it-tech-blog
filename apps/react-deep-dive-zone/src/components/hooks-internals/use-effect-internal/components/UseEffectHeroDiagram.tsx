import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HeroPhase, UseEffectInternalsContent } from '../content';
import { ClipboardIcon, PlayCircleIcon } from '../icons';

type Props = { content: UseEffectInternalsContent['hero']; className?: string };

const visualMap = {
  clipboard: ClipboardIcon,
  play: PlayCircleIcon,
} as const;

/**
 * Hero 핵심 비주얼.
 * useEffect 코드 → Render Phase에서 Effect 객체 등록 → Commit 이후 Passive Effect 실행으로
 * 이어지는 useEffect 내부 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const UseEffectHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.description} ${content.phases
    .map((p) => `${p.title}(${p.subtitle}): ${p.items.join(', ')}`)
    .join(' → ')}`;

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
        <CodePreviewPanel code={content.leftCode} showWindowDots language="JS" size="md" />

        <ol className="flex flex-col gap-sm">
          {content.phases.map((phase) => (
            <li key={phase.number} className="flex flex-col gap-sm">
              <DownArrow />
              <PhaseCard phase={phase} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const PhaseCard = ({ phase }: { phase: HeroPhase }) => {
  const tone = phase.tone as ToneKey;
  const t = toneTokens[tone];
  const Icon = visualMap[phase.visual];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </ToneIconBox>
        <div className="flex min-w-0 flex-col">
          <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
            {phase.title}
          </span>
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {phase.subtitle}
          </span>
        </div>
      </header>
      <ul className="flex flex-wrap gap-1">
        {phase.items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-1.5 py-0.5 font-mono text-[11px] leading-none text-[var(--term-muted)] break-keep"
          >
            {item}
          </li>
        ))}
      </ul>
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
