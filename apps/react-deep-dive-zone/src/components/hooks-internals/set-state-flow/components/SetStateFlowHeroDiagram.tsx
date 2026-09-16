import { cx } from '@berrypjh/react-ui';
import { CalendarClock, FilePlus2, ListPlus, type LucideIcon } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { Outcome, OutcomeId, SetStateFlowContent } from '../content';

type Props = { content: SetStateFlowContent['hero'] };

const outcomeIcon: Record<OutcomeId, LucideIcon> = {
  create: FilePlus2,
  enqueue: ListPlus,
  schedule: CalendarClock,
};

/** Hero 핵심 비주얼: 호출 한 줄이 남기는 것은 DOM 변경이 아니라 세 가지 기록이라는 구조. */
export const SetStateFlowHeroDiagram = ({ content }: Props) => {
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
          <code className="font-mono text-[11px] font-bold text-[var(--term-fg)] break-all">
            {content.call}
          </code>
        </article>

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {content.outcomes.map((outcome) => (
            <li key={outcome.id}>
              <OutcomeCard outcome={outcome} />
            </li>
          ))}
        </ol>
      </div>
    </HeroDiagramShell>
  );
};

const OutcomeCard = ({ outcome }: { outcome: Outcome }) => {
  const Icon = outcomeIcon[outcome.id];
  const t = toneTokens[outcome.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={outcome.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-xsm font-bold tracking-tight break-all', t.text)}>
          {outcome.label}
        </code>
        <span className="text-[11px] text-[var(--term-muted)] break-keep">{outcome.caption}</span>
      </div>
    </article>
  );
};
