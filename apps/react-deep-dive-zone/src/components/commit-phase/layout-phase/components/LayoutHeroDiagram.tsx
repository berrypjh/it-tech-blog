import { cx } from '@berrypjh/react-ui';
import { Clock, Database, type LucideIcon, Monitor, Zap } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroPhase, HeroPhaseId, LayoutPhaseContent } from '../content';

type Props = { content: LayoutPhaseContent['hero'] };

const iconMap: Record<HeroPhaseId, LucideIcon> = {
  database: Database,
  zap: Zap,
  monitor: Monitor,
  clock: Clock,
};

/**
 * Hero 핵심 비주얼.
 * Mutation → Layout(active) → Browser Paint → Passive Effects로 이어지는
 * Commit Phase 시간 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 * Layout Phase 진입점은 commitLayoutEffects 호출 코드로 앵커링한다.
 */
export const LayoutHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.phases
    .map((p) => `${p.title} (${p.subtitle}) — ${p.details.join(', ')}`)
    .join(' → ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] break-keep">
          {`// ${diagram.title}`}
        </span>

        <ol className="flex flex-col gap-sm">
          {diagram.phases.map((phase, i) => (
            <li key={phase.key} className="flex flex-col gap-sm">
              <PhaseRow phase={phase} />
              {phase.active && <CodePreviewPanel code={diagram.code} language="JS" size="md" />}
              {i < diagram.phases.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </HeroDiagramShell>
  );
};

const PhaseRow = ({ phase }: { phase: HeroPhase }) => {
  const tone = phase.tone;
  const t = toneTokens[tone];
  const Icon = iconMap[phase.id];
  return (
    <div
      className={cx(
        'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        phase.active ? cx(t.chip, t.border) : 'border-[var(--term-border)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-baseline gap-2">
          <span className={cx('text-sm font-bold tracking-tight break-keep', t.text)}>
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
              className={cx(
                'flex items-center gap-1.5 text-xsm leading-snug break-keep',
                phase.active ? t.text : 'text-[var(--term-muted)]',
              )}
            >
              <span
                className={cx(
                  'inline-block h-1 w-1 shrink-0 rounded-full',
                  phase.active ? t.dot : 'bg-[var(--term-dim)]',
                )}
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
