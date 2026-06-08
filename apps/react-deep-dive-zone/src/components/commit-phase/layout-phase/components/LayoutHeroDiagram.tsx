import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HeroPhase, HeroPhaseIcon, LayoutPhaseContent } from '../content';
import { ClockIcon, DatabaseIcon, MonitorIcon, ZapIcon } from '../icons';

type Props = { content: LayoutPhaseContent['hero']; className?: string };

const iconMap: Record<HeroPhaseIcon, typeof ZapIcon> = {
  database: DatabaseIcon,
  zap: ZapIcon,
  monitor: MonitorIcon,
  clock: ClockIcon,
};

/**
 * Hero 핵심 비주얼.
 * Mutation → Layout(active) → Browser Paint → Passive Effects로 이어지는
 * Commit Phase 시간 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 * Layout Phase 진입점은 commitLayoutEffects 호출 코드로 앵커링한다.
 */
export const LayoutHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.phases
    .map((p) => `${p.title} (${p.subtitle}) — ${p.details.join(', ')}`)
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

      <div className="relative flex flex-col gap-sm">
        <header className="flex items-center gap-sm" aria-hidden="true">
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] break-keep">
            {`// ${diagram.title}`}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            commit timeline
          </span>
        </header>

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {diagram.phases.map((phase, i) => (
            <li key={phase.key} className="flex flex-col gap-sm">
              <PhaseRow phase={phase} />
              {phase.active && (
                <CodePreviewPanel
                  code="commitLayoutEffects(finishedWork, root, lanes);"
                  language="JS"
                  size="md"
                />
              )}
              {i < diagram.phases.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const PhaseRow = ({ phase }: { phase: HeroPhase }) => {
  const tone = phase.tone as ToneKey;
  const t = toneTokens[tone];
  const Icon = iconMap[phase.iconName];
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        phase.active ? cn(t.chip, t.border) : cn('border-[var(--term-border)]', t.borderHover),
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-baseline gap-2">
          <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
            {phase.title}
          </span>
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] break-keep">
            {phase.subtitle}
          </span>
        </div>
        <ul className="flex flex-col gap-0.5">
          {phase.details.map((detail) => (
            <li
              key={detail}
              className={cn(
                'flex items-center gap-1.5 text-xsm leading-snug break-keep',
                phase.active ? t.text : 'text-[var(--term-muted)]',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-block h-1 w-1 shrink-0 rounded-full',
                  phase.active ? t.dot : 'bg-[var(--term-dim)]',
                )}
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
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
