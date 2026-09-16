import { cx } from '@berrypjh/react-ui';
import { AlertTriangle, Clock, type LucideIcon, Send, Zap } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ActionsUpdateFlowContent, HeroSlot, SlotId } from '../content';

type Props = { content: ActionsUpdateFlowContent['hero'] };

const slotIcon: Record<SlotId, LucideIcon> = {
  form: Send,
  pending: Clock,
  optimistic: Zap,
  error: AlertTriangle,
};

/** Hero 핵심 비주얼: Action 하나가 동시에 채우는 네 칸. */
export const ActionsHeroDiagram = ({ content }: Props) => {
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

        <div className="rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)] px-md py-2.5 text-center shadow-[0_2px_0_var(--term-border)]">
          <code className="font-mono text-[11px] font-bold text-[var(--term-accent)]">
            {content.centerLabel}
          </code>
        </div>

        <DownArrow />

        <div className="grid grid-cols-2 gap-sm">
          {content.slots.map((slot) => (
            <SlotCell key={slot.id} slot={slot} />
          ))}
        </div>
      </div>
    </HeroDiagramShell>
  );
};

const SlotCell = ({ slot }: { slot: HeroSlot }) => {
  const Icon = slotIcon[slot.id];
  const t = toneTokens[slot.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-sm py-2 shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={slot.tone} size="sm" className="h-8 w-8">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="text-[10px] font-bold text-[var(--term-fg)] break-keep">{slot.label}</span>
        <code className={cx('font-mono text-[10px] font-bold', t.text)}>{slot.api}</code>
      </div>
    </article>
  );
};
