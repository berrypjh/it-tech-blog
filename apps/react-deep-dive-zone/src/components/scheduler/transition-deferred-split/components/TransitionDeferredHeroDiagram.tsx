import { cx } from '@berrypjh/react-ui';
import { Keyboard, type LucideIcon, Timer, Zap } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { Track, TrackId, TransitionDeferredContent } from '../content';

type Props = { content: TransitionDeferredContent['hero'] };

const trackIcon: Record<TrackId, LucideIcon> = {
  urgent: Zap,
  deferred: Timer,
};

/** Hero 핵심 비주얼: 입력 한 번이 급한 트랙과 미뤄진 트랙으로 갈라지는 모습. */
export const TransitionDeferredHeroDiagram = ({ content }: Props) => {
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
          <Keyboard className="h-4 w-4 shrink-0 text-[var(--term-accent)]" aria-hidden="true" />
          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              {content.inputLabel}
            </span>
            <code className="font-mono text-[11px] font-bold text-[var(--term-fg)] break-all">
              {content.inputValue}
            </code>
          </div>
        </article>

        <DownArrow />

        <ul className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          {content.tracks.map((track) => (
            <li key={track.id} className="min-w-0">
              <TrackCard track={track} />
            </li>
          ))}
        </ul>
      </div>
    </HeroDiagramShell>
  );
};

const TrackCard = ({ track }: { track: Track }) => {
  const Icon = trackIcon[track.id];
  const t = toneTokens[track.tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-2 rounded-xl border-2 bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <ToneIconBox tone={track.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">{track.label}</span>
      <span className="text-[10px] text-[var(--term-muted)] break-keep">{track.caption}</span>
      <code className={cx('mt-auto font-mono text-[10px] font-bold break-all', t.text)}>
        {track.lane}
      </code>
    </article>
  );
};
