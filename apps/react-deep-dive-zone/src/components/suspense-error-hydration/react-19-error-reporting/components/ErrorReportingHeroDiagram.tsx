import { cx } from '@berrypjh/react-ui';
import { AlertTriangle, type LucideIcon, RefreshCw, Shield, Sprout } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { Callback, CallbackId, React19ErrorReportingContent } from '../content';

type Props = { content: React19ErrorReportingContent['hero'] };

const callbackIcon: Record<CallbackId, LucideIcon> = {
  uncaught: AlertTriangle,
  caught: Shield,
  recoverable: RefreshCw,
};

/** Hero 핵심 비주얼: root 하나가 심각도별 세 콜백으로 에러를 나눠 보내는 구조. */
export const ErrorReportingHeroDiagram = ({ content }: Props) => {
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

        <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)] p-md shadow-[0_2px_0_var(--term-border)]">
          <Sprout className="h-4 w-4 shrink-0 text-[var(--term-accent)]" aria-hidden="true" />
          <code className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
            {content.rootLabel}
          </code>
        </article>

        <DownArrow />

        <ul className="flex flex-col gap-sm">
          {content.callbacks.map((callback) => (
            <li key={callback.id}>
              <CallbackRow callback={callback} />
            </li>
          ))}
        </ul>
      </div>
    </HeroDiagramShell>
  );
};

const CallbackRow = ({ callback }: { callback: Callback }) => {
  const Icon = callbackIcon[callback.id];
  const t = toneTokens[callback.tone];
  return (
    <article
      className={cx(
        'flex items-center gap-sm rounded-xl border-2 bg-[var(--term-bg)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <ToneIconBox tone={callback.tone} size="sm" className="h-8 w-8">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cx('font-mono text-[11px] font-bold break-all', t.text)}>
          {callback.name}
        </code>
        <span className="text-[10px] text-[var(--term-muted)] break-keep">{callback.when}</span>
      </div>
    </article>
  );
};
