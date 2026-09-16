import { cx } from '@berrypjh/react-ui';
import { ClipboardList, type LucideIcon, PlayCircle, Wrench } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroPhase, PhaseId, UseEffectInternalsContent } from '../content';

type Props = { content: UseEffectInternalsContent['hero'] };

const phaseIcon: Record<PhaseId, LucideIcon> = {
  render: ClipboardList,
  commit: Wrench,
  passive: PlayCircle,
};

/** Hero 핵심 비주얼: 호출 한 줄이 세 시점 중 어디에서 등록되고 어디에서 실행되는지. */
export const UseEffectHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.title.line1} ${content.title.line2} ${content.description}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <div className="flex items-center justify-between">
          <TerminalBadge dotClassName="bg-[var(--term-accent)]">
            {content.diagramBadge}
          </TerminalBadge>
          <span className="font-mono text-[10px] text-[var(--term-muted)]">
            {'//'} {content.diagramCaption}
          </span>
        </div>

        <article className="rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {'//'} {content.callLabel}
          </p>
          <pre className="font-mono text-[11px] leading-relaxed text-[var(--term-fg)] whitespace-pre-wrap break-all">
            {content.call}
          </pre>
        </article>

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {content.phases.map((phase) => (
            <li key={phase.id}>
              <PhaseCard phase={phase} />
            </li>
          ))}
        </ol>
      </div>
    </HeroDiagramShell>
  );
};

const PhaseCard = ({ phase }: { phase: HeroPhase }) => {
  const Icon = phaseIcon[phase.id];
  const t = toneTokens[phase.tone];
  return (
    <article
      className={cx(
        'flex items-center gap-sm rounded-xl bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        phase.id === 'passive' ? cx('border-2', t.border) : 'border border-[var(--term-border)]',
      )}
    >
      <ToneIconBox tone={phase.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-xsm font-bold tracking-tight', t.text)}>
          {phase.label}
        </code>
        <span className="text-[11px] text-[var(--term-muted)] break-keep">{phase.caption}</span>
      </div>
    </article>
  );
};
