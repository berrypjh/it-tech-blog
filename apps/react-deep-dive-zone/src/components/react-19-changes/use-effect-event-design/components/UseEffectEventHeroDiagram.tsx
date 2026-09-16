import { cx } from '@berrypjh/react-ui';
import { Brackets, type LucideIcon, Network, Palette, ShieldCheck } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroSignal, SignalId, UseEffectEventContent } from '../content';

type Props = { content: UseEffectEventContent['hero'] };

const signalIcon: Record<SignalId, LucideIcon> = {
  target: Network,
  reaction: Palette,
  before: Brackets,
  after: ShieldCheck,
};

/** Hero 핵심 비주얼: 재실행 조건과 읽는 값이 갈리는 지점. */
export const UseEffectEventHeroDiagram = ({ content }: Props) => {
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

        {content.signals.map((signal, i) => (
          <div key={signal.id} className="flex flex-col gap-sm">
            <SignalRow signal={signal} />
            {i < content.signals.length - 1 && <DownArrow />}
          </div>
        ))}
      </div>
    </HeroDiagramShell>
  );
};

const SignalRow = ({ signal }: { signal: HeroSignal }) => {
  const Icon = signalIcon[signal.id];
  const t = toneTokens[signal.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={signal.tone} size="sm" className="h-8 w-8">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-[11px] font-bold tracking-tight', t.text)}>
          {signal.label}
        </code>
        <span className="text-[10px] text-[var(--term-muted)] break-keep">{signal.caption}</span>
      </div>
    </article>
  );
};
