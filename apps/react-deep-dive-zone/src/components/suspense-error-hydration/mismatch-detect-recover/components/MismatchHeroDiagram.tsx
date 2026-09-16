import { cx } from '@berrypjh/react-ui';
import { AlertTriangle, Monitor, Server } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { MismatchDetectRecoverContent, RenderSide } from '../content';

type Props = { content: MismatchDetectRecoverContent['hero'] };

/** Hero 핵심 비주얼: 서버 마크업과 클라이언트 기대값을 위아래로 두고 불일치를 표시한다. */
export const MismatchHeroDiagram = ({ content }: Props) => {
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

        {content.sides.map((side) => (
          <SideCard key={side.id} side={side} />
        ))}

        <article className="flex items-center gap-sm rounded-xl border-2 border-rose-200/70 bg-rose-50/40 px-md py-2.5 dark:border-rose-800/60 dark:bg-rose-950/20">
          <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-300" />
          <span className="text-[11px] font-bold text-rose-600 break-keep dark:text-rose-300">
            {content.verdict}
          </span>
        </article>
      </div>
    </HeroDiagramShell>
  );
};

const SideCard = ({ side }: { side: RenderSide }) => {
  const Icon = side.id === 'server' ? Server : Monitor;
  const t = toneTokens[side.tone];
  return (
    <article className="rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
      <header className="mb-1.5 flex items-center gap-1.5">
        <Icon className={cx('h-3.5 w-3.5 shrink-0', t.text)} aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          {side.label}
        </span>
      </header>
      <code className={cx('font-mono text-[11px] font-bold break-all', t.text)}>{side.markup}</code>
    </article>
  );
};
