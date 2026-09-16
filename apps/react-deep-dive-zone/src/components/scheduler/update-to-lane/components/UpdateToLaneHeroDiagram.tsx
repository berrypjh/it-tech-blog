import { cx } from '@berrypjh/react-ui';
import { ArrowRight, Layers, type LucideIcon, MousePointerClick, Timer } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ContextCard, ContextId, UpdateToLaneContent } from '../content';

type Props = { content: UpdateToLaneContent['hero'] };

const contextIcon: Record<ContextId, LucideIcon> = {
  click: MousePointerClick,
  transition: Timer,
  render: Layers,
};

/** Hero 핵심 비주얼: 동일한 호출 한 줄이 세 문맥을 만나 서로 다른 lane으로 갈라지는 모습. */
export const UpdateToLaneHeroDiagram = ({ content }: Props) => {
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
          {content.contexts.map((ctx) => (
            <li key={ctx.id}>
              <ContextRow context={ctx} />
            </li>
          ))}
        </ul>
      </div>
    </HeroDiagramShell>
  );
};

const ContextRow = ({ context }: { context: ContextCard }) => {
  const Icon = contextIcon[context.id];
  const t = toneTokens[context.tone];
  return (
    <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={context.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">{context.label}</span>
        <span className="text-[10px] text-[var(--term-muted)] break-keep">{context.caption}</span>
      </div>
      <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" />
      <code className={cx('shrink-0 font-mono text-[10px] font-bold break-all', t.text)}>
        {context.lane}
      </code>
    </article>
  );
};
