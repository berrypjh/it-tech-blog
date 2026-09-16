import { cx } from '@berrypjh/react-ui';
import { AlertTriangle, ArrowRight, CheckCircle2, type LucideIcon, Timer } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { PromiseState, StateId, UsePromiseSuspendContent } from '../content';

type Props = { content: UsePromiseSuspendContent['hero'] };

const stateIcon: Record<StateId, LucideIcon> = {
  pending: Timer,
  fulfilled: CheckCircle2,
  rejected: AlertTriangle,
};

/** Hero 핵심 비주얼: use 호출 한 줄이 Promise 상태에 따라 세 갈래 결과로 나뉘는 모습. */
export const UsePromiseSuspendHeroDiagram = ({ content }: Props) => {
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

        <ul className="flex flex-col gap-sm">
          {content.states.map((state) => (
            <li key={state.id}>
              <StateRow state={state} />
            </li>
          ))}
        </ul>
      </div>
    </HeroDiagramShell>
  );
};

const StateRow = ({ state }: { state: PromiseState }) => {
  const Icon = stateIcon[state.id];
  const t = toneTokens[state.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]">
      <Icon className={cx('h-4 w-4 shrink-0', t.text)} />
      <code className={cx('font-mono text-[11px] font-bold', t.text)}>{state.label}</code>
      <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" />
      <span className="shrink-0 text-[11px] font-bold text-[var(--term-fg)] break-keep">
        {state.decision}
      </span>
    </article>
  );
};
