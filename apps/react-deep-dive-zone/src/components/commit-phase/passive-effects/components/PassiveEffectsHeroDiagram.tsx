import { cx } from '@berrypjh/react-ui';
import { Clock, Eye, type LucideIcon, Pencil, Zap } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroPhase, HeroPhaseId, PassiveEffectsContent } from '../content';

type Props = { content: PassiveEffectsContent['hero'] };

const iconMap: Record<HeroPhaseId, LucideIcon> = {
  eye: Eye,
  pencil: Pencil,
  zap: Zap,
  clock: Clock,
};

/**
 * Hero 핵심 비주얼.
 * 동기 Commit Phase(Before Mutation → Mutation → Layout) 이후
 * 브라우저 paint를 거쳐 비동기로 flush되는 Passive Effects(useEffect)까지
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const PassiveEffectsHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.phases
    .map((p) => p.title)
    .join(' → ')}. ${diagram.syncLabel.title} → ${diagram.asyncLabel.title}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
          {`// ${diagram.title}`}
        </span>

        <ZoneTag label={diagram.syncLabel} variant="sync" />

        <ol className="flex flex-col gap-sm">
          {diagram.phases.map((phase, i) => (
            <li key={phase.key} className="flex flex-col gap-sm">
              {i === diagram.phases.length - 1 && (
                <ZoneTag label={diagram.asyncLabel} variant="async" />
              )}
              <PhaseRow phase={phase} />
              {i < diagram.phases.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <CodePreviewPanel
          code={diagram.code}
          showWindowDots
          language="JS"
          caption={diagram.codeCaption}
          size="sm"
        />
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
        'shadow-[0_2px_0_var(--term-border)]',
        phase.active ? cx(t.chip, t.border) : 'border-[var(--term-border)]',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="flex items-center gap-2">
          <span className={cx('text-sm font-bold tracking-tight break-keep', t.text)}>
            {phase.title}
          </span>
          {phase.subtitle && (
            <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] break-keep">
              {phase.subtitle}
            </span>
          )}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {phase.body.join(' · ')}
        </span>
      </div>
    </div>
  );
};

const ZoneTag = ({
  label,
  variant,
}: {
  label: { title: string; subtitle: string };
  variant: 'sync' | 'async';
}) => {
  const isAsync = variant === 'async';
  const t = toneTokens.teal;
  return (
    <div
      className={cx(
        'flex items-center gap-sm rounded-lg border border-dashed px-md py-1.5',
        isAsync ? cx(t.fill.border, t.fill.bg) : 'border-[var(--term-border)]',
      )}
    >
      <span
        className={cx(
          'inline-block h-1.5 w-1.5 shrink-0 rounded-full',
          isAsync ? t.dot : 'bg-[var(--term-dim)]',
        )}
      />
      <span
        className={cx(
          'text-xsm font-bold tracking-tight break-keep',
          isAsync ? t.fill.text : 'text-[var(--term-fg)]',
        )}
      >
        {label.title}
      </span>
      <span className="ml-auto text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] break-keep">
        {label.subtitle}
      </span>
    </div>
  );
};
